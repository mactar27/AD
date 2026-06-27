"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, ChevronRight, Mic, MicOff, Keyboard } from "lucide-react"
import { useChat, type UIMessage } from "@ai-sdk/react"
import { TextStreamChatTransport, isTextUIPart } from "ai"
import { useLanguage } from "@/lib/i18n"

// ── helpers ──────────────────────────────────────────────────
function getMessageText(message: UIMessage): string {
  if (message.parts) {
    return message.parts
      .filter(isTextUIPart)
      .map((part) => part.text)
      .join("")
  }
  return (message as any).content || (message as any).text || ""
}

function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/<br\/?>/g, " ")
    .replace(/<[^>]+>/g, "")
}

// ── SpeechRecognition types ───────────────────────────────────
declare global {
  interface Window {
    SpeechRecognition: any
    webkitSpeechRecognition: any
  }
}

// ── Bubble ────────────────────────────────────────────────────
function Bubble({ message }: { message: UIMessage }) {
  const isBot = message.role === "assistant"
  const raw = getMessageText(message)
  const html = raw
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br/>")

  if (!raw) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-2 ${isBot ? "items-start" : "items-end flex-row-reverse"}`}
    >
      {isBot && (
        <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden p-1">
          <Image src="/icon.png" alt="Addy" width={24} height={24} className="size-full object-contain" />
        </span>
      )}
      <div
        className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isBot
            ? "rounded-tl-sm border border-gray-200 bg-white text-gray-800"
            : "rounded-tr-sm bg-[#0a56c5] text-white font-medium"
        }`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </motion.div>
  )
}

