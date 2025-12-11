import {
  FolderOpen,
  Eye,
  Settings2,
  Monitor,
  Zap,
  Moon,
  Laptop,
  Heart,
  Download,
  Github,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

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
              href="#download"
              className="btn-primary px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download
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
            Tame your Downloads folder
            <span className="text-gradient">—automatically.</span>
          </h1>

          <p className="animate-fade-in-up opacity-0 animate-delay-200 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Filenest is a desktop file organizer that runs in your system tray.
            It automatically sorts files into categorized subfolders based on
            file extensions.
          </p>

          <div className="animate-fade-in-up opacity-0 animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#download"
              className="btn-primary px-8 py-4 rounded-full text-base font-medium flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Buy for $9
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-4 rounded-full text-base font-medium flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
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
                className="feature-card rounded-2xl p-6"
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

          <div className="space-y-6">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="feature-card rounded-2xl p-6 flex items-start gap-6"
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

      {/* Tech Stack Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="feature-card rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Built with Modern Technology
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8 text-zinc-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                <span>Electron (Cross-platform)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                <span>Windows & macOS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                <span>Tauri (Rust) version coming</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to organize your files?
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Download Filenest for free and take control of your Downloads folder
            today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#"
              className="btn-primary px-8 py-4 rounded-full text-base font-medium flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5" />
              Download for Windows
            </a>
            <a
              href="#"
              className="btn-secondary px-8 py-4 rounded-full text-base font-medium flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5" />
              Download for Linux
            </a>
          </div>

          <p className="text-sm text-zinc-500">
            No account required.
          </p>
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
              &quot;Built&quot; by{" "}
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
