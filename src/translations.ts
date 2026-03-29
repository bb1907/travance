export const translations = {
  en: {
    nav: {
      features: "Features",
      pricing: "Pricing",
      about: "About",
      login: "Login",
      getStarted: "Apply",
    },
    hero: {
      title: "The all-in-one platform to run and grow your tourism business — without commissions.",
      subtitle: "Empower your travel agency or hotel with automated payments, 24/7 AI support, and intelligent marketing tools.",
      ctaPrimary: "Apply",
      ctaSecondary: "Watch Demo",
      trust: "Trusted by 2,000+ tour operators worldwide",
    },
    features: {
      title: "Master Every Touchpoint",
      subtitle: "Powerful tools designed specifically for the unique demands of the tourism and hospitality industry.",
      items: [
        {
          title: "Seamless Payments",
          desc: "Multi-currency support, automated invoicing, and secure transactions that integrate directly with your global booking engine.",
          bullets: ["Global Payouts in 130+ Currencies", "Automated Tax Calculation"]
        },
        {
          title: "24/7 AI Support",
          desc: "Intelligent chatbot that handles customer queries in any language, with seamless human escalation for complex bookings.",
          bullets: ["Real-time Multi-lingual Translation", "Automated Booking Modifications"]
        },
        {
          title: "Marketing Automation",
          desc: "Growth-focused tools for customer segmentation and multi-channel campaigns tailored to travel seasons.",
          bullets: ["Seasonal Campaign Templates", "Behavior-based Remarketing"]
        }
      ]
    },
    efficiency: {
      title: "Designed for Growth. Built for Efficiency.",
      subtitle: "Stop juggling ten different apps. Travance.ai brings your entire operation into a single, high-performance workspace.",
      revenueTitle: "Increase Revenue",
      revenueDesc: "Our intelligent upselling engine suggests local tours and premium upgrades during the payment flow, increasing average booking value by 22%.",
      costsTitle: "Reduce Costs",
      costsDesc: "Automate up to 70% of common support requests, allowing your team to focus on high-value group bookings and bespoke itineraries.",
      scoreLabel: "Efficiency Score",
      savingsLabel: "Cost Savings",
      aiLabel: "AI Resolution",
      perMonth: "/mo"
    },
    testimonials: {
      title: "Trusted by industry leaders",
      subtitle: "See how the world's most successful tourism businesses are scaling with Fluid Concierge.",
      items: [
        {
          quote: "The automated payment processing saved our accounting team 20 hours a week. It's the first platform that actually understands how tour operators work.",
          name: "Mark J. Sorenson",
          title: "CEO, Peak Adventures"
        },
        {
          quote: "The AI support handles guest inquiries in 12 languages instantly. Our guest satisfaction scores have never been higher. Absolutely revolutionary.",
          name: "Elena Rodriguez",
          title: "General Manager, Azure Bay Resort"
        },
        {
          quote: "Scaling our marketing was always a nightmare until we found Fluid Concierge. The seasonal segmentation tool is pure magic for travel agencies.",
          name: "Thomas Chen",
          title: "Founder, Horizon Travel Group"
        }
      ]
    },
    pricing: {
      title: "Simple, Transparent Pricing",
      subtitle: "Choose the plan that fits your current volume and scale as you grow.",
      popular: "Most Popular",
      perMonth: "/mo",
      contactSales: "Contact Sales",
      starter: {
        name: "Starter",
        price: 149,
        features: ["Up to 50 bookings / mo", "Basic AI Chatbot", "Standard Support"],
        cta: "Choose Starter"
      },
      pro: {
        name: "Pro",
        price: 499,
        features: ["Unlimited Bookings", "Multi-lingual AI Support", "Advanced Marketing Automation", "Priority Support"],
        cta: "Choose Pro"
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom",
        features: ["White-label Interface", "API Access & Webhooks", "Dedicated Success Manager"],
        cta: "Contact Sales"
      }
    },
    cta: {
      title: "Ready to transform your tourism business?",
      subtitle: "Join 2,000+ operators who are saving time and scaling revenue with Travance.ai.",
      primary: "Apply",
      secondary: "Watch Demo",
      footer: "No credit card required • 14-day free trial • Cancel anytime"
    },
    login: {
      title: "Welcome Back",
      subtitle: "Log in to your Travance.ai dashboard",
      email: "Email Address",
      password: "Password",
      forgotPassword: "Forgot password?",
      submit: "Log In",
      noAccount: "Don't have an account?",
      requestDemo: "Request a Demo",
      placeholders: {
        email: "example@mail.com",
        password: "••••••••"
      }
    },
    requestForm: {
      title: "Request a Demo",
      disclaimer: "Travance.ai is an all-in-one orchestration platform that allows you to manage your tourism operations from a single center.",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      website: "Your Website",
      businessType: "What is your business type?",
      bookingVolume: "What is your monthly booking volume?",
      source: "How did you hear about us?",
      consent1: "I agree to receive commercial electronic messages.",
      consent2: "I confirm the Explicit Consent Text.",
      privacyInfo: "Your personal data is processed within the scope of the Website Clarification Text.",
      submit: "Send Demo Request",
      placeholders: {
        firstName: "Enter your first name",
        lastName: "Enter your last name",
        email: "example@mail.com",
        phone: "(5xx) xxx xx xx",
        website: "https://www.example.com",
        select: "Select"
      },
      options: {
        businessType: ["Tour Operator", "Travel Agency", "Hotel", "DMC", "Other"],
        bookingVolume: ["0-50", "51-200", "201-500", "500+"],
        source: ["Google", "Social Media", "Reference", "Event", "Other"]
      }
    },
    demo: {
      title: "How Travance.ai Works",
      subtitle: "Experience the power of automated tourism orchestration.",
      steps: [
        {
          title: "1. Lead Capture & AI Routing",
          desc: "Inquiries from all channels are captured and routed by AI to the right department instantly.",
          api: "POST /api/v1/leads/route",
          status: "Lead Routed"
        },
        {
          title: "2. Intelligent Concierge Service",
          desc: "AI handles 70% of guest inquiries in 12+ languages, providing instant quotes and booking options.",
          api: "GET /api/v1/concierge/chat",
          status: "AI Responding"
        },
        {
          title: "3. Global Payment Orchestration",
          desc: "Secure, multi-currency payments are processed with automated invoicing and tax compliance.",
          api: "POST /api/v1/payments/orchestrate",
          status: "Payment Success"
        },
        {
          title: "4. Automated Growth & Retention",
          desc: "Post-trip marketing and seasonal re-engagement campaigns are triggered automatically.",
          api: "POST /api/v1/marketing/automate",
          status: "Automation Set"
        }
      ],
      close: "Close Demo"
    },
    footer: {
      rights: "© 2024 Travance.ai. All rights reserved.",
      columns: [
        {
          title: "Company",
          links: [
            { label: "About Us", href: "#about" },
            { label: "Careers", href: "#careers" },
            { label: "Contact", href: "#contact" }
          ]
        },
        {
          title: "Support",
          links: [
            { label: "Help Center", href: "#help" },
            { label: "FAQ", href: "#faq" },
            { label: "Support", href: "#support" },
            { label: "System Status", href: "#status" }
          ]
        },
        {
          title: "Legal",
          links: [
            { label: "Privacy Policy", href: "#privacy" },
            { label: "Terms of Service", href: "#terms" },
            { label: "Cookie Policy", href: "#cookies" }
          ]
        }
      ]
    }
  },
  tr: {
    nav: {
      features: "Özellikler",
      pricing: "Fiyatlandırma",
      about: "Hakkımızda",
      login: "Giriş Yap",
      getStarted: "Başvur",
    },
    hero: {
      title: "Turizm işletmenizi yönetmek ve büyütmek için hepsi bir arada platform — komisyonsuz.",
      subtitle: "Seyahat acentenizi veya otelinizi otomatik ödemeler, 7/24 yapay zeka desteği ve akıllı pazarlama araçlarıyla güçlendirin.",
      ctaPrimary: "Başvur",
      ctaSecondary: "Demo İzle",
      trust: "Dünya çapında 2.000'den fazla tur operatörü tarafından güveniliyor",
    },
    features: {
      title: "Her Temas Noktasında Uzmanlaşın",
      subtitle: "Turizm ve konaklama sektörünün benzersiz talepleri için özel olarak tasarlanmış güçlü araçlar.",
      items: [
        {
          title: "Sorunsuz Ödemeler",
          desc: "Küresel rezervasyon motorunuzla doğrudan entegre olan çoklu para birimi desteği, otomatik faturalandırma ve güvenli işlemler.",
          bullets: ["130+ Para Biriminde Küresel Ödemeler", "Otomatik Vergi Hesaplama"]
        },
        {
          title: "7/24 Yapay Zeka Desteği",
          desc: "Müşteri sorularını her dilde yanıtlayan, karmaşık rezervasyonlar için sorunsuz insan aktarımı sağlayan akıllı sohbet robotu.",
          bullets: ["Gerçek Zamanlı Çok Dilli Çeviri", "Otomatik Rezervasyon Değişiklikleri"]
        },
        {
          title: "Pazarlama Otomasyonu",
          desc: "Seyahat sezonlarına göre uyarlanmış müşteri segmentasyonu ve çok kanallı kampanyalar için büyüme odaklı araçlar.",
          bullets: ["Sezonluk Kampanya Şablonları", "Davranış Odaklı Yeniden Pazarlama"]
        }
      ]
    },
    efficiency: {
      title: "Büyüme İçin Tasarlandı. Verimlilik İçin İnşa Edildi.",
      subtitle: "On farklı uygulama ile uğraşmayı bırakın. Travance.ai tüm operasyonunuzu tek bir yüksek performanslı çalışma alanına getirir.",
      revenueTitle: "Geliri Artırın",
      revenueDesc: "Akıllı satış artırma motorumuz, ödeme akışı sırasında yerel turlar ve premium yükseltmeler önererek ortalama rezervasyon değerini %22 artırır.",
      costsTitle: "Maliyetleri Azaltın",
      costsDesc: "Yaygın destek taleplerinin %70'ine kadarını otomatikleştirerek ekibinizin yüksek değerli grup rezervasyonlarına odaklanmasını sağlayın.",
      scoreLabel: "Verimlilik Puanı",
      savingsLabel: "Maliyet Tasarrufu",
      aiLabel: "YZ Çözümleme",
      perMonth: "/ay"
    },
    testimonials: {
      title: "Sektör liderleri tarafından güveniliyor",
      subtitle: "Dünyanın en başarılı turizm işletmelerinin Fluid Concierge ile nasıl ölçeklendiğini görün.",
      items: [
        {
          quote: "Otomatik ödeme işleme, muhasebe ekibimize haftada 20 saat kazandırdı. Tur operatörlerinin nasıl çalıştığını gerçekten anlayan ilk platform.",
          name: "Mark J. Sorenson",
          title: "CEO, Peak Adventures"
        },
        {
          quote: "Yapay zeka desteği, misafir sorularını anında 12 dilde yanıtlıyor. Misafir memnuniyet puanlarımız hiç bu kadar yüksek olmamıştı. Kesinlikle devrim niteliğinde.",
          name: "Elena Rodriguez",
          title: "Genel Müdür, Azure Bay Resort"
        },
        {
          quote: "Pazarlamamızı ölçeklendirmek Fluid Concierge'i bulana kadar her zaman bir kabustu. Sezonluk segmentasyon aracı seyahat acenteleri için tam bir sihir.",
          name: "Thomas Chen",
          title: "Kurucu, Horizon Travel Group"
        }
      ]
    },
    pricing: {
      title: "Basit, Şeffaf Fiyatlandırma",
      subtitle: "Mevcut hacminize uygun planı seçin ve büyüdükçe ölçeklendirin.",
      popular: "En Popüler",
      perMonth: "/ay",
      contactSales: "Satışla İletişime Geçin",
      starter: {
        name: "Başlangıç",
        price: 149,
        features: ["Ayda 50 rezervasyona kadar", "Temel YZ Sohbet Robotu", "Standart Destek"],
        cta: "Başlangıç'ı Seç"
      },
      pro: {
        name: "Pro",
        price: 499,
        features: ["Sınırsız Rezervasyon", "Çok Dilli YZ Desteği", "Gelişmiş Pazarlama Otomasyonu", "Öncelikli Destek"],
        cta: "Pro'yu Seç"
      },
      enterprise: {
        name: "Kurumsal",
        price: "Özel",
        features: ["Beyaz Etiket Arayüz", "API Erişimi ve Webhook'lar", "Özel Başarı Yöneticisi"],
        cta: "Satışla İletişime Geçin"
      }
    },
    cta: {
      title: "Turizm işletmenizi dönüştürmeye hazır mısınız?",
      subtitle: "Travance.ai ile zaman kazanan ve gelirini artıran 2.000'den fazla operatöre katılın.",
      primary: "Başvur",
      secondary: "Demo İzle",
      footer: "Kredi kartı gerekmez • 14 günlük ücretsiz deneme • İstediğiniz zaman iptal edin"
    },
    login: {
      title: "Tekrar Hoş Geldiniz",
      subtitle: "Travance.ai panelinize giriş yapın",
      email: "E-posta Adresi",
      password: "Şifre",
      forgotPassword: "Şifremi unuttum",
      submit: "Giriş Yap",
      noAccount: "Hesabınız yok mu?",
      requestDemo: "Demo Talep Edin",
      placeholders: {
        email: "ornek@mail.com",
        password: "••••••••"
      }
    },
    requestForm: {
      title: "Demo Talep Edin",
      disclaimer: "Travance.ai, turizm operasyonlarınızı tek bir merkezden yönetmenizi sağlayan hepsi bir arada bir orkestrasyon platformudur.",
      firstName: "Ad",
      lastName: "Soyad",
      email: "E-posta Adresi",
      phone: "Telefon Numarası",
      website: "Websiteniz",
      businessType: "İşletme türünüz nedir?",
      bookingVolume: "Aylık rezervasyon hacminiz nedir?",
      source: "Bizi nereden duydunuz?",
      consent1: "Ticari Elektronik İleti gönderilmesini onaylıyorum.",
      consent2: "Açık Rıza Metni'ni onaylıyorum.",
      privacyInfo: "Kişisel verileriniz İnternet Sitesi Aydınlatma Metni kapsamında işlenmektedir.",
      submit: "Demo Talebi Gönder",
      placeholders: {
        firstName: "Adınızı Yazınız",
        lastName: "Soyadınızı Yazınız",
        email: "ornek@mail.com",
        phone: "(5xx) xxx xx xx",
        website: "https://www.example.com",
        select: "Seçiniz"
      },
      options: {
        businessType: ["Tur Operatörü", "Seyahat Acentesi", "Otel", "DMC", "Diğer"],
        bookingVolume: ["0-50", "51-200", "201-500", "500+"],
        source: ["Google", "Sosyal Medya", "Referans", "Etkinlik", "Diğer"]
      }
    },
    demo: {
      title: "Travance.ai Nasıl Çalışır?",
      subtitle: "Otomatik turizm orkestrasyonunun gücünü deneyimleyin.",
      steps: [
        {
          title: "1. Talep Yakalama ve YZ Yönlendirme",
          desc: "Tüm kanallardan gelen talepler anında yakalanır ve yapay zeka tarafından doğru departmana yönlendirilir.",
          api: "POST /api/v1/leads/route",
          status: "Talep Yönlendirildi"
        },
        {
          title: "2. Akıllı Konsiyerj Hizmeti",
          desc: "Yapay zeka, misafir sorularının %70'ini 12+ dilde yanıtlar, anında teklif ve rezervasyon seçenekleri sunar.",
          api: "GET /api/v1/concierge/chat",
          status: "YZ Yanıtlıyor"
        },
        {
          title: "3. Küresel Ödeme Orkestrasyonu",
          desc: "Güvenli, çok para birimli ödemeler, otomatik faturalandırma ve vergi uyumluluğu ile işlenir.",
          api: "POST /api/v1/payments/orchestrate",
          status: "Ödeme Başarılı"
        },
        {
          title: "4. Otomatik Büyüme ve Sadakat",
          desc: "Seyahat sonrası pazarlama ve sezonluk yeniden etkileşim kampanyaları otomatik olarak tetiklenir.",
          api: "POST /api/v1/marketing/automate",
          status: "Otomasyon Ayarlandı"
        }
      ],
      close: "Demoyu Kapat"
    },
    footer: {
      rights: "© 2024 Travance.ai. Tüm hakları saklıdır.",
      columns: [
        {
          title: "Kurumsal",
          links: [
            { label: "Hakkımızda", href: "#about" },
            { label: "Kariyer", href: "#careers" },
            { label: "İletişim", href: "#contact" }
          ]
        },
        {
          title: "Destek",
          links: [
            { label: "Yardım Merkezi", href: "#help" },
            { label: "Sıkça Sorulan Sorular", href: "#faq" },
            { label: "Destek", href: "#support" },
            { label: "Sistem Durumu", href: "#status" }
          ]
        },
        {
          title: "Yasal",
          links: [
            { label: "Gizlilik Politikası", href: "#privacy" },
            { label: "Kullanım Şartları", href: "#terms" },
            { label: "Çerez Politikası", href: "#cookies" }
          ]
        }
      ]
    }
  }
};

export type Language = "en" | "tr";
