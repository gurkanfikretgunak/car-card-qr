export const languages = {
  tr: 'Türkçe',
  en: 'English',
};

export const defaultLang = 'tr';

export const ui = {
  tr: {
    // Layout & SEO
    'site.name': 'Araç Kart',
    'site.title': 'Araç Kart - Park Halindeki Araçlar İçin QR Kod İletişim Sistemi',
    'site.description': 'Park halindeki araç sahipleriyle QR kod üzerinden hızlı, güvenli ve modern iletişim kurun. Ücretsiz araç kart QR kod oluşturucu ve anlık mesajlaşma sistemi.',
    'site.keywords': 'araç kart, park iletişim, qr kod araç, araç sahibi ulaşma, park engel, araç mesajı, park sorunu çözüm, araç qr kod, park yardım, araç iletişim sistemi',
    'site.author': 'Araç Kart Ekibi',
    'site.imageAlt': 'Araç Kart - QR Kod ile Park İletişim Sistemi',
    
    // Schema.org Structured Data
    'schema.feature1': 'QR kod ile hızlı iletişim',
    'schema.feature2': 'Güvenli mesajlaşma sistemi', 
    'schema.feature3': 'Ücretsiz QR kod oluşturucu',
    
    // Header
    'header.title': 'Araç Kart',
    'header.subtitle': 'Park halindeki araç sahibiyle iletişime geçin',
    'header.instant.communication': 'Anlık İletişim Sistemi',
    'header.warning': 'GÜVENLİK UYARISI: Sadece acil durumlar için kullanın • Kişisel bilgilerinizi koruyun • Saygılı iletişim kurun',
    
    // Vehicle Card
    'vehicle.plate': 'Plaka:',
    'vehicle.owner': 'Sahibi:',
    'vehicle.location': 'Konum:',
    'vehicle.emergency.call': 'Acil durumda:',
    'vehicle.show.number': 'Numarayı Göster',
    'vehicle.emergency.only': 'Sadece acil durumlar için arayın',
    'vehicle.phone.modal.title': 'Telefon Numarasını Göster',
    'vehicle.phone.modal.description': 'Bu numara sadece acil durumlar için kullanılmalıdır. Araç sahibini rahatsız etmemek için önce mesaj göndermeyi deneyin.',
    'vehicle.phone.modal.warning': 'Uyarı: Gereksiz aramalar rahatsızlık verebilir. Lütfen sadece gerçek acil durumlar için arayın.',
    'vehicle.phone.modal.cancel': 'İptal',
    'vehicle.phone.modal.confirm': 'Göster',
    
    // Contact Form
    'contact.title': 'Araç Sahibiyle İletişim',
    'contact.reason.label': 'Neden iletişime geçiyorsunuz? *',
    'contact.reason.blocking': 'Aracınız çıkışımı engelliyor',
    'contact.reason.accident': 'Kaza durumu',
    'contact.reason.parking': 'Park yeri sorunu',
    'contact.reason.other': 'Diğer',
    'contact.name': 'Adınız *',
    'contact.name.placeholder': 'Adınızı girin',
    'contact.phone': 'Telefon Numaranız *',
    'contact.phone.placeholder': '+90 555 123 4567',
    'contact.message': 'Mesajınız',
    'contact.message.placeholder': 'Ek bilgi varsa buraya yazabilirsiniz...',
    'contact.privacy': 'Gizlilik Bildirimi: Bu form aracılığıyla gönderilen kişisel verileriniz (ad, telefon, mesaj) yalnızca araç sahibi ile iletişim kurulması amacıyla kullanılacak ve sizin rızanız kapsamında araç sahibine iletilecektir.',
    'contact.submit': 'Mesaj Gönder',
    'contact.sending': 'Gönderiliyor...',
    'contact.success': 'Mesajınız başarıyla gönderildi! Araç sahibi kısa sürede sizinle iletişime geçecektir.',
    'contact.error': 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.',
    'contact.send.another': 'Tekrar Mesaj Gönder',
    'contact.new.contact': 'Yeni İletişim',
    'contact.already.sent': 'Bugün zaten bir mesaj gönderdiniz. Araç sahibi sizinle iletişime geçecektir.',
    
    // QR Generator
    'qr.title': 'QR Kod Oluşturucu',
    'qr.subtitle': 'Araç kartınız için QR kod oluşturun ve yazdırın',
    'qr.form.title': 'Araç Bilgilerinizi Girin',
    'qr.brand': 'Marka *',
    'qr.brand.placeholder': 'BMW, Mercedes, Audi...',
    'qr.model': 'Model *',
    'qr.model.placeholder': 'X5, C-Class, A4...',
    'qr.year': 'Yıl',
    'qr.color': 'Renk',
    'qr.color.placeholder': 'Siyah',
    'qr.plate': 'Plaka *',
    'qr.plate.placeholder': '34 ABC 123',
    'qr.owner': 'Adınız *',
    'qr.owner.placeholder': 'Ahmet Yılmaz',
    'qr.phone': 'Telefon *',
    'qr.phone.placeholder': '+90 555 123 4567',
    'qr.show.phone': 'Telefon numaramı göster',
    'qr.show.phone.description': 'İşaretli olursa telefon numaranız araç kartında görünür. Devre dışı bırakırsanız sadece mesaj formu kullanılabilir.',
    'qr.generate': 'QR Kod Oluştur',
    'qr.ready': 'QR Kodunuz Hazır!',
    'qr.download': 'PNG Olarak İndir',
    'qr.print': 'Yazdır',
    'qr.new': 'Yeni QR Kod Oluştur',
    'qr.tip': 'İpucu: QR kodu araç içinde görülebilecek bir yere yapıştırın. Diğer sürücüler kodu tarayarak sizinle iletişime geçebilir.',
    'qr.preview': 'Araç Kartı Önizlemesi',
    'qr.preview.description': 'Bu kartın tam hali QR kod tarandığında görünecektir',
    
    // Footer
    'footer.homepage': 'Ana Sayfa',
    'footer.qr.generator': 'QR Kod İndir',
    'footer.description': 'Park halindeki araçlar için modern iletişim çözümü. QR kod ile hızlı ve güvenli iletişim.',
    'footer.copyright': '© 2025 Araç Kart • Minimalist tasarım',
    'footer.created.by': 'Created by',
    
    // Main Page
    'main.create.qr': 'Kendi QR Kodunuzu Oluşturun',
    'main.create.qr.description': 'Araç kartınız için QR kod oluşturup yazdırabilirsiniz',
    'main.create.qr.button': 'QR Kod Oluştur',
    'main.github.title': 'Proje Kaynak Kodu',
    'main.github.description': 'Bu projenin açık kaynak kodlarına erişim sağlayın',
    'main.github.button': 'GitHub\'da Görüntüle',
    
    // Splash
    'splash.loading': 'Yükleniyor...',
    'splash.redirecting': 'Yönlendiriliyor...',
    
    // Navigation
    'nav.language': 'Dil',
    'nav.change.language': 'Dili Değiştir',
  },
  en: {
    // Layout & SEO
    'site.name': 'Car Card',
    'site.title': 'Car Card - QR Code Communication System for Parked Vehicles',
    'site.description': 'Quick, secure and modern communication with parked vehicle owners via QR code. Free vehicle card QR code generator and instant messaging system.',
    'site.keywords': 'car card, parking communication, vehicle qr code, contact car owner, parking blocked, car message, parking problem solution, vehicle qr, parking help, car communication system',
    'site.author': 'Car Card Team',
    'site.imageAlt': 'Car Card - QR Code Parking Communication System',
    
    // Schema.org Structured Data
    'schema.feature1': 'Quick communication via QR code',
    'schema.feature2': 'Secure messaging system',
    'schema.feature3': 'Free QR code generator',
    
    // Header
    'header.title': 'Car Card',
    'header.subtitle': 'Contact the parked vehicle owner',
    'header.instant.communication': 'Instant Communication System',
    'header.warning': 'SECURITY WARNING: Use only for emergencies • Protect your personal information • Communicate respectfully',
    
    // Vehicle Card
    'vehicle.plate': 'Plate:',
    'vehicle.owner': 'Owner:',
    'vehicle.location': 'Location:',
    'vehicle.emergency.call': 'In emergency:',
    'vehicle.show.number': 'Show Number',
    'vehicle.emergency.only': 'Call only in emergencies',
    'vehicle.phone.modal.title': 'Show Phone Number',
    'vehicle.phone.modal.description': 'This number should only be used for emergencies. Try sending a message first to avoid disturbing the vehicle owner.',
    'vehicle.phone.modal.warning': 'Warning: Unnecessary calls may cause disturbance. Please call only for real emergencies.',
    'vehicle.phone.modal.cancel': 'Cancel',
    'vehicle.phone.modal.confirm': 'Show',
    
    // Contact Form
    'contact.title': 'Contact Vehicle Owner',
    'contact.reason.label': 'Why are you contacting? *',
    'contact.reason.blocking': 'Your vehicle is blocking my exit',
    'contact.reason.accident': 'Accident situation',
    'contact.reason.parking': 'Parking issue',
    'contact.reason.other': 'Other',
    'contact.name': 'Your Name *',
    'contact.name.placeholder': 'Enter your name',
    'contact.phone': 'Your Phone Number *',
    'contact.phone.placeholder': '+90 555 123 4567',
    'contact.message': 'Your Message',
    'contact.message.placeholder': 'If you have additional information, you can write it here...',
    'contact.privacy': 'Privacy Notice: Personal data sent through this form (name, phone, message) will only be used for contacting the vehicle owner and will be forwarded to the vehicle owner with your consent.',
    'contact.submit': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Your message has been sent successfully! The vehicle owner will contact you shortly.',
    'contact.error': 'Message could not be sent. Please try again later.',
    'contact.send.another': 'Send Another Message',
    'contact.new.contact': 'New Contact',
    'contact.already.sent': 'You have already sent a message today. The vehicle owner will contact you.',
    
    // QR Generator
    'qr.title': 'QR Code Generator',
    'qr.subtitle': 'Create and print QR code for your vehicle card',
    'qr.form.title': 'Enter Your Vehicle Information',
    'qr.brand': 'Brand *',
    'qr.brand.placeholder': 'BMW, Mercedes, Audi...',
    'qr.model': 'Model *',
    'qr.model.placeholder': 'X5, C-Class, A4...',
    'qr.year': 'Year',
    'qr.color': 'Color',
    'qr.color.placeholder': 'Black',
    'qr.plate': 'License Plate *',
    'qr.plate.placeholder': '34 ABC 123',
    'qr.owner': 'Your Name *',
    'qr.owner.placeholder': 'John Doe',
    'qr.phone': 'Phone *',
    'qr.phone.placeholder': '+90 555 123 4567',
    'qr.show.phone': 'Show my phone number',
    'qr.show.phone.description': 'If checked, your phone number will be visible on the vehicle card. If disabled, only the message form will be available.',
    'qr.generate': 'Generate QR Code',
    'qr.ready': 'Your QR Code is Ready!',
    'qr.download': 'Download as PNG',
    'qr.print': 'Print',
    'qr.new': 'Create New QR Code',
    'qr.tip': 'Tip: Stick the QR code somewhere visible inside the vehicle. Other drivers can scan the code to contact you.',
    'qr.preview': 'Vehicle Card Preview',
    'qr.preview.description': 'The full version of this card will be displayed when the QR code is scanned',
    
    // Footer
    'footer.homepage': 'Homepage',
    'footer.qr.generator': 'Download QR Code',
    'footer.description': 'Modern communication solution for parked vehicles. Fast and secure communication via QR code.',
    'footer.copyright': '© 2025 Car Card • Minimalist design',
    'footer.created.by': 'Created by',
    
    // Main Page
    'main.create.qr': 'Create Your Own QR Code',
    'main.create.qr.description': 'You can create and print QR code for your vehicle card',
    'main.create.qr.button': 'Create QR Code',
    'main.github.title': 'Project Source Code',
    'main.github.description': 'Access the open source code of this project',
    'main.github.button': 'View on GitHub',
    
    // Splash
    'splash.loading': 'Loading...',
    'splash.redirecting': 'Redirecting...',
    
    // Navigation
    'nav.language': 'Language',
    'nav.change.language': 'Change Language',
  },
} as const;
