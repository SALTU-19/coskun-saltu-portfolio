const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const langButtons = document.querySelectorAll(".lang-btn");
const titleEl = document.querySelector("title");
const metaDescription = document.querySelector('meta[name="description"]');

const translations = {
  tr: {
    "page.title": "Coskun Saltu | Portfolyo",
    "page.description":
      "Coskun Saltu portfolyo - deneyimler, projeler, ilgi alanları ve iletişim.",
    "nav.about": "Hakkımda",
    "nav.work": "İşler",
    "nav.projects": "Projeler",
    "nav.interests": "İlgiler",
    "nav.contact": "İletişim",
    "nav.menu": "Menü",
    "hero.eyebrow": "Portfolyo / 2025",
    "hero.title":
      "Full stack gelistirici olarak urun ve altyapiyi birlikte tasarliyorum.",
    "hero.lead":
      "Finans ve saglik teknolojilerinde veri odakli, olceklenebilir yazilimlar gelistiriyorum.",
    "hero.ctaPrimary": "Hemen Iletisime Gec",
    "hero.ctaGhost": "Projeleri Incele",
    "hero.tag1": "Full Stack",
    "hero.tag2": ".NET / NestJS",
    "hero.tag3": "Flutter / BLE",
    "summary.title": "Odak Noktalari",
    "summary.period": "Kisa Ozet",
    "summary.item1Title": "Urun ve altyapi dengesi",
    "summary.item1": "Uctan uca sorumluluk, net teslimatlar.",
    "summary.item2Title": "Egitim",
    "summary.item2":
      "Gebze Teknik Universitesi, Bilgisayar Muhendisligi (%100 Ingilizce).",
    "summary.item3Title": "Performans ve guvenilirlik",
    "summary.item3": "Olceklenebilir servisler ve stabil akislari.",
    "summary.note": "Detaylari deneyim bolumlerinde gorebilirsin.",
    "about.title": "Hakkımda",
    "about.body1":
      "Web, mobil ve backend gelistirmede uygulamali deneyimi olan bir Software Engineerim. Olceklenebilir ve guvenilir sistemler kurmaya odaklaniyorum.",
    "about.body2":
      "Kariyerime COWEALTHY'de basladim; 3 yil icinde stajyerlikten yazilim gelistiriciligine ilerledim. Flutter, BLE, NestJS ve veri tabanli mimarilerle gercek urunler uzerinde calistim. Kimlik dogrulama ve yetkilendirme, multitenant yapilar ve veri yogun servislerde katkida bulundum. Su anda Quantic Technology'de Metropol ve Logo gibi finans/muhasebe sistemleriyle entegre .NET mikroservisler gelistiriyorum. RabbitMQ ile servisler arasi iletisim, background job isleme ve saglam backend akislarina odaklaniyorum. Karmaşık problemleri cozmeyi, sistem guvenilirligini artirmayi ve ekiplerle birlikte is ihtiyaclarini temiz ve verimli yazilim cozumlerine donusturmekten keyif aliyorum. Yeni teknolojilere hizli adapte olurum ve etkili urunler gelistirerek surekli gelismeye calisirim.",
    "about.highlightTitle": "Çalışma Tarzı",
    "about.highlight1": "Veriyle karar verme",
    "about.highlight2": "Hızlı prototipleme",
    "about.highlight3": "Ölçeklenebilir arayüzler",
    "about.highlight4": "Kullanıcı odaklı iterasyon",
    "work.title": "Çalıştığım İşler ve Çözümler",
    "work.lead":
      "Iki farkli firmada uzerinde calistigim urun ve cozumlerden ozetleri bulabilirsin.",
    "work.card1Title": "COWEALTHY",
    "work.card1Body":
      "COWEALTHY, çiftlikler için gerçek zamanlı veri toplayan sensör altyapısı ve analizlerle hayvan sağlığını ve verimliliğini iyileştiren bir tarım teknolojisi platformu.",
    "work.card1Tag": "Full Stack Geliştirici",
    "work.card2Title": "QUANTIC",
    "work.card2Body":
      "Quantic Teknoloji, dijital dönüşüm, görüntü işleme, yapay zeka ve Logo entegrasyon çözümlerinde uzmanlaşmış bir bilişim şirketidir.",
    "work.card2Tag": "Full Stack Geliştirici",
    "work.cardLink": "Detaylar",
    "work.card3Title": "İç araçların yenilenmesi",
    "work.card3Body":
      "Ekiplerin günlük operasyonlarını hızlandıran modüler bir arayüz sistemi.",
    "work.card3Tag": "Design System",
    "projects.title": "Geliştirdiğim Projeler",
    "projects.lead":
      "Uzerinde calistigim projelerde kullandigim teknolojileri ve kattigi degeri burada paylasiyorum.",
    "projects.card1Meta1": "Bitirme Projesi",
    "projects.card1Meta2": "Universite",
    "projects.card1Title": "Hasta Takip Sistemi",
    "projects.card1Body":
      "Bir diyabet hastanesi icin hastalarin, ameliyatlarin ve ilaclarin takip edildigi full-stack bir sistem gelistirdim.",
    "projects.cardLink": "Detaylar",
    "projects.card2Meta1": "Bitirme Projesi",
    "projects.card2Meta2": "Universite",
    "projects.card2Title": "Fitness Takip Sistemi",
    "projects.card2Body":
      "BLE ile mobil uygulamaya baglanan, hareketleri sayip kaydeden sensor destekli fitness cihazi ve yazilimi gelistirdim.",
    "projects.card3Meta1": "Startup",
    "projects.card3Meta2": "2022",
    "projects.card3Title": "İş zekası dashboardu",
    "projects.card3Body":
      "Verileri anlamlı hikayelere dönüştüren, çok katmanlı grafik sistemi.",
    "interests.title": "İlgi Alanlarım",
    "interests.body":
      "Teknoloji disinda beni besleyen hobiler ve merak alanlarini burada paylasiyorum.",
    "interests.item1": "Ürün stratejisi",
    "interests.item2": "Müzik prodüksiyonu",
    "interests.item3": "Fotoğraf",
    "interests.item4": "AI ile deneyler",
    "interests.item5": "Uzun koşular",
    "contact.title": "İletişim",
    "contact.body": "Is birligi veya proje fikirleri icin buradan ulasabilirsin.",
    "contact.email": "E-posta",
    "contact.phone": "Telefon",
    "footer.copy": "(c) 2025 Coskun Saltu. Tum haklari saklidir.",
    "footer.link1": "LinkedIn",
    "footer.link2": "GitHub",
    "cowealthy.eyebrow": "İş Deneyimi",
    "cowealthy.title": "COWEALTHY",
    "cowealthy.role": "Full Stack Geliştirici",
    "cowealthy.summary":
      "COWEALTHY, çiftlik operasyonlarını veriye dayalı hale getiren sensörler, veterinerlik analizleri ve yazılım platformu sunar.",
    "cowealthy.back": "Ana Sayfaya Dön",
    "cowealthy.overviewTitle": "Genel Özet",
    "cowealthy.overviewBody":
      "Çiftlikler için web ve mobil uygulamaların geliştirilmesinde aktif rol aldım. Veriye dayalı karar almayı kolaylaştıran ekranlar, raporlama altyapısı ve operasyonel akışları güçlendiren servisler üzerinde çalıştım.",
    "cowealthy.problemsTitle": "Problemler ve Çözümler",
    "cowealthy.problem1Title": "Problem 1: Yetki ve hiyerarşi",
    "cowealthy.problem1Body":
      "Farklı rollerin sadece kendi çiftlik verilerine erişebilmesi için güvenli bir yapının kurulması gerekiyordu.",
    "cowealthy.solution1Body":
      "Multitenant, permission-based bir giriş ve yetkilendirme sistemi tasarlayarak rollerin görev ve izinlerini netleştirdim.",
    "cowealthy.problem2Title": "Problem 2: Dinamik veri raporlama",
    "cowealthy.problem2Body":
      "Kullanıcıların çiftlik, hayvan ve cihaz verilerini canlı olarak filtreleyip analiz edebilmesi bekleniyordu.",
    "cowealthy.solution2Body":
      "Filtrelenebilir arayüzler ve dinamik grafik üreten bir raporlama altyapısı geliştirdim.",
    "cowealthy.problem3Title": "Problem 3: Bluetooth veri okuma",
    "cowealthy.problem3Body":
      "Bluetooth ile çalışan süt ölçer cihazından doğru veri okunması kritikti.",
    "cowealthy.solution3Body":
      "BLE ile cihaz verilerini güvenli ve stabil okuyan, kullanıcı dostu bir mobil uygulama geliştirdim.",
    "cowealthy.mediaTitle": "Görseller",
    "cowealthy.mediaNote":
      "Bu bölüme cihaz, dashboard veya mobil ekran görüntülerini ekleyebiliriz.",
    "cowealthy.mediaMultitenant": "Problem 1: Multitenant yetki şeması",
    "cowealthy.mediaReporting": "Problem 2: Raporlama sayfası örneği",
    "cowealthy.mediaBle": "Problem 3: BLE cihaz iletişim görüntüsü",
    "cowealthy.pageTitle": "COWEALTHY | Coskun Saltu",
    "cowealthy.pageDescription":
      "COWEALTHY deneyimi, özet ve problem-çözüm detayları.",
    "quantic.eyebrow": "İş Deneyimi",
    "quantic.title": "QUANTIC",
    "quantic.role": "Full Stack Geliştirici",
    "quantic.summary":
      "Quantic Teknoloji, dijital dönüşüm ve entegrasyon projeleriyle kurumların finans ve muhasebe süreçlerini modernleştiren bir teknoloji şirketidir.",
    "quantic.back": "Ana Sayfaya Dön",
    "quantic.overviewTitle": "Genel Özet",
    "quantic.overviewBody":
      "Finansal teknolojilere odaklanan bir full stack geliştirici olarak Metropol yemek kartı gibi markaların muhasebe ve finans akışlarını yöneten servisler üzerinde çalışıyorum. .NET tabanlı mikroservisler, entegrasyonlar ve arka plan iş süreçlerinde ölçeklenebilir çözümler üretiyorum.",
    "quantic.problemsTitle": "Problemler ve Çözümler",
    "quantic.problem1Title": "Problem 1: Otomatik veri güncelleme",
    "quantic.problem1Body":
      "Muhasebecilerin takip ettiği fiş ve cari üye verilerinin vergi dairesi gibi sistemlerden otomatik çekilip güncellenmesi gerekiyordu.",
    "quantic.solution1Body":
      "Periyodik çalışan background job altyapısı kurarak sistemlere girip verileri güvenli şekilde güncelleyen bir robotlar akışı tasarladım.",
    "quantic.problem2Title": "Problem 2: Logo entegrasyonu",
    "quantic.problem2Body":
      "Metropol Yemek kartı muhasebe çözümleri için Logo yazılımı ile güvenilir entegrasyon gerekiyordu.",
    "quantic.solution2Body":
      "Logo sisteminin API'lerini analiz ederek doğru veri eşlemesi ve hataya dayanıklı entegrasyon akışı geliştirdim.",
    "quantic.mediaJob": "Problem 1: Background job akisi",
    "quantic.mediaLogo": "Problem 2: Logo entegrasyon semasi",
    "quantic.pageTitle": "QUANTIC | Coskun Saltu",
    "quantic.pageDescription":
      "QUANTIC deneyimi, özet ve problem-çözüm detayları.",
    "detail.home": "Ana Sayfa",
    "detail.overview": "Genel Özet",
    "detail.solutions": "Çözümler",
    "detail.media": "Görseller",
    "hastatakip.eyebrow": "Bitirme Projesi",
    "hastatakip.title": "Hasta Takip Sistemi",
    "hastatakip.summary":
      "Diyabet hastanesi icin hastalarin, ameliyatlarin ve ilac takibinin tek panelden yonetildigi full-stack bir platform gelistirdim.",
    "hastatakip.tag1": "Full Stack",
    "hastatakip.tag2": "Saglik Teknolojisi",
    "hastatakip.github": "GitHub",
    "hastatakip.back": "Ana Sayfaya Don",
    "hastatakip.role": "Full Stack Proje",
    "hastatakip.overviewTitle": "Genel Ozet",
    "hastatakip.overviewBody":
      "Okul yillarimda bitirme projesi olarak, bir diyabet hastanesi icin hasta ve operasyon yonetimini tek merkezde toplayan bir sistem tasarladim. Hasta kartlari, ameliyat planlari, ilac stoklari ve doktor notlari gibi kritik akislar tek panelde kontrol edildi.",
    "hastatakip.highlightsTitle": "Ozet Basliklar",
    "hastatakip.highlight1": "Hasta ve ameliyat takibi",
    "hastatakip.highlight2": "Ilac stok yonetimi",
    "hastatakip.highlight3": "Rol bazli yetkilendirme",
    "hastatakip.highlight4": "Raporlama panelleri",
    "hastatakip.impactTitle": "Proje Etkisi",
    "hastatakip.impact1Title": "Tek merkezden yonetim",
    "hastatakip.impact1Body":
      "Hasta bilgileri, ameliyat takvimi ve ilac stoklari birbirinden kopuk araclarda degil, tek bir sistemde birlestirildi.",
    "hastatakip.impact2Title": "Operasyonel hiz",
    "hastatakip.impact2Body":
      "Doktorlar ve idari ekipler icin hizli arama, filtreleme ve raporlama ekranlari tasarlandi.",
    "hastatakip.impact3Title": "Guvenli erisim",
    "hastatakip.impact3Body":
      "Rol bazli yetkilendirme ile hem hasta mahremiyeti hem de veri butunlugu korunacak sekilde kurgulandi.",
    "hastatakip.mediaTitle": "Gorsel",
    "hastatakip.mediaNote": "Projeyi anlatan bir ekran goruntusu ekleyebiliriz.",
    "hastatakip.mediaCaption": "Ana panel ornegi (gorseli sen ekleyebilirsin).",
    "hastatakip.pageTitle": "Hasta Takip Sistemi | Coskun Saltu",
    "hastatakip.pageDescription": "Hasta Takip Sistemi proje ozet ve detaylari.",
    "fitnesstakip.eyebrow": "Bitirme Projesi",
    "fitnesstakip.title": "Fitness Takip Sistemi",
    "fitnesstakip.summary":
      "Sensor destekli bir fitness cihazi gelistirip BLE ile mobil uygulamaya bagladim; hareketleri algilayip veritabanina kaydeden tam bir ekosistem kurdum.",
    "fitnesstakip.tag1": "Donanim + Yazilim",
    "fitnesstakip.tag2": "BLE / Mobil",
    "fitnesstakip.github": "GitHub",
    "fitnesstakip.back": "Ana Sayfaya Don",
    "fitnesstakip.role": "Capstone Proje",
    "fitnesstakip.overviewTitle": "Genel Ozet",
    "fitnesstakip.overviewBody":
      "Okul yillarimda bitirme projesi olarak, uzerinde sensorler bulunan bir cihaz gelistirdim. BLE teknolojisiyle mobil uygulamaya baglanan sistem, mekik, sinav, barfiks gibi hareketleri sayip veritabanina kaydetti.",
    "fitnesstakip.highlightsTitle": "Ozet Basliklar",
    "fitnesstakip.highlight1": "Sensor tabanli hareket algilama",
    "fitnesstakip.highlight2": "BLE ile mobil baglanti",
    "fitnesstakip.highlight3": "Veri tabani kayit ve raporlama",
    "fitnesstakip.highlight4": "Gercek zamanli metrikler",
    "fitnesstakip.impactTitle": "Proje Etkisi",
    "fitnesstakip.impact1Title": "Dogru hareket sayimi",
    "fitnesstakip.impact1Body":
      "Sensor verilerini filtreleyerek tekrar sayimlarini dogru ve tutarli hale getiren bir algoritma kurguladim.",
    "fitnesstakip.impact2Title": "Mobil deneyim",
    "fitnesstakip.impact2Body":
      "Kullanici anlik performansini mobilde takip edip gecmis antrenmanlarini gorebilecek sekilde tasarlandi.",
    "fitnesstakip.impact3Title": "Veri kaydi",
    "fitnesstakip.impact3Body":
      "Tum hareketler zaman damgasi ile kaydedilerek analiz ve takip icin guclu bir temel olusturuldu.",
    "fitnesstakip.mediaTitle": "Gorsel",
    "fitnesstakip.mediaNote":
      "Cihaz ve uygulamayi gosteren bir gorsel ekleyebiliriz.",
    "fitnesstakip.mediaCaption":
      "Cihaz ve mobil uygulama ornegi (gorseli sen ekleyebilirsin).",
    "fitnesstakip.pageTitle": "Fitness Takip Sistemi | Coskun Saltu",
    "fitnesstakip.pageDescription":
      "Fitness Takip Sistemi proje ozet ve detaylari.",
  },
  en: {
    "page.title": "Coskun Saltu | Portfolio",
    "page.description":
      "Coskun Saltu portfolio - experience, projects, interests, and contact.",
    "nav.about": "About",
    "nav.work": "Work",
    "nav.projects": "Projects",
    "nav.interests": "Interests",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "hero.eyebrow": "Portfolio / 2025",
    "hero.title":
      "I design products and infrastructure together as a full stack developer.",
    "hero.lead":
      "I build data-driven, scalable software for finance and health tech.",
    "hero.ctaPrimary": "Get In Touch",
    "hero.ctaGhost": "Explore Projects",
    "hero.tag1": "Full Stack",
    "hero.tag2": ".NET / NestJS",
    "hero.tag3": "Flutter / BLE",
    "summary.title": "Focus Areas",
    "summary.period": "Quick Summary",
    "summary.item1Title": "Product + infrastructure balance",
    "summary.item1": "End-to-end ownership with clear delivery.",
    "summary.item2Title": "Education",
    "summary.item2":
      "Gebze Technical University, Computer Engineering (100% English).",
    "summary.item3Title": "Performance and reliability",
    "summary.item3": "Scalable services with stable workflows.",
    "summary.note": "See the experience sections for details.",
    "about.title": "About",
    "about.body1":
      "Software Engineer with hands-on experience in web, mobile, and backend development, focused on building scalable and reliable systems.",
    "about.body2":
      "I started my career at COWEALTHY, where I grew from an intern to a software developer over 3 years, working on real-world products using Flutter, BLE, NestJS, and database-driven architectures. I contributed to authentication & authorization systems, multitenant structures, and data-heavy services. Currently, at Quantic Technology, I work on .NET-based microservices that integrate financial and accounting systems such as Metropol and Logo. I build solutions for inter-service communication with RabbitMQ, background job processing, and robust backend workflows, focusing on maintainability and performance. I enjoy solving complex problems, improving system reliability, and collaborating with teams to turn business needs into clean, efficient software solutions. I adapt quickly to new technologies and continuously seek to grow by building impactful products.",
    "about.highlightTitle": "Working Style",
    "about.highlight1": "Data-informed decisions",
    "about.highlight2": "Rapid prototyping",
    "about.highlight3": "Scalable interfaces",
    "about.highlight4": "User-centered iteration",
    "work.title": "Work and Solutions",
    "work.lead":
      "Highlights from two companies where I contributed to products and solutions.",
    "work.card1Title": "COWEALTHY",
    "work.card1Body":
      "COWEALTHY is an agri-tech platform that improves animal health and productivity with real-time sensor data and analytics for farms.",
    "work.card1Tag": "Full Stack Developer",
    "work.card2Title": "QUANTIC",
    "work.card2Body":
      "Quantic Technology specializes in digital transformation, computer vision, AI, and Logo integration solutions.",
    "work.card2Tag": "Full Stack Developer",
    "work.cardLink": "Details",
    "work.card3Title": "Internal tools refresh",
    "work.card3Body":
      "A modular interface system that accelerates daily operations for teams.",
    "work.card3Tag": "Design System",
    "projects.title": "Projects Built",
    "projects.lead":
      "I share the technologies I used and the value created across the projects I worked on.",
    "projects.card1Meta1": "Capstone Project",
    "projects.card1Meta2": "University",
    "projects.card1Title": "Patient Tracking System",
    "projects.card1Body":
      "I built a full-stack system for a diabetes hospital to track patients, surgeries, and medications.",
    "projects.cardLink": "Details",
    "projects.card2Meta1": "Capstone Project",
    "projects.card2Meta2": "University",
    "projects.card2Title": "Fitness Tracking System",
    "projects.card2Body":
      "I built a sensor-driven fitness device and software that connects via BLE and logs workout reps to a database.",
    "projects.card3Meta1": "Startup",
    "projects.card3Meta2": "2022",
    "projects.card3Title": "Business intelligence dashboard",
    "projects.card3Body":
      "A multi-layered chart system that turns data into meaningful narratives.",
    "interests.title": "Interests",
    "interests.body":
      "Outside of tech, I share the hobbies and interests that energize me here.",
    "interests.item1": "Product strategy",
    "interests.item2": "Music production",
    "interests.item3": "Photography",
    "interests.item4": "AI experiments",
    "interests.item5": "Long runs",
    "contact.title": "Contact",
    "contact.body":
      "You can reach me here for collaborations or project ideas.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "footer.copy": "(c) 2025 Coskun Saltu. All rights reserved.",
    "footer.link1": "LinkedIn",
    "footer.link2": "GitHub",
    "cowealthy.eyebrow": "Work Experience",
    "cowealthy.title": "COWEALTHY",
    "cowealthy.role": "Full Stack Developer",
    "cowealthy.summary":
      "COWEALTHY delivers a data-driven platform with sensors, veterinary insights, and software to optimize farm operations.",
    "cowealthy.back": "Back to Home",
    "cowealthy.overviewTitle": "Overview",
    "cowealthy.overviewBody":
      "I played an active role in building web and mobile products for farms, focusing on data-driven workflows, reporting capabilities, and operational reliability.",
    "cowealthy.problemsTitle": "Problems and Solutions",
    "cowealthy.problem1Title": "Problem 1: Access control hierarchy",
    "cowealthy.problem1Body":
      "Different roles needed secure, scoped access to their own farm data only.",
    "cowealthy.solution1Body":
      "I designed a multitenant, permission-based authentication and authorization system with clear role boundaries.",
    "cowealthy.problem2Title": "Problem 2: Dynamic reporting",
    "cowealthy.problem2Body":
      "Users needed to filter farm, animal, and device data in real time and analyze it easily.",
    "cowealthy.solution2Body":
      "I built a reporting pipeline with filterable UI and dynamically generated charts.",
    "cowealthy.problem3Title": "Problem 3: Bluetooth data capture",
    "cowealthy.problem3Body":
      "Accurate data ingestion from a Bluetooth-enabled milk meter device was critical.",
    "cowealthy.solution3Body":
      "I developed a stable BLE-powered mobile app that reads device data reliably.",
    "cowealthy.mediaTitle": "Media",
    "cowealthy.mediaNote":
      "We can add device shots, dashboards, or mobile screens here.",
    "cowealthy.mediaMultitenant": "Problem 1: Multitenant access diagram",
    "cowealthy.mediaReporting": "Problem 2: Reporting screen sample",
    "cowealthy.mediaBle": "Problem 3: BLE device communication shot",
    "cowealthy.pageTitle": "COWEALTHY | Coskun Saltu",
    "cowealthy.pageDescription":
      "COWEALTHY experience, overview, and problem-solution details.",
    "quantic.eyebrow": "Work Experience",
    "quantic.title": "QUANTIC",
    "quantic.role": "Full Stack Developer",
    "quantic.summary":
      "Quantic Technology modernizes finance and accounting processes through digital transformation and integration projects.",
    "quantic.back": "Back to Home",
    "quantic.overviewTitle": "Overview",
    "quantic.overviewBody":
      "As a full stack developer focused on financial technologies, I build services that power accounting and finance flows for brands like Metropol meal card. I deliver scalable .NET microservices, integrations, and background job pipelines.",
    "quantic.problemsTitle": "Problems and Solutions",
    "quantic.problem1Title": "Problem 1: Automated data refresh",
    "quantic.problem1Body":
      "Voucher and member account data needed to be pulled from systems like tax offices and updated automatically.",
    "quantic.solution1Body":
      "I built a scheduled background job framework that logs into target systems and refreshes data reliably.",
    "quantic.problem2Title": "Problem 2: Logo integration",
    "quantic.problem2Body":
      "Accounting workflows for Metropol meal card required a dependable integration with Logo software.",
    "quantic.solution2Body":
      "I analyzed Logo APIs and delivered a fault-tolerant integration with accurate data mapping.",
    "quantic.mediaJob": "Problem 1: Background job flow",
    "quantic.mediaLogo": "Problem 2: Logo integration diagram",
    "quantic.pageTitle": "QUANTIC | Coskun Saltu",
    "quantic.pageDescription":
      "QUANTIC experience, overview, and problem-solution details.",
    "detail.home": "Home",
    "detail.overview": "Overview",
    "detail.solutions": "Solutions",
    "detail.media": "Media",
    "hastatakip.eyebrow": "Capstone Project",
    "hastatakip.title": "Patient Tracking System",
    "hastatakip.summary":
      "I built a full-stack platform for a diabetes hospital to manage patients, surgeries, and medication tracking from a single dashboard.",
    "hastatakip.tag1": "Full Stack",
    "hastatakip.tag2": "Health Tech",
    "hastatakip.github": "GitHub",
    "hastatakip.back": "Back to Home",
    "hastatakip.role": "Full Stack Project",
    "hastatakip.overviewTitle": "Overview",
    "hastatakip.overviewBody":
      "As a capstone project, I designed a system that centralizes patient and operation management for a diabetes hospital. Patient cards, surgery plans, medication inventory, and physician notes were controlled from a single panel.",
    "hastatakip.highlightsTitle": "Highlights",
    "hastatakip.highlight1": "Patient and surgery tracking",
    "hastatakip.highlight2": "Medication inventory management",
    "hastatakip.highlight3": "Role-based access control",
    "hastatakip.highlight4": "Reporting dashboards",
    "hastatakip.impactTitle": "Project Impact",
    "hastatakip.impact1Title": "Centralized operations",
    "hastatakip.impact1Body":
      "Patient data, surgery schedules, and medication stock were unified in a single system instead of fragmented tools.",
    "hastatakip.impact2Title": "Operational speed",
    "hastatakip.impact2Body":
      "Fast search, filtering, and reporting screens were designed for medical and administrative teams.",
    "hastatakip.impact3Title": "Secure access",
    "hastatakip.impact3Body":
      "Role-based authorization was implemented to protect patient privacy and data integrity.",
    "hastatakip.mediaTitle": "Visual",
    "hastatakip.mediaNote": "We can add a screenshot that represents the project.",
    "hastatakip.mediaCaption": "Main dashboard sample (add your own image).",
    "hastatakip.pageTitle": "Patient Tracking System | Coskun Saltu",
    "hastatakip.pageDescription":
      "Patient Tracking System project overview and details.",
    "fitnesstakip.eyebrow": "Capstone Project",
    "fitnesstakip.title": "Fitness Tracking System",
    "fitnesstakip.summary":
      "I built a sensor-driven fitness device and connected it to a mobile app via BLE, creating an end-to-end tracking ecosystem.",
    "fitnesstakip.tag1": "Hardware + Software",
    "fitnesstakip.tag2": "BLE / Mobile",
    "fitnesstakip.github": "GitHub",
    "fitnesstakip.back": "Back to Home",
    "fitnesstakip.role": "Capstone Project",
    "fitnesstakip.overviewTitle": "Overview",
    "fitnesstakip.overviewBody":
      "As a capstone project, I built a device with onboard sensors. The BLE-connected system counted sit-ups, push-ups, and pull-ups and stored the data in a database.",
    "fitnesstakip.highlightsTitle": "Highlights",
    "fitnesstakip.highlight1": "Sensor-based motion detection",
    "fitnesstakip.highlight2": "BLE mobile connectivity",
    "fitnesstakip.highlight3": "Database logging and reporting",
    "fitnesstakip.highlight4": "Real-time metrics",
    "fitnesstakip.impactTitle": "Project Impact",
    "fitnesstakip.impact1Title": "Accurate rep counting",
    "fitnesstakip.impact1Body":
      "Filtered sensor data to ensure accurate, consistent repetition counting.",
    "fitnesstakip.impact2Title": "Mobile experience",
    "fitnesstakip.impact2Body":
      "Designed for users to track live performance and review workout history.",
    "fitnesstakip.impact3Title": "Data capture",
    "fitnesstakip.impact3Body":
      "Logged every movement with timestamps to enable analysis and progress tracking.",
    "fitnesstakip.mediaTitle": "Visual",
    "fitnesstakip.mediaNote": "We can add an image of the device and app.",
    "fitnesstakip.mediaCaption": "Device and app mock (add your own image).",
    "fitnesstakip.pageTitle": "Fitness Tracking System | Coskun Saltu",
    "fitnesstakip.pageDescription":
      "Fitness Tracking System project overview and details.",
  },
};

