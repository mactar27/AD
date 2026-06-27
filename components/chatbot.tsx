"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, ChevronRight } from "lucide-react"
import { useChat, type UIMessage } from "@ai-sdk/react"
import { TextStreamChatTransport, isTextUIPart } from "ai"

const SUGGESTIONS = [
  "Quels sont vos services ?",
  "Demander un devis",
  "Voir les réalisations",
  "Contactez-nous",
]

function getMessageText(message: UIMessage): string {
  if (message.parts) {
    return message.parts
      .filter(isTextUIPart)
      .map((part) => part.text)
      .join("")
  }
  return (message as any).content || (message as any).text || ""
}

/* ─── Message bubble ─────────────────────────────────────── */
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

/* ─── Main chatbot component ─────────────────────────────── */
export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { messages, sendMessage, status, error } = useChat({
    transport: new TextStreamChatTransport({ api: "/api/chat" }),
    messages: [
      {
        id: "welcome",
        role: "assistant",
        parts: [
          {
            type: "text",
            text: "Bonjour ! 👋 Je suis **Addy**, l'assistante d'AD PULSE. Vous avez un projet d'application mobile, de site web ou de marketing à Dakar ?",
          },
        ],
      },
    ],
  })

  const isLoading = status === "streaming" || status === "submitted"

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  const handleSend = (text: string) => {
    const msg = text.trim()
    if (!msg || isLoading) return
    setInputValue("")
    sendMessage({ text: msg })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSend(inputValue)
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
            style={{ maxHeight: "min(560px, 80vh)" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3.5" style={{ background: "linear-gradient(135deg, #073d8c 0%, #0a56c5 45%, #22a8ff 100%)" }}>
              <span className="relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-white/20 p-1">
                <Image src="/icon.png" alt="Addy" width={28} height={28} className="size-full object-contain" />
                <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-emerald-400 ring-2 ring-[#073d8c]" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold leading-tight text-white">Addy — AD PULSE</p>
                <p className="flex items-center gap-1 text-xs text-white/70">
                  <span className="inline-block size-1.5 rounded-full bg-emerald-400" />
                  En ligne
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex size-7 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4 bg-gray-50">
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
                  Une erreur est survenue. Veuillez réessayer.
                </p>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            {visibleMessages.length <= 1 && !isLoading && (
              <div className="flex flex-wrap gap-1.5 px-4 pb-2 bg-white border-t border-gray-100 pt-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 transition-colors hover:border-[#0a56c5] hover:text-[#0a56c5]"
                  >
                    {s}
                    <ChevronRight className="size-3" />
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex gap-2 border-t border-gray-200 px-4 py-3 bg-white">
              <input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Écrivez un message…"
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Discuter avec Addy"
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
