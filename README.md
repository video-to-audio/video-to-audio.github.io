# VideoToAudio WASM Studio (`video-to-audio.github.io`)

> **Free, 100% Client-Side Video to Audio Converter & Extractor**  
> Extract MP3, WAV, AAC, and M4A directly in your browser with zero server uploads, unlimited file sizes, and complete privacy.

[![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01.svg)](https://astro.build)
[![React](https://img.shields.io/badge/React-18-61DAFB.svg)](https://reactjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)](https://tailwindcss.com)
[![WebAssembly](https://img.shields.io/badge/FFmpeg-WASM-654FF0.svg)](https://ffmpegwasm.netlify.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🌟 Key Features

- 🔒 **100% Client-Side Privacy**: All processing runs locally inside your browser memory using WebAssembly. No video or audio file is ever uploaded to any server.
- 🚀 **Zero File Size Limits**: Convert 500MB, 2GB, or 10GB 4K videos without arbitrary upload limits, subscriptions, or paywalls.
- 🎛️ **Multi-Format & Bitrate Controls**:
  - **MP3**: `128k`, `192k`, `256k`, `320k` (`libmp3lame`)
  - **WAV**: Bit-for-bit uncompressed lossless PCM (`pcm_s16le`, 16-bit 44.1kHz)
  - **AAC**: `128k`, `192k`, `256k`, `320k` (`aac`)
  - **M4A**: `128k`, `192k`, `256k`, `320k` (`aac` with `+faststart` atom)
- ✂️ **Optional Time Trimmer**: Trim specific start and end timestamps directly before extraction.
- 🎧 **Inline Audio Player & File Comparison**: Preview the extracted audio in-browser, view compression space savings, and download instantly with a celebratory confetti burst.
- 🌐 **6-Language i18n Subpath Routing**: Full bidirectional hreflang and zero-placeholder translation across:
  - English (`/`)
  - Spanish (`/es/`)
  - Portuguese (`/pt/`)
  - German (`/de/`)
  - French (`/fr/`)
  - Japanese (`/ja/`)
- 🌓 **Zero-FOUC Light/Dark Mode**: Class-based theming with synchronous head script preventing unstyled dark mode flicker.
- 🔍 **Rich SEO & Structured Data**: Built with Schema.org `WebApplication`, `HowTo`, and `FAQPage` JSON-LD schemas.

---

## 🎨 Color Palette

| Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Teal** | `#249D8F` | Primary Brand, Focus Rings, Success States |
| **Warm Ochre** | `#E9C46A` | Accent Highlights, Bitrate Badges, Secondary Glow |
| **Coral** | `#E76F51` | Action CTAs, Trimmer Accent, WASM Tag |
| **Warm Cream** | `#FDF0D5` | Light Mode Tint & Glow Undertones |

---

## 🛠️ Project Structure

```
video-to-audio.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg             # Brand favicon
│   ├── robots.txt              # Search engine directives
│   └── sitemap.xml             # 6-locale XML sitemap
├── src/
│   ├── components/
│   │   ├── AudioExtractorWorkspace.tsx # Interactive React island (client:load)
│   │   ├── FaqSection.astro            # Accessible FAQ details/summary
│   │   ├── FeaturesSection.astro       # 6 feature cards
│   │   ├── Footer.astro                # Footer with language directory
│   │   ├── FormatMatrixSection.astro   # Format specifications table & cards
│   │   ├── Header.astro                # Sticky responsive header
│   │   ├── HowItWorksSection.astro     # 3-step workflow
│   │   ├── LanguagePicker.astro        # Crawlable localized dropdown
│   │   └── ThemeToggle.tsx             # React Light/Dark mode toggle
│   ├── i18n/
│   │   ├── ui.ts                       # Complete 6-language dictionaries
│   │   └── utils.ts                    # Routing and translation helpers
│   ├── layouts/
│   │   └── Layout.astro                # HTML shell, anti-FOUC & Schema.org
│   ├── pages/
│   │   ├── [lang]/
│   │   │   └── index.astro             # SSG dynamic routes (/es, /pt, /de, /fr, /ja)
│   │   └── index.astro                 # Root route (/)
│   └── utils/
│       ├── audio-helpers.ts            # Video metadata & canvas thumbnail
│       └── ffmpeg-extractor.ts         # Single-threaded FFmpeg WASM singleton
├── astro.config.mjs                    # Astro SSG & i18n configuration
├── tailwind.config.mjs                 # Tailwind CSS custom palette & darkMode
├── tsconfig.json                       # Strict TypeScript configuration
└── package.json
```

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production (GitHub Pages SSG)
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 📄 License

MIT License. Powered by open-source [FFmpeg](https://ffmpeg.org/) and WebAssembly.