const applyTranslations = (lang) => {
  const dict = translations[lang] || translations.tr;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    const key = el.getAttribute("data-i18n-content");
    if (dict[key]) {
      el.setAttribute("content", dict[key]);
    }
  });

  if (titleEl) {
    const titleKey = titleEl.getAttribute("data-i18n");
    if (titleKey && dict[titleKey]) {
      titleEl.textContent = dict[titleKey];
    } else if (dict["page.title"]) {
      titleEl.textContent = dict["page.title"];
    }
  }

  if (metaDescription) {
    const descKey = metaDescription.getAttribute("data-i18n-content");
    if (descKey && dict[descKey]) {
      metaDescription.setAttribute("content", dict[descKey]);
    } else if (dict["page.description"]) {
      metaDescription.setAttribute("content", dict["page.description"]);
    }
  }

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
};

const resolveInitialLanguage = () => {
  const saved = localStorage.getItem("lang");
  if (saved && translations[saved]) {
    return saved;
  }
  const browserLang = navigator.language || "tr";
  return browserLang.toLowerCase().startsWith("tr") ? "tr" : "en";
};

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    applyTranslations(lang);
    localStorage.setItem("lang", lang);
  });
});

applyTranslations(resolveInitialLanguage());

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const revealItems = document.querySelectorAll(".reveal");

if (revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => observer.observe(item));
}
