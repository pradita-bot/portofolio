import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Network,
  Shield,
  Code,
  Server,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  Briefcase,
  ArrowRight,
  Menu,
  X,
  Copy,
  Check,
  Globe,
  Terminal,
  Cpu,
  Layers
} from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Tab active inside the mock console
  const [consoleTab, setConsoleTab] = useState<"network" | "server" | "about">("network");

  // Section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["beranda", "tentang", "keahlian", "pengalaman", "proyek", "kontak"];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = (text: string, isEmail: boolean) => {
    navigator.clipboard.writeText(text);
    if (isEmail) {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setContactForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  const menuItems = [
    { id: "beranda", label: "Beranda" },
    { id: "tentang", label: "Tentang" },
    { id: "keahlian", label: "Keahlian" },
    { id: "pengalaman", label: "Pengalaman" },
    { id: "proyek", label: "Proyek" },
    { id: "kontak", label: "Kontak" }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-300 overflow-x-hidden antialiased">
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#beranda" className="flex items-center space-x-1 sm:space-x-2 font-display text-sm sm:text-base tracking-wider font-bold text-white group shrink-0">
              <span className="font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors">&lt;</span>
              <span className="tracking-tight uppercase block sm:hidden">M. Fajar</span>
              <span className="tracking-tight uppercase hidden sm:block md:hidden lg:block">M. Fajar Pradita</span>
              <span className="tracking-tight uppercase hidden md:block lg:hidden">M. Fajar P.</span>
              <span className="font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors">/&gt;</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-cyan-400"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Hubungi CTA (Desktop) */}
            <div className="hidden md:block shrink-0">
              <a
                href="#kontak"
                className="px-4 py-2 bg-zinc-900 hover:bg-zinc-850 text-zinc-200 hover:text-white border border-zinc-800 rounded-lg text-sm font-medium transition-all duration-200"
              >
                Hubungi Saya
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-zinc-200 focus:outline-none shrink-0"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="md:hidden border-t border-zinc-900 bg-zinc-950"
            >
              <div className="px-4 py-4 space-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      activeSection === item.id
                        ? "bg-zinc-900 text-cyan-400"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="relative min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center py-10 md:py-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-zinc-900/60 text-zinc-300 rounded-full border border-zinc-800 font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>Network & IT Operations Specialist</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] break-words">
              MUHAMMAD FAJAR PRADITA
            </h1>

            <p className="font-display text-base sm:text-lg lg:text-xl text-zinc-400 font-medium">
              Network & IT Technician <span className="text-zinc-700">|</span> Cyber Security Enthusiast <span className="text-zinc-700">|</span> Web Developer
            </p>

            <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
              Teknisi IT & Jaringan profesional yang siap berkontribusi penuh. Berfokus pada keandalan infrastruktur jaringan, administrasi server Linux, konfigurasi perangkat routing Mikrotik, serta pengembangan aplikasi web yang aman dan efisien.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#proyek"
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-medium rounded-lg text-sm transition-all duration-200 shadow-sm"
              >
                Lihat Proyek
              </a>
              <a
                href="#kontak"
                className="px-6 py-3 bg-zinc-900 hover:bg-zinc-850 text-zinc-200 font-medium rounded-lg text-sm border border-zinc-800 transition-all duration-200"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Hero Right: Clean Mock Console */}
          <div className="lg:col-span-5 w-full max-w-lg mx-auto">
            <div className="w-full bg-zinc-900/40 rounded-xl border border-zinc-900 shadow-xl overflow-hidden">
              
              {/* Console Header / Tabs */}
              <div className="bg-zinc-950 px-3 py-2.5 flex items-center justify-between border-b border-zinc-900">
                <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto scrollbar-none">
                  <button
                    onClick={() => setConsoleTab("network")}
                    className={`flex items-center space-x-1 px-2 py-1 rounded text-xs font-mono transition-all shrink-0 ${consoleTab === "network" ? "bg-zinc-900/80 text-cyan-400 font-semibold" : "text-zinc-500 hover:text-zinc-350"}`}
                  >
                    <Network className="w-3.5 h-3.5" />
                    <span className="hidden xs:inline">network.conf</span>
                    <span className="xs:hidden">Net</span>
                  </button>
                  <span className="text-zinc-800">/</span>
                  <button
                    onClick={() => setConsoleTab("server")}
                    className={`flex items-center space-x-1 px-2 py-1 rounded text-xs font-mono transition-all shrink-0 ${consoleTab === "server" ? "bg-zinc-900/80 text-cyan-400 font-semibold" : "text-zinc-500 hover:text-zinc-350"}`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span className="hidden xs:inline">sys_status</span>
                    <span className="xs:hidden">Sys</span>
                  </button>
                  <span className="text-zinc-800">/</span>
                  <button
                    onClick={() => setConsoleTab("about")}
                    className={`flex items-center space-x-1 px-2 py-1 rounded text-xs font-mono transition-all shrink-0 ${consoleTab === "about" ? "bg-zinc-900/80 text-cyan-400 font-semibold" : "text-zinc-500 hover:text-zinc-350"}`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span className="hidden xs:inline">fajar.profile</span>
                    <span className="xs:hidden">Profile</span>
                  </button>
                </div>
                <div className="hidden sm:flex items-center space-x-1 shrink-0 ml-2">
                  <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                  <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                </div>
              </div>

              {/* Console Screen Content */}
              <div className="p-5 font-mono text-xs sm:text-sm h-72 overflow-y-auto bg-zinc-950/20 text-zinc-400 leading-relaxed">
                {consoleTab === "network" && (
                  <div className="space-y-2">
                    <p className="text-zinc-600"># Mikrotik RouterOS Configuration snippet</p>
                    <p><span className="text-cyan-400">/interface wireless security-profiles</span></p>
                    <p className="pl-4">set [ find default=yes ] mode=dynamic-keys authentication-types=wpa2-psk</p>
                    <p><span className="text-cyan-400">/ip address</span></p>
                    <p className="pl-4">add address=192.168.88.1/24 interface=bridge comment="LAN_Gateway"</p>
                    <p><span className="text-cyan-400">/ip route</span></p>
                    <p className="pl-4">add gateway=192.168.1.1 distance=1 check-gateway=ping</p>
                    <p><span className="text-cyan-400">/ip firewall nat</span></p>
                    <p className="pl-4">add action=masquerade chain=srcnat out-interface=ether1</p>
                    <p className="text-emerald-500 mt-2">// Status: Gateway reachable & operational</p>
                  </div>
                )}

                {consoleTab === "server" && (
                  <div className="space-y-2">
                    <p className="text-zinc-600"># Linux System Environment status</p>
                    <p>OS: <span className="text-zinc-200">Arch Linux / Debian Server</span></p>
                    <p>Core: <span className="text-zinc-200">Linux 6.6.x LTS x86_64</span></p>
                    <p>Environment: <span className="text-zinc-200">Production ready</span></p>
                    <p>Web Stack: <span className="text-zinc-200">Python/Flask, PHP, Docker Compose</span></p>
                    <p>Database: <span className="text-zinc-200">PostgreSQL, MySQL</span></p>
                    <p className="text-emerald-500 mt-4">// All processes running securely on container layer</p>
                  </div>
                )}

                {consoleTab === "about" && (
                  <div className="space-y-2">
                    <p className="text-zinc-600"># Muhammad Fajar Profile Data</p>
                    <p>NAME: <span className="text-zinc-200">Muhammad Fajar Pradita</span></p>
                    <p>ROLE: <span className="text-zinc-200">Network & System Engineer</span></p>
                    <p>LOC: <span className="text-zinc-200">Luwu Timur, Sulawesi Selatan</span></p>
                    <p>EXP: <span className="text-zinc-200">PT Aplikanusa Lintasarta PKL</span></p>
                    <p>COMP: <span className="text-zinc-200">Olimpiade Jaringan Mikrotik Participant</span></p>
                    <p className="text-cyan-400 mt-4">_ contact: muhammadfajarpradita97@gmail.com</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-24 bg-zinc-900/10 border-t border-zinc-900/60">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Visual Identity Column */}
            <div className="lg:col-span-5">
              <div className="bg-zinc-900/40 rounded-xl border border-zinc-900 p-6 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-800">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-white">Spesifikasi Sistem</h3>
                    <p className="font-mono text-[11px] text-zinc-500">fajar@localhost</p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-zinc-900/80 font-mono text-xs">
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-zinc-500">Infrastruktur:</span>
                    <span className="col-span-2 text-zinc-300">Mikrotik, Fiber Optik, Cisco</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-zinc-500">Sistem Operasi:</span>
                    <span className="col-span-2 text-zinc-300">Linux (Server, Arch, Parrot)</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-zinc-500">Pengembangan:</span>
                    <span className="col-span-2 text-zinc-300">Python, Flask, PHP, SQL</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-zinc-500">Lokasi:</span>
                    <span className="col-span-2 text-zinc-300">Luwu Timur, Sulsel</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 block">01 / TENTANG SAYA</span>
                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  Membangun Infrastruktur & Sistem Informasi Terintegrasi
                </h2>
              </div>

              <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
                <p>
                  Saya adalah lulusan SMK jurusan <strong className="text-zinc-200 font-semibold">Teknik Komputer dan Jaringan (TKJ)</strong> yang memiliki keahlian praktis yang komprehensif dalam instalasi perangkat jaringan, konfigurasi sistem operasi server, pemeliharaan infrastruktur serat optik, serta pengembangan perangkat lunak berbasis web.
                </p>
                <p>
                  Saya memiliki pengalaman langsung mengelola dan mengoptimalkan perangkat Mikrotik (RouterOS), instalasi titik akses fiber optik, setup sistem operasi tangguh berbasis Linux, serta perancangan aplikasi web fungsional menggunakan pemrograman Python, PHP, dan MySQL.
                </p>
                <p>
                  Dengan gabungan keahlian perangkat keras jaringan dan pengembangan perangkat lunak, saya selalu mengedepankan pendekatan yang sistematis, aman, dan efisien dalam menyelesaikan setiap tantangan teknis.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="keahlian" className="py-24 border-t border-zinc-900/60">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-3xl space-y-2 mb-16">
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 block">02 / SPESIALISASI TEKNIS</span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white">Keahlian & Kompetensi Utama</h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Rangkaian kemampuan profesional yang mencakup pengelolaan fisik infrastruktur jaringan, konfigurasi platform sistem operasi, dan pembuatan aplikasi web modern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Skill Block 1 */}
            <div className="p-6 bg-zinc-900/20 rounded-xl border border-zinc-900 hover:border-zinc-800 transition-colors">
              <div className="flex items-center space-x-3.5 mb-5">
                <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800 text-cyan-400">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-white">Jaringan & Infrastruktur</h3>
              </div>
              <p className="text-zinc-400 text-sm mb-4">
                Keahlian matang dalam administrasi perangkat perutean, pemasangan kabel fisik, dan transmisi optik.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-zinc-950 text-zinc-400 font-mono text-[11px] rounded border border-zinc-900">Mikrotik (RouterOS)</span>
                <span className="px-2.5 py-1 bg-zinc-950 text-zinc-400 font-mono text-[11px] rounded border border-zinc-900">Routing & VLAN Setup</span>
                <span className="px-2.5 py-1 bg-zinc-950 text-zinc-400 font-mono text-[11px] rounded border border-zinc-900">Wiring LAN/WAN</span>
                <span className="px-2.5 py-1 bg-zinc-950 text-zinc-400 font-mono text-[11px] rounded border border-zinc-900">Splicing Fiber Optik</span>
              </div>
            </div>

            {/* Skill Block 2 */}
            <div className="p-6 bg-zinc-900/20 rounded-xl border border-zinc-900 hover:border-zinc-800 transition-colors">
              <div className="flex items-center space-x-3.5 mb-5">
                <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800 text-cyan-400">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-white">Sistem Operasi & Keamanan</h3>
              </div>
              <p className="text-zinc-400 text-sm mb-4">
                Manajemen administrasi server tangguh, sistem operasi open-source, dan pengenalan dasar pengamanan sistem.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-zinc-950 text-zinc-400 font-mono text-[11px] rounded border border-zinc-900">Linux Server (Debian/Ubuntu)</span>
                <span className="px-2.5 py-1 bg-zinc-950 text-zinc-400 font-mono text-[11px] rounded border border-zinc-900">Arch Linux</span>
                <span className="px-2.5 py-1 bg-zinc-950 text-zinc-400 font-mono text-[11px] rounded border border-zinc-900">Parrot OS / Kali</span>
                <span className="px-2.5 py-1 bg-zinc-950 text-zinc-400 font-mono text-[11px] rounded border border-zinc-900">Cyber Security Dasar</span>
              </div>
            </div>

            {/* Skill Block 3 */}
            <div className="p-6 bg-zinc-900/20 rounded-xl border border-zinc-900 hover:border-zinc-800 transition-colors">
              <div className="flex items-center space-x-3.5 mb-5">
                <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800 text-cyan-400">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-white">Pengembangan Web</h3>
              </div>
              <p className="text-zinc-400 text-sm mb-4">
                Konstruksi backend, integrasi basis data relasional, dan penyematan API fungsional.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-zinc-950 text-zinc-400 font-mono text-[11px] rounded border border-zinc-900">Python & Flask</span>
                <span className="px-2.5 py-1 bg-zinc-950 text-zinc-400 font-mono text-[11px] rounded border border-zinc-900">PHP & HTML5</span>
                <span className="px-2.5 py-1 bg-zinc-950 text-zinc-400 font-mono text-[11px] rounded border border-zinc-900">MySQL Database</span>
                <span className="px-2.5 py-1 bg-zinc-950 text-zinc-400 font-mono text-[11px] rounded border border-zinc-900">GPS Integration</span>
              </div>
            </div>

            {/* Skill Block 4 */}
            <div className="p-6 bg-zinc-900/20 rounded-xl border border-zinc-900 hover:border-zinc-800 transition-colors">
              <div className="flex items-center space-x-3.5 mb-5">
                <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800 text-cyan-400">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-white">Deployment & Kontainerisasi</h3>
              </div>
              <p className="text-zinc-400 text-sm mb-4">
                Version control sistem, kontainer aplikasi terisolasi, dan hosting otomatis modern.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-zinc-950 text-zinc-400 font-mono text-[11px] rounded border border-zinc-900">Git / GitHub Workflow</span>
                <span className="px-2.5 py-1 bg-zinc-950 text-zinc-400 font-mono text-[11px] rounded border border-zinc-900">Docker Compose</span>
                <span className="px-2.5 py-1 bg-zinc-950 text-zinc-400 font-mono text-[11px] rounded border border-zinc-900">Vercel Deployments</span>
                <span className="px-2.5 py-1 bg-zinc-950 text-zinc-400 font-mono text-[11px] rounded border border-zinc-900">Supabase & Cloud Platform</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="pengalaman" className="py-24 bg-zinc-900/10 border-t border-zinc-900/60">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-3xl space-y-2 mb-16">
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 block">03 / PENGALAMAN LAPANGAN</span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white">Riwayat Kerja & PKL</h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Pengalaman kerja praktis dalam operasional lapangan korporat telekomunikasi, penanganan gangguan jaringan, dan instalasi infrastruktur kritis.
            </p>
          </div>

          <div className="max-w-4xl space-y-8">
            
            {/* Experience Card */}
            <div className="p-6 sm:p-8 bg-zinc-900/30 rounded-xl border border-zinc-900 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white">Teknisi IT & Jaringan (PKL)</h3>
                  <p className="font-display text-sm font-semibold text-cyan-400">PT Aplikanusa Lintasarta Cabang Makassar</p>
                </div>
                <div className="inline-flex items-center space-x-1 px-3 py-1 bg-zinc-950 text-zinc-400 font-mono text-xs rounded border border-zinc-900 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400 mr-1" />
                  <span>November 2025 - Maret 2026</span>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-zinc-900 text-sm sm:text-base text-zinc-300 leading-relaxed">
                <p className="font-medium text-zinc-100">
                  Tanggung jawab dan keterlibatan aktif dalam operasional teknis lapangan:
                </p>

                <ul className="space-y-3.5 font-sans">
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                    <span>
                      <strong>Instalasi Jaringan Perbankan:</strong> Berpartisipasi langsung dalam pemasangan dan konfigurasi infrastruktur jaringan lokal untuk kantor Bank Sulselbar Syariah Makassar serta Bank Sulselbar Gowa.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                    <span>
                      <strong>Pemeliharaan Infrastruktur Bandara:</strong> Melaksanakan pergantian dan pencabutan modul perangkat penangkap sinyal parabola (satellite converter) di area penting bandara.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                    <span>
                      <strong>Instalasi Starlink UNHAS:</strong> Terlibat langsung dalam integrasi fisik dan pengujian koneksi internet satelit Starlink di lingkungan Universitas Hasanuddin (UNHAS).
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                    <span>
                      <strong>Penanganan Gangguan (Troubleshooting):</strong> Mendukung tim teknisi senior di lapangan untuk merespon dan memperbaiki gangguan jaringan pelanggan korporat (enterprise).
                    </span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyek" className="py-24 border-t border-zinc-900/60">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-3xl space-y-2 mb-16">
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 block">04 / PORTOFOLIO UTAMA</span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white">Proyek & Prestasi Kerja</h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Karya mandiri di bidang pemrograman web fungsional serta partisipasi aktif dalam kejuaraan jaringan berskala regional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Project 1 */}
            <div className="bg-zinc-900/20 rounded-xl border border-zinc-900 hover:border-zinc-800 transition-all flex flex-col h-full overflow-hidden group">
              <div className="p-6 flex-grow space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="px-2 py-0.5 bg-zinc-900 text-zinc-400 font-mono text-[10px] rounded border border-zinc-800 uppercase">Production</span>
                  <Globe className="w-4 h-4 text-cyan-400" />
                </div>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">TikNexus</h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Aplikasi web pendownload video TikTok tanpa watermark secara instan. Dikembangkan menggunakan React dan Tailwind CSS, memberikan performa unduhan yang stabil, cepat, dan di-hosting di platform Vercel.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2 py-0.5 bg-zinc-950 text-zinc-500 font-mono text-[10px] rounded border border-zinc-900">React</span>
                  <span className="px-2 py-0.5 bg-zinc-950 text-zinc-500 font-mono text-[10px] rounded border border-zinc-900">Tailwind</span>
                  <span className="px-2 py-0.5 bg-zinc-950 text-zinc-500 font-mono text-[10px] rounded border border-zinc-900">Vercel</span>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-zinc-900/60 mt-auto bg-zinc-950/20">
                <a
                  href="https://tiknexus.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-bold mt-4"
                >
                  <span>Kunjungi Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-zinc-900/20 rounded-xl border border-zinc-900 hover:border-zinc-800 transition-all flex flex-col h-full overflow-hidden group">
              <div className="p-6 flex-grow space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="px-2 py-0.5 bg-zinc-900 text-zinc-400 font-mono text-[10px] rounded border border-zinc-800 uppercase font-semibold">Inovasi Daerah</span>
                  <Cpu className="w-4 h-4 text-cyan-400" />
                </div>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">Sistem Absensi GPS</h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Platform Web Absensi sekolah terintegrasi dengan deteksi koordinat lokasi (GPS) siswa berbasis Flask. Dikembangkan dan dipresentasikan langsung di hadapan Kepala Dinas Pendidikan setempat.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2 py-0.5 bg-zinc-950 text-zinc-500 font-mono text-[10px] rounded border border-zinc-900">Python</span>
                  <span className="px-2 py-0.5 bg-zinc-950 text-zinc-500 font-mono text-[10px] rounded border border-zinc-900">Flask</span>
                  <span className="px-2 py-0.5 bg-zinc-950 text-zinc-500 font-mono text-[10px] rounded border border-zinc-900">GPS API</span>
                  <span className="px-2 py-0.5 bg-zinc-950 text-zinc-500 font-mono text-[10px] rounded border border-zinc-900">MySQL</span>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-zinc-900/60 mt-auto bg-zinc-950/20">
                <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-zinc-500 mt-4">
                  <span>Program 1 Sekolah 1 Programmer</span>
                </span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-zinc-900/20 rounded-xl border border-zinc-900 hover:border-zinc-800 transition-all flex flex-col h-full overflow-hidden group">
              <div className="p-6 flex-grow space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="px-2 py-0.5 bg-zinc-900 text-zinc-400 font-mono text-[10px] rounded border border-zinc-800 uppercase">Mikrotik</span>
                  <Layers className="w-4 h-4 text-cyan-400" />
                </div>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">Olimpiade Jaringan (OJM)</h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Peserta aktif kompetisi bergengsi Olimpiade Jaringan Mikrotik (OJM) tingkat regional pada periode tahun 2024 dan 2025. Menguji pemahaman teori sirkuit jaringan dan praktik konfigurasi routing dinamis.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2 py-0.5 bg-zinc-950 text-zinc-500 font-mono text-[10px] rounded border border-zinc-900">RouterOS</span>
                  <span className="px-2 py-0.5 bg-zinc-950 text-zinc-500 font-mono text-[10px] rounded border border-zinc-900">NAT / VLAN</span>
                  <span className="px-2 py-0.5 bg-zinc-950 text-zinc-500 font-mono text-[10px] rounded border border-zinc-900">Switching</span>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-zinc-900/60 mt-auto bg-zinc-950/20">
                <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-400 mt-4">
                  <span>Regional Participant (2024, 2025)</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-24 bg-zinc-900/10 border-t border-zinc-900/60">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-3xl space-y-2 mb-16">
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 block">05 / HUBUNGI SAYA</span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white">Hubungan Profesional</h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Diskusikan peluang kolaborasi, perekrutan teknisi IT/jaringan, atau pengembangan sistem informasi web.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Info Links Column */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-display text-lg font-bold text-white">Saluran Kontak Utama</h3>
              
              <div className="space-y-4">
                
                {/* Email link */}
                <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-900 flex items-center justify-between">
                  <div className="flex items-center space-x-4 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-800 shrink-0">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-zinc-500 block">ALAMAT EMAIL</span>
                      <span className="text-sm text-zinc-200 truncate font-mono block">muhammadfajarpradita97@gmail.com</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy("muhammadfajarpradita97@gmail.com", true)}
                    className="text-zinc-500 hover:text-cyan-400 p-2 rounded transition-colors shrink-0"
                    title="Salin Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone link */}
                <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-900 flex items-center justify-between">
                  <div className="flex items-center space-x-4 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-800 shrink-0">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-zinc-500 block">TELEPON / WHATSAPP</span>
                      <span className="text-sm text-zinc-200 font-mono block">081235373688</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy("081235373688", false)}
                    className="text-zinc-500 hover:text-cyan-400 p-2 rounded transition-colors shrink-0"
                    title="Salin Nomor Telepon"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location link */}
                <div className="bg-zinc-900/30 p-4 rounded-xl border border-zinc-900 flex items-center justify-between">
                  <div className="flex items-center space-x-4 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-800 shrink-0">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-zinc-500 block">LOKASI</span>
                      <span className="text-sm text-zinc-200 font-mono block">Luwu Timur, Sulawesi Selatan</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-zinc-900 flex items-center space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-zinc-900 hover:bg-zinc-850 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-zinc-900 hover:bg-zinc-850 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Email Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-zinc-900/20 p-6 sm:p-8 rounded-xl border border-zinc-900">
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <h3 className="font-display text-base font-bold text-white mb-2">Kirim Pesan Langsung</h3>
                  
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase text-zinc-500 mb-1.5">Nama Lengkap</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Masukkan nama Anda"
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-cyan-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder-zinc-700 font-sans transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-zinc-500 mb-1.5">Alamat Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="nama@email.com"
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-cyan-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder-zinc-700 font-sans transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase text-zinc-500 mb-1.5">Isi Pesan</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Bagaimana saya bisa membantu Anda?"
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-cyan-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder-zinc-700 font-sans transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 bg-zinc-900 hover:bg-zinc-850 text-white font-medium rounded-lg text-sm border border-zinc-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>{isSubmitting ? "Mengirim..." : "Kirim Pesan"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {submitSuccess && (
                    <div className="p-4 bg-emerald-950/40 text-emerald-400 rounded-lg border border-emerald-900/60 text-xs font-mono">
                      Pesan berhasil dikirim! Terima kasih telah menghubungi saya.
                    </div>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-950 border-t border-zinc-900/60">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-mono text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} MUHAMMAD FAJAR PRADITA. All rights reserved.
          </p>
          <p className="font-mono text-xs text-zinc-600">
            Designed & Built with absolute precision.
          </p>
        </div>
      </footer>

    </div>
  );
}