// ── Main chatbot ──────────────────────────────────────────────
export default function Chatbot() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [voiceMode, setVoiceMode] = useState(false) // <--- New Voice Mode state
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const recognitionRef = useRef<any>(null)
  const lastSpokenId = useRef<string | null>('welcome')

  const { messages, sendMessage, status, error } = useChat({
    transport: new TextStreamChatTransport({ api: "/api/chat" }),
    messages: [
      {
        id: "welcome",
        role: "assistant",
        parts: [
          {
            type: "text",
            text: t.chatbot.welcome,
          },
        ],
      },
    ],
  })

  const isLoading = status === "streaming" || status === "submitted"

  // ── Text-to-speech ────────────────────────────────────────
  const speak = useCallback((text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(stripMarkdown(text))
    utterance.lang = t.chatbot.lang
    utterance.rate = 1.05
    utterance.pitch = 1.1
    
    const voices = window.speechSynthesis.getVoices()
    const preferredVoice = voices.find((v) => v.lang.startsWith(t.chatbot.lang.split('-')[0]))
    if (preferredVoice) utterance.voice = preferredVoice
    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    window.speechSynthesis.speak(utterance)
  }, [t.chatbot.lang])

  // Auto-speak new messages ONLY IF voiceMode is true
  useEffect(() => {
    if (!voiceMode) return
    const botMessages = messages.filter((m) => m.role === "assistant" && getMessageText(m).length > 0)
    if (botMessages.length === 0) return
    const last = botMessages[botMessages.length - 1]
    if (last.id !== lastSpokenId.current && !isLoading) {
      lastSpokenId.current = last.id
      speak(getMessageText(last))
    }
  }, [messages, isLoading, voiceMode, speak])

  // Stop speech if voiceMode is disabled manually
  useEffect(() => {
    if (!voiceMode && typeof window !== "undefined") {
      window.speechSynthesis?.cancel()
      setIsSpeaking(false)
    }
  }, [voiceMode])

  // ── Speech recognition ────────────────────────────────────
  const startListening = useCallback(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SR) {
      alert(t.chatbot.voiceNotSupported)
      return
    }
    const recognition = new SR()
    recognition.lang = t.chatbot.lang
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onstart = () => {
      setIsListening(true)
      setVoiceMode(true) // Enter voice mode
    }
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript
      setInputValue(transcript)
      setIsListening(false)
      // Auto-send when voice is captured
      if (transcript.trim() && !isLoading) {
        setInputValue("")
        sendMessage({ text: transcript.trim() })
      }
    }
    
    recognition.onerror = () => setIsListening(false)
    recognition.onend = () => setIsListening(false)

    recognitionRef.current = recognition
    recognition.start()
  }, [t.chatbot.lang, t.chatbot.voiceNotSupported, isLoading, sendMessage])

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop()
    setIsListening(false)
  }, [])

  const toggleMic = () => {
    if (isListening) stopListening()
    else startListening()
  }

  // ── Focus input on open ───────────────────────────────────
  useEffect(() => {
    if (open && !voiceMode) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open, voiceMode])

  useEffect(() => {
    if (!voiceMode) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isLoading, voiceMode])

  const handleSendText = (text: string) => {
    const msg = text.trim()
    if (!msg || isLoading) return
    setVoiceMode(false) // Manual text send disables voice mode
    setInputValue("")
    sendMessage({ text: msg })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendText(inputValue)
  }

  const visibleMessages = messages.filter((m) => getMessageText(m).length > 0)

  return (
    <div className="fixed bottom-6 right-5 z-[110] flex flex-col items-end gap-3">
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="flex w-[340px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-black/20 sm:w-[380px]"
            style={{ maxHeight: "min(560px, 80vh)", height: voiceMode ? "450px" : "auto" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3.5" style={{ background: "linear-gradient(135deg, #073d8c 0%, #0a56c5 45%, #22a8ff 100%)" }}>
              <span className="relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-white/20 p-1">
                <Image src="/icon.png" alt="Addy" width={28} height={28} className="size-full object-contain" />
                {/* Speaking animation */}
                {isSpeaking && (
                  <span className="absolute inset-0 rounded-full">
                    <motion.span
                      className="absolute inset-0 rounded-full bg-blue-400/40"
                      animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                      transition={{ duration: 0.9, repeat: Infinity }}
                    />
                  </span>
                )}
                <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-emerald-400 ring-2 ring-[#073d8c]" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold leading-tight text-white">Addy — AD PULSE</p>
                <p className="flex items-center gap-1 text-xs text-white/70">
                  <span className="inline-block size-1.5 rounded-full bg-emerald-400" />
                  {isSpeaking ? t.chatbot.speaking : t.chatbot.online}
                </p>
              </div>
              
              {/* Toggle Mode Button */}
              {voiceMode && (
                <button
                  onClick={() => setVoiceMode(false)}
                  title="Passer au clavier"
                  className="flex size-7 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Keyboard className="size-4" />
                </button>
              )}

              <button
                onClick={() => setOpen(false)}
                className="flex size-7 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Content Area */}
            {voiceMode ? (
              // ── Voice Mode View ──
              <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 px-6">
                <div className="relative mb-8 flex items-center justify-center">
                  {/* Outer pulse when listening or speaking */}
                  {(isListening || isSpeaking) && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-blue-500"
                      animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                  {(isListening || isSpeaking) && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-blue-400"
                      animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                      transition={{ duration: 1.5, delay: 0.75, repeat: Infinity }}
                    />
                  )}
                  
                  <div className="relative z-10 flex size-28 items-center justify-center rounded-full bg-white shadow-xl ring-4 ring-white">
                    <Image src="/icon.png" alt="Addy" width={72} height={72} className="object-contain" priority />
                  </div>
                </div>

                <div className="text-center h-12 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={isListening ? "listening" : isSpeaking ? "speaking" : isLoading ? "loading" : "waiting"}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-lg font-medium text-gray-700"
                    >
                      {isListening 
                        ? t.chatbot.listening 
                        : isSpeaking 
                          ? t.chatbot.speaking 
                          : isLoading 
                            ? "Addy réfléchit..." 
                            : "À votre écoute..."}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            ) : (
              // ── Text Mode View ──
              <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4 bg-gray-50 flex flex-col">
                {visibleMessages.map((m) => (
                  <Bubble key={m.id} message={m} />
                ))}

                {/* Typing indicator */}
                <AnimatePresence>
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-gray-200 p-1">
                        <Image src="/icon.png" alt="Addy" width={24} height={24} className="size-full object-contain" />
                      </span>
                      <span className="flex gap-1 rounded-2xl rounded-tl-sm border border-gray-200 bg-white px-4 py-3">
                        {[0, 1, 2].map((i) => (
                          <motion.span
                            key={i}
                            className="block size-1.5 rounded-full bg-gray-400"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                          />
                        ))}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {error && (
                  <p className="rounded-xl border border-red-500/30 bg-red-50 px-3 py-2 text-xs text-red-500">
                    {t.chatbot.error}
                  </p>
                )}

                <div ref={bottomRef} className="mt-auto pt-2" />
              </div>
            )}

            {/* Suggestions (Only in Text Mode) */}
            {!voiceMode && visibleMessages.length <= 1 && !isLoading && (
              <div className="flex flex-wrap gap-1.5 px-4 pb-2 bg-white border-t border-gray-100 pt-2 shrink-0">
                {t.chatbot.suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSendText(s)}
                    className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 transition-colors hover:border-[#0a56c5] hover:text-[#0a56c5]"
                  >
                    {s}
                    <ChevronRight className="size-3" />
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t border-gray-200 px-4 py-3 bg-white shrink-0">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                {/* Mic button */}
                <button
                  type="button"
                  onClick={toggleMic}
                  title={isListening ? t.chatbot.stopMicLabel : t.chatbot.micLabel}
                  className="flex size-9 shrink-0 items-center justify-center rounded-xl transition-all"
                  style={{
                    background: isListening
                      ? "linear-gradient(135deg, #dc2626, #ef4444)"
                      : voiceMode
                        ? "linear-gradient(135deg, #073d8c, #0a56c5)"
                        : "#f1f5f9",
                    boxShadow: isListening ? "0 0 0 4px rgba(220,38,38,0.2)" : "none",
                  }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isListening ? (
                      <motion.span key="on" initial={{ scale: 0.7 }} animate={{ scale: 1 }} exit={{ scale: 0.7 }}>
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.7, repeat: Infinity }}
                          className="block"
                        >
                          <MicOff className="size-4 text-white" />
                        </motion.span>
                      </motion.span>
                    ) : (
                      <motion.span key="off" initial={{ scale: 0.7 }} animate={{ scale: 1 }} exit={{ scale: 0.7 }}>
                        <Mic className={voiceMode ? "size-4 text-white" : "size-4 text-gray-500"} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>

                <input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value)
                    if (voiceMode && e.target.value) setVoiceMode(false) // Typing disables voice mode
                  }}
                  onFocus={() => {
                    if (voiceMode) setVoiceMode(false) // Focusing disables voice mode
                  }}
                  placeholder={isListening ? t.chatbot.listening : t.chatbot.placeholder}
                  className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-[#0a56c5] focus:ring-2 focus:ring-[#0a56c5]/20 text-gray-800"
                />

                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="flex size-9 shrink-0 items-center justify-center rounded-xl transition-all disabled:bg-gray-100 disabled:text-gray-400"
                  style={{ background: !inputValue.trim() || isLoading ? undefined : "linear-gradient(135deg, #073d8c, #0a56c5)" }}
                >
                  <Send className="size-4 text-white" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t.chatbot.ariaLabel}
        className="relative flex size-14 items-center justify-center rounded-full bg-white shadow-xl shadow-black/20 overflow-hidden"
      >
        {!open && (
          <motion.span
            className="absolute inset-0 rounded-full bg-white"
            animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        )}
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="size-6 text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="bot"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex size-full items-center justify-center rounded-full p-2.5"
            >
              <Image src="/icon.png" alt="Addy" width={40} height={40} className="size-full object-contain" priority />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
