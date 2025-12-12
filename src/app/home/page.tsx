"use client";

import { Download, FolderOpen, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen animated-gradient relative overflow-hidden">
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
        </div>
      </nav>

      {/* Main Content */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to <span className="text-gradient">Filenest</span>
            </h1>
            <p className="text-xl text-zinc-400">
              Thank you for your purchase! Download your app below.
            </p>
          </div>

          <div className="feature-card rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6">Download Filenest</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* macOS Download */}
              <a
                href="#"
                className="feature-card rounded-xl p-6 hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">macOS</h3>
                    <p className="text-sm text-zinc-400">macOS 12+</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium">Download .dmg</span>
                </div>
              </a>

              {/* Windows Download */}
              <a
                href="#"
                className="feature-card rounded-xl p-6 hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 5.557l7.357-1.002v7.102H3V5.557zm0 12.886l7.357 1.002v-7.088H3v6.086zm8.143 1.124L22 21v-8.643h-10.857v7.21zm0-14.134v7.218H22V3l-10.857 1.433z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Windows</h3>
                    <p className="text-sm text-zinc-400">Windows 10+</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium">Download .exe</span>
                </div>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-zinc-400 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Check your email</h3>
                  <p className="text-sm text-zinc-400">
                    Your license key has been sent to your email address. You&apos;ll need it to activate the app.
                  </p>
                </div>
              </div>
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
          <div className="text-sm text-zinc-500">
            <p>&copy; 2025 Almin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
