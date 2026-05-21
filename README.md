<p align="center">
  <img src="https://img.shields.io/badge/ENERGY-THREADS-00f0ff?style=for-the-badge&labelColor=050508&color=00f0ff" alt="Energy Threads"/>
  <br/>
  <img src="https://img.shields.io/badge/status-live-00ff88?style=flat-square&labelColor=0a0a0f" alt="Status: Live"/>
  <img src="https://img.shields.io/badge/license-MIT-b366ff?style=flat-square&labelColor=0a0a0f" alt="License: MIT"/>
  <img src="https://img.shields.io/badge/zero-dependencies-ff3399?style=flat-square&labelColor=0a0a0f" alt="Zero Dependencies"/>
  <img src="https://img.shields.io/badge/60-FPS-00f0ff?style=flat-square&labelColor=0a0a0f" alt="60 FPS"/>
</p>

<h1 align="center">ENERGY THREADS</h1>
<h3 align="center">Real-Time Neural Hand Tracking × Cyberpunk Visual Engine</h3>

<p align="center">
  <em>Client-side ML hand landmark detection driving a hardware-accelerated neon rendering pipeline —<br/>gesture-reactive particle physics, vector-deflected rain fields, and additive-glow thread synthesis at 60 FPS.</em>
</p>

---

## 🎬 What Is This?

Energy Threads captures your webcam feed, runs **MediaPipe Hands** ML model directly in-browser, and maps 21 3D hand landmarks into a hardware-accelerated Canvas rendering pipeline. The result is a stunning cyberpunk visual experience where your hands control neon threads, particle systems, rain deflection fields, and explosive shockwaves — all in real time with zero server-side processing.

---

## ✨ Features

### 🖐️ Core Visual Modules

| Module | Description |
|:---|:---|
| **Neon Energy Threads** | Multi-pass additive glow lines connecting all fingertip pairs with cycling neon HSL colors |
| **Cross-Hand Threads** | 25 glowing energy connections between both hands when two are tracked |
| **Vector Cyber-Rain** | 180 digital raindrops deflected by hand proximity using trigonometric elimination (zero `Math.atan2` calls) |
| **Pointer Ink Trails** | Segment-cached glowing ink trails drawn by the index finger in pointing gesture |
| **Orbit Attraction** | Pinch gesture creates a gravity singularity with radial + tangential swirling forces |
| **Wrist Explosion** | Bring hands together then separate fast → screen shake + flash + 90-particle radial blast |
| **Ambient Particles** | Fingertip-spawned neon particles with subtle gravity and glow passes |

### 🤟 Gesture Recognition (10 Gestures)

A **majority-voting queue filter** (8-frame window, 55% threshold) ensures rock-solid gesture stability with zero flicker.

| Gesture | Emoji | Visual Effect |
|:---|:---:|:---|
| **OK Sign** | 👌 | Activates orbit attraction gravity wells |
| **Rock / Stranger** | 🤘 | Red lightning bolts striking from the top |
| **Middle Finger** | 🖕 | Chromatic glitch slicing + pink screen wash |
| **Peace Sign** | ✌️ | Cycling rainbow gradient sweep |
| **Pointer** | ☝️ | Neon ink drawing trails |
| **Thumbs Up** | 👍 | Rising lime-green sparkles |
| **Thumbs Down** | 👎 | Dripping red cyber-particles |
| **Open Palm** | 🖐️ | Cyan glassmorphic bounding frame |
| **Fist** | ✊ | Sweep-fades all visual overlays |
| **Three Fingers** | 🤟 | Window cycle hook (Electron mode) |

### 🎛️ Interface & Controls

- **Glassmorphic HUD** — Cyberpunk top bar with gradient title, camera selector, and status indicator
- **Cyber Synthwave Player** — Built-in music player with track selector and local MP3 upload
- **Audio Volume Control** — Tilt one hand for wrist-roll volume, or balance two hands for tilt-based control
- **Meeting Mode (📹)** — Strips all HUD overlays for clean Google Meet / Zoom tab sharing
- **Toggle Buttons** — Enable/disable each visual module independently
- **FPS Counter** — Real-time performance monitoring

