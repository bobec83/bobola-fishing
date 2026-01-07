export type Language = 'pl' | 'de' | 'en';

export const translations = {
  pl: {
    nav: {
      product: 'Produkt',
      features: 'Cechy',
      about: 'O nas',
      contact: 'Kontakt',
    },
    hero: {
      tagline: 'Nowa era wędkarstwa',
      title: 'RealFish JigHead',
      subtitle: 'Główka jigowa nowej generacji zaprojektowana przez wędkarzy dla wędkarzy. Precyzja, trwałość i skuteczność w jednym.',
      cta: 'Dowiedz się więcej',
      ctaSecondary: 'Skontaktuj się',
    },
    features: {
      title: 'Dlaczego RealFish JigHead?',
      subtitle: 'Innowacyjne rozwiązania dla wymagających wędkarzy',
      items: [
        {
          title: 'Precyzyjny balans',
          description: 'Idealnie wyważona konstrukcja zapewniająca naturalistyczny ruch w wodzie.',
        },
        {
          title: 'Wytrzymały hak',
          description: 'Stal wysokowęglowa z ostrym ostrzem gwarantująca pewne branie.',
        },
        {
          title: 'Realistyczny design',
          description: 'Kształt imitujący prawdziwą rybę, zwiększający skuteczność połowów.',
        },
        {
          title: 'Uniwersalność',
          description: 'Idealna do połowów sandacza, okonia i szczupaka w różnych warunkach.',
        },
      ],
    },
    about: {
      title: 'O produkcie',
      description: 'RealFish JigHead to owoc wieloletniego doświadczenia i pasji do wędkarstwa. Stworzyliśmy główkę jigową, która łączy w sobie najnowsze technologie z tradycyjnym rzemiosłem wędkarskim.',
      stats: [
        { value: '100%', label: 'Rękodzieło' },
        { value: '3', label: 'Rozmiary' },
        { value: '∞', label: 'Unikalnych wzorów' },
      ],
    },
    contact: {
      title: 'Skontaktuj się z nami',
      subtitle: 'Masz pytania? Chcesz zostać dystrybutorem? Napisz do nas!',
      form: {
        name: 'Imię i nazwisko',
        email: 'Email',
        message: 'Wiadomość',
        submit: 'Wyślij wiadomość',
        success: 'Dziękujemy za wiadomość! Odezwiemy się wkrótce.',
      },
    },
    footer: {
      rights: 'Wszelkie prawa zastrzeżone',
      tagline: 'Wędkarstwo na najwyższym poziomie',
    },
  },
  de: {
    nav: {
      product: 'Produkt',
      features: 'Eigenschaften',
      about: 'Über uns',
      contact: 'Kontakt',
    },
    hero: {
      tagline: 'Die neue Ära des Angelns',
      title: 'RealFish JigHead',
      subtitle: 'Jigkopf der neuen Generation, von Anglern für Angler entwickelt. Präzision, Haltbarkeit und Effektivität in einem.',
      cta: 'Mehr erfahren',
      ctaSecondary: 'Kontaktieren Sie uns',
    },
    features: {
      title: 'Warum RealFish JigHead?',
      subtitle: 'Innovative Lösungen für anspruchsvolle Angler',
      items: [
        {
          title: 'Präzise Balance',
          description: 'Perfekt ausbalancierte Konstruktion für natürliche Bewegung im Wasser.',
        },
        {
          title: 'Robuster Haken',
          description: 'Hochkohlenstoffstahl mit scharfer Klinge für sicheren Fang.',
        },
        {
          title: 'Realistisches Design',
          description: 'Form, die echte Fische imitiert und die Fangeffizienz erhöht.',
        },
        {
          title: 'Vielseitigkeit',
          description: 'Ideal für Zander-, Barsch- und Hechtangeln unter verschiedenen Bedingungen.',
        },
      ],
    },
    about: {
      title: 'Über das Produkt',
      description: 'RealFish JigHead ist das Ergebnis langjähriger Erfahrung und Leidenschaft für das Angeln. Wir haben einen Jigkopf geschaffen, der modernste Technologie mit traditionellem Angelhandwerk verbindet.',
      stats: [
        { value: '100%', label: 'Handarbeit' },
        { value: '3', label: 'Größen' },
        { value: '∞', label: 'Einzigartige Designs' },
      ],
    },
    contact: {
      title: 'Kontaktieren Sie uns',
      subtitle: 'Haben Sie Fragen? Möchten Sie Händler werden? Schreiben Sie uns!',
      form: {
        name: 'Name',
        email: 'E-Mail',
        message: 'Nachricht',
        submit: 'Nachricht senden',
        success: 'Vielen Dank für Ihre Nachricht! Wir melden uns bald.',
      },
    },
    footer: {
      rights: 'Alle Rechte vorbehalten',
      tagline: 'Angeln auf höchstem Niveau',
    },
  },
  en: {
    nav: {
      product: 'Product',
      features: 'Features',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      tagline: 'The new era of fishing',
      title: 'RealFish JigHead',
      subtitle: 'Next-generation jig head designed by anglers for anglers. Precision, durability, and effectiveness in one.',
      cta: 'Learn more',
      ctaSecondary: 'Contact us',
    },
    features: {
      title: 'Why RealFish JigHead?',
      subtitle: 'Innovative solutions for demanding anglers',
      items: [
        {
          title: 'Precise balance',
          description: 'Perfectly balanced construction ensuring natural movement in water.',
        },
        {
          title: 'Durable hook',
          description: 'High-carbon steel with sharp edge guaranteeing secure bites.',
        },
        {
          title: 'Realistic design',
          description: 'Shape imitating real fish, increasing fishing effectiveness.',
        },
        {
          title: 'Versatility',
          description: 'Ideal for zander, perch, and pike fishing in various conditions.',
        },
      ],
    },
    about: {
      title: 'About the product',
      description: 'RealFish JigHead is the result of years of experience and passion for fishing. We created a jig head that combines the latest technology with traditional fishing craftsmanship.',
      stats: [
        { value: '100%', label: 'Handcrafted' },
        { value: '3', label: 'Sizes' },
        { value: '∞', label: 'Unique designs' },
      ],
    },
    contact: {
      title: 'Contact us',
      subtitle: 'Have questions? Want to become a distributor? Write to us!',
      form: {
        name: 'Full name',
        email: 'Email',
        message: 'Message',
        submit: 'Send message',
        success: 'Thank you for your message! We will get back to you soon.',
      },
    },
    footer: {
      rights: 'All rights reserved',
      tagline: 'Fishing at the highest level',
    },
  },
} as const;

export const useTranslation = (lang: Language) => translations[lang];
