"use client";

import {
  Check,
  Download,
  Eye,
  FolderOpen,
  Github,
  Heart,
  Laptop,
  Mail,
  Monitor,
  Moon,
  Settings2,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Custom hook for scroll-triggered animations
function useScrollFadeIn() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = ref.current?.querySelectorAll(".scroll-fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

const features = [
  {
    icon: FolderOpen,
    title: "Automatic Organization",
    description:
      "Instantly sort cluttered folders with one click. Files are automatically categorized by type—documents, images, videos, archives, and more.",
  },
  {
    icon: Eye,
    title: "Real-Time Folder Watching",
    description:
      "Set it and forget it. Filenest monitors your Downloads folder and automatically organizes new files the moment they finish downloading.",
  },
  {
    icon: Settings2,
    title: "Fully Customizable Categories",
    description:
      "Create your own categories with custom names, destination folders, and file extensions. Perfect for designers (.psd, .ai), developers (.js, .py), 3D artists (.stl, .obj), or any workflow.",
  },
  {
    icon: Monitor,
    title: "Minimal & Unobtrusive",
    description:
      "Lives quietly in your system tray. No clunky windows—just right-click to sort, toggle the watcher, or open settings.",
  },
  {
    icon: Zap,
    title: "Smart Download Detection",
    description:
      "Waits for files to fully download before moving them. No more broken or partial files in your organized folders.",
  },
  {
    icon: Moon,
    title: "Modern Dark Mode Interface",
    description:
      "Clean, modern settings UI with a dark theme that's easy on the eyes.",
  },
  {
    icon: Laptop,
    title: "Cross-Platform",
    description:
      "Available for Windows and macOS. Linux support coming soon.",
  },
  {
    icon: Heart,
    title: "Simple & Focused",
    description:
      "No subscriptions, no ads, no data collection. Just a simple tool that does one thing well.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Configure Categories",
    description: "Set up categories like \"Documents\" → .pdf, .docx, .txt",
  },
  {
    step: 2,
    title: "Watch Your Folder",
    description: "The app monitors your Downloads folder in real-time",
  },
  {
    step: 3,
    title: "Automatic Sorting",
    description: "New files are automatically moved to matching category folders",
  },
  {
    step: 4,
    title: "Manual Sort Option",
    description: "Trigger a sort of all existing files anytime you want",
  },
];

export default function Home() {
  const [os, setOs] = useState<"mac" | "windows" | "other">("mac");
  const [currency, setCurrency] = useState<{ symbol: string; code: string }>({ symbol: "€", code: "EUR" });
  const scrollRef = useScrollFadeIn();

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("mac")) {
      setOs("mac");
    } else if (userAgent.includes("win")) {
      setOs("windows");
    } else {
      setOs("other");
    }

    // Detect if user is in the US based on timezone or locale
    const isUS = (() => {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const locale = navigator.language || "";
      return timezone.startsWith("America/") &&
             !timezone.includes("Buenos_Aires") &&
             !timezone.includes("Sao_Paulo") &&
             !timezone.includes("Mexico") ||
             locale === "en-US";
    })();

    if (isUS) {
      setCurrency({ symbol: "$", code: "USD" });
    }
  }, []);

  const price = `${currency.symbol}9`;

  const buttonContent = (() => {
    if (os === "mac") {
      return {
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        ),
        text: `Buy for macOS — ${price}`,
      };
    } else if (os === "windows") {
      return {
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 5.557l7.357-1.002v7.102H3V5.557zm0 12.886l7.357 1.002v-7.088H3v6.086zm8.143 1.124L22 21v-8.643h-10.857v7.21zm0-14.134v7.218H22V3l-10.857 1.433z"/>
          </svg>
        ),
        text: `Buy for Windows — ${price}`,
      };
    }
    return {
      icon: <Download className="w-5 h-5" />,
      text: `Buy Now — ${price}`,
    };
  })();

  return (
    <div ref={scrollRef} className="min-h-screen animated-gradient relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FolderOpen className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-semibold">Filenest</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#features"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a
              href="https://buy.polar.sh/polar_cl_d7JOsy8Bpxc4R2dSwlSsSisTTz2YM62MbtMxQ1ipxmK"
              className="btn-primary px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Buy
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up opacity-0">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
              Desktop App for Windows & macOS
            </span>
          </div>

          <h1 className="animate-fade-in-up opacity-0 animate-delay-100 text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Tame your Downloads folder,
            <span className="text-gradient">automatically.</span>
          </h1>

          <p className="animate-fade-in-up opacity-0 animate-delay-200 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Filenest is a desktop file organizer that runs in your system tray.
            It automatically sorts files into categorized subfolders based on
            file extensions.
          </p>

          <div className="animate-fade-in-up opacity-0 animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://buy.polar.sh/polar_cl_d7JOsy8Bpxc4R2dSwlSsSisTTz2YM62MbtMxQ1ipxmK"
              className="btn-primary px-8 py-4 rounded-full text-base font-medium flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Buy for {price}
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How <span className="text-gradient">Filenest</span> works
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Get organized in minutes with a simple, intuitive workflow.
            </p>
          </div>

          {/* Sort GIF Demo */}
          <div className="mb-12">
            <div className="feature-card rounded-2xl p-4 overflow-hidden">
              <img
                src="/screenshots/sort.gif"
                alt="Filenest sorting files automatically"
                className="w-full rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className={`feature-card rounded-2xl p-6 flex items-start gap-6 scroll-fade-in delay-${index + 1}`}
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-blue-400">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-zinc-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need for{" "}
              <span className="text-gradient">organized files</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Powerful features wrapped in a simple, unobtrusive package that
              stays out of your way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card rounded-2xl p-6 scroll-fade-in delay-${(index % 4) + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="download" className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple pricing. <span className="text-gradient">Forever yours.</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            No subscriptions. No recurring fees. Buy once, use forever.
          </p>

          <div className="feature-card rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
              {/* Left side - Price and button */}
              <div className="text-left">
                <div className="mb-6">
                  <span className="text-6xl md:text-7xl font-bold">{price}</span>
                  <span className="text-zinc-400 text-xl ml-2">{currency.code}</span>
                  <p className="text-zinc-500 mt-2">One-time payment</p>
                </div>

                <a
                  href="https://buy.polar.sh/polar_cl_d7JOsy8Bpxc4R2dSwlSsSisTTz2YM62MbtMxQ1ipxmK"
                  className="btn-primary w-full md:w-auto px-8 py-4 rounded-xl text-base font-medium flex items-center justify-center gap-3 mb-4"
                >
                  {buttonContent.icon}
                  {buttonContent.text}
                </a>

                <p className="text-xs text-zinc-500">
                  Secure checkout powered by Polar
                </p>
              </div>

              {/* Right side - Features */}
              <div className="text-left">
                <p className="text-xs font-semibold tracking-wider text-zinc-400 mb-4">
                  EVERYTHING INCLUDED
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Lifetime license, pay once</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>All future updates included</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Windows & macOS support</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Unlimited folders & categories</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Real-time folder watching</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Local-first, privacy-focused</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Native desktop app</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom info row */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-8 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Instant delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>Windows 10+ / macOS 12+ required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              <span>License key via email</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <FolderOpen className="w-5 h-5 text-blue-400" />
            <span className="font-semibold">Filenest</span>
          </div>

          <div className="text-sm text-zinc-500 text-center">
            <p>&copy; 2025 Almin. All rights reserved.</p>
            <p className="mt-1">
              Built by{" "}
              <a
                href="https://x.com/almin0x1011"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                @almin0x1011
              </a>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:support@filenest.tech"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
