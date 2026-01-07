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
      title: 'O nas',
      tagline: 'Przewaga dzięki świadomości. Detale, które zmieniają wynik.',
      description1: 'Wierzymy, że w wędkarstwie nie ma miejsca na przypadek. Wierzymy, że sukces nad wodą to nie kwestia szczęścia, ale wynik świadomej obserwacji, zrozumienia natury i adaptacji do warunków. Dla nas wędkarstwo to nie loteria – to szlachetna gra strategiczna, w której wygrywa ten, kto dostrzega więcej.',
      description2: 'Każdy nasz produkt jest wynikiem głębokiego namysłu nad konkretnym problemem, jaki stawia woda. Tworzymy rozwiązania, które pozwalają wędkarzowi "zmienić zmienne" na swoją korzyść. Nie sprzedajemy "magicznych przynęt" – dostarczamy narzędzia, które w rękach świadomego wędkarza stają się kluczem do wody.',
      description3: 'Dostarczamy unikalne, rzemieślnicze rozwiązania wędkarskie, zaprojektowane z obsesyjną dbałością o detale. Nasze produkty są stworzone, by reagować na zmienne warunki, dając Ci kontrolę w momentach, gdy inni liczą na cud.',
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
    notify: {
      badge: 'Premiera: luty/marzec 2026',
      title: 'Bądź pierwszy!',
      description: 'Zostaw swój email, a powiadomimy Cię gdy RealFish JigHead będzie dostępny w sprzedaży.',
      placeholder: 'Twój adres email',
      button: 'Powiadom mnie',
      success: 'Zapisano!',
      successSub: 'Powiadomimy Cię o starcie sprzedaży.',
      error: 'Podaj prawidłowy adres email',
    },
    creator: {
      badge: 'Twórca produktu',
      title: 'Założyciel Bobola Fishing',
      description: 'Pasjonat wędkarstwa z wieloletnim doświadczeniem. RealFish JigHead to zwieńczenie lat obserwacji, testów i ciągłego doskonalenia projektu.',
      followFacebook: 'Obserwuj na Facebooku',
    },
    footer: {
      rights: 'Wszelkie prawa zastrzeżone',
      tagline: 'Wędkarstwo na najwyższym poziomie',
      community: 'Dołącz do naszej społeczności!',
      communityDesc: 'Śledź nowości, dziel się swoimi połowami i bądź na bieżąco z premierą RealFish JigHead.',
      joinFacebook: 'Dołącz na Facebooku',
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
      title: 'Über uns',
      tagline: 'Vorsprung durch Bewusstsein. Details, die das Ergebnis verändern.',
      description1: 'Wir glauben, dass beim Angeln kein Platz für Zufall ist. Wir glauben, dass Erfolg am Wasser keine Frage des Glücks ist, sondern das Ergebnis bewusster Beobachtung, des Verstehens der Natur und der Anpassung an die Bedingungen. Für uns ist Angeln keine Lotterie – es ist ein edles strategisches Spiel, bei dem derjenige gewinnt, der mehr sieht.',
      description2: 'Jedes unserer Produkte ist das Ergebnis eines tiefen Nachdenkens über ein spezifisches Problem, das das Wasser stellt. Wir schaffen Lösungen, die es dem Angler ermöglichen, "die Variablen" zu seinen Gunsten zu ändern. Wir verkaufen keine "Wunderköder" – wir liefern Werkzeuge, die in den Händen eines bewussten Anglers zum Schlüssel zum Wasser werden.',
      description3: 'Wir liefern einzigartige, handwerkliche Angellösungen, die mit obsessiver Liebe zum Detail entworfen wurden. Unsere Produkte sind geschaffen, um auf wechselnde Bedingungen zu reagieren und Ihnen Kontrolle zu geben, wenn andere auf ein Wunder hoffen.',
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
    notify: {
      badge: 'Premiere: Februar/März 2026',
      title: 'Seien Sie der Erste!',
      description: 'Hinterlassen Sie Ihre E-Mail und wir benachrichtigen Sie, wenn RealFish JigHead zum Verkauf verfügbar ist.',
      placeholder: 'Ihre E-Mail-Adresse',
      button: 'Benachrichtigen',
      success: 'Gespeichert!',
      successSub: 'Wir benachrichtigen Sie über den Verkaufsstart.',
      error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
    },
    creator: {
      badge: 'Produktschöpfer',
      title: 'Gründer von Bobola Fishing',
      description: 'Leidenschaftlicher Angler mit langjähriger Erfahrung. RealFish JigHead ist das Ergebnis jahrelanger Beobachtung, Tests und kontinuierlicher Verbesserung.',
      followFacebook: 'Auf Facebook folgen',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten',
      tagline: 'Angeln auf höchstem Niveau',
      community: 'Treten Sie unserer Community bei!',
      communityDesc: 'Verfolgen Sie Neuigkeiten, teilen Sie Ihre Fänge und bleiben Sie über die Premiere von RealFish JigHead informiert.',
      joinFacebook: 'Auf Facebook beitreten',
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
      title: 'About us',
      tagline: 'Advantage through awareness. Details that change the outcome.',
      description1: 'We believe there is no room for chance in fishing. We believe that success on the water is not a matter of luck, but the result of conscious observation, understanding nature, and adapting to conditions. For us, fishing is not a lottery – it is a noble strategic game where the one who sees more wins.',
      description2: 'Each of our products is the result of deep reflection on a specific problem posed by the water. We create solutions that allow the angler to "change the variables" in their favor. We do not sell "magic lures" – we provide tools that, in the hands of a conscious angler, become the key to the water.',
      description3: 'We deliver unique, artisanal fishing solutions designed with obsessive attention to detail. Our products are made to respond to changing conditions, giving you control in moments when others are counting on a miracle.',
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
    notify: {
      badge: 'Launch: February/March 2026',
      title: 'Be the first!',
      description: 'Leave your email and we will notify you when RealFish JigHead is available for purchase.',
      placeholder: 'Your email address',
      button: 'Notify me',
      success: 'Subscribed!',
      successSub: 'We will notify you about the sales launch.',
      error: 'Please enter a valid email address',
    },
    creator: {
      badge: 'Product Creator',
      title: 'Founder of Bobola Fishing',
      description: 'Passionate angler with years of experience. RealFish JigHead is the culmination of years of observation, testing, and continuous improvement.',
      followFacebook: 'Follow on Facebook',
    },
    footer: {
      rights: 'All rights reserved',
      tagline: 'Fishing at the highest level',
      community: 'Join our community!',
      communityDesc: 'Follow the news, share your catches, and stay updated on the RealFish JigHead premiere.',
      joinFacebook: 'Join on Facebook',
    },
  },
} as const;

export const useTranslation = (lang: Language) => translations[lang];
