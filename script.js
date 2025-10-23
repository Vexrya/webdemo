// =====================================
// VAMA9 - MODERN RESTAURANT WEBSITE
// Optimized Modular Architecture
// =====================================

// Configuration and Constants
const CONFIG = {
    STORAGE_KEY: 'vama9_language',
    DEFAULT_LANGUAGE: 'ro',
    SCROLL_THRESHOLD: 100,
    BACK_TO_TOP_THRESHOLD: 500,
    ANIMATION_DURATION: 300,
    DEBOUNCE_DELAY: 100
};

// Utility Functions
const utils = {
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    safeStorage: {
        get(key) {
            try {
                return localStorage.getItem(key);
            } catch (error) {
                console.warn('Storage access failed:', error);
                return null;
            }
        },
        set(key, value) {
            try {
                localStorage.setItem(key, value);
                return true;
            } catch (error) {
                console.warn('Storage write failed:', error);
                return false;
            }
        }
    },

    animate(element, properties, duration = CONFIG.ANIMATION_DURATION) {
        return new Promise(resolve => {
            element.style.transition = `all ${duration}ms ease`;
            Object.assign(element.style, properties);
            setTimeout(resolve, duration);
        });
    }
};

// Language translations (optimized structure)
const translations = {
    ro: {
        // Navigation
        nav_home: 'Acasă', nav_about: 'Despre', nav_menu: 'Meniu', 
        nav_gallery: 'Galerie', nav_contact: 'Contact', nav_reserve: 'Rezervări',
        
        // Hero Section
        hero_title: 'VAMA9',
        hero_subtitle: 'Unde mâncarea se întâlnește cu arta',
        hero_cta: 'Rezervă Masă',
        hero_scroll: 'Scroll',
        
        // About Section
        about_badge: 'POVESTEA NOASTRĂ', about_title: 'Un Loc de Întâlnire Modern',
        about_lead: 'Situat strategic lângă vama nouă, VAMA9 reprezintă mai mult decât un restaurant - este un punct de conexiune între călători și localnici, între tradiție și modernitate.',
        about_journey_title: 'Călătorie & Conexiune', about_journey_text: 'Un popas modern pentru călători, unde fiecare masă devine o experiență memorabilă.',
        about_design_title: 'Design Contemporary', about_design_text: 'Arhitectură minimalistă care îmbină eleganța cu funcționalitatea.',
        about_fresh_title: 'Prospețime & Calitate', about_fresh_text: 'Ingrediente proaspete și preparate cu atenție la detalii.',
        about_open: 'Deschidem', about_close: 'Închidem', about_days: 'Zile',
        about_interior: 'Interior Modern', about_terrace: 'Terasă', about_food: 'Mâncare',
        
        // Menu Section
        menu_badge: 'MENIUL NOSTRU', menu_title: 'Bucătărie Internațională',
        menu_subtitle: 'O selecție diversă de preparate pentru toate gusturile',
        menu_all: 'Toate', menu_main: 'Fel Principal', menu_appetizer: 'Aperitive',
        menu_dessert: 'Desert', menu_drinks: 'Băuturi', menu_popular: 'Popular',
        menu_show_more: 'Arată mai multe', menu_show_less: 'Arată mai puțin',
        
        // Chicken Items
        chicken_item1_name: 'Pulpe de Pui Rotisate', chicken_item1_desc: 'Pulpe de pui rotisate cu cartofi prăjiți și sos (400g)',
        chicken_item2_name: 'Piept de Pui la Grătar', chicken_item2_desc: 'Piept de pui la grătar (200g, fără garnitură)',
        
        // Pork Items
        pork_item1_name: 'Ceafa de Porc la Grătar', pork_item1_desc: 'Ceafa de porc la grătar cu cartofi prăjiți (200g/200g)',
        pork_item2_name: 'Cotlet de Porc Venez', pork_item2_desc: 'Cotlet de porc, șunca, prune, caise, cartofi (200g/200g)',
        pork_item3_name: 'Coaste de Porc', pork_item3_desc: 'Coaste de porc cu cartofi prăjiți și sos (350g/200g)',
        
        // Appetizers
        appetizer_item1_name: 'Caşcaval Pane', appetizer_item1_desc: 'Caşcaval pane cu cartofi prăjiți (300g/180g)',
        appetizer_item2_name: 'Mozzarella Sticks', appetizer_item2_desc: '10 băștoane cu cartofi și sos (10buc/180g/50g)',
        
        // Dessert & Drinks
        dessert_item1_name: 'Papanași', dessert_item1_desc: 'Cu smântână și dulceață de vișine',
        drinks_item1_name: 'Cafea Espresso', drinks_item1_desc: 'Cafea proaspăt măcinată, aromă intensă',
        drinks_item2_name: 'Țuică de Maramureș', drinks_item2_desc: 'Țuică tradițională din fructe locale',
        menu_cta_text: 'Pentru meniul complet și prețuri actualizate', menu_cta_button: 'Contactează-ne',
        
        // Gallery Section
        gallery_badge: 'GALERIE', gallery_title: 'Atmosfera VAMA9',
        
        // Contact Section
        contact_badge: 'CONTACT', contact_title: 'Vino să ne cunoști', contact_address: 'Adresă',
        contact_hours: 'Program', contact_schedule: 'Zilnic: 06:00 - 23:00', contact_phone: 'Telefon',
        contact_call: 'Sună pentru rezervare', contact_directions: 'Direcții',
        contact_map_text: 'Click pentru a deschide harta',
        
        // Footer
        footer_tagline: 'Un popas modern pe drumul tău', footer_home: 'Acasă',
        footer_about: 'Despre', footer_menu: 'Meniu', footer_gallery: 'Galerie', 
        footer_contact: 'Contact', footer_rights: 'Toate drepturile rezervate'
    },
    en: {
        // Navigation
        nav_home: 'Home', nav_about: 'About', nav_menu: 'Menu', 
        nav_gallery: 'Gallery', nav_contact: 'Contact', nav_reserve: 'Reservations',
        
        // Hero Section
        hero_title: 'VAMA9',
        hero_subtitle: 'Where Food Meets Artistry',
        hero_cta: 'Reserve Table',
        hero_scroll: 'Scroll',
        
        // About Section
        about_badge: 'OUR STORY', about_title: 'A Modern Meeting Place',
        about_lead: 'Strategically located near the new border crossing, VAMA9 represents more than a restaurant - it\'s a connection point between travelers and locals, between tradition and modernity.',
        about_journey_title: 'Journey & Connection', about_journey_text: 'A modern stop for travelers, where every meal becomes a memorable experience.',
        about_design_title: 'Contemporary Design', about_design_text: 'Minimalist architecture that combines elegance with functionality.',
        about_fresh_title: 'Freshness & Quality', about_fresh_text: 'Fresh ingredients and dishes prepared with attention to detail.',
        about_open: 'Open', about_close: 'Close', about_days: 'Days',
        about_interior: 'Modern Interior', about_terrace: 'Terrace', about_food: 'Food',
        
        // Menu Section
        menu_badge: 'OUR MENU', menu_title: 'International Cuisine',
        menu_subtitle: 'A diverse selection of dishes for all tastes',
        menu_all: 'All', menu_main: 'Main Course', menu_appetizer: 'Appetizers',
        menu_dessert: 'Dessert', menu_drinks: 'Drinks', menu_popular: 'Popular',
        menu_show_more: 'Show more', menu_show_less: 'Show less',
        
        // Chicken Items
        chicken_item1_name: 'Roasted Chicken Legs', chicken_item1_desc: 'Roasted chicken legs with fries and sauce (400g)',
        chicken_item2_name: 'Grilled Chicken Breast', chicken_item2_desc: 'Grilled chicken breast (200g, no side dish)',
        
        // Pork Items
        pork_item1_name: 'Grilled Pork Neck', pork_item1_desc: 'Grilled pork neck with fries (200g/200g)',
        pork_item2_name: 'Pork Cutlet Venez', pork_item2_desc: 'Pork cutlet, ham, prunes, apricots, potatoes (200g/200g)',
        pork_item3_name: 'Pork Ribs', pork_item3_desc: 'Pork ribs with fries and sauce (350g/200g)',
        
        // Appetizers
        appetizer_item1_name: 'Breaded Cheese', appetizer_item1_desc: 'Breaded cheese with fries (300g/180g)',
        appetizer_item2_name: 'Mozzarella Sticks', appetizer_item2_desc: '10 sticks with fries and sauce (10pcs/180g/50g)',
        
        // Dessert & Drinks
        dessert_item1_name: 'Papanași', dessert_item1_desc: 'With sour cream and cherry jam',
        drinks_item1_name: 'Espresso Coffee', drinks_item1_desc: 'Freshly ground coffee, intense aroma',
        drinks_item2_name: 'Maramureș Țuică', drinks_item2_desc: 'Traditional brandy from local fruits',
        menu_cta_text: 'For complete menu and current prices', menu_cta_button: 'Contact Us',
        
        // Gallery Section
        gallery_badge: 'GALLERY', gallery_title: 'VAMA9 Atmosphere',
        
        // Contact Section
        contact_badge: 'CONTACT', contact_title: 'Come meet us', contact_address: 'Address',
        contact_hours: 'Hours', contact_schedule: 'Daily: 06:00 - 23:00', contact_phone: 'Phone',
        contact_call: 'Call for reservation', contact_directions: 'Directions',
        contact_map_text: 'Click to open map',
        
        // Footer
        footer_tagline: 'A modern stop on your journey', footer_home: 'Home',
        footer_about: 'About', footer_menu: 'Menu', footer_gallery: 'Gallery', 
        footer_contact: 'Contact', footer_rights: 'All rights reserved'
    },
    fr: {
        // Navigation
        nav_home: 'Accueil', nav_about: 'À propos', nav_menu: 'Menu', 
        nav_gallery: 'Galerie', nav_contact: 'Contact', nav_reserve: 'Réservations',
        
        // Hero Section
        hero_title: 'VAMA9',
        hero_subtitle: 'Où la Nourriture Rencontre l\'Art',
        hero_cta: 'Réserver une Table',
        hero_scroll: 'Défiler',
        
        // About Section
        about_badge: 'NOTRE HISTOIRE', about_title: 'Un Lieu de Rencontre Moderne',
        about_lead: 'Stratégiquement situé près du nouveau poste frontalier, VAMA9 représente plus qu\'un restaurant - c\'est un point de connexion entre voyageurs et locaux, entre tradition et modernité.',
        about_journey_title: 'Voyage & Connexion', about_journey_text: 'Un arrêt moderne pour les voyageurs, où chaque repas devient une expérience mémorable.',
        about_design_title: 'Design Contemporain', about_design_text: 'Architecture minimaliste qui allie élégance et fonctionnalité.',
        about_fresh_title: 'Fraîcheur & Qualité', about_fresh_text: 'Ingrédients frais et plats préparés avec attention aux détails.',
        about_open: 'Ouvrir', about_close: 'Fermer', about_days: 'Jours',
        about_interior: 'Intérieur Moderne', about_terrace: 'Terrasse', about_food: 'Nourriture',
        
        // Menu Section
        menu_badge: 'NOTRE MENU', menu_title: 'Cuisine Internationale',
        menu_subtitle: 'Une sélection variée de plats pour tous les goûts',
        menu_all: 'Tous', menu_main: 'Plat Principal', menu_appetizer: 'Apéritifs',
        menu_dessert: 'Dessert', menu_drinks: 'Boissons', menu_popular: 'Populaire',
        menu_show_more: 'Voir plus', menu_show_less: 'Voir moins',
        
        // Chicken Items
        chicken_item1_name: 'Cuisses de Poulet Rôties', chicken_item1_desc: 'Cuisses de poulet rôties avec frites et sauce (400g)',
        chicken_item2_name: 'Poitrine de Poulet Grillée', chicken_item2_desc: 'Poitrine de poulet grillée (200g, sans accompagnement)',
        
        // Pork Items
        pork_item1_name: 'Cou de Porc Grillé', pork_item1_desc: 'Cou de porc grillé avec frites (200g/200g)',
        pork_item2_name: 'Côtelette de Porc Venez', pork_item2_desc: 'Côtelette de porc, jambon, pruneaux, abricots, pommes de terre (200g/200g)',
        pork_item3_name: 'Côtes de Porc', pork_item3_desc: 'Côtes de porc avec frites et sauce (350g/200g)',
        
        // Appetizers
        appetizer_item1_name: 'Fromage Pané', appetizer_item1_desc: 'Fromage pané avec frites (300g/180g)',
        appetizer_item2_name: 'Bâtonnets de Mozzarella', appetizer_item2_desc: '10 bâtonnets avec frites et sauce (10pcs/180g/50g)',
        
        // Dessert & Drinks
        dessert_item1_name: 'Papanași', dessert_item1_desc: 'Avec crème aigre et confiture de cerises',
        drinks_item1_name: 'Café Espresso', drinks_item1_desc: 'Café fraîchement moulu, arôme intense',
        drinks_item2_name: 'Țuică de Maramureș', drinks_item2_desc: 'Eau-de-vie traditionnelle de fruits locaux',
        menu_cta_text: 'Pour le menu complet et les prix actuels', menu_cta_button: 'Contactez-nous',
        
        // Gallery Section
        gallery_badge: 'GALERIE', gallery_title: 'Atmosphère VAMA9',
        
        // Contact Section
        contact_badge: 'CONTACT',
        contact_title: 'Venez nous rencontrer', contact_address: 'Adresse',
        contact_hours: 'Heures', contact_schedule: 'Quotidien: 06:00 - 23:00', contact_phone: 'Téléphone',
        contact_call: 'Appeler pour réservation', contact_directions: 'Directions',
        contact_map_text: 'Cliquez pour ouvrir la carte',
        
        // Footer
        footer_tagline: 'Un arrêt moderne sur votre route', footer_home: 'Accueil',
        footer_about: 'À propos', footer_menu: 'Menu', footer_gallery: 'Galerie', 
        footer_contact: 'Contact', footer_rights: 'Tous droits réservés'
    }
};

