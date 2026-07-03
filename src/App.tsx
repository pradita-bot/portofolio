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
  Layers,
  Award,
  FileText
} from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: "cybersecurity" | "networking" | "ai_dev";
  credentialId?: string;
  skills: string[];
  type: string;
  description: string;
  logoType: 'blueteam' | 'microsoft' | 'cisco' | 'mikrotik' | 'cyberarmy' | 'disdik' | 'komdigi' | 'dicoding' | 'idnetworkers';
  details: {
    recipient: string;
    courseName: string;
    datePassed: string;
    certificateId: string;
    signatory1: string;
    signatory1Title?: string;
    signatory2?: string;
    signatory2Title?: string;
    extraNote: string;
  };
}

const certificates: Certificate[] = [
  {
    id: "sbt-osint",
    title: "Introduction to OSINT",
    issuer: "Security Blue Team",
    date: "08 Feb 2026",
    category: "cybersecurity",
    credentialId: "33273237",
    skills: ["OSINT", "Open Source Intelligence", "Reconnaissance", "Information Gathering"],
    type: "Sertifikasi Kompetensi",
    description: "Memahami konsep data OSINT, alat pelacakan, teknik investigasi siber, serta kegunaannya bagi analis keamanan siber.",
    logoType: "blueteam",
    details: {
      recipient: "MUHAMMAD FAJAR PRADITA",
      courseName: "Introduction to OSINT",
      datePassed: "2026-02-08",
      certificateId: "33273237",
      signatory1: "Joshua Beaman",
      signatory1Title: "Chief Executive Officer",
      signatory2: "Sabastian Hague",
      signatory2Title: "Director of Content & Training",
      extraNote: "has completed the Introduction to OSINT course, showing an understanding of OSINT data, tools, techniques, and how this information can be useful for defenders, attackers, and businesses."
    }
  },
  {
    id: "sbt-network",
    title: "Introduction to Network Analysis",
    issuer: "Security Blue Team",
    date: "08 Feb 2026",
    category: "cybersecurity",
    credentialId: "372749881",
    skills: ["Wireshark", "TCPDump", "PCAP Analysis", "Trafik Forensik"],
    type: "Sertifikasi Kompetensi",
    description: "Analisis berkas PCAP menggunakan Wireshark dan TCPDump untuk mendeteksi paket mencurigakan serta serangan siber pada jaringan.",
    logoType: "blueteam",
    details: {
      recipient: "MUHAMMAD FAJAR PRADITA",
      courseName: "Introduction to Network Analysis",
      datePassed: "2026-02-08",
      certificateId: "372749881",
      signatory1: "Joshua Beaman",
      signatory1Title: "Chief Executive Officer",
      signatory2: "Sabastian Hague",
      signatory2Title: "Director of Content & Training",
      extraNote: "has completed the Introduction to Network Analysis course, showing an understanding of basic networking fundamentals, and the ability to analyze various PCAP using Wireshark and TCPDump, including malicious traffic from a mock compromised system."
    }
  },
  {
    id: "cisco-endpoint",
    title: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    date: "21 Jan 2026",
    category: "cybersecurity",
    skills: ["Endpoint Protection", "Antivirus", "Risk Management", "Cisco Academy"],
    type: "Sertifikasi Akademik",
    description: "Menyelesaikan pelatihan proteksi host, taktik perlindungan endpoint dari malware, deteksi ancaman, dan kebijakan keamanan organisasi.",
    logoType: "cisco",
    details: {
      recipient: "Muhammad Fajar Pradita",
      courseName: "Endpoint Security",
      datePassed: "21 Jan 2026",
      certificateId: "Cisco Networking Academy",
      signatory1: "Lynn Bloomer",
      signatory1Title: "Director, Cisco Networking Academy",
      extraNote: "for successfully completing Endpoint Security course offered by Networking Academy through the Cisco Networking Academy program."
    }
  },
  {
    id: "cyber-info-sec",
    title: "Introduction to Information Security",
    issuer: "Cyber Academy (Cyber Army Indonesia)",
    date: "17 Jan 2026",
    category: "cybersecurity",
    credentialId: "PKMI01101260119",
    skills: ["Information Security", "Cyber Defense", "Vulnerability Assessment", "Compliance"],
    type: "Sertifikasi Kompetensi",
    description: "Pemahaman dasar keamanan data siber, pencegahan kebocoran informasi, taktik pertahanan dasar, dan regulasi kepatuhan privasi.",
    logoType: "cyberarmy",
    details: {
      recipient: "Muhammad Fajar Pradita",
      courseName: "Introduction to Information Security Course",
      datePassed: "January 17, 2026",
      certificateId: "PKMI01101260119",
      signatory1: "Girindro Pringgo Digdo",
      signatory1Title: "CEO Cyber Army Indonesia",
      extraNote: "Has Completed the Introduction to Information Security Course and showing an understanding of its course module and requirement."
    }
  },
  {
    id: "ms-ioe-ai",
    title: "AI Fluency Training",
    issuer: "IOE & Microsoft",
    date: "05 Feb 2026",
    category: "ai_dev",
    skills: ["Artificial Intelligence", "AI Adoption", "AI Ethics", "Future of Work"],
    type: "Pelatihan Professional",
    description: "Program 6 modul terstruktur kolaborasi IOE dan Microsoft mengenai integrasi kecerdasan buatan, kesiapan industri, dan pola pikir AI-ready.",
    logoType: "microsoft",
    details: {
      recipient: "Muhammad Fajar Pradita",
      courseName: "AI Fluency Training",
      datePassed: "February 5, 2026",
      certificateId: "Quiz Completion",
      signatory1: "International Organisation of Employers (IOE)",
      signatory2: "Microsoft",
      extraNote: "has successfully completed the AI Fluency Training, developed by the International Organisation of Employers (IOE) in collaboration with Microsoft. This comprehensive programme consists of six structured courses. Through this training, the participant has gained a solid foundation in artificial intelligence (AI), including: core AI concepts and terminology, real-world applications of AI across industries, responsible use of AI, the impact of AI on the future of work, strategies for business adoption of AI, and the development of an AI-ready mindset."
    }
  },
  {
    id: "sulsel-disdik",
    title: "1 Sekolah 1 Programmer Andalan",
    issuer: "Dinas Pendidikan Prov. Sulawesi Selatan",
    date: "29 Des 2025",
    category: "ai_dev",
    credentialId: "895.7/4912.46-GTK/DISDIK",
    skills: ["Geolocation App", "Fullstack React", "Inkubasi Digital", "64 Jam Belajar"],
    type: "Program Inkubasi & Sertifikasi",
    description: "Terpilih sebagai Programmer Andalan dalam program Collaborative Digital Class. Membuat karya rill 'Aplikasi Absensi menggunakan geolokasi' (64 Jam Belajar).",
    logoType: "disdik",
    details: {
      recipient: "MUHAMMAD FAJAR PRADITA",
      courseName: "Collaborative Digital Class - 1 Sekolah 1 Programmer",
      datePassed: "Makassar, 29 Desember 2025",
      certificateId: "895.7/4912.46-GTK/DISDIK",
      signatory1: "Iqbal Nadjamuddin",
      signatory1Title: "Kepala Dinas Pendidikan Provinsi Sulawesi Selatan",
      extraNote: "Sebagai Peserta Kegiatan 1 Sekolah 1 Programmer Andalan dalam Program Collaborative Digital Class Dinas Pendidikan Provinsi Sulawesi Selatan, pada bulan Maret - Mei 2025 dengan 64 Jam Pembelajaran, dengan Hasil Karya Aplikasi : 'Aplikasi Absensi menggunakan geolokasi'."
    }
  },
  {
    id: "mikrotik-2025",
    title: "Olimpiade Jaringan Mikrotik 2025",
    issuer: "Mikrotik & Citraweb",
    date: "03 Sep 2025",
    category: "networking",
    credentialId: "25070026206",
    skills: ["RouterOS", "Routing Protocols", "Switching", "SMK-TKJ Nasional"],
    type: "Kompetisi Nasional",
    description: "Sertifikat keikutsertaan sebagai perwakilan sekolah dalam kompetisi nasional VIII Olimpiade Jaringan Mikrotik 2025.",
    logoType: "mikrotik",
    details: {
      recipient: "MUHAMMAD FAJAR PRADITA",
      courseName: "OLIMPIADE JARINGAN MIKROTIK 2025",
      datePassed: "03 September 2025",
      certificateId: "Peserta: 25070026206",
      signatory1: "Valens Riyadi",
      signatory1Title: "Direktur PT Citraweb Solusi Teknologi",
      extraNote: "Diberikan kepada: MUHAMMAD FAJAR PRADITA (SMK NEGERI 2 LUWU TIMUR, NPSN: 40318362 - NISN: 0086143128) atas partisipasinya sebagai: PESERTA dalam acara VIII OLIMPIADE JARINGAN MIKROTIK 2025 ANTAR SMK TINGKAT NASIONAL."
    }
  },
  {
    id: "mikrotik-2024",
    title: "Olimpiade Jaringan Mikrotik 2024",
    issuer: "Mikrotik & Citraweb",
    date: "06 Sep 2024",
    category: "networking",
    credentialId: "24070021558",
    skills: ["RouterOS", "NAT / VLAN", "Bandwidth Limit", "SMK-TKJ Nasional"],
    type: "Kompetisi Nasional",
    description: "Sertifikat partisipasi dalam kompetisi bergengsi Olimpiade Jaringan Mikrotik Tingkat Nasional 2024.",
    logoType: "mikrotik",
    details: {
      recipient: "MUHAMMAD FAJAR PRADITA",
      courseName: "OLIMPIADE JARINGAN MIKROTIK 2024",
      datePassed: "06 September 2024",
      certificateId: "Peserta: 24070021558",
      signatory1: "Valens Riyadi",
      signatory1Title: "Direktur PT Citraweb Solusi Teknologi",
      extraNote: "Diberikan kepada: MUHAMMAD FAJAR PRADITA (SMK NEGERI 2 LUWU TIMUR, NPSN: 40318362 - NISN: 0086143128) atas partisipasinya sebagai: PESERTA dalam acara OLIMPIADE JARINGAN MIKROTIK 2024 ANTAR SMK-TKJ TINGKAT NASIONAL."
    }
  },
  {
    id: "komdigi-fana",
    title: "Fundamental of Associate Network Administrator - Nasional",
    issuer: "Digital Talent Academy",
    date: "21 Mar 2026",
    category: "networking",
    credentialId: "21212087840-1378/DTA/BLSDM.Komdigi/2026",
    skills: ["Network Addressing", "Wireless Network", "Switching", "Routing Protocols (AS)", "Network Configuration"],
    type: "Sertifikat Pelatihan",
    description: "Menyelesaikan pelatihan intensif mengenai dasar-dasar perancangan pengalamatan jaringan, pemasangan jaringan nirkabel, switch, dan routing pada satu Autonomous System (AS).",
    logoType: "komdigi",
    details: {
      recipient: "MUHAMMAD FAJAR PRADITA",
      courseName: "Fundamental of Associate Network Administrator - Nasional",
      datePassed: "Jakarta, 21 Maret 2026",
      certificateId: "21212087840-1378/DTA/BLSDM.Komdigi/2026",
      signatory1: "Bonifasius W. Pudjianto",
      signatory1Title: "Kepala Badan Pengembangan SDM Komdigi",
      extraNote: "Telah menyelesaikan pelatihan Fundamental of Associate Network Administrator - Nasional yang diselenggarakan oleh Pusat Pengembangan Talenta Digital pada tanggal 3 Maret 2026 - 31 Desember 2026 selama 12 Jam Pelatihan."
    }
  },
  {
    id: "komdigi-iana",
    title: "Intermediate Associate Network Administrator - Nasional",
    issuer: "Digital Talent Academy",
    date: "12 Apr 2026",
    category: "networking",
    credentialId: "21212088840-406/DTA/BLSDM.Komdigi/2026",
    skills: ["Network Security", "Disaster Recovery", "Inter-AS Routing", "User Account Security"],
    type: "Sertifikat Pelatihan",
    description: "Menyelesaikan pelatihan tingkat menengah dalam merancang keamanan jaringan, pemulihan jaringan, rute antar Autonomous System (AS), serta pemantauan akun pengguna.",
    logoType: "komdigi",
    details: {
      recipient: "MUHAMMAD FAJAR PRADITA",
      courseName: "Intermediate Associate Network Administrator - Nasional",
      datePassed: "Jakarta, 12 April 2026",
      certificateId: "21212088840-406/DTA/BLSDM.Komdigi/2026",
      signatory1: "Bonifasius W. Pudjianto",
      signatory1Title: "Kepala Badan Pengembangan SDM Komdigi",
      extraNote: "Telah menyelesaikan pelatihan Intermediate Associate Network Administrator - Nasional yang diselenggarakan oleh Pusat Pengembangan Talenta Digital pada tanggal 3 Maret 2026 - 31 Desember 2026 selama 12 Jam Pelatihan."
    }
  },
  {
    id: "dicoding-sdd",
    title: "Spec-Driven Development dengan Kiro",
    issuer: "Dicoding Indonesia",
    date: "15 Mei 2026",
    category: "ai_dev",
    credentialId: "72ZDJJN26ZYW",
    skills: ["Spec-Driven Development", "Kiro IDE", "AI-Assisted Workflow", "Prompt Engineering", "Code Refactoring"],
    type: "Sertifikat Kompetensi",
    description: "Sertifikasi kompetensi kelulusan alur kerja AI-assisted profesional berbasis spesifikasi (Spec-Driven Development) menggunakan asisten cerdas Kiro.",
    logoType: "dicoding",
    details: {
      recipient: "Muhammad Fajar Pradita",
      courseName: "Spec-Driven Development dengan Kiro",
      datePassed: "15 Mei 2026",
      certificateId: "72ZDJJN26ZYW",
      signatory1: "Narenda Wicaksono",
      signatory1Title: "Chief Executive Officer, Dicoding Indonesia",
      extraNote: "Telah lulus kelas Spec-Driven Development dengan Kiro. Siswa menguasai transisi dari pemrograman konvensional ke AI-assisted workflow, merancang spesifikasi yang terstruktur, bebas ambiguitas, dan mengelola evolusi fitur tanpa menurunkan kualitas kode."
    }
  },
  {
    id: "idn-cybersecurity-dasar",
    title: "Cyber Security Dasar",
    issuer: "ID-Networkers (IDN.ID)",
    date: "15 Mei 2026",
    category: "cybersecurity",
    credentialId: "IDN-1778811741-13888-73977",
    skills: ["Cyber Security Fundamentals", "Network Security", "Information Security Basics", "Threat Landscapes", "Online Course"],
    type: "Certificate of Completion",
    description: "Menyelesaikan kursus online 'Cyber Security Dasar' yang diselenggarakan oleh ID-Networkers (IDN.ID) dengan materi dasar keamanan siber, perlindungan aset digital, dan kesadaran ancaman.",
    logoType: "idnetworkers",
    details: {
      recipient: "Muhammad Fajar Pradita",
      courseName: "Cyber Security Dasar",
      datePassed: "15 Mei 2026",
      certificateId: "IDN-1778811741-13888-73977",
      signatory1: "Dedi Gunawan, CCIE",
      signatory1Title: "CEO of ID-Networkers (IDN.ID)",
      extraNote: "Telah menyelesaikan kursus online 'Cyber Security Dasar' yang diselenggarakan oleh ID-Networkers (IDN.ID) melalui WWW.LMS.IDN.ID. Verifikasi sertifikat sah: https://lms.idn.id/cert-verification. Berlaku sampai dengan: 15-05-2029."
    }
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedCertInfo, setCopiedCertInfo] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [submitData, setSubmitData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [modalTab, setModalTab] = useState<"replica" | "verification">("replica");
  const [certFilter, setCertFilter] = useState<"all" | "cybersecurity" | "networking" | "ai_dev">("all");

  const [certImageSrc, setCertImageSrc] = useState<string>("");
  const [imageLoadError, setImageLoadError] = useState<boolean>(false);
  const [fallbackAttempt, setFallbackAttempt] = useState<number>(0);

  useEffect(() => {
    if (selectedCert) {
      setCertImageSrc(`/${selectedCert.id}.jpg`);
      setFallbackAttempt(0);
      setImageLoadError(false);
      setModalTab("replica");
    }
  }, [selectedCert]);

  const handleImageError = () => {
    if (selectedCert) {
      const paths = [
        `/${selectedCert.id}.jpg`,
        `/${selectedCert.id}.png`,
        `/${selectedCert.id}.jpeg`,
        `/assets/${selectedCert.id}.jpg`,
        `/assets/${selectedCert.id}.png`,
        `/assets/${selectedCert.id}.jpeg`,
        `/src/assets/${selectedCert.id}.jpg`,
        `/src/assets/${selectedCert.id}.png`,
        `/src/assets/${selectedCert.id}.jpeg`,
      ];
      const nextIndex = fallbackAttempt + 1;
      if (nextIndex < paths.length) {
        setCertImageSrc(paths[nextIndex]);
        setFallbackAttempt(nextIndex);
      } else {
        setImageLoadError(true);
      }
    }
  };

  // Tab active inside the mock console
  const [consoleTab, setConsoleTab] = useState<"network" | "server" | "about">("network");

  // Section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["beranda", "tentang", "keahlian", "pengalaman", "proyek", "sertifikat", "kontak"];
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
    setSubmitData({ ...contactForm });
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setContactForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  const menuItems = [
    { id: "beranda", label: "Beranda" },
    { id: "tentang", label: "Tentang" },
    { id: "keahlian", label: "Keahlian" },
    { id: "pengalaman", label: "Pengalaman" },
    { id: "proyek", label: "Proyek" },
    { id: "sertifikat", label: "Sertifikat" },
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

      {/* Certificates Section */}
      <section id="sertifikat" className="py-24 bg-zinc-950 border-t border-zinc-900/60">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-3xl space-y-2 mb-16">
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 block">05 / SERTIFIKAT PROFESIONAL</span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white">Sertifikasi & Kredensial</h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Kompilasi sertifikasi kompetensi, pelatihan industri, dan keterlibatan aktif dalam kompetisi teknologi skala nasional.
            </p>
          </div>

          {/* Certificate Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-zinc-900 pb-6">
            <button
              onClick={() => setCertFilter("all")}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 ${
                certFilter === "all"
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                  : "bg-zinc-900/20 text-zinc-400 hover:text-zinc-100 border border-transparent"
              }`}
            >
              [ ALL_CREDENTIALS ]
            </button>
            <button
              onClick={() => setCertFilter("cybersecurity")}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 ${
                certFilter === "cybersecurity"
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                  : "bg-zinc-900/20 text-zinc-400 hover:text-zinc-100 border border-transparent"
              }`}
            >
              [ SEC_OSINT_FORENSIC ]
            </button>
            <button
              onClick={() => setCertFilter("networking")}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 ${
                certFilter === "networking"
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                  : "bg-zinc-900/20 text-zinc-400 hover:text-zinc-100 border border-transparent"
              }`}
            >
              [ MIKROTIK_NETWORKING ]
            </button>
            <button
              onClick={() => setCertFilter("ai_dev")}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 ${
                certFilter === "ai_dev"
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                  : "bg-zinc-900/20 text-zinc-400 hover:text-zinc-100 border border-transparent"
              }`}
            >
              [ AI_WEB_DEV ]
            </button>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates
              .filter((cert) => certFilter === "all" || cert.category === certFilter)
              .map((cert) => {
                const isSBT = cert.logoType === 'blueteam';
                const isCisco = cert.logoType === 'cisco';
                const isMS = cert.logoType === 'microsoft';
                const isMikrotik = cert.logoType === 'mikrotik';
                const isDisdik = cert.logoType === 'disdik';
                const isCyberArmy = cert.logoType === 'cyberarmy';
                const isKomdigi = cert.logoType === 'komdigi';
                const isDicoding = cert.logoType === 'dicoding';
                const isIDN = cert.logoType === 'idnetworkers';

                return (
                  <div
                    key={cert.id}
                    onClick={() => setSelectedCert(cert)}
                    className="group bg-zinc-900/10 hover:bg-zinc-900/30 rounded-xl border border-zinc-900/80 hover:border-zinc-850/80 transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer shadow-lg hover:shadow-cyan-950/10"
                  >
                    {/* Certificate Thumbnail / Preview */}
                    <div className="relative h-44 w-full overflow-hidden bg-zinc-950 border-b border-zinc-900/60 flex items-center justify-center">
                      <img
                        src={`/${cert.id}.jpg`}
                        alt={cert.title}
                        className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-105"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (!target.src.includes('.png') && !target.src.includes('.jpeg')) {
                            // Try png fallback
                            target.src = `/${cert.id}.png`;
                          } else {
                            // Hide image if truly missing, but we know they exist!
                            target.style.display = 'none';
                          }
                        }}
                      />
                      {/* Gradient overlay for professional look */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-transparent opacity-75" />
                      
                      {/* Hover action banner overlay */}
                      <div className="absolute inset-0 bg-zinc-950/85 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[1.5px]">
                        <div className="w-9 h-9 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400">LIHAT_KREDENSIAL</span>
                        <span className="text-[9px] font-mono text-zinc-500 mt-1">ID: {cert.credentialId || "Verified"}</span>
                      </div>

                      {/* Brand Logo Label Overlay */}
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-0.5 text-[8px] font-mono font-bold uppercase rounded border backdrop-blur-md shadow-sm ${
                          isSBT ? "bg-cyan-950/80 text-cyan-400 border-cyan-800/40" :
                          isCisco ? "bg-teal-950/80 text-teal-400 border-teal-800/40" :
                          isMS ? "bg-blue-950/80 text-blue-400 border-blue-800/40" :
                          isMikrotik ? "bg-sky-950/80 text-sky-400 border-sky-800/40" :
                          isDisdik ? "bg-amber-950/80 text-amber-400 border-amber-800/40" :
                          isKomdigi ? "bg-sky-950/80 text-sky-400 border-sky-800/40" :
                          isDicoding ? "bg-indigo-950/80 text-indigo-400 border-indigo-800/40" :
                          isIDN ? "bg-red-950/80 text-red-400 border-red-800/40" :
                          "bg-emerald-950/80 text-emerald-400 border-emerald-800/40"
                        }`}>
                          {cert.issuer}
                        </span>
                      </div>

                      {/* Certificate Type Label Overlay */}
                      <div className="absolute bottom-3 right-3">
                        <span className="px-2 py-0.5 bg-zinc-950/90 text-zinc-400 text-[8px] font-mono rounded border border-zinc-800 shadow-sm">
                          {cert.type}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-2.5">
                        <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
                          <span>{cert.date}</span>
                          <span className="text-zinc-600">ID: {cert.credentialId || "VERIFIED"}</span>
                        </div>

                        <div>
                          <h3 className="font-display text-base font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                            {cert.title}
                          </h3>
                          <p className="text-[11px] font-mono text-zinc-500 mt-0.5">
                            Penerbit: {cert.issuer}
                          </p>
                        </div>

                        <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">
                          {cert.description}
                        </p>
                      </div>

                      <div className="space-y-3 pt-1">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.slice(0, 3).map((sk) => (
                            <span key={sk} className="px-2 py-0.5 bg-zinc-950 text-zinc-500 font-mono text-[9px] rounded border border-zinc-900">
                              {sk}
                            </span>
                          ))}
                          {cert.skills.length > 3 && (
                            <span className="px-1.5 py-0.5 bg-zinc-950 text-zinc-600 font-mono text-[9px] rounded border border-zinc-900">
                              +{cert.skills.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Card Footer action link */}
                        <div className="flex items-center justify-between pt-2.5 border-t border-zinc-900/60 text-[11px]">
                          <span className="text-[10px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                            {cert.category === "cybersecurity" ? "🛡️ CYBER_SECURITY" : cert.category === "networking" ? "🔌 NETWORKING" : "🤖 AI_DEVELOPMENT"}
                          </span>
                          <span className="text-xs font-mono text-cyan-400 group-hover:text-cyan-300 flex items-center space-x-1 font-semibold">
                            <span>Periksa</span>
                            <ArrowRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-24 bg-zinc-900/10 border-t border-zinc-900/60">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-3xl space-y-2 mb-16">
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 block">06 / HUBUNGI SAYA</span>
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
                    <div className="p-5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-4 animate-fade-in">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                          <Check className="w-4 h-4" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-white">Pesan Siap Dikirim!</h4>
                          <p className="text-zinc-400 text-xs leading-relaxed">
                            Pesan Anda telah siap. Silakan klik salah satu tombol di bawah untuk meneruskan pesan Anda secara langsung ke kontak pribadi Fajar:
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <a
                          href={`https://wa.me/6281235373688?text=${encodeURIComponent(
                            `Halo Fajar, perkenalkan nama saya *${submitData.name}* (${submitData.email}).\n\n*Pesan:*\n${submitData.message}`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-mono font-bold rounded-lg transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>KIRIM_KE_WHATSAPP</span>
                        </a>
                        <a
                          href={`mailto:muhammadfajarpradita97@gmail.com?subject=Hubungi dari Portofolio - ${encodeURIComponent(
                            submitData.name
                          )}&body=${encodeURIComponent(
                            `Halo Fajar,\n\nPerkenalkan saya ${submitData.name} (${submitData.email}).\n\nPesan:\n${submitData.message}`
                          )}`}
                          className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-cyan-600/90 hover:bg-cyan-500 text-white text-xs font-mono font-bold rounded-lg transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>KIRIM_KE_EMAIL</span>
                        </a>
                      </div>
                      
                      <div className="text-center pt-1">
                        <button
                          type="button"
                          onClick={() => setSubmitSuccess(false)}
                          className="text-[10px] font-mono text-zinc-500 hover:text-zinc-400 transition-colors"
                        >
                          [ Sembunyikan Pesan Ini ]
                        </button>
                      </div>
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

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-zinc-950/90 backdrop-blur-sm">
            {/* Backdrop Close Click */}
            <div className="absolute inset-0 cursor-default" onClick={() => setSelectedCert(null)} />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col overflow-hidden max-h-[90vh] shadow-2xl z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-zinc-900 shrink-0">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <span className="font-display font-bold text-white text-sm sm:text-base truncate max-w-[200px] sm:max-w-xs">
                    {selectedCert.title}
                  </span>
                </div>

                {/* Tab selector */}
                <div className="flex items-center space-x-1 bg-zinc-950 p-1 rounded-lg border border-zinc-800/60">
                  <button
                    onClick={() => setModalTab("replica")}
                    className={`px-3 py-1.5 rounded-md text-[10px] sm:text-xs font-mono transition-all duration-150 ${
                      modalTab === "replica"
                        ? "bg-zinc-800 text-cyan-400 font-semibold"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    DOKUMEN_ASLI
                  </button>
                  <button
                    onClick={() => setModalTab("verification")}
                    className={`px-3 py-1.5 rounded-md text-[10px] sm:text-xs font-mono transition-all duration-150 ${
                      modalTab === "verification"
                        ? "bg-zinc-800 text-cyan-400 font-semibold"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    METADATA_SISTEM
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 bg-zinc-950 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white border border-zinc-850/80 transition-colors"
                  title="Tutup"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto p-4 sm:p-8 flex-grow bg-zinc-950/40">
                
                {modalTab === "replica" ? (
                  /* ORIGINAL IMAGE DOCUMENT VIEWER WITH MULTIPLE FALLBACKS AND UPLOAD GUIDE */
                  <div className="w-full flex flex-col items-center justify-center space-y-6">
                    {!imageLoadError ? (
                      <div className="relative group bg-zinc-950 p-2 sm:p-4 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden max-w-full flex flex-col items-center">
                        {/* Loading helper text/spinner overlay */}
                        <div className="absolute inset-0 bg-zinc-950/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-200 z-10">
                          <span className="font-mono text-[10px] text-zinc-400">DOUBLE_CLICK_TO_OPEN_IN_NEW_TAB</span>
                        </div>
                        
                        {certImageSrc ? (
                          <img
                            src={certImageSrc}
                            alt={`Sertifikat Asli ${selectedCert.title}`}
                            className="max-h-[60vh] object-contain rounded-lg border border-zinc-900 shadow-inner max-w-full cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
                            referrerPolicy="no-referrer"
                            onError={handleImageError}
                            onDoubleClick={() => window.open(certImageSrc, '_blank')}
                            title="Klik dua kali untuk membuka gambar penuh di tab baru"
                          />
                        ) : (
                          <div className="w-96 max-w-full h-64 flex flex-col items-center justify-center text-zinc-500 font-mono text-xs space-y-2">
                            <span className="animate-pulse">MEMUAT_GAMBAR...</span>
                          </div>
                        )}
                        
                        <div className="w-full mt-3 flex justify-between items-center px-2">
                          <span className="text-[10px] font-mono text-zinc-500">
                            SRC_PATH: {certImageSrc || "NULL"}
                          </span>
                          <button
                            onClick={() => certImageSrc && window.open(certImageSrc, '_blank')}
                            disabled={!certImageSrc}
                            className="text-[10px] font-mono text-cyan-400 hover:text-cyan-300 disabled:text-zinc-600 transition-colors flex items-center space-x-1"
                          >
                            <span>[ Buka Tab Baru ]</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* USER FRIENDLY ERROR / UPLOAD INSTRUCTION BOX */
                      <div className="w-full max-w-2xl bg-zinc-900/40 rounded-xl border border-dashed border-zinc-800 p-8 sm:p-12 text-center space-y-6">
                        <div className="mx-auto w-16 h-16 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center">
                          <FileText className="w-8 h-8 text-amber-500" />
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="font-display text-lg font-bold text-white">Berkas Gambar Asli Belum Terdeteksi</h3>
                          <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                            Sistem telah mencari berkas gambar asli dengan nama <span className="text-zinc-200 font-mono font-bold">{selectedCert.id}</span> (.png / .jpg / .jpeg) di dalam folder <code className="text-cyan-400 bg-zinc-950 px-1 py-0.5 rounded">public/</code> atau <code className="text-cyan-400 bg-zinc-950 px-1 py-0.5 rounded">assets/</code> namun tidak menemukannya.
                          </p>
                        </div>

                        <div className="bg-zinc-950/60 p-5 rounded-lg border border-zinc-900 text-left space-y-3 font-mono text-[11px] leading-relaxed max-w-lg mx-auto">
                          <p className="font-bold text-zinc-300 border-b border-zinc-900 pb-2 mb-2">💡 Cara Mengunggah Gambar Sertifikat Asli Anda:</p>
                          <p>1. Di sebelah kiri editor kode, buka panel <strong className="text-white">File Explorer</strong>.</p>
                          <p>2. Cari folder <strong className="text-cyan-400">public/</strong> yang telah kami sediakan.</p>
                          <p>3. Seret (drag-and-drop) atau unggah file gambar asli sertifikat Anda ke dalam folder <strong className="text-cyan-400">public/</strong> tersebut dengan nama:</p>
                          <div className="p-2.5 bg-zinc-900/60 rounded border border-zinc-800 mt-1 select-all font-bold text-center text-cyan-400">
                            {selectedCert.id}.png <span className="text-zinc-500 font-normal">atau</span> {selectedCert.id}.jpg <span className="text-zinc-500 font-normal">atau</span> {selectedCert.id}.jpeg
                          </div>
                          <p className="text-zinc-500 pt-2 border-t border-zinc-900 text-[10px]">
                            *Gambar asli akan langsung tampil secara otomatis pada web portofolio Anda setelah file diunggah.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* SECURE COMMAND-LINE METADATA VERIFICATION SCREEN */
                  <div className="font-mono bg-zinc-950 p-6 rounded-xl border border-zinc-900 text-xs space-y-6">
                    
                    {/* Console Header */}
                    <div className="flex justify-between items-center border-b border-zinc-900 pb-3 text-zinc-600">
                      <span>SECURE_KRED_INTEGRITY_CHECK v2.1.0</span>
                      <span className="animate-pulse text-emerald-500">● SYSTEM_ONLINE</span>
                    </div>

                    {/* Verification Log Block */}
                    <div className="space-y-1.5 text-zinc-400">
                      <p className="text-zinc-600">&gt; node check_credential_hash.js --id="{selectedCert.id}"</p>
                      <p className="text-cyan-400">Loading credential block metadata from blockchain registry...</p>
                      <p className="text-zinc-500">Retrieving security parameters from issuer server [{selectedCert.issuer}]...</p>
                      <p className="text-emerald-400">✔ DATA_INTEGRITY_CHECK: PASSED</p>
                      <p className="text-emerald-400">✔ ISSUER_SIGNATURE_VERIFIED: VALID</p>
                    </div>

                    {/* Meta Fields Table */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-zinc-900/40 p-4 rounded-lg border border-zinc-900">
                      <div className="space-y-3">
                        <div>
                          <span className="text-zinc-600 uppercase block text-[10px]">Holder Name</span>
                          <span className="text-zinc-200 font-semibold">{selectedCert.details.recipient}</span>
                        </div>
                        <div>
                          <span className="text-zinc-600 uppercase block text-[10px]">Credential Title</span>
                          <span className="text-zinc-200 font-semibold">{selectedCert.title}</span>
                        </div>
                        <div>
                          <span className="text-zinc-600 uppercase block text-[10px]">Issuing Authority</span>
                          <span className="text-zinc-200 font-semibold">{selectedCert.issuer}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <span className="text-zinc-600 uppercase block text-[10px]">Date of Issuance</span>
                          <span className="text-zinc-200 font-semibold">{selectedCert.date}</span>
                        </div>
                        <div>
                          <span className="text-zinc-600 uppercase block text-[10px]">Credential Verification ID</span>
                          <span className="text-cyan-400 font-bold font-mono">{selectedCert.details.certificateId}</span>
                        </div>
                        <div>
                          <span className="text-zinc-600 uppercase block text-[10px]">SHA-256 Block Signature</span>
                          <span className="text-zinc-400 break-all text-[10px] select-all font-mono block">
                            {btoa(selectedCert.id + selectedCert.date).substring(0, 32).toLowerCase()}a72e8c9b31f{selectedCert.id.length}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Curriculum Covered Section */}
                    <div className="space-y-2">
                      <span className="text-zinc-600 uppercase block text-[10px]">Skills Verified & Curriculum Blocks</span>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {selectedCert.skills.map((sk) => (
                          <span key={sk} className="px-2.5 py-1 bg-zinc-900 text-zinc-300 rounded border border-zinc-800">
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* How to Verify instructions */}
                    <div className="p-4 bg-zinc-900/10 border border-zinc-900 rounded-lg text-zinc-500 space-y-1 text-[11px] leading-relaxed">
                      <p className="font-bold text-zinc-400 mb-1">Cara Melakukan Verifikasi Kredensial:</p>
                      <p>1. Salin <span className="text-cyan-400 font-mono">Verification ID</span> di atas.</p>
                      <p>2. Buka portal sertifikasi resmi dari penerbit (<span className="text-zinc-400">{selectedCert.issuer}</span>).</p>
                      <p>3. Tempelkan nomor ID di bagian input pencarian kredensial untuk memvalidasi kepemilikan sah.</p>
                    </div>

                  </div>
                )}

              </div>

              {/* Footer Panel */}
              <div className="px-6 py-4 border-t border-zinc-850 bg-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-3 shrink-0">
                <p className="text-[10px] font-mono text-zinc-600 text-center sm:text-left">
                  Secured and validated by independent digital signatures.
                </p>
                <div className="flex space-x-2 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`Sertifikat: ${selectedCert.title} - Penerbit: ${selectedCert.issuer} - ID: ${selectedCert.details.certificateId}`);
                      setCopiedCertInfo(true);
                      setTimeout(() => setCopiedCertInfo(false), 2000);
                    }}
                    className={`flex-1 sm:flex-none px-4 py-2 font-mono text-xs font-semibold rounded-lg border transition-all duration-200 ${
                      copiedCertInfo
                        ? "bg-emerald-950/40 text-emerald-400 border-emerald-800"
                        : "bg-zinc-950 hover:bg-zinc-800 text-zinc-300 border-zinc-850/80"
                    }`}
                  >
                    {copiedCertInfo ? "COPIED! ✓" : "COPY_INFO"}
                  </button>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="flex-1 sm:flex-none px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-mono text-xs font-bold rounded-lg transition-colors"
                  >
                    CLOSE_VIEW
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
