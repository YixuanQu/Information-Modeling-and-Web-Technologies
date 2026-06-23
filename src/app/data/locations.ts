export type Location = {
  id: number;
  name: string;
  coordinates: [number, number];
  movie: string;
  year: number;
  director: string;
  scene: string;
  imageUrl: string;
  content: {
    brief: string;
    mid: string;
    long: string;
  };
  tone: {
    young: string;
    adult: string;
    scholar: string;
  };
  historicalTimeline: Array<{
    year: string;
    event: string;
  }>;
  metadata: {
    filmingDate: string;
    sceneType: string;
    duration: string;
    significance: string;
  };
};

export const locations: Location[] = [
  {
    id: 1,
    name: "Trevi Fountain",
    coordinates: [41.9009, 12.4833],
    movie: "La Dolce Vita",
    year: 1960,
    director: "Federico Fellini",
    scene: "Anita Ekberg's iconic fountain scene",
    imageUrl: "https://images.unsplash.com/photo-1713513281533-99a6f7ab0d92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUcmV2aSUyMEZvdW50YWluJTIwUm9tZXxlbnwxfHx8fDE3NzM4Mzk2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      brief: "The Trevi Fountain serves as the backdrop for one of cinema's most memorable scenes.",
      mid: "The Trevi Fountain, Rome's largest Baroque fountain, became immortalized in Fellini's La Dolce Vita. The scene captures the essence of post-war Italian cinema and the allure of Roman nightlife.",
      long: "The Trevi Fountain (Fontana di Trevi) represents one of the most significant intersections of cinematic history and Roman architectural heritage. Designed by Nicola Salvi and completed by Giuseppe Pannini in 1762, this Baroque masterpiece gained international recognition through Federico Fellini's La Dolce Vita (1960). The sequence featuring Anita Ekberg wading through the fountain's waters at dawn has become an enduring symbol of both the film and the city itself, epitomizing the dolce vita lifestyle that defined 1960s Rome."
    },
    tone: {
      young: "This is where that super famous movie scene was filmed! Anita Ekberg splashing around in the fountain at night is literally one of the coolest moments in film history.",
      adult: "Fellini's choice of the Trevi Fountain for La Dolce Vita was deliberate, using this baroque monument to contrast ancient Roman grandeur with modern celebrity culture.",
      scholar: "The Trevi Fountain sequence in La Dolce Vita functions as a liminal space where Fellini interrogates post-war Italian identity through the juxtaposition of baroque magnificence and contemporary decadence, establishing a dialectic between historical permanence and ephemeral celebrity culture."
    },
    historicalTimeline: [
      { year: "19 BC", event: "Aqua Virgo aqueduct constructed by Agrippa" },
      { year: "1732", event: "Pope Clement XII commissions fountain design" },
      { year: "1762", event: "Fountain completed by Giuseppe Pannini" },
      { year: "1960", event: "La Dolce Vita filming" },
      { year: "2007", event: "Major restoration completed" }
    ],
    metadata: {
      filmingDate: "March-April 1959",
      sceneType: "Night Exterior",
      duration: "4 minutes 20 seconds",
      significance: "Iconic scene defining Italian cinema"
    }
  },
  {
    id: 2,
    name: "Colosseum",
    coordinates: [41.8902, 12.4922],
    movie: "Roman Holiday",
    year: 1953,
    director: "William Wyler",
    scene: "Vespa ride past the amphitheater",
    imageUrl: "https://images.unsplash.com/photo-1662898290891-a6c7f022e851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvc3NldW0lMjBSb21lJTIwYW5jaWVudHxlbnwxfHx8fDE3NzM5MzA1NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      brief: "The Colosseum appears as Gregory Peck and Audrey Hepburn ride through Rome.",
      mid: "In Roman Holiday, the Colosseum represents eternal Rome, serving as a backdrop to the romantic narrative while connecting modern romance to ancient history.",
      long: "The Flavian Amphitheatre, commonly known as the Colosseum, stands as Rome's most recognizable monument and has featured in countless films since the birth of cinema. In William Wyler's Roman Holiday (1953), the structure provides more than mere scenery; it embodies the layered temporality of Rome itself. The film's innovative use of location shooting helped establish Rome as a character in its own right, with the Colosseum functioning as a symbol of both romantic timelessness and the weight of history."
    },
    tone: {
      young: "Audrey Hepburn and Gregory Peck zooming around on a Vespa with the Colosseum in the background? Pure romance vibes!",
      adult: "Roman Holiday's use of the Colosseum reflects post-war cinema's embrace of location filming, bringing authenticity and grandeur to romantic storytelling.",
      scholar: "The Colosseum's deployment in Roman Holiday exemplifies the neo-realist influence on Hollywood productions of the 1950s, wherein ancient monuments serve as palimpsests upon which contemporary narratives inscribe themselves, creating a dialogic relationship between classical antiquity and modern experience."
    },
    historicalTimeline: [
      { year: "70-80 AD", event: "Construction under Vespasian and Titus" },
      { year: "217 AD", event: "Major fire damage" },
      { year: "1349", event: "Earthquake causes significant structural damage" },
      { year: "1953", event: "Roman Holiday filming" },
      { year: "2000-2016", event: "Major restoration projects" }
    ],
    metadata: {
      filmingDate: "June-September 1952",
      sceneType: "Day Exterior",
      duration: "Brief establishing shot",
      significance: "Iconic romantic comedy location"
    }
  },
  {
    id: 3,
    name: "Spanish Steps",
    coordinates: [41.9059, 12.4823],
    movie: "Roman Holiday",
    year: 1953,
    director: "William Wyler",
    scene: "Princess Ann eating gelato",
    imageUrl: "https://images.unsplash.com/photo-1656948727580-fe50a45f1cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcGFuaXNoJTIwU3RlcHMlMjBSb21lfGVufDF8fHx8MTc3MzkzMDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      brief: "The Spanish Steps feature prominently in Audrey Hepburn's gelato scene.",
      mid: "The Spanish Steps sequence in Roman Holiday captures the essence of carefree Roman exploration, with Hepburn's Princess Ann experiencing ordinary pleasures against extraordinary architecture.",
      long: "The Scalinata di Trinità dei Monti, known as the Spanish Steps, connects the Piazza di Spagna with the French church of Trinità dei Monti. Built between 1723-1725, these 138 steps became cinematically famous through Roman Holiday's gelato scene. The location epitomizes the film's central theme: the tension between duty and desire, with the baroque staircase serving as a liminal space where royal protocol gives way to human spontaneity."
    },
    tone: {
      young: "This is the spot where Audrey Hepburn sits on the steps eating ice cream like a regular person—totally charming!",
      adult: "The Spanish Steps scene encapsulates the film's exploration of class and freedom, using Rome's public spaces as sites of personal liberation.",
      scholar: "The Spanish Steps sequence operates as a site of transgression wherein Hepburn's character temporarily inhabits the quotidian, utilizing Rome's baroque urbanism to negotiate the boundary between aristocratic obligation and democratic experience."
    },
    historicalTimeline: [
      { year: "1723-1725", event: "Steps designed by Francesco de Sanctis" },
      { year: "1953", event: "Roman Holiday filming brings international fame" },
      { year: "1995", event: "Major restoration completed" },
      { year: "2016", event: "Eating and drinking banned on steps" }
    ],
    metadata: {
      filmingDate: "August 1952",
      sceneType: "Day Exterior",
      duration: "3 minutes 15 seconds",
      significance: "Defining moment of cinematic innocence"
    }
  },
  {
    id: 4,
    name: "Roman Forum",
    coordinates: [41.8925, 12.4853],
    movie: "Gladiator",
    year: 2000,
    director: "Ridley Scott",
    scene: "Digital reconstruction reference",
    imageUrl: "https://images.unsplash.com/photo-1722694125653-18e4e8f5ef88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb21hbiUyMEZvcnVtJTIwYW5jaWVudCUyMHJ1aW5zfGVufDF8fHx8MTc3MzkzMDU0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      brief: "The Forum's ruins informed the digital recreation of ancient Rome in Gladiator.",
      mid: "While Gladiator was filmed primarily in Malta and Morocco, the Roman Forum served as crucial archaeological reference for recreating ancient Rome through CGI.",
      long: "The Forum Romanum, the civic and ceremonial center of ancient Rome, represents one of archaeology's most significant sites. For Ridley Scott's Gladiator (2000), extensive research of the Forum's remains informed the film's groundbreaking digital reconstruction of ancient Rome. This methodological approach—combining archaeological evidence with cinematic imagination—established new standards for historical accuracy in epic filmmaking, demonstrating how ruins can speak to contemporary visual technologies."
    },
    tone: {
      young: "The ruins here helped filmmakers imagine what ancient Rome actually looked like for Gladiator—pretty awesome research!",
      adult: "Gladiator's production team studied the Forum extensively to ensure their digital recreations maintained historical authenticity while serving dramatic purposes.",
      scholar: "The Roman Forum's role in Gladiator exemplifies the intersection of archaeological scholarship and digital cinema, wherein fragmentary material evidence undergoes remediation through CGI technology to produce what might be termed 'speculative reconstruction'—a visual argument about historical appearance."
    },
    historicalTimeline: [
      { year: "7th century BC", event: "Forum established as public space" },
      { year: "46 BC", event: "Julius Caesar begins major reconstruction" },
      { year: "410 AD", event: "Visigoth sack leads to decline" },
      { year: "1998-1999", event: "Gladiator pre-production research" },
      { year: "2020", event: "New archaeological discoveries" }
    ],
    metadata: {
      filmingDate: "Not directly filmed; research phase 1998",
      sceneType: "CGI Reference",
      duration: "N/A",
      significance: "Archaeological basis for digital reconstruction"
    }
  },
  {
    id: 5,
    name: "Piazza Navona",
    coordinates: [41.8992, 12.4731],
    movie: "Angels & Demons",
    year: 2009,
    director: "Ron Howard",
    scene: "Fountain of the Four Rivers sequence",
    imageUrl: "https://images.unsplash.com/photo-1773169277947-527f3052924d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb21lJTIwaGlzdG9yaWNhbCUyMGFyY2hpdGVjdHVyZSUyMHBhbm9yYW1hfGVufDF8fHx8MTc3MzkzMDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      brief: "Piazza Navona's baroque fountains feature in the thriller's Roman mysteries.",
      mid: "Built on the ruins of Domitian's stadium, Piazza Navona serves as a key location in Angels & Demons, with Bernini's fountains central to the plot's symbolic puzzle.",
      long: "Piazza Navona occupies the footprint of the ancient Stadium of Domitian (86 AD) and features three magnificent fountains, most notably Bernini's Fountain of the Four Rivers (1651). In Ron Howard's Angels & Demons, the piazza becomes a crucial waypoint in a thriller that weaves together baroque art, religious symbolism, and contemporary conspiracy. The film's use of the location exemplifies how cinema can transform architectural space into narrative structure, with Bernini's sculptures functioning as both physical monuments and plot devices."
    },
    tone: {
      young: "This oval plaza is where Tom Hanks solves clues hidden in Bernini's amazing baroque fountains—like a real-life puzzle game!",
      adult: "Angels & Demons leverages Piazza Navona's rich artistic heritage, transforming Bernini's masterpieces into elements of a contemporary thriller narrative.",
      scholar: "The deployment of Piazza Navona in Angels & Demons demonstrates the commodification of baroque artistry within popular thriller cinema, wherein Bernini's fountains undergo semiotic transformation from devotional art to secularized narrative signifiers within a Dan Brown-inflected conspiracy framework."
    },
    historicalTimeline: [
      { year: "86 AD", event: "Stadium of Domitian constructed" },
      { year: "1651", event: "Bernini completes Fountain of the Four Rivers" },
      { year: "1878", event: "Market relocated, piazza becomes purely ceremonial" },
      { year: "2008", event: "Angels & Demons filming" }
    ],
    metadata: {
      filmingDate: "June 2008",
      sceneType: "Day/Night Exterior",
      duration: "Multiple sequences, ~8 minutes total",
      significance: "Integration of baroque art into thriller narrative"
    }
  },
  {
    id: 6,
    name: "Via Veneto",
    coordinates: [41.9072, 12.4876],
    movie: "La Dolce Vita",
    year: 1960,
    director: "Federico Fellini",
    scene: "Paparazzi café culture",
    imageUrl: "https://images.unsplash.com/photo-1773169277947-527f3052924d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb21lJTIwaGlzdG9yaWNhbCUyMGFyY2hpdGVjdHVyZSUyMHBhbm9yYW1hfGVufDF8fHx8MTc3MzkzMDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      brief: "Via Veneto epitomized 1950s glamour and inspired the term 'paparazzi' from the film.",
      mid: "Via Veneto's sidewalk cafés became synonymous with la dolce vita lifestyle. Fellini's film both documented and critiqued this world, coining 'paparazzi' from the photographer character Paparazzo.",
      long: "Via Vittorio Veneto, constructed in the 1880s, became Rome's most fashionable boulevard during the 1950s and '60s. Federico Fellini's La Dolce Vita immortalized the street's café culture while simultaneously critiquing it. The film introduced the word 'paparazzi'—derived from the character Paparazzo—to international vocabulary. This street represents the intersection of cinema, celebrity culture, and urban space, where Fellini's camera both celebrated and deconstructed the mythology of Roman sophistication."
    },
    tone: {
      young: "This street was the ultimate hangout spot in the 1960s—celebrities, fashion, and the birth of paparazzi culture!",
      adult: "Via Veneto encapsulates post-war Rome's transformation into a glamorous hub, which Fellini both romanticized and critically examined.",
      scholar: "Via Veneto functions in La Dolce Vita as a heterotopic space where Fellini interrogates the performativity of celebrity culture, establishing the street as both actual location and symbolic terrain for examining post-war Italian identity's relationship to American-influenced modernity."
    },
    historicalTimeline: [
      { year: "1886", event: "Street completed as part of urban expansion" },
      { year: "1950s", event: "Becomes center of la dolce vita culture" },
      { year: "1959-1960", event: "La Dolce Vita filming" },
      { year: "1970s", event: "Decline as Rome's fashionable center" }
    ],
    metadata: {
      filmingDate: "March-August 1959",
      sceneType: "Day/Night Exterior",
      duration: "Multiple sequences throughout film",
      significance: "Coined term 'paparazzi', defined an era"
    }
  },
  {
    id: 7,
    name: "Castel Sant'Angelo",
    coordinates: [41.9031, 12.4663],
    movie: "Angels & Demons",
    year: 2009,
    director: "Ron Howard",
    scene: "Climactic Vatican infiltration",
    imageUrl: "https://images.unsplash.com/photo-1773169277947-527f3052924d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb21lJTIwaGlzdG9yaWNhbCUyMGFyY2hpdGVjdHVyZSUyMHBhbm9yYW1hfGVufDF8fHx8MTc3MzkzMDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      brief: "The castle features in the film's climactic sequence involving Vatican secrets.",
      mid: "Originally built as Hadrian's mausoleum, Castel Sant'Angelo's connection to the Vatican via the Passetto corridor makes it central to Angels & Demons' conspiracy narrative.",
      long: "Castel Sant'Angelo began as the Mausoleum of Hadrian (139 AD) before transforming into a fortress, papal residence, and prison. Its connection to the Vatican via the Passetto di Borgo, a secret elevated corridor, has fueled centuries of intrigue. Angels & Demons exploits this rich history, using the castle's multiple historical layers to construct a thriller narrative that conflates ancient Rome, medieval fortification, and Renaissance art within a contemporary conspiracy framework."
    },
    tone: {
      young: "This ancient fortress has a secret passage to the Vatican—perfect for the movie's dramatic escape scenes!",
      adult: "Castel Sant'Angelo's transformation from mausoleum to fortress provides the historical depth that grounds Angels & Demons' fictional intrigue.",
      scholar: "Castel Sant'Angelo exemplifies architectural palimpsest, wherein successive historical functions—mausoleum, fortress, prison, museum—accumulate meaning. Angels & Demons mobilizes this layered historicity to construct what Umberto Eco might term a 'hyper-reality' that conflates historical veracity with narrative speculation."
    },
    historicalTimeline: [
      { year: "139 AD", event: "Completed as Hadrian's mausoleum" },
      { year: "590", event: "Named after vision of Archangel Michael" },
      { year: "1277", event: "Passetto di Borgo corridor constructed" },
      { year: "1527", event: "Pope Clement VII takes refuge during Sack of Rome" },
      { year: "2008", event: "Angels & Demons filming" }
    ],
    metadata: {
      filmingDate: "June-July 2008",
      sceneType: "Day/Night Exterior and Interior",
      duration: "Multiple sequences, ~12 minutes total",
      significance: "Architectural palimpsest as narrative device"
    }
  },
  {
    id: 8,
    name: "Bocca della Verità",
    coordinates: [41.8881, 12.4817],
    movie: "Roman Holiday",
    year: 1953,
    director: "William Wyler",
    scene: "The famous hand-biting prank",
    imageUrl: "https://images.unsplash.com/photo-1773169277947-527f3052924d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb21lJTIwaGlzdG9yaWNhbCUyMGFyY2hpdGVjdHVyZSUyMHBhbm9yYW1hfGVufDF8fHx8MTc3MzkzMDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      brief: "Gregory Peck's improvised prank at the Mouth of Truth remains cinema's most charming moment.",
      mid: "The Bocca della Verità scene showcases Roman Holiday's playful spirit. Peck's improvised hand trick, which genuinely surprised Hepburn, captures spontaneous movie magic.",
      long: "The Bocca della Verità (Mouth of Truth), a 1st-century marble mask in the portico of Santa Maria in Cosmedin, became internationally famous through one of cinema's most spontaneous moments. When Gregory Peck pretended the ancient sculpture had bitten off his hand, Audrey Hepburn's unrehearsed reaction created authentic screen magic. This scene epitomizes Roman Holiday's approach to location filming: using Rome's ancient monuments not merely as backdrop but as interactive elements that generate genuine human moments within scripted narrative."
    },
    tone: {
      young: "The Mouth of Truth is this ancient lie detector that supposedly bites off liars' hands—Gregory Peck's prank totally scared Audrey Hepburn!",
      adult: "The Bocca della Verità sequence demonstrates how effective location shooting can capture unrehearsed moments that become more memorable than scripted scenes.",
      scholar: "The Bocca della Verità scene represents a metacinematic moment wherein Peck's improvisation ruptures the diegetic frame, producing Hepburn's authentic surprise—a rare instance where the actor's real emotional response merges with character emotion, problematizing boundaries between performance and spontaneity."
    },
    historicalTimeline: [
      { year: "1st century AD", event: "Marble disc created (possibly ancient drain cover)" },
      { year: "1632", event: "Placed in church portico" },
      { year: "1953", event: "Roman Holiday filming creates international fame" },
      { year: "Present", event: "Major tourist attraction with hours-long queues" }
    ],
    metadata: {
      filmingDate: "July 1952",
      sceneType: "Day Exterior",
      duration: "2 minutes 30 seconds",
      significance: "Iconic improvised moment in cinema history"
    }
  },
  {
    id: 9,
    name: "Pantheon",
    coordinates: [41.8986, 12.4768],
    movie: "Angels & Demons",
    year: 2009,
    director: "Ron Howard",
    scene: "First altar of science location",
    imageUrl: "https://images.unsplash.com/photo-1773169277947-527f3052924d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb21lJTIwaGlzdG9yaWNhbCUyMGFyY2hpdGVjdHVyZSUyMHBhbm9yYW1hfGVufDF8fHx8MTc3MzkzMDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      brief: "The Pantheon's famous oculus features in the film's symbolic puzzle trail.",
      mid: "As Rome's best-preserved ancient building, the Pantheon serves as the first 'altar of science' in Angels & Demons, with its revolutionary architecture symbolizing the tension between religion and science.",
      long: "The Pantheon, commissioned by Marcus Agrippa and rebuilt by Hadrian (126 AD), represents ancient Rome's architectural zenith. Its unreinforced concrete dome, with the famous oculus opening to the sky, remained the world's largest dome for over a millennium. In Angels & Demons, the Pantheon functions as the first waypoint in a trail connecting science and religion, its architectural innovation serving as metaphor for enlightenment thought. The building's transformation from pagan temple to Christian church (609 AD) mirrors the narrative's central theme."
    },
    tone: {
      young: "The Pantheon has this huge hole in the ceiling that lets in a beam of light—it looks incredible and plays a key role in the mystery!",
      adult: "Angels & Demons utilizes the Pantheon's architectural symbolism—its oculus connecting earth and heaven—as a visual metaphor for the science-religion dialogue.",
      scholar: "The Pantheon's deployment in Angels & Demons exemplifies the appropriation of architectural semiotics for narrative purposes, wherein the oculus functions as polysemous symbol—simultaneously representing ancient engineering prowess, divine illumination, and Enlightenment rationality within the film's discourse on faith and science."
    },
    historicalTimeline: [
      { year: "27 BC", event: "Original Pantheon built by Marcus Agrippa" },
      { year: "126 AD", event: "Hadrian rebuilds with current dome" },
      { year: "609 AD", event: "Converted to Christian church" },
      { year: "1870", event: "Becomes burial site for Italian kings" },
      { year: "2008", event: "Angels & Demons filming" }
    ],
    metadata: {
      filmingDate: "June 2008",
      sceneType: "Interior/Exterior",
      duration: "~6 minutes",
      significance: "Ancient architecture as symbolic narrative device"
    }
  },
  {
    id: 10,
    name: "Piazza del Popolo",
    coordinates: [41.9109, 12.4761],
    movie: "The Talented Mr. Ripley",
    year: 1999,
    director: "Anthony Minghella",
    scene: "Café scene and urban wanderings",
    imageUrl: "https://images.unsplash.com/photo-1773169277947-527f3052924d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb21lJTIwaGlzdG9yaWNhbCUyMGFyY2hpdGVjdHVyZSUyMHBhbm9yYW1hfGVufDF8fHx8MTc3MzkzMDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      brief: "The oval piazza provides the setting for Ripley's transformation in 1950s Rome.",
      mid: "Piazza del Popolo serves as a key location in The Talented Mr. Ripley, its grand neoclassical design reflecting the sophisticated world Ripley seeks to inhabit through deception.",
      long: "Piazza del Popolo, one of Rome's grandest squares, was redesigned by Giuseppe Valadier in neoclassical style (1811-1822). The piazza's twin churches and Egyptian obelisk create a theatrical urban space that perfectly suits The Talented Mr. Ripley's themes of performance and assumed identity. Minghella uses the location to visualize 1950s Rome as a stage where American expatriates perform European sophistication, with the piazza's architectural grandeur underscoring the gap between Ripley's aspirations and his origins."
    },
    tone: {
      young: "This massive oval square is where Tom Ripley hangs out pretending to be someone he's not—the perfect backdrop for identity games.",
      adult: "Piazza del Popolo embodies the sophisticated European milieu that Ripley desperately wants to belong to, making it an ideal setting for his psychological transformation.",
      scholar: "In The Talented Mr. Ripley, Piazza del Popolo functions as a heterotopic space where Valadier's neoclassical urbanism provides the architectural vocabulary for exploring themes of social performance, class aspiration, and identity fraud within the context of 1950s American-European cultural exchange."
    },
    historicalTimeline: [
      { year: "1589", event: "Obelisk erected by Pope Sixtus V" },
      { year: "1655-1679", event: "Twin churches built" },
      { year: "1811-1822", event: "Valadier's neoclassical redesign" },
      { year: "1998", event: "The Talented Mr. Ripley filming" }
    ],
    metadata: {
      filmingDate: "Spring-Summer 1998",
      sceneType: "Day Exterior",
      duration: "Multiple brief sequences",
      significance: "Neoclassical backdrop for psychological thriller"
    }
  },
  {
    id: 11,
    name: "Trastevere District",
    coordinates: [41.8897, 12.4688],
    movie: "La Grande Bellezza",
    year: 2013,
    director: "Paolo Sorrentino",
    scene: "Nightlife and reflection sequences",
    imageUrl: "https://images.unsplash.com/photo-1773169277947-527f3052924d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb21lJTIwaGlzdG9yaWNhbCUyMGFyY2hpdGVjdHVyZSUyMHBhbm9yYW1hfGVufDF8fHx8MTc3MzkzMDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      brief: "Trastevere's medieval streets provide atmospheric settings for Sorrentino's meditation on beauty and aging.",
      mid: "In La Grande Bellezza, Trastevere represents authentic Rome beneath the tourist surface. Sorrentino uses the district's winding streets and intimate piazzas to explore contemporary Roman life.",
      long: "Trastevere, whose name derives from 'trans Tiberim' (beyond the Tiber), retains its medieval character with narrow cobblestone streets and Renaissance churches. Paolo Sorrentino's La Grande Bellezza (The Great Beauty, 2013) utilizes Trastevere to contrast with the monumental Rome of tourist imagination. The district becomes a space of authenticity and melancholy, where protagonist Jep Gambardella navigates aging, memory, and the search for meaning. Sorrentino's visual treatment—combining steadicam fluidity with static contemplation—transforms Trastevere into a cinematic meditation on beauty's transience."
    },
    tone: {
      young: "Trastevere is this super charming neighborhood with narrow streets and awesome nightlife—perfect for the film's party scenes and deeper moments.",
      adult: "Sorrentino uses Trastevere's authentic character to ground La Grande Bellezza's philosophical inquiry into what constitutes meaningful beauty in contemporary life.",
      scholar: "Trastevere functions in La Grande Bellezza as a liminal zone between tourist spectacle and lived experience, wherein Sorrentino's baroque visual syntax interrogates the relationship between aesthetic surface and existential depth, positioning the district as both actual place and symbolic terrain for contemplating contemporary Roman identity."
    },
    historicalTimeline: [
      { year: "Ancient Rome", event: "Working-class and immigrant district" },
      { year: "12th-13th centuries", event: "Medieval urban fabric established" },
      { year: "1960s-70s", event: "Becomes bohemian artist quarter" },
      { year: "2012", event: "La Grande Bellezza filming" }
    ],
    metadata: {
      filmingDate: "Summer-Fall 2012",
      sceneType: "Day/Night Exterior and Interior",
      duration: "Multiple sequences throughout",
      significance: "Contemporary meditation on Roman beauty"
    }
  },
  {
    id: 12,
    name: "Villa Borghese",
    coordinates: [41.9142, 12.4853],
    movie: "Roman Holiday",
    year: 1953,
    director: "William Wyler",
    scene: "Romantic park stroll",
    imageUrl: "https://images.unsplash.com/photo-1773169277947-527f3052924d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb21lJTIwaGlzdG9yaWNhbCUyMGFyY2hpdGVjdHVyZSUyMHBhbm9yYW1hfGVufDF8fHx8MTc3MzkzMDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      brief: "Rome's largest park provides a romantic green refuge for Hepburn and Peck's characters.",
      mid: "Villa Borghese Gardens offer a pastoral contrast to Rome's urban monuments in Roman Holiday, allowing the romantic narrative to unfold in natural setting.",
      long: "Villa Borghese, Rome's third-largest public park, originated as a 17th-century villa and gardens for Cardinal Scipione Borghese. The 80-hectare park became public in 1903. In Roman Holiday, Wyler uses the gardens to create pastoral interludes that contrast with the city's architectural grandeur. The park sequences emphasize intimacy and naturalness, allowing Princess Ann's escape from protocol to manifest in physical freedom—running, laughing, existing without performance—within a controlled natural environment that mirrors the film's negotiation between freedom and constraint."
    },
    tone: {
      young: "Villa Borghese is this huge beautiful park where Audrey and Gregory get to just hang out and be themselves away from everything.",
      adult: "The Villa Borghese sequences provide essential breathing room in Roman Holiday's narrative, using natural landscape to emphasize the protagonists' emotional authenticity.",
      scholar: "Villa Borghese operates in Roman Holiday as pastoral topos within urban space, wherein the park's designed naturalism facilitates what might be termed a 'democratic interlude'—a temporary suspension of hierarchical social structures that nonetheless remains contained within aristocratic landscape architecture, thus reinforcing the film's ultimately conservative ideology."
    },
    historicalTimeline: [
      { year: "1605-1633", event: "Villa and gardens created for Cardinal Borghese" },
      { year: "1903", event: "Purchased by Italian state, opened to public" },
      { year: "1952", event: "Roman Holiday filming" },
      { year: "2000s", event: "Major restoration projects" }
    ],
    metadata: {
      filmingDate: "July 1952",
      sceneType: "Day Exterior",
      duration: "~4 minutes",
      significance: "Pastoral romance within urban context"
    }
  },
  {
    id: 13,
    name: "Cinecittà Studios",
    coordinates: [41.8503, 12.5768],
    movie: "Various (Fellini films)",
    year: 1937,
    director: "Multiple",
    scene: "Film production complex",
    imageUrl: "https://images.unsplash.com/photo-1773169277947-527f3052924d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb21lJTIwaGlzdG9yaWNhbCUyMGFyY2hpdGVjdHVyZSUyMHBhbm9yYW1hfGVufDF8fHx8MTc3MzkzMDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      brief: "Cinecittà is Rome's legendary film studio where countless classics were produced.",
      mid: "Founded under Mussolini and rebuilt after WWII, Cinecittà became the heart of Italian cinema, hosting productions from neo-realism through Fellini's baroque fantasies to contemporary blockbusters.",
      long: "Cinecittà Studios, founded in 1937, represents the industrial foundation of Rome's cinematic identity. While technically outside central Rome, no cinema walk is complete without acknowledging this site where 'Hollywood on the Tiber' productions of the 1950s-60s were filmed, where Fellini built his fantastical recreations of Rome, and where contemporary international productions continue. Cinecittà embodies the tension between Rome as real place and Rome as cinematic construct—a meta-location where the city's image is manufactured, challenged, and reimagined."
    },
    tone: {
      young: "This is where the magic happens—Cinecittà is the actual studio where so many famous Italian movies were made!",
      adult: "Cinecittà represents the industrial infrastructure behind Rome's cinematic mythology, where directors from Fellini to contemporary filmmakers have constructed their visions of the eternal city.",
      scholar: "Cinecittà functions as a site of cultural production wherein Rome undergoes continuous remediation—simultaneously documenting, constructing, and deconstructing the city's mythological status. The studio space represents what Marc Augé might term a 'non-place' that paradoxically generates Rome's place-based cinematic identity."
    },
    historicalTimeline: [
      { year: "1937", event: "Opened under Mussolini's regime" },
      { year: "1943-1947", event: "Damaged in war, used as refugee camp" },
      { year: "1950s-60s", event: "'Hollywood on the Tiber' era" },
      { year: "1960s-70s", event: "Fellini's masterpieces produced" },
      { year: "Present", event: "International co-productions continue" }
    ],
    metadata: {
      filmingDate: "1937-present",
      sceneType: "Production facility",
      duration: "N/A",
      significance: "Industrial foundation of Roman cinema"
    }
  },
  {
    id: 14,
    name: "EUR District",
    coordinates: [41.8346, 12.4762],
    movie: "The Conformist",
    year: 1970,
    director: "Bernardo Bertolucci",
    scene: "Fascist architecture sequences",
    imageUrl: "https://images.unsplash.com/photo-1773169277947-527f3052924d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb21lJTIwaGlzdG9yaWNhbCUyMGFyY2hpdGVjdHVyZSUyMHBhbm9yYW1hfGVufDF8fHx8MTc3MzkzMDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      brief: "EUR's fascist-era architecture provides the austere backdrop for Bertolucci's political thriller.",
      mid: "The EUR district, built under Mussolini for a 1942 exposition that never occurred, offers stark rationalist architecture that Bertolucci exploits to visualize fascist psychology in The Conformist.",
      long: "EUR (Esposizione Universale Roma) was designed as a monument to fascist ideology, intended to host a 1942 world's fair celebrating 20 years of fascism. Though incomplete when war intervened, the district was finished in the 1950s-60s. In Bernardo Bertolucci's The Conformist (1970), EUR's rationalist architecture—especially the iconic Palazzo della Civiltà Italiana—becomes a visual metaphor for fascist mentality. Cinematographer Vittorio Storaro uses the geometric severity of these buildings to externalize protagonist Marcello's psychological conformity and moral emptiness, demonstrating how architectural space can function as political commentary."
    },
    tone: {
      young: "EUR looks totally different from classic Rome—these stark, geometric buildings from Mussolini's era create an eerie atmosphere for this political thriller.",
      adult: "Bertolucci transforms EUR's fascist-era architecture into visual psychology, using its rationalist design to explore themes of conformity and ideological rigidity.",
      scholar: "EUR functions in The Conformist as what Siegfried Kracauer termed the 'mass ornament'—architectural space wherein fascist ideology materializes as aesthetic form. Bertolucci and Storaro's mise-en-scène transforms Mussolini's rationalist urbanism into a cinematic discourse on the relationship between spatial organization and authoritarian consciousness."
    },
    historicalTimeline: [
      { year: "1935", event: "Planning begins under Mussolini" },
      { year: "1938-1943", event: "Initial construction phase" },
      { year: "1950s-60s", event: "Completion as modern business district" },
      { year: "1969", event: "The Conformist filming" }
    ],
    metadata: {
      filmingDate: "1969",
      sceneType: "Day Exterior",
      duration: "Multiple sequences",
      significance: "Architecture as political psychology"
    }
  },
  {
    id: 15,
    name: "Janiculum Hill",
    coordinates: [41.8920, 12.4620],
    movie: "La Grande Bellezza",
    year: 2013,
    director: "Paolo Sorrentino",
    scene: "Panoramic Rome views and opening sequence",
    imageUrl: "https://images.unsplash.com/photo-1773169277947-527f3052924d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb21lJTIwaGlzdG9yaWNhbCUyMGFyY2hpdGVjdHVyZSUyMHBhbm9yYW1hfGVufDF8fHx8MTc3MzkzMDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    content: {
      brief: "The Janiculum offers Rome's most spectacular panoramic views, featured prominently in Sorrentino's film.",
      mid: "Janiculum Hill provides the vantage point for La Grande Bellezza's opening party sequence and serves as a recurring location where characters contemplate Rome's beauty and their own lives.",
      long: "The Janiculum Hill, though not one of Rome's original seven hills, offers the city's most comprehensive panoramic views, encompassing the entire historic center. Paolo Sorrentino opens La Grande Bellezza with an elaborate rooftop party sequence that utilizes this perspective to establish the film's central tension: the seductive surface beauty of Rome versus the search for deeper meaning. Throughout the film, characters return to elevated perspectives on the Janiculum to contemplate the city—and by extension, their lives—from a distance. This recurring motif of elevated observation becomes Sorrentino's visual metaphor for aesthetic appreciation and existential evaluation."
    },
    tone: {
      young: "The Janiculum gives you this incredible view of all of Rome—the perfect spot for the film's amazing opening party and reflective moments.",
      adult: "Sorrentino uses the Janiculum's panoramic perspective to establish visual metaphors for observation, judgment, and the attempt to comprehend Rome's overwhelming beauty as a totality.",
      scholar: "The Janiculum functions in La Grande Bellezza as what Foucault termed a 'heterotopia of illusion'—a real place that exposes other real spaces as illusory. Sorrentino's elevated perspective transforms Rome into spectacle while simultaneously critiquing spectacular culture, creating a reflexive commentary on the cinematic gaze itself and its relationship to beauty, meaning, and mortality."
    },
    historicalTimeline: [
      { year: "Ancient Rome", event: "Sacred to Janus, site of auguries" },
      { year: "1849", event: "Site of Republican defense against French" },
      { year: "1904", event: "Garibaldi monument erected" },
      { year: "2012", event: "La Grande Bellezza opening sequence" }
    ],
    metadata: {
      filmingDate: "Summer 2012",
      sceneType: "Night/Day Exterior",
      duration: "~10 minutes total across multiple sequences",
      significance: "Panoramic perspective as existential metaphor"
    }
  }
];