// App State Management (Optimized)
class AppState {
    constructor() {
        this.currentLanguage = CONFIG.DEFAULT_LANGUAGE;
        this.isMenuLoading = false;
        this.observers = new Map();
        this.init();
    }

    init() {
        this.loadSavedLanguage();
        this.setupErrorHandling();
    }

    loadSavedLanguage() {
        const savedLang = utils.safeStorage.get(CONFIG.STORAGE_KEY);
        if (savedLang && translations[savedLang]) {
            this.currentLanguage = savedLang;
        }
    }
  
    setupErrorHandling() {
        window.addEventListener('error', this.handleGlobalError.bind(this));
        window.addEventListener('unhandledrejection', this.handleUnhandledRejection.bind(this));
    }
    
    handleGlobalError(event) {
        console.error('Global error:', event.error);
        this.showErrorMessage('A apărut o eroare neașteptată. Te rugăm să reîmprospătezi pagina.');
    }

    handleUnhandledRejection(event) {
        console.error('Unhandled promise rejection:', event.reason);
        this.showErrorMessage('Eroare de procesare. Te rugăm să încerci din nou.');
    }

    showErrorMessage(message) {
        const errorElement = document.getElementById('error-boundary');
        if (errorElement) {
            const messageElement = errorElement.querySelector('p');
            if (messageElement) messageElement.textContent = message;
            errorElement.style.display = 'flex';
        }
    }

