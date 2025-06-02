# 🚗 Car Card QR

[![Astro](https://img.shields.io/badge/Built%20with-Astro-ff5d01?style=flat-square&logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Firebase](https://img.shields.io/badge/Hosted%20on-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-car--card--qr.web.app-blue?style=flat-square&logo=googlechrome&logoColor=white)](https://carcardqr.web.app)

Modern QR code communication system for parked vehicles. Connect with vehicle owners quickly, securely, and efficiently using QR technology.

## 🤔 Why This Project?

You know that awkward moment when you need to move your car but have to leave your phone number on a piece of paper under the windshield wiper? 📝😅

I was tired of the old-school method of scribbling phone numbers on random papers and sticking them on car windows. It's messy, unprofessional, and let's be honest - sometimes the paper flies away! 🌬️

So I thought: "Why not use QR codes for this?" 💡

Instead of exposing your phone number to everyone passing by, you can now:
- Print a clean QR code sticker for your car 🏷️
- Let people scan it to send you a message instantly 📱
- Keep your privacy while staying reachable 🔒
- Look tech-savvy while solving a everyday problem 😎

I built this quickly as a modern solution to an age-old parking problem. Simple idea, clean execution, problem solved! 🚀

## ✨ Features

- **🎯 QR Code Generation** - Create printable QR codes for your vehicle
- **📱 Instant Communication** - Quick messaging system via QR scan
- **🔒 Privacy Protection** - Secure data handling and optional phone visibility
- **🌍 Multilingual** - Support for Turkish and English
- **📱 Mobile-First** - Responsive design optimized for mobile devices
- **⚡ PWA Ready** - Progressive Web App capabilities

## 🛠 Tech Stack

- **[Astro](https://astro.build)** - Modern web framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[QRCode.js](https://github.com/soldair/node-qrcode)** - QR code generation
- **[Web3Forms](https://web3forms.com)** - Contact form handling

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/gurkanfikretgunak/car-card-qr.git
cd car-card-qr
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
./run.sh dev
# or
npm run dev
```

4. **Build for production**
```bash
./run.sh build
# or
npm run build
```

## 📋 Available Commands

Use the included `run.sh` script for easy project management:

```bash
./run.sh dev      # Start development server
./run.sh build    # Build for production
./run.sh preview  # Preview production build
./run.sh clean    # Clean build directories
./run.sh help     # Show all commands
```

## 🌐 Live Demo

Visit the live application: **[carcardqr.web.app](https://carcardqr.web.app)**

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
├── layouts/           # Page layouts
├── pages/             # Application pages
│   ├── en/           # English pages
│   └── ...           # Turkish pages (default)
├── i18n/             # Internationalization
├── data/             # Static data files
└── styles/           # Global styles
```

## 🔧 Configuration

The project includes:

- **SEO Optimization** - Meta tags, structured data, sitemap
- **Analytics Ready** - Google Analytics integration
- **PWA Support** - Service worker and manifest
- **Multi-language** - i18n with route-based localization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Gürkan Fikret Günak**
- GitHub: [@gurkanfikretgunak](https://github.com/gurkanfikretgunak)

---

<div align="center">
  <p>Built with ❤️ using Astro</p>
  <p><a href="https://carcardqr.web.app">🚗 Try Car Card QR</a></p>
</div>