---

## 🛠️ Tech Stack

| Layer | Technology |
|:---|:---|
| **ML Engine** | [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands.html) (WASM, runs 100% client-side) |
| **Rendering** | HTML5 Canvas 2D with additive compositing (`globalCompositeOperation: 'lighter'`) |
| **Styling** | Vanilla CSS with glassmorphism, custom HSL palettes, `backdrop-filter` blur |
| **Typography** | [Orbitron](https://fonts.google.com/specimen/Orbitron) + [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts |
| **Audio** | Web Audio API (`HTMLAudioElement`) |
| **Packaging** | Single `index.html` file — zero build step, zero bundler, zero npm |

---

## 🚀 Getting Started

### Run Locally
```bash
# Clone the repository
git clone https://github.com/himanggurbani/himanggurbani.github.io.git

# Open directly in your browser
# (No build step, no dependencies, no server needed)
open index.html
```

> **Requirements**: A modern browser (Chrome, Edge, Firefox) with webcam access. Works best in Chrome for optimal MediaPipe WASM performance.

---

## 🏗️ Architecture

```
Webcam Stream
    │
    ▼
MediaPipe Hands (WASM)
    │ 21 × 3D Landmarks per hand
    ▼
EMA Jitter Filter (α=0.25)
    │ Teleportation threshold bypass
    ▼
Mirror + Aspect-Ratio Remapping
    │ Pixel-perfect viewport coordinates
    ▼
┌─────────────────────────────────────┐
│          Feature Modules            │
│                                     │
│  ⚡ Neon Threads    🌧️ Cyber Rain   │
│  ✏️ Pointer Ink     🌀 Orbit Pull   │
│  💥 Explosions      🎵 Audio Sync   │
│  🤟 Gesture VFX     ✨ Particles    │
└─────────────────────────────────────┘
    │
    ▼
60 FPS Canvas Render Loop
    │
    ▼
Letterbox Masking → Final Frame
```

### Key Optimizations
- **Squared Distance Pre-Filtering** — Avoids `Math.sqrt` for 90%+ of rain-to-landmark checks
- **Trigonometric Elimination** — Uses `dx/dist` and `dy/dist` directly instead of `atan2`/`cos`/`sin`
- **Single-Pass Ink Aging** — Circular queue with O(n) culling, no nested geometry arrays
- **Segment Caching** — Valid ink/thread segments computed once per frame, reused across glow passes
- **Static Letterbox Masking** — Solid rects instead of expensive `ctx.clip()` calls

---

## 🎮 Usage Tips

| Action | How To |
|:---|:---|
| **Draw neon ink** | Point with index finger (☝️) and move |
| **Create gravity well** | Make the OK sign (👌) — particles spiral inward |
| **Trigger explosion** | Bring both hands close → rapidly separate them |
| **Control volume** | Enable "Audio Roll" → tilt one hand to adjust |
| **Switch cameras** | Use the dropdown in the top HUD bar |
| **Present on a call** | Toggle "📹 Meeting Mode" for a clean feed |
| **Play music** | Use the synthwave player or upload your own MP3 |

---

## 📁 Project Structure

```
himanggurbani.github.io/
├── index.html    ← Entire application (HTML + CSS + JS, single file)
└── README.md     ← This file
```

Yes, it's a **single file**. The entire ML pipeline, rendering engine, gesture classifier, particle physics, and glassmorphic UI lives in one self-contained `index.html`. The only external resources loaded are MediaPipe WASM models from CDN and Google Fonts.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-effect`)
3. Commit your changes (`git commit -m 'Add amazing effect'`)
4. Push to the branch (`git push origin feature/amazing-effect`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Himang Gurbani**

- GitHub: [@himanggurbani](https://github.com/himanggurbani)

---

<p align="center">
  <sub>Built with ⚡ and a lot of neon glow</sub>
</p>