    saveLanguage(lang) {
        utils.safeStorage.set(CONFIG.STORAGE_KEY, lang);
    }
}

// Language Management Module (Optimized)
class LanguageManager {
    constructor(appState) {
        this.appState = appState;
        this.elements = {};
        this.isInitialized = false;
    }

    init() {
        if (this.isInitialized) return;
        
        this.cacheElements();
        this.bindEvents();
        this.hideDropdownOnLoad();
        this.setDefaultLanguage();
        this.isInitialized = true;
    }

    cacheElements() {
        this.elements = {
            dropdown: document.getElementById('language-dropdown'),
            switcher: document.getElementById('lang-switcher'),
            menu: document.getElementById('language-menu'),
            currentLang: document.getElementById('current-lang')
        };
    }

    bindEvents() {
        // Language dropdown options
        const langOptions = document.querySelectorAll('.language-menu .lang-option');
        langOptions.forEach(option => {
            option.addEventListener('click', this.handleLanguageSelect.bind(this));
        });

        // Language switcher in navigation
        if (this.elements.switcher) {
            this.elements.switcher.addEventListener('click', this.toggleLanguageDropdown.bind(this));
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', this.handleOutsideClick.bind(this));
        
        // Close dropdown on escape key
        document.addEventListener('keydown', this.handleKeyPress.bind(this));
    }

    handleLanguageSelect = (event) => {
        try {
            const lang = event.currentTarget.dataset.lang;
            if (!lang || !translations[lang]) {
                throw new Error(`Invalid language: ${lang}`);
            }
            
            this.changeLanguage(lang);
            this.hideLanguageDropdown();
            this.appState.saveLanguage(lang);
        } catch (error) {
            console.error('Language selection failed:', error);
            this.appState.showErrorMessage('Nu s-a putut schimba limba. Te rugăm să încerci din nou.');
        }
    }

    handleOutsideClick = (e) => {
        if (!this.elements.dropdown?.contains(e.target)) {
            this.hideLanguageDropdown();
        }
    }

    handleKeyPress = (e) => {
        if (e.key === 'Escape' && this.elements.dropdown?.classList.contains('active')) {
            this.hideLanguageDropdown();
        }
    }

    changeLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Language ${lang} not found`);
            return false;
        }

        this.appState.currentLanguage = lang;
    
        // Update current language display
        if (this.elements.currentLang) {
            this.elements.currentLang.textContent = lang.toUpperCase();
        }

        // Update all translatable elements
        this.updateTranslatableElements(lang);

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Announce language change to screen readers
        this.announceLanguageChange(lang);

        return true;
    }

    updateTranslatableElements(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.dataset.translate;
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    announceLanguageChange(lang) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `Language changed to ${lang}`;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            if (document.body.contains(announcement)) {
                document.body.removeChild(announcement);
            }
        }, 1000);
    }

    toggleLanguageDropdown = (e) => {
        e.stopPropagation();
        const isActive = this.elements.dropdown?.classList.contains('active');
        if (isActive) {
            this.hideLanguageDropdown();
        } else {
            this.showLanguageDropdown();
        }
    }

    showLanguageDropdown() {
        if (this.elements.dropdown && this.elements.menu) {
            this.elements.dropdown.classList.add('active');
            this.elements.menu.classList.add('active');
            this.elements.switcher?.setAttribute('aria-expanded', 'true');
            
            // Focus first language option
            const firstOption = this.elements.menu.querySelector('.lang-option');
            if (firstOption) {
                setTimeout(() => firstOption.focus(), 100);
            }
        }
    }

    hideLanguageDropdown() {
        if (this.elements.dropdown && this.elements.menu) {
            this.elements.dropdown.classList.remove('active');
            this.elements.menu.classList.remove('active');
            this.elements.switcher?.setAttribute('aria-expanded', 'false');
        }
    }

    hideDropdownOnLoad() {
        this.hideLanguageDropdown();
    }

    setDefaultLanguage() {
        const savedLang = this.appState.currentLanguage;
        if (!savedLang || !this.changeLanguage(savedLang)) {
            this.changeLanguage(CONFIG.DEFAULT_LANGUAGE);
        }
    }
}

// Navigation Module (Optimized)
class NavigationManager {
    constructor() {
        this.elements = {};
        this.lastScroll = 0;
        this.ticking = false;
        this.isInitialized = false;
    }

    init() {
        if (this.isInitialized) return;
        
        this.cacheElements();
        this.bindEvents();
        this.setupAccessibility();
        this.isInitialized = true;
    }
  
    cacheElements() {
        this.elements = {
            navbar: document.getElementById('navbar'),
            navToggle: document.getElementById('nav-toggle'),
            navMenu: document.getElementById('nav-menu'),
            navLinks: document.querySelectorAll('.nav-link')
        };
    }

    bindEvents() {
        // Mobile menu toggle
        if (this.elements.navToggle && this.elements.navMenu) {
            this.elements.navToggle.addEventListener('click', this.toggleMobileMenu.bind(this));
        }

        // Close mobile menu on link click
        this.elements.navLinks.forEach(link => {
            link.addEventListener('click', this.closeMobileMenu.bind(this));
        });
    
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', this.handleAnchorClick.bind(this));
        });
  
        // Optimized scroll effects with requestAnimationFrame
        window.addEventListener('scroll', this.requestTick.bind(this), { passive: true });

        // Keyboard navigation
        document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));
    }

    setupAccessibility() {
        // Set initial ARIA states
        if (this.elements.navToggle) {
            this.elements.navToggle.setAttribute('aria-expanded', 'false');
        }
    }

    requestTick = () => {
        if (!this.ticking) {
            requestAnimationFrame(this.handleScroll.bind(this));
            this.ticking = true;
        }
    }

    toggleMobileMenu() {
        const isOpen = this.elements.navMenu.classList.contains('active');
        if (isOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }

    openMobileMenu() {
        this.elements.navToggle?.classList.add('active');
        this.elements.navMenu?.classList.add('active');
        this.elements.navToggle?.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';

        // Focus first menu item
        const firstLink = this.elements.navMenu?.querySelector('.nav-link');
        if (firstLink) {
            setTimeout(() => firstLink.focus(), 100);
        }
    }

    closeMobileMenu() {
        this.elements.navToggle?.classList.remove('active');
        this.elements.navMenu?.classList.remove('active');
        this.elements.navToggle?.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
  
    handleAnchorClick(e) {
        e.preventDefault();
        const target = document.querySelector(e.currentTarget.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of navbar
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Update focus for accessibility
            target.setAttribute('tabindex', '-1');
            target.focus();
            target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
        }
    }

    handleScroll() {
        const currentScroll = window.pageYOffset;

        // Add scrolled class for glass-morphism effect
        if (currentScroll > 50) {
            this.elements.navbar?.classList.add('scrolled');
        } else {
            this.elements.navbar?.classList.remove('scrolled');
        }

        // Update active navigation link
        this.updateActiveNavLink();

        this.lastScroll = currentScroll;
        this.ticking = false;
    }

    handleKeyboardNavigation(e) {
        // Close mobile menu on Escape
        if (e.key === 'Escape' && this.elements.navMenu?.classList.contains('active')) {
            this.closeMobileMenu();
            this.elements.navToggle?.focus();
        }
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.elements.navLinks.forEach(link => {
                    const isActive = link.getAttribute('href') === `#${sectionId}`;
                    link.classList.toggle('active', isActive);
                    link.setAttribute('aria-current', isActive ? 'page' : 'false');
                });
            }
        });
    }
}

