import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AD PULSE - Agence Digitale 360",
    short_name: "AD PULSE",
    description:
      "Agence digitale 360. Nous créons aujourd'hui les solutions digitales de demain : développement web, mobile, SEO et marketing.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a56c5",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
