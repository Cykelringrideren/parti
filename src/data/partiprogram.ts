export interface Chapter {
  number: string;
  slug: string;
  title: string;
  summary: string;
  content: string[];
  subheadings?: { title: string; paragraphs: string[] }[];
}

export const chapters: Chapter[] = [
  {
    number: "01",
    slug: "vision",
    title: "Vision",
    summary:
      "Den skandinaviske samfundsmodel er truet fra to sider. PLACEHOLDER NAVN eksisterer for at beskytte og videreudvikle den nordiske balance mellem personlig frihed, social lighed og h\u00f8j gensidig tillid.",
    content: [
      "Den skandinaviske samfundsmodel er en historisk unik og skr\u00f8belig balance mellem personlig frihed, social lighed og h\u00f8j gensidig tillid. Denne balance er ikke opst\u00e5et af sig selv. Den er vokset ud af en bestemt kultur, bestemte institutioner og en st\u00e6rk social kontrakt mellem borgere, der deler sprog, historie og grundl\u00e6ggende v\u00e6rdier.",
      "Denne model er i dag truet fra to sider. Fra religi\u00f8s konservatisme, s\u00e6rligt i form af islamisk p\u00e5virkning, der importerer patriarkalske normer, kollektivistisk \u00e6rkultur og en verdensanskuelse, som er uforenelig med nordisk individuel frihed og ligestilling. Og fra amerikanisering, der importerer markedsradikalisme, nedbrydning af velf\u00e6rdsstaten, kommerciel kulturel dominans og en polariserende identitetspolitik, som underminerer den pragmatiske og tillidsbaserede danske offentlighed.",
      "PLACEHOLDER NAVN eksisterer for at beskytte og videreudvikle den nordiske model. Vi forener socialliberal insisteren p\u00e5 individuelle rettigheder, lige muligheder og en st\u00e6rk velf\u00e6rdsstat med en nationalkonservativ forpligtelse over for dansk kultur, danske institutioner og den sammenh\u00e6ngskraft, der g\u00f8r friheden mulig.",
      "Vi tror p\u00e5, at personlig frihed og kulturel bevarelse ikke er mods\u00e6tninger. De er hinandens foruds\u00e6tninger.",
    ],
  },
  {
    number: "02",
    slug: "ideologisk-fundament",
    title: "Ideologisk fundament",
    summary:
      "Partiets ideologiske grundlag hviler p\u00e5 nordisk exceptionalisme, social liberalisme, national konservatisme og velf\u00e6rdsstaten som frihedsprojekt, forenet i et princip om kulturelt selvforsvar mod p\u00e5virkninger der undergraver nordiske v\u00e6rdier.",
    content: [],
    subheadings: [
      {
        title: "Nordisk exceptionalisme",
        paragraphs: [
          "Vi anerkender, at den skandinaviske kombination af personlig frihed, social tryghed, lav korruption, h\u00f8j tillid og demokratisk deltagelse er enest\u00e5ende i verdenshistorien. Den er ikke selvf\u00f8lgelig. Den kr\u00e6ver vedligeholdelse og beskyttelse.",
        ],
      },
      {
        title: "Social liberalisme",
        paragraphs: [
          "Enhver borger har ret til at leve sit liv i frihed, s\u00e5 l\u00e6nge det ikke skader andre. Staten har en aktiv rolle i at sikre lige muligheder gennem uddannelse, sundhed og social mobilitet. Individets rettigheder er ukr\u00e6nkelige.",
        ],
      },
      {
        title: "National konservatisme",
        paragraphs: [
          "Frihed eksisterer ikke i et vakuum. Den vokser ud af konkrete kulturelle og institutionelle rammer. Dansk sprog, danske traditioner, nordisk historie og f\u00e6lles v\u00e6rdier udg\u00f8r det fundament, som den individuelle frihed hviler p\u00e5. At beskytte dette fundament er ikke reaktion\u00e6rt, men n\u00f8dvendigt.",
        ],
      },
      {
        title: "Velf\u00e6rdsstaten som frihedsprojekt",
        paragraphs: [
          "Velf\u00e6rdsstaten er ikke blot omfordeling. Den er selve foruds\u00e6tningen for reel personlig frihed. Uden fri adgang til sundhed og uddannelse, uden social tryghed og uden et sikkerhedsnet er den individuelle frihed en illusion forbeholdt de privilegerede. Velf\u00e6rdsstaten fungerer kun inden for rammerne af en st\u00e6rk social kontrakt og kulturel tillid.",
        ],
      },
      {
        title: "Kulturelt selvforsvar",
        paragraphs: [
          "Den nordiske model hviler p\u00e5 bestemte v\u00e6rdier: individuel frihed, ligestilling, sekularisme, h\u00f8j tillid og demokratisk deltagelse. P\u00e5virkninger der undergraver disse v\u00e6rdier skal modvirkes, uanset deres oprindelse. Det er ikke fremmedfrygt, men kulturelt selvforsvar. De aktuelt vigtigste udfordringer kommer fra islamisk konservatisme, der bringer religi\u00f8s autoritet over individuel frihed, patriarkalske familiestrukturer og normer uforenelige med nordisk ligestilling og sekularisme. Og fra amerikanisering, der importerer markedsradikalisme, kulturel polarisering, identitetspolitisk splittelse og tech-platformenes stigende kulturelle magt over dansk offentlighed.",
        ],
      },
    ],
  },
  {
    number: "03",
    slug: "udlaendinge-og-integration",
    title: "Udl\u00e6ndinge og integration",
    summary:
      "Danmark skal f\u00f8re en stram og realistisk udl\u00e6ndingepolitik, hvor integration er kulturel, ikke blot \u00f8konomisk, og parallelsamfund aktivt modvirkes.",
    content: [
      "Danmark skal f\u00f8re en stram og realistisk udl\u00e6ndingepolitik. Asylpolitikken skal v\u00e6re restriktiv, og familiesammenf\u00f8ring begr\u00e6nses til tilf\u00e6lde, hvor integration er realistisk.",
      "Integration er ikke blot \u00f8konomisk selvfors\u00f8rgelse. Den er kulturel. Nye borgere skal tilslutte sig de v\u00e6rdier, der b\u00e6rer det danske samfund: individuel frihed, ligestilling mellem k\u00f8nnene, demokratisk deltagelse, respekt for sekularisme og accept af dansk lov over religi\u00f8se normer.",
      "Parallelsamfund er uforenelige med den sociale kontrakt. Staten har ret og pligt til aktivt at modvirke dannelsen af lukkede samfund, hvor danske frihedsv\u00e6rdier ikke g\u00e6lder. Det g\u00e6lder boligpolitik, skolepolitik og civilsamfundsindsatser.",
      "Argumentet for stram udl\u00e6ndingepolitik er ikke etnisk, men kulturelt. Den nordiske frihedsmodel foruds\u00e6tter, at borgerne deler et grundl\u00e6ggende s\u00e6t af v\u00e6rdier. Indvandring fra kulturer med fundamentalt anderledes normer, s\u00e6rligt vedr\u00f8rende k\u00f8n, religion og individuel frihed, udg\u00f8r en risiko for denne model, medmindre integrationen er reel og gennemgribende.",
    ],
  },
  {
    number: "04",
    slug: "velfaerd-og-oekonomi",
    title: "Velf\u00e6rd og \u00f8konomi",
    summary:
      "Velf\u00e6rdsstaten skal forsvares mod privatisering og markedsg\u00f8relse. Sundhed, uddannelse og \u00e6ldrepleje skal v\u00e6re universelle og skattefinansierede, og offentlige institutioner skal ledes af fagfolk, ikke af markedslogik.",
    content: [
      "Velf\u00e6rdsstaten er kernen i den nordiske model og skal forsvares mod privatisering, udhuling og markedsg\u00f8relse. Sundhed, uddannelse og \u00e6ldrepleje skal v\u00e6re universelle, skattefinansierede og af h\u00f8j kvalitet.",
      "Partiet accepterer markeds\u00f8konomi som den mest effektive m\u00e5de at organisere produktion og innovation p\u00e5, men ser ureguleret kapitalisme som en trussel mod social sammenh\u00e6ngskraft. Markedet er et redskab, ikke en ideologi.",
      "Progressiv beskatning fastholdes som fundament for velf\u00e6rdssamfundet. De bredeste skuldre skal b\u00e6re de tungeste byrder.",
      "New Public Management, konsulentkultur og markedslogik i den offentlige forvaltning skal rulles tilbage. Offentlige institutioner skal ledes af fagfolk med tillid, ikke af resultatkontrakter og procesoptimering importeret fra den amerikanske erhvervskultur.",
      "Privatisering af kernevelf\u00e6rd afvises. Hospitaler, skoler og \u00e6ldrepleje h\u00f8rer til i offentligt regi, hvor hensynet er borgerens ve og vel, ikke aktion\u00e6rens afkast.",
    ],
  },
  {
    number: "05",
    slug: "skat-og-afgifter",
    title: "Skat og afgifter",
    summary:
      "Beskatning er prisen for et frit samfund. Skatten p\u00e5 arbejde skal lempes, mens kapital, formue og boliggevinster beskattes h\u00e5rdere. Skattely bek\u00e6mpes kompromitl\u00f8st.",
    content: [
      "Skat og afgifter er ikke en indt\u00e6gtskilde for staten. De er redskaber til at sikre individuelle rettigheder, lige muligheder og et fungerende f\u00e6llesskab. Beskatning er den pris, vi betaler for et samfund, hvor enhver borger har reel frihed. M\u00e5let er ikke generel lighed, men lige muligheder og en retf\u00e6rdig fordeling af byrder.",
    ],
    subheadings: [
      {
        title: "Skat p\u00e5 arbejde og kapital",
        paragraphs: [
          "Skatten p\u00e5 arbejde skal lempes. Det er gennem arbejde, borgeren opbygger sin uafh\u00e6ngighed og bidrager til f\u00e6llesskabet. H\u00f8j skat p\u00e5 arbejdsindkomst strider mod partiets grundl\u00e6ggende m\u00e5l om personlig frihed og selvbestemmelse. Til geng\u00e6ld skal kapitalindkomst, arv og formue beskattes h\u00e5rdere. Koncentration af formue og \u00f8konomisk magt hos en lille elite er uforenelig med den nordiske samfundsmodel. Skatten skal modvirke, at privilegier og muligheder nedarves frem for at blive skabt.",
        ],
      },
      {
        title: "Afgifter d\u00e6kker omkostninger",
        paragraphs: [
          "Afgifter skal ikke v\u00e6re vilk\u00e5rlige indt\u00e6gtskilder. De skal d\u00e6kke de reelle samfundsomkostninger ved det, der er p\u00e5lagt afgiften. Sundhedsskadelige produkter og f\u00f8devarer skal afgiftsbelaegges, s\u00e5 afgiften d\u00e6kker de dokumenterede omkostninger for sundhedsv\u00e6senet. Tobak, alkohol, st\u00e6rkt forarbejdede f\u00f8devarer og sukker p\u00e5f\u00f8rer sundhedssystemet enorme udgifter. Disse udgifter skal b\u00e6res af forbrugeren og producenten, ikke af skatteyderne generelt. Samme princip g\u00e6lder for milj\u00f8skadelig produktion.",
        ],
      },
      {
        title: "Boligbeskatning",
        paragraphs: [
          "Boligejerskab skal ikke v\u00e6re et skattely. Gevinster ved boligsalg skal beskattes. Ejendomsv\u00e6rdiskat og grundskyld skal afskaffes og erstattes af beskatning af den reelle gevinst ved salg. Det er enklere, mere retf\u00e6rdigt og rammer der, hvor formuen faktisk realiseres. Boligejere skal ikke straffes for at blive boende, men betale skat, n\u00e5r de h\u00f8ster gevinsten. En reform af boligbeskatningen skal bidrage til at flytte skattebyrden fra arbejde og l\u00f8bende boligskatter til kapitalgevinster.",
        ],
      },
      {
        title: "Skattely og international skatteunddragelse",
        paragraphs: [
          "Skattely er tyveri fra f\u00e6llesskabet. Multinationale selskaber og formuende enkeltpersoner, der systematisk unddrager sig beskatning, underminerer den sociale kontrakt. Kampen mod skattely skal f\u00f8res p\u00e5 europ\u00e6isk plan. De s\u00e5kaldte lovlige skattestrukturer, hvor multinationale kanaliserer overskud gennem Luxembourg, Irland og Holland, skal lukkes. Danmark skal presse aktivt p\u00e5 i EU for en effektiv minimumsbeskatning af selskaber. Digital beskatning af tech-giganter, der udvinder enorm v\u00e6rdi fra danske borgeres data og opm\u00e6rksomhed uden at betale tilsvarende skat i Danmark, skal gennemf\u00f8res.",
        ],
      },
    ],
  },
  {
    number: "06",
    slug: "arbejdsmarked",
    title: "Arbejdsmarked",
    summary:
      "Den danske flexicurity-model og trepartssamarbejdet skal bevares og styrkes. Social dumping og amerikanske platforms\u00f8konomier, der omg\u00e5r danske vilk\u00e5r, skal bek\u00e6mpes.",
    content: [
      "Den danske flexicurity-model er en af verdens bedste arbejdsmarkedsmodeller og skal bevares og styrkes. Trepartssamarbejdet mellem stat, arbejdsgivere og fagbev\u00e6gelse er en nordisk institution af fundamental betydning.",
      "Fagbev\u00e6gelsen er ikke en s\u00e6rinteresse. Den er en b\u00e6rende institution i den nordiske model og skal anerkendes som s\u00e5dan.",
      "Social dumping og l\u00f8ntryk fra \u00f8steurop\u00e6isk arbejdskraft skal bek\u00e6mpes effektivt. Danske l\u00f8n- og arbejdsvilk\u00e5r m\u00e5 ikke undergraves af fri bev\u00e6gelighed uden kontrol.",
      "Amerikanske platforms\u00f8konomier og gig-arbejde, der omg\u00e5r danske arbejdsmarkedsregler, skal reguleres h\u00e5rdt. Uber, Wolt og lignende skal overholde danske vilk\u00e5r, eller de skal ikke operere i Danmark.",
      "Arbejdsmarkedet skal pr\u00e6ges af tryghed, ordentlighed og gensidig respekt. Ikke af den amerikanske hire-and-fire-kultur.",
    ],
  },
  {
    number: "07",
    slug: "oekonomisk-demokrati",
    title: "\u00d8konomisk demokrati",
    summary:
      "PLACEHOLDER NAVN st\u00e5r for en moderne, decentral form for \u00f8konomisk demokrati med medarbejderejerskab, medbestemmelse og spredning af \u00f8konomisk magt.",
    content: [
      "PLACEHOLDER NAVN st\u00e5r for en moderne form for \u00f8konomisk demokrati. Ikke de centraliserede l\u00f8nmodtagerfonde fra 1970erne, men en decentral model forankret i den enkelte virksomhed og den enkelte medarbejder.",
      "Reel frihed kr\u00e6ver ikke blot politisk medbestemmelse, men ogs\u00e5 indflydelse p\u00e5 de \u00f8konomiske strukturer, der former borgernes hverdag. I den amerikanske kapitalismmodel koncentreres ejerskab og magt hos aktion\u00e6rer og topledelse. Det nordiske alternativ er demokratisering af \u00f8konomien: at sprede ejerskab, medbestemmelse og \u00f8konomisk magt til dem, der skaber v\u00e6rdierne.",
    ],
    subheadings: [
      {
        title: "Medarbejderejerskab",
        paragraphs: [
          "Virksomheder skal have st\u00e6rke skattem\u00e6ssige incitamenter til at dele ejerskab med medarbejderne. Overskudsdeling og medarbejderaktier skal g\u00f8res til et naturligt element i dansk erhvervsliv. N\u00e5r medarbejderne har andel i den virksomhed, de bygger op, styrkes b\u00e5de produktivitet, ansvarsf\u00f8lelse og personlig uafh\u00e6ngighed.",
        ],
      },
      {
        title: "Medbestemmelse",
        paragraphs: [
          "Medarbejderrepr\u00e6sentation i virksomhedernes bestyrelser skal udvides og styrkes. Danmark har allerede en tradition for medarbejdervalgte bestyrelsesmedlemmer, men ordningen skal g\u00f8res mere omfattende og g\u00e6lde flere virksomheder. De mennesker, der dagligt driver en virksomhed, skal have reel indflydelse p\u00e5 dens strategiske retning.",
        ],
      },
      {
        title: "Decentral forvaltning",
        paragraphs: [
          "\u00d8konomisk demokrati skal forvaltes lokalt, ikke centralt. Medarbejdernes ejerskab og indflydelse skal forankres i den enkelte virksomhed, ikke i centrale fonde styret af organisationer eller staten. Det er et frihedsprojekt, ikke et kollektivistisk projekt. M\u00e5let er den frie, uafh\u00e6ngige borger, der har medejerskab over sit eget arbejdsliv.",
        ],
      },
      {
        title: "Imod magtkoncentration",
        paragraphs: [
          "\u00d8konomisk magtkoncentration er en trussel mod demokratiet, uanset om magten samles hos staten eller hos private kapitalejere. Den amerikanske model, hvor en lille elite kontrollerer enorme \u00f8konomiske ressourcer, er uforenelig med den nordiske samfundskontrakt. Spredning af ejerskab er ikke blot et \u00f8konomisk sp\u00f8rgsm\u00e5l, men et demokratisk sp\u00f8rgsm\u00e5l.",
        ],
      },
    ],
  },
  {
    number: "08",
    slug: "kultur-og-medier",
    title: "Kultur og medier",
    summary:
      "Dansk kultur, sprog og public service skal forsvares aktivt mod amerikanske tech-platformes dominans og import af amerikansk kulturkampslogik.",
    content: [
      "Dansk kultur, dansk sprog og nordisk kulturproduktion skal forsvares aktivt. Public service er en hj\u00f8rnesten i det danske demokrati og skal finansieres robust og beskyttes mod politisk indblanding.",
      "Amerikanske tech-platforme (Google, Meta, TikTok, X) ud\u00f8ver en kulturel og demokratisk magt over dansk offentlighed, som er uacceptabel. Deres indflydelse skal begr\u00e6nses gennem regulering, beskatning og styrkelse af danske og europ\u00e6iske alternativer.",
      "Folkekirken bevares som kulturb\u00e6rende institution og ramme om f\u00e6llesskab, tradition og livets overgange. Men religion skal ikke have indflydelse p\u00e5 lovgivning. Sekularisme er en nordisk kernev\u00e6rdi.",
      "Import af amerikansk kulturkampslogik afvises. Den danske offentlighed bygger p\u00e5 pragmatisme, saglighed og villighed til kompromis. Polarisering efter amerikansk forbillede, hvor politiske modstandere g\u00f8res til fjender, er en trussel mod den demokratiske kultur.",
      "Dansk sprog skal styrkes i uddannelse, medier og offentlig forvaltning. Un\u00f8dig brug af engelsk i danske institutioner, virksomheder og universiteter modvirkes.",
    ],
  },
  {
    number: "09",
    slug: "uddannelse",
    title: "Uddannelse",
    summary:
      "Folkeskolen skal v\u00e6re en dannelsesinstitution, universiteterne skal v\u00e6re frie og uafh\u00e6ngige, og fri og lige adgang til uddannelse er en grundsten i den nordiske model.",
    content: [
      "Folkeskolen er en af Danmarks vigtigste institutioner. Den skal v\u00e6re en dannelsesinstitution, der former demokratiske medborgere med forankring i dansk kultur, nordisk historie og kritisk t\u00e6nkning.",
      "Folkeskolen skal prioritere faglighed, f\u00e6llesskab og dannelse. Eleverne skal l\u00e6re at t\u00e6nke selv, ikke at t\u00e6nke det rigtige.",
      "Universiteter og viderg\u00e5ende uddannelser skal v\u00e6re frie og uafh\u00e6ngige. Markedsg\u00f8relse af uddannelsessektoren, hvor universiteterne tvinges til at t\u00e6nke i produktion og oms\u00e6tning, afvises.",
      "Amerikanskinspirede f\u00e6nomener som \u201csafe spaces\u201d, trigger warnings og aktivistisk p\u00e6dagogik h\u00f8rer ikke hjemme i dansk uddannelse. Universiteterne skal v\u00e6re steder for fri t\u00e6nkning, \u00e5ben debat og videnskabelig uenighed, ikke for ideologisk konformitet.",
      "Fri og lige adgang til uddannelse er en grundsten i den nordiske model. SU-systemet fastholdes og styrkes som garant for, at talent og ikke for\u00e6ldres pengepung afg\u00f8r, hvem der uddanner sig.",
    ],
  },
  {
    number: "10",
    slug: "klima-natur-og-energi",
    title: "Klima, natur og energi",
    summary:
      "Beskyttelse af dansk natur, stabilt klima og energisuver\u00e6nitet h\u00e6nger ul\u00f8seligt sammen. Biodiversiteten skal genoprettes, landbruget forpligtes til b\u00e6redygtig omstilling, og kernekraft skal indg\u00e5 i Danmarks energimix.",
    content: [
      "Beskyttelse af natur, klima og energiforsyning h\u00e6nger ul\u00f8seligt sammen. Ren natur er livskvalitet. Stabilt klima er sikkerhed. Energisuver\u00e6nitet er frihed. PLACEHOLDER NAVN forbinder alle tre i en pragmatisk, gr\u00f8n politik forankret i dansk natur og nordisk selvbestemmelse.",
    ],
    subheadings: [
      {
        title: "Natur og biodiversitet",
        paragraphs: [
          "Vores f\u00f8rsteprioritet er dansk natur. Biodiversiteten skal genoprettes. Vilde levesteder, naturlige vandl\u00f8b og ur\u00f8rte naturomr\u00e5der skal udvides markant. Danmarks natur er forarmet efter \u00e5rtiers intensivt landbrug, og det skal vendes.",
        ],
      },
      {
        title: "Drikkevand og vandmilj\u00f8",
        paragraphs: [
          "Drikkevandet er helligt. Grundvandet skal beskyttes kompromisl\u00f8st mod pesticider, nitrat og kemisk forurening. Rent drikkevand direkte fra hanen er en dansk arv, som vi ikke m\u00e5 miste. Vandmilj\u00f8et i s\u00f8er, \u00e5er og de indre farvande skal forbedres drastisk. Kv\u00e6lstofudledning og forurening fra landbruget skal reduceres m\u00e6rkbart. Det danske havmilj\u00f8 er i krise, og det kr\u00e6ver handling nu.",
        ],
      },
      {
        title: "Landbrug",
        paragraphs: [
          "Landbruget er Danmarks st\u00f8rste forurener af vandmilj\u00f8, grundvand og natur. Forureneren betaler. Det betyder, at landbruget har en aktiv forpligtelse til at omstille sig til b\u00e6redygtig produktion og selv b\u00e6re omkostningerne ved den forurening, det for\u00e5rsager. \u00c5rtiers undtagelser og s\u00e6rhensyn har f\u00f8rt til et vandmilj\u00f8 i krise, truet biodiversitet og pesticider i grundvandet. Den tid er forbi.",
        ],
      },
      {
        title: "St\u00f8tte forpligter",
        paragraphs: [
          "Dansk landbrug modtager enorm offentlig st\u00f8tte, b\u00e5de fra EU og fra danske skatteydere. Den st\u00f8tte giver samfundet ret til at forvente og kr\u00e6ve en markant forbedring af landbrugets milj\u00f8indsats. St\u00f8tte og forurening kan ikke eksistere side om side. Offentlige midler skal betinges af konkrete, m\u00e5lbare fremskridt i b\u00e6redygtighed, reduktion af forurening og beskyttelse af natur og vandmilj\u00f8. Landbruget skal ikke kompenseres for at holde op med at forurene, men forpligtes til det.",
        ],
      },
      {
        title: "Energi og gr\u00f8n omstilling",
        paragraphs: [
          "Energisuver\u00e6nitet er et frihedsprojekt. Danmark skal ikke v\u00e6re afh\u00e6ngigt af russisk gas, mellem\u00f8stlig olie eller ustabile globale energimarkeder. Kernekraft skal v\u00e6re en del af Danmarks energimix. Moderne kernekraftteknologi, herunder sm\u00e5 modul\u00e6re reaktorer (SMR), leverer stabil, CO2-fri energi uafh\u00e6ngigt af vejr og vind. Danmark b\u00f8r oph\u00e6ve det politiske forbud mod kernekraft og igangs\u00e6tte en national udredning. Vedvarende energi fra vind og sol skal fortsat udbygges, men med realistisk erkendelse af, at de alene ikke kan levere en stabil grundlast. Energilagring og infrastruktur skal udvikles parallelt.",
        ],
      },
      {
        title: "Global klimapolitik",
        paragraphs: [
          "Den globale klimakrise er reel. Danmarks bidrag til l\u00f8sningen skal v\u00e6re reelt, ikke symbolsk. Vi bidrager ikke ved at ofre mest, men ved at opfinde bedst. Dansk ekspertise inden for vindenergi, energieffektivitet og gr\u00f8n teknologi er et st\u00e6rkere bidrag end ensidige reduktionsm\u00e5l, der ingen global forskel g\u00f8r. Danmark skal bidrage konstruktivt i internationale klimafora og dele viden og teknologi. Men vi afviser, at klimapolitik bruges som l\u00f8ftestang for en bredere politisk dagsorden om omfordeling, afv\u00e6kst eller grundl\u00e6ggende samfunds\u00e6ndringer.",
        ],
      },
    ],
  },
  {
    number: "11",
    slug: "udenrigs-og-forsvar",
    title: "Udenrigs og forsvar",
    summary:
      "Danmark skal v\u00e6re et loyalt NATO-medlem, styrke det nordiske samarbejde og bevare suver\u00e6nitet i EU. Udenrigspolitikken skal v\u00e6re pragmatisk, ikke aktivistisk.",
    content: [],
    subheadings: [
      {
        title: "NATO og forsvar",
        paragraphs: [
          "Danmark skal v\u00e6re et loyalt og trov\u00e6rdigt NATO-medlem. I en usikker verden er det transatlantiske forsvarssamarbejde en n\u00f8dvendighed. Forsvarsbudgettet skal leve op til alliancens forpligtelser. Men NATO er en milit\u00e6r alliance, ikke et kulturelt v\u00e6rdif\u00e6llesskab. At USA er vores sikkerhedspolitiske allierede, betyder ikke, at den amerikanske samfundsmodel er vores forbillede.",
        ],
      },
      {
        title: "Nordisk samarbejde",
        paragraphs: [
          "Det nordiske samarbejde skal styrkes markant. De nordiske lande deler historie, sprog, kultur og samfundsmodel. Et t\u00e6ttere nordisk samarbejde inden for forsvar, kultur, uddannelse og forskning er naturligt og b\u00f8r prioriteres langt h\u00f8jere.",
        ],
      },
      {
        title: "EU",
        paragraphs: [
          "EU accepteres som ramme for handel, fri bev\u00e6gelighed og f\u00e6lles regulering, hvor det giver mening. Men yderligere afgivelse af suver\u00e6nitet til EU afvises. Danmark skal bevare kontrol over udl\u00e6ndingepolitik, velf\u00e6rdspolitik, skattepolitik og kulturpolitik. De danske EU-forbehold afspejler en sund skepsis og b\u00f8r fastholdes, indtil der er bred folkelig opbakning til at \u00e6ndre dem.",
        ],
      },
      {
        title: "Udenrigspolitik generelt",
        paragraphs: [
          "Dansk udenrigspolitik skal v\u00e6re pragmatisk, ikke aktivistisk. Danmark er et lille land og skal agere derefter. Vi skal forsvare vores interesser, bidrage til international stabilitet og fremme demokrati og menneskerettigheder, men uden den missionerende aktivisme, der pr\u00e6ger amerikansk udenrigspolitik.",
        ],
      },
    ],
  },
  {
    number: "12",
    slug: "retspolitik",
    title: "Retspolitik",
    summary:
      "Individuelle rettigheder og retssikkerhed er ukr\u00e6nkelige. Masseoverv\u00e5gning afvises, og kriminalitet knyttet til parallelsamfund m\u00f8des med konsekvens.",
    content: [
      "Individuelle rettigheder og retssikkerhed er ukr\u00e6nkelige. Enhver borger har ret til en fair rettergang, og retsstatens principper m\u00e5 aldrig b\u00f8jes af politisk pres.",
      "Masseoverv\u00e5gning afvises. Borgernes ret til privatliv skal beskyttes mod b\u00e5de statslig overv\u00e5gning og private virksomheders datah\u00f8st.",
      "Kriminalitet knyttet til parallelsamfund, \u00e6reskultur, social kontrol og religi\u00f8s tvang skal m\u00f8des med konsekvens og h\u00e5rdhed. Disse forbrydelser er ikke blot kriminelle handlinger, men angreb p\u00e5 den individuelle frihed, som hele vores samfundsmodel hviler p\u00e5.",
      "Strafferammer skal generelt afspejle en balance mellem retf\u00e6rdighed, resocialisering og beskyttelse af samfundet. Den nordiske tradition for en human strafferet bevares, men med sk\u00e6rpet fokus p\u00e5 forbrydelser, der underminerer den sociale kontrakt.",
    ],
  },
  {
    number: "13",
    slug: "ligestilling",
    title: "Ligestilling",
    summary:
      "Juridisk og reel ligestilling er en nordisk kernev\u00e6rdi. LGBTQ-rettigheder beskyttes, men import af amerikansk identitetspolitik afvises.",
    content: [
      "Juridisk og reel ligestilling mellem k\u00f8nnene er en nordisk kernev\u00e6rdi og forsvares uden forbehold. Ligestilling g\u00e6lder alle uanset k\u00f8n, seksualitet og baggrund.",
      "LGBTQ-rettigheder er individuelle rettigheder og beskyttes som s\u00e5danne. Ingen borger skal diskrimineres p\u00e5 baggrund af seksuel orientering eller k\u00f8nsidentitet.",
      "Men partiet afviser, at k\u00f8n og seksualitet g\u00f8res til identitetspolitiske kampfelter efter amerikansk forbillede. Ligestilling i Danmark er opn\u00e5et og opretholdes gennem institutioner, lovgivning og kulturelle normer, ikke gennem aktivisme, sprogpoliti og udskamning.",
      "Import af amerikanske begreber og debatformer om k\u00f8n, race og identitet modvirkes aktivt. Den danske ligestillingsdebat skal forblive dansk: pragmatisk, n\u00f8gtern og forankret i konkrete rettigheder, ikke i ideologiske kategorier.",
    ],
  },
  {
    number: "14",
    slug: "teknologi-og-digitalisering",
    title: "Teknologi og digitalisering",
    summary:
      "Danmark skal forme teknologien, ikke formes af den. Teknologisk suver\u00e6nitet, databeskyttelse, ansvarlig AI og regulering af sociale medier er afg\u00f8rende for det 21. \u00e5rhundredes frie samfund.",
    content: [
      "Teknologi er et af de mest afg\u00f8rende sp\u00f8rgsm\u00e5l for det 21. \u00e5rhundredes samfund. Den kan styrke borgernes frihed, velstand og sikkerhed, eller den kan koncentrere magt hos dem der kontrollerer den. PLACEHOLDER NAVN er pro-teknologi og pro-innovation, men insisterer p\u00e5 teknologisk suver\u00e6nitet: Danmark og Europa skal forme teknologien, ikke formes af den.",
    ],
    subheadings: [
      {
        title: "Teknologisk suver\u00e6nitet",
        paragraphs: [
          "Teknologisk suver\u00e6nitet er en foruds\u00e6tning for reel national selvbestemmelse. N\u00e5r danske borgeres data lagres p\u00e5 amerikanske servere, n\u00e5r danske medier er afh\u00e6ngige af amerikanske platforme, og n\u00e5r dansk infrastruktur k\u00f8rer p\u00e5 udenlandsk teknologi, har Danmark afgivet suver\u00e6nitet lige s\u00e5 reelt som ved en traktat. Danmark skal investere i og opbygge dansk og europ\u00e6isk teknologisk kapacitet inden for kritisk infrastruktur, databehandling og digital kommunikation.",
        ],
      },
      {
        title: "Digital infrastruktur",
        paragraphs: [
          "Danmarks digitale infrastruktur skal v\u00e6re robust, sikker og under demokratisk kontrol. Kritiske systemer i sundhed, energi, forsvar og offentlig forvaltning skal s\u00e5 vidt muligt bygge p\u00e5 europ\u00e6isk teknologi og hostes p\u00e5 europ\u00e6isk jord. Afh\u00e6ngighed af enkelst\u00e5ende udenlandske leverand\u00f8rer er en sikkerhedsrisiko, der skal reduceres systematisk.",
        ],
      },
      {
        title: "Data og privatliv",
        paragraphs: [
          "Borgernes data tilh\u00f8rer borgerne. Danske og europ\u00e6iske databeskyttelsesregler skal h\u00e5ndh\u00e6ves konsekvent, og virksomheder der bryder dem skal m\u00f8des med sanktioner, der faktisk m\u00e6rkes. Den nuv\u00e6rende praksis, hvor amerikanske tech-virksomheder udtr\u00e6kker enorme m\u00e6ngder persondata fra danske borgere med tvivlsomt samtykke, er uacceptabel.",
        ],
      },
      {
        title: "AI i offentlig forvaltning og sundhed",
        paragraphs: [
          "AI kan forbedre sagsbehandling, diagnostik og ressourceallokering markant. Danmark skal v\u00e6re frontl\u00f8ber i at anvende AI til at styrke velf\u00e6rdsstaten, forudsat at borgernes retssikkerhed beskyttes, at algoritmiske beslutninger kan forklares og ankes, og at menneskeligt ansvar altid er entydigt placeret.",
        ],
      },
      {
        title: "AI og arbejdsmarkedet",
        paragraphs: [
          "AI vil forandre arbejdslivet grundl\u00e6ggende. Partiet anerkender, at AI vil erstatte nogle jobfunktioner og skabe nye. Flexicurity-modellen er det rigtige svar: fleksibilitet for virksomheder til at implementere ny teknologi, kombineret med social sikkerhed og massiv opkvalificering for de medarbejdere, der ber\u00f8res. Gevinsten ved automatisering skal deles, ikke koncentreres hos kapitalejerne.",
        ],
      },
      {
        title: "Dansk og europ\u00e6isk AI-konkurrenceevne",
        paragraphs: [
          "Det er ikke i Danmarks interesse, at AI-udviklingen domineres fuldst\u00e6ndigt af amerikanske og kinesiske virksomheder. Danmark skal investere i forskning, talent og infrastruktur, der g\u00f8r det muligt for danske og europ\u00e6iske virksomheder at konkurrere. Overregulering, der kv\u00e6ler europ\u00e6isk innovation mens den lader amerikanske og kinesiske akt\u00f8rer dominere, er kontraproduktiv.",
        ],
      },
      {
        title: "Sociale medier og digital dannelse",
        paragraphs: [
          "Sociale mediers indflydelse p\u00e5 b\u00f8rn og unge er en folkesundhedskrise. Platforme designet til afh\u00e6ngighedsskabende adf\u00e6rd skal reguleres h\u00e5rdt, herunder aldersbegr\u00e6nsninger der faktisk h\u00e5ndh\u00e6ves, forbud mod manipulerende designm\u00f8nstre rettet mod mindr\u00e5rige, og ansvar for platformene for det indhold, deres algoritmer fremmer. Digital dannelse skal styrkes massivt i folkeskolen.",
        ],
      },
    ],
  },
];