// Gallery Module with Lightbox (Optimized)
class GalleryManager {
    constructor() {
        this.currentIndex = 0;
        this.images = [];
        this.lightboxElement = null;
        this.isInitialized = false;
    }

    init() {
        if (this.isInitialized) return;
        
        this.bindEvents();
        this.setupAccessibility();
        this.isInitialized = true;
    }

    bindEvents() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => this.openLightbox(index));
            item.addEventListener('keydown', this.handleGalleryKeydown.bind(this, index));
        });
    }

    handleGalleryKeydown = (index, e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.openLightbox(index);
        }
    }

    setupAccessibility() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach((item, index) => {
            const img = item.querySelector('img');
            if (img) {
                this.images.push({
                    src: img.src,
                    alt: img.alt || `Gallery image ${index + 1}`
                });
            }
        });
    }

    openLightbox(index) {
        this.currentIndex = index;
        this.lightboxElement = this.createLightbox();
        document.body.appendChild(this.lightboxElement);
        document.body.style.overflow = 'hidden';
        
        // Focus the lightbox for accessibility
        setTimeout(() => {
            const closeBtn = this.lightboxElement.querySelector('.lightbox-close');
            if (closeBtn) closeBtn.focus();
        }, 100);
    }

    createLightbox() {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.setAttribute('role', 'dialog');
        lightbox.setAttribute('aria-modal', 'true');
        lightbox.setAttribute('aria-label', 'Gallery lightbox');
    
        const image = this.images[this.currentIndex];
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${image.src}" alt="${image.alt}" />
                <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
                ${this.images.length > 1 ? `
                    <button class="lightbox-prev" aria-label="Previous image">‹</button>
                    <button class="lightbox-next" aria-label="Next image">›</button>
                ` : ''}
            </div>
        `;
    
        this.bindLightboxEvents(lightbox);
        return lightbox;
    }

    bindLightboxEvents(lightbox) {
        const closeBtn = lightbox.querySelector('.lightbox-close');
        const prevBtn = lightbox.querySelector('.lightbox-prev');
        const nextBtn = lightbox.querySelector('.lightbox-next');

        // Close events
        const closeLightbox = () => {
            if (lightbox.parentNode) {
                lightbox.remove();
                document.body.style.overflow = '';
                this.lightboxElement = null;
            }
        };

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        closeBtn?.addEventListener('click', closeLightbox);

        // Navigation
        prevBtn?.addEventListener('click', () => this.navigateLightbox(-1, lightbox));
        nextBtn?.addEventListener('click', () => this.navigateLightbox(1, lightbox));
    
        // Keyboard navigation
        const handleKeydown = (e) => {
            if (!lightbox.parentNode) return;
            
            switch (e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    this.navigateLightbox(-1, lightbox);
                    break;
                case 'ArrowRight':
                    this.navigateLightbox(1, lightbox);
                    break;
            }
        };

        document.addEventListener('keydown', handleKeydown);
        
        // Clean up event listener when lightbox is closed
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' && !document.body.contains(lightbox)) {
                    document.removeEventListener('keydown', handleKeydown);
                    observer.disconnect();
                }
            });
        });
        
        observer.observe(document.body, { childList: true });
    }

    navigateLightbox(direction, lightbox) {
        if (this.images.length <= 1) return;
        
        this.currentIndex += direction;
        if (this.currentIndex < 0) this.currentIndex = this.images.length - 1;
        if (this.currentIndex >= this.images.length) this.currentIndex = 0;

        const img = lightbox.querySelector('img');
        const newImage = this.images[this.currentIndex];
        if (img) {
            img.src = newImage.src;
            img.alt = newImage.alt;
        }
    }
}

// Menu Filter Module (Optimized)
class MenuManager {
    constructor() {
        this.categoryButtons = [];
        this.menuItems = [];
        this.showingAll = false;
        this.currentCategory = 'all';
        this.isInitialized = false;
    }

    init() {
        if (this.isInitialized) return;
        
        this.cacheElements();
        this.bindEvents();
        this.showLoadingSkeleton();
        this.initializeCategory();
        this.isInitialized = true;
    }

    cacheElements() {
        this.categoryButtons = document.querySelectorAll('.category-btn');
        this.menuItems = document.querySelectorAll('.menu-item');
        this.showMoreContainer = document.getElementById('menu-show-more');
        this.showMoreBtn = document.getElementById('show-more-btn');
    }

    bindEvents() {
        this.categoryButtons.forEach(button => {
            button.addEventListener('click', this.handleCategoryChange.bind(this));
        });

        this.showMoreBtn?.addEventListener('click', this.toggleShowMore.bind(this));
    }
  
    showLoadingSkeleton() {
        const loading = document.getElementById('menu-loading');
        if (loading) {
            loading.style.display = 'grid';
            setTimeout(() => {
                loading.style.display = 'none';
            }, 500);
        }
    }

    handleCategoryChange(event) {
        try {
            const category = event.currentTarget.dataset.category;
            this.filterMenuItems(category);
            this.updateActiveButton(event.currentTarget);
            this.announceFilterChange(category);
        } catch (error) {
            console.error('Menu filtering failed:', error);
        }
    }

    filterMenuItems(category) {
        this.currentCategory = category;
        this.showingAll = false;
        
        if (this.showMoreContainer) {
            this.showMoreContainer.style.display = 'none';
        }

        let visibleCount = 0;
        this.menuItems.forEach((item) => {
            const shouldShow = category === 'all' || item.dataset.category === category;
            
            if (shouldShow) {
                if (category === 'all' && visibleCount >= 4 && !this.showingAll) {
                    this.hideMenuItem(item);
                } else {
                    this.showMenuItem(item);
                }
                visibleCount++;
            } else {
                this.hideMenuItem(item);
            }
        });
  
        // Show "Show more" button for "all" category if there are more than 4 items
        if (category === 'all' && visibleCount > 4 && this.showMoreContainer) {
            this.showMoreContainer.style.display = 'block';
            this.updateShowMoreButton(false);
        }
    }

    showMenuItem(item) {
        item.style.display = 'block';
        requestAnimationFrame(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
    }

    hideMenuItem(item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.display = 'none';
        }, CONFIG.ANIMATION_DURATION);
    }

    updateActiveButton(activeButton) {
        this.categoryButtons.forEach(btn => {
            const isActive = btn === activeButton;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive.toString());
        });
    }

    toggleShowMore() {
        this.showingAll = !this.showingAll;
        
        if (this.showingAll) {
            // Show all items
            this.menuItems.forEach(item => {
                if (item.dataset.category === this.currentCategory || this.currentCategory === 'all') {
                    this.showMenuItem(item);
                }
            });
        } else {
            // Hide items beyond first 4
            let count = 0;
            this.menuItems.forEach(item => {
                if (item.dataset.category === this.currentCategory || this.currentCategory === 'all') {
                    if (count >= 4) {
                        this.hideMenuItem(item);
                    }
                    count++;
                }
            });
        }

        this.updateShowMoreButton(this.showingAll);
    }

    updateShowMoreButton(isExpanded) {
        if (!this.showMoreBtn) return;

        const span = this.showMoreBtn.querySelector('span');
        const icon = this.showMoreBtn.querySelector('i');

        const key = isExpanded ? 'menu_show_less' : 'menu_show_more';
        const currentLang = window.appState?.currentLanguage || CONFIG.DEFAULT_LANGUAGE;
        
        if (span && translations[currentLang][key]) {
            span.textContent = translations[currentLang][key];
        }
    
        if (icon) {
            icon.classList.toggle('fa-chevron-down', !isExpanded);
            icon.classList.toggle('fa-chevron-up', isExpanded);
        }
    }

    announceFilterChange(category) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = `Menu filtered to show ${category === 'all' ? 'all items' : category + ' items'}`;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            if (document.body.contains(announcement)) {
                document.body.removeChild(announcement);
            }
        }, 1000);
    }

    initializeCategory() {
        const allButton = document.querySelector('.category-btn[data-category="all"]');
        if (allButton) {
            setTimeout(() => allButton.click(), 100);
        }
    }
}

// Scroll Effects Module (Optimized)
class ScrollManager {
    constructor() {
        this.backToTopBtn = null;
        this.ticking = false;
        this.isInitialized = false;
    }

    init() {
        if (this.isInitialized) return;
        
        this.cacheElements();
        this.bindEvents();
        this.initIntersectionObserver();
        this.isInitialized = true;
    }

    cacheElements() {
        this.backToTopBtn = document.getElementById('back-to-top');
    }

    bindEvents() {
        const throttledScroll = utils.throttle(this.handleScroll.bind(this), 16); // ~60fps
        window.addEventListener('scroll', throttledScroll, { passive: true });
        
        this.backToTopBtn?.addEventListener('click', this.scrollToTop.bind(this));
    }

    handleScroll() {
        if (this.ticking) return;
        
        this.ticking = true;
        requestAnimationFrame(() => {
            const currentScroll = window.pageYOffset;
    
            // Back to top button
            if (currentScroll > CONFIG.BACK_TO_TOP_THRESHOLD) {
                this.backToTopBtn?.classList.add('visible');
            } else {
                this.backToTopBtn?.classList.remove('visible');
            }

            this.ticking = false;
        });
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Focus management for accessibility
        const skipLink = document.querySelector('.skip-nav');
        if (skipLink) {
            setTimeout(() => skipLink.focus(), 100);
        }
    }

    initIntersectionObserver() {
        if (!('IntersectionObserver' in window)) return;

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, observerOptions);

        // Add animate-on-scroll class to elements
        const animateElements = document.querySelectorAll('.about-feature, .menu-item, .gallery-item, .contact-item');
        animateElements.forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    }
}

// Utility Functions
function openMap() {
    try {
        const address = 'Strada Teplitei 66, 435500 Sighetu Marmației, România';
        const encodedAddress = encodeURIComponent(address);
        const mapUrl = `https://www.google.com/maps/place/VAMa+9/@47.9391294,23.9388577,19z/data=!4m15!1m8!3m7!1s0x4737baeeb69e4ad9:0x14534b0f54d77b17!2zU3RyYWRhIFRlcGxpyJtlaSA2NiwgVmFsZWEgQ3VmdW5kb2FzxIMgNDM1NTAwLCDQoNGD0LzRg9C90LjRmNCw!3b1!8m2!3d47.9392139!4d23.9389757!16s%2Fg%2F11g1yt_zj8!3m5!1s0x4737bbfe90e20f49:0xfca2fca726822577!8m2!3d47.9394916!4d23.9390948!16s%2Fg%2F11x987t1mx?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D`;
        window.open(mapUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
        console.error('Failed to open map:', error);
        
        // Fallback: copy address to clipboard
        if (navigator.clipboard) {
            navigator.clipboard.writeText('Strada Teplitei 66, 435500 Sighetu Marmației, România')
                .then(() => alert('Adresa a fost copiată în clipboard'))
                .catch(() => alert('Strada Teplitei 66, 435500 Sighetu Marmației, România'));
        }
    }
}

// Performance Monitoring (Optimized)
class PerformanceMonitor {
    constructor() {
        this.metrics = {
            loadStart: performance.now(),
            domReady: null,
            loadComplete: null
        };
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.metrics.domReady = performance.now();
        });

        window.addEventListener('load', () => {
            this.metrics.loadComplete = performance.now();
            this.reportMetrics();
        });
    }

    reportMetrics() {
        const loadTime = this.metrics.loadComplete - this.metrics.loadStart;

        // Report to analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'timing_complete', {
                name: 'load',
                value: Math.round(loadTime)
            });
        }
    }
}

// Main Application (Optimized)
class VAMA9App {
    constructor() {
        this.state = new AppState();
        this.modules = {};
        this.isInitialized = false;
    }

    async init() {
        if (this.isInitialized) return;
        
        try {
            // Initialize performance monitoring
            this.performance = new PerformanceMonitor();
            this.performance.init();

            // Initialize core modules
            this.modules.language = new LanguageManager(this.state);
            this.modules.navigation = new NavigationManager();
            this.modules.gallery = new GalleryManager();
            this.modules.menu = new MenuManager();
            this.modules.scroll = new ScrollManager();

            // Initialize all modules
            Object.values(this.modules).forEach(module => {
                if (module.init) {
                    module.init();
                }
            });

            // Make app state globally available
            window.appState = this.state;

            this.isInitialized = true;
        } catch (error) {
            console.error('App initialization failed:', error);
            this.state.showErrorMessage('Aplicația nu s-a putut inițializa corect. Te rugăm să reîmprospătezi pagina.');
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new VAMA9App();
    app.init();
});

// Make openMap globally available for onclick handlers
window.openMap = openMap;