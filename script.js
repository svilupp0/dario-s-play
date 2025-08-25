// Database delle domande per i livelli
const questions = {
    1: [ // Livello 1: Il Regno dei Microrganismi
        {
            question: "Quali sono i tre tipi di microrganismi che hanno il maggiore impatto sugli alimenti?",
            answers: [
                "Virus, alghe e protozoi",
                "Batteri, lieviti e muffe",
                "Solo batteri",
                "Alghe, protozoi e virus"
            ],
            correct: 1
        },
        {
            question: "Quale tra queste NON è una capacità fondamentale dei microrganismi negli alimenti?",
            answers: [
                "Trasformare la materia prima",
                "Rispondere agli stimoli",
                "Moltiplicarsi",
                "Cambiare colore"
            ],
            correct: 3
        },
        {
            question: "Come si chiamano i microrganismi che causano malattie al consumatore?",
            answers: [
                "Alteranti",
                "Patogeni",
                "Indigeni",
                "Inerti"
            ],
            correct: 1
        },
        {
            question: "Quale batterio lattico è citato come esempio di microrganismo positivo?",
            answers: [
                "Escherichia coli",
                "Salmonella spp.",
                "Lactobacillus helveticus",
                "Staphylococcus aureus"
            ],
            correct: 2
        },
        {
            question: "Come si riproducono principalmente i batteri?",
            answers: [
                "Per gemmazione",
                "Per accrescimento apicale",
                "Per scissione binaria",
                "Per spore"
            ],
            correct: 2
        },
        {
            question: "Quale fase della crescita microbica è caratterizzata dall'adattamento al substrato?",
            answers: [
                "Fase esponenziale",
                "Fase stazionaria",
                "Fase di latenza",
                "Fase di morte"
            ],
            correct: 2
        },
        {
            question: "Durante quale fase i microrganismi crescono alla massima velocità?",
            answers: [
                "Fase lag",
                "Fase logaritmica",
                "Fase stazionaria",
                "Fase di morte"
            ],
            correct: 1
        },
        {
            question: "Cosa caratterizza la fase stazionaria della crescita microbica?",
            answers: [
                "Crescita massima",
                "Adattamento al substrato",
                "Equilibrio tra crescita e morte",
                "Diminuzione delle cellule"
            ],
            correct: 2
        },
        {
            question: "Quale microrganismo è citato come esempio di produttore di tossine?",
            answers: [
                "Lactobacillus bulgaricus",
                "Saccharomyces cerevisiae",
                "Staphylococcus aureus",
                "Penicillium roqueforti"
            ],
            correct: 2
        },
        {
            question: "Come si riproducono principalmente i lieviti?",
            answers: [
                "Per scissione binaria",
                "Per gemmazione",
                "Per accrescimento apicale",
                "Per frammentazione"
            ],
            correct: 1
        }
    ],
    2: [ // Livello 2: Origine e Colonizzazione
        {
            question: "Cosa si intende per microrganismi di origine endogena?",
            answers: [
                "Microrganismi dall'ambiente esterno",
                "Microrganismi che provengono dall'organismo da cui è prodotto l'alimento",
                "Microrganismi aggiunti intenzionalmente",
                "Microrganismi dall'aria"
            ],
            correct: 1
        },
        {
            question: "Quali sono le principali fonti di microrganismi di origine esogena?",
            answers: [
                "Solo l'acqua",
                "Solo il suolo",
                "Suolo, acqua, aria e flora cutanea",
                "Solo la flora cutanea"
            ],
            correct: 2
        },
        {
            question: "Quale habitat è dominato prevalentemente da lieviti e muffe?",
            answers: [
                "Epidermide dei mammiferi",
                "Pelle dei pesci",
                "Frutti",
                "Latte bovino"
            ],
            correct: 2
        },
        {
            question: "Cosa rappresenta l'HABITAT in un ecosistema alimentare?",
            answers: [
                "La comunità biologica",
                "Le caratteristiche abiotiche dell'ambiente",
                "I gruppi di individui della stessa specie",
                "L'insieme delle popolazioni"
            ],
            correct: 1
        },
        {
            question: "Cosa si intende per NICCHIA in microbiologia alimentare?",
            answers: [
                "Le caratteristiche fisiche dell'ambiente",
                "Comunità biologica con attività metabolica specifica",
                "Gruppi della stessa specie",
                "Insieme di tutte le popolazioni"
            ],
            correct: 1
        },
        {
            question: "Quali batteri dominano nella carne fresca refrigerata?",
            answers: [
                "Batteri Gram positivi",
                "Batteri Gram negativi psicrotrofi",
                "Solo lattobacilli",
                "Solo stafilococchi"
            ],
            correct: 1
        },
        {
            question: "Cosa succede alla microflora quando la carne viene trattata con sale?",
            answers: [
                "Rimane invariata",
                "Si sposta verso batteri Gram negativi",
                "Si sposta verso batteri Gram positivi",
                "Scompare completamente"
            ],
            correct: 2
        },
        {
            question: "Gli alimenti sono ecosistemi:",
            answers: [
                "Statici e omogenei",
                "Statici e eterogenei",
                "Dinamici e omogenei",
                "Dinamici e eterogenei"
            ],
            correct: 3
        },
        {
            question: "Quale genere batterico è tipico dell'epidermide dei mammiferi?",
            answers: [
                "Pseudomonas",
                "Lactobacillus",
                "Staphylococcus",
                "Clostridium"
            ],
            correct: 2
        },
        {
            question: "Da cosa dipende principalmente la colonizzazione di un alimento?",
            answers: [
                "Solo dalla temperatura",
                "Solo dal pH",
                "Dall'ecologia e sviluppo delle comunità microbiche",
                "Solo dall'umidità"
            ],
            correct: 2
        }
    ],
    3: [ // Livello 3: Contaminazione Alimentare
        {
            question: "Quanti casi di gastroenterite vengono segnalati annualmente nel mondo?",
            answers: [
                "Circa 1 miliardo",
                "Circa 3 miliardi",
                "Oltre 5 miliardi",
                "Circa 2 miliardi"
            ],
            correct: 2
        },
        {
            question: "Quale soglia di cellule microbiche indica un alimento CONTAMINATO?",
            answers: [
                "> 10² UFC/g",
                "> 10³ UFC/g",
                "> 10⁴ UFC/g",
                "> 10⁵ UFC/g"
            ],
            correct: 2
        },
        {
            question: "Quale tipo di contaminazione è più rilevante per la ristorazione?",
            answers: [
                "Rischio chimico",
                "Rischio fisico",
                "Rischio biologico",
                "Tutti ugualmente"
            ],
            correct: 2
        },
        {
            question: "Quando si verifica la contaminazione primaria?",
            answers: [
                "Durante la lavorazione",
                "Durante la conservazione",
                "In fase di produzione delle materie prime",
                "Durante il trasporto"
            ],
            correct: 2
        },
        {
            question: "La contaminazione secondaria è principalmente causata da:",
            answers: [
                "Acqua, suolo e aria",
                "Personale e attrezzature",
                "Animali ammalati",
                "Materie prime contaminate"
            ],
            correct: 1
        },
        {
            question: "Cosa si intende per contaminazione crociata?",
            answers: [
                "Contaminazione da animali",
                "Contaminazione chimica",
                "Trasferimento di microrganismi tra alimenti",
                "Contaminazione da superfici"
            ],
            correct: 2
        },
        {
            question: "Quale caratteristica hanno i batteri dei generi Clostridium e Bacillus?",
            answers: [
                "Non sopravvivono al calore",
                "Formano spore in condizioni avverse",
                "Crescono solo in aerobiosi",
                "Non sono patogeni"
            ],
            correct: 1
        },
        {
            question: "Il rischio fisico è determinato da:",
            answers: [
                "Microrganismi patogeni",
                "Sostanze chimiche tossiche",
                "Pezzi di macchinari, vetro, metalli",
                "Spore batteriche"
            ],
            correct: 2
        },
        {
            question: "Le vie dirette di contaminazione dell'uomo includono:",
            answers: [
                "Solo le mani",
                "Pelle e saliva",
                "Solo attrezzature",
                "Solo vestiario"
            ],
            correct: 1
        },
        {
            question: "L'aumento del rischio microbiologico è dovuto principalmente a:",
            answers: [
                "Cambiamento delle abitudini alimentari",
                "Peggioramento dell'igiene",
                "Aumento dei patogeni",
                "Cambiamenti climatici"
            ],
            correct: 0
        },
        {
            question: "Cosa succede ai batteri sporigeni quando le condizioni ambientali migliorano?",
            answers: [
                "Muoiono definitivamente",
                "Ritornano alla forma vegetativa e ricominciano a riprodursi",
                "Rimangono sempre in forma di spore",
                "Si trasformano in virus"
            ],
            correct: 1
        },
        {
            question: "Quali microrganismi sono favoriti dalle operazioni di refrigerazione?",
            answers: [
                "Microrganismi termofili",
                "Microrganismi psicrotrofi come Pseudomonas",
                "Solo batteri sporigeni",
                "Microrganismi mesofili"
            ],
            correct: 1
        },
        {
            question: "A quale temperatura si eliminano completamente le spore batteriche?",
            answers: [
                "65-80°C",
                "100°C",
                "110°C",
                "121°C per 15-20 minuti"
            ],
            correct: 3
        },
        {
            question: "Quali microrganismi sono favoriti dalle operazioni sottovuoto?",
            answers: [
                "Microrganismi aerobi obbligati",
                "Microrganismi anaerobi obbligati e facoltativi",
                "Solo muffe",
                "Solo lieviti"
            ],
            correct: 1
        },
        {
            question: "Quali microrganismi sono favoriti dall'essiccamento degli alimenti?",
            answers: [
                "Batteri",
                "Virus",
                "Muffe, che sono poco esigenti per quanto riguarda l'aw",
                "Protozoi"
            ],
            correct: 2
        },
        {
            question: "Quali sono i principali microrganismi Gram-negativi veicolati da acqua e terreno?",
            answers: [
                "Lactobacillus e Streptococcus",
                "Aeromonas, Escherichia, Pseudomonas, Vibrio, Yersinia",
                "Solo Staphylococcus",
                "Solo Clostridium"
            ],
            correct: 1
        },
        {
            question: "Cosa veicolano principalmente aria e polvere?",
            answers: [
                "Solo batteri vegetativi",
                "Microrganismi sporigeni, micrococchi e spore di muffe",
                "Solo virus",
                "Solo protozoi"
            ],
            correct: 1
        },
        {
            question: "Quale parte dell'animale rappresenta una fonte importante di batteri patogeni?",
            answers: [
                "Solo la pelle",
                "Solo i muscoli",
                "Il tratto gastro-intestinale",
                "Solo le ossa"
            ],
            correct: 2
        },
        {
            question: "Cosa determina la dominanza di specifici microrganismi durante le operazioni tecnologiche?",
            answers: [
                "Solo la temperatura",
                "La variazione delle condizioni fisico-chimiche (aw, pH, temperatura, areazione)",
                "Solo il pH",
                "Solo l'umidità"
            ],
            correct: 1
        },
        {
            question: "Quando aumenta maggiormente il rischio di contaminazione negli alimenti?",
            answers: [
                "Durante la conservazione in frigorifero",
                "Ad ogni manipolazione",
                "Solo durante la cottura",
                "Solo durante il confezionamento"
            ],
            correct: 1
        }
    ],
    4: [ // Livello 4: Microrganismi Indicatori
        {
            question: "Qual è la differenza principale tra marker, indici e indicatori?",
            answers: [
                "Sono tutti sinonimi",
                "I marker indicano pericolo, gli indici riassumono presenza di patogeni, gli indicatori mostrano qualità generale",
                "Solo i marker sono importanti",
                "Gli indicatori sono sempre patogeni"
            ],
            correct: 1
        },
        {
            question: "Quali sono le tre categorie principali di microrganismi indicatori?",
            answers: [
                "Batteri, lieviti, muffe",
                "Aerobi, anaerobi, facoltativi",
                "Indicatori di salubrità, di qualità, di tipicità",
                "Gram-positivi, Gram-negativi, sporigeni"
            ],
            correct: 2
        },
        {
            question: "Cosa rappresenta la microflora aerobia totale?",
            answers: [
                "Solo i batteri patogeni",
                "La popolazione batterica in grado di svilupparsi in aerobiosi e mesofilia",
                "Solo i lieviti",
                "Solo le muffe"
            ],
            correct: 1
        },
        {
            question: "Quale caratteristica devono avere i microrganismi indicatori di salubrità?",
            answers: [
                "Essere sempre patogeni",
                "Essere facilmente rilevabili e correlati con i patogeni di interesse",
                "Crescere solo ad alte temperature",
                "Essere presenti solo negli alimenti alterati"
            ],
            correct: 1
        },
        {
            question: "Cosa sono i coliformi?",
            answers: [
                "Batteri Gram-positivi sporigeni",
                "Batteri Gram-negativi, non sporigeni, anaerobi facoltativi, che fermentano il lattosio",
                "Solo lieviti",
                "Virus enterici"
            ],
            correct: 1
        },
        {
            question: "Qual è la temperatura caratteristica per i coliformi fecali?",
            answers: [
                "30°C",
                "37°C",
                "44,5°C",
                "50°C"
            ],
            correct: 2
        },
        {
            question: "Cosa indica la presenza di E. coli in alimenti trattati al calore?",
            answers: [
                "Normale presenza",
                "Contaminazione post-processo",
                "Buona qualità del prodotto",
                "Processo di fermentazione attivo"
            ],
            correct: 1
        },
        {
            question: "Quali sono le caratteristiche dei clostridi solfito-riduttori?",
            answers: [
                "Gram-negativi, aerobi, non sporigeni",
                "Gram-positivi, sporigeni, anaerobi, riducono i solfiti",
                "Solo lieviti",
                "Virus resistenti"
            ],
            correct: 1
        },
        {
            question: "Quando diventano predominanti lieviti e muffe negli alimenti?",
            answers: [
                "Sempre",
                "Mai",
                "Quando le condizioni per la crescita batterica diventano meno favorevoli",
                "Solo durante la cottura"
            ],
            correct: 2
        },
        {
            question: "Cosa sono le Enterobacteriaceae come indicatori?",
            answers: [
                "Indicatori di processo per rilevare anomalie nei trattamenti",
                "Solo patogeni",
                "Solo saprofiti",
                "Indicatori di fermentazione"
            ],
            correct: 0
        },
        {
            question: "Quali microrganismi sono considerati indicatori di tipicità?",
            answers: [
                "Solo patogeni",
                "Microrganismi responsabili dei processi fermentativi come batteri lattici e lieviti",
                "Solo contaminanti",
                "Solo sporigeni"
            ],
            correct: 1
        },
        {
            question: "Qual è il pH minimo di crescita per i clostridi solfito-riduttori?",
            answers: [
                "pH 3",
                "pH 4",
                "pH 5",
                "pH 7"
            ],
            correct: 2
        },
        {
            question: "Cosa producono i batteri lattici durante la fermentazione?",
            answers: [
                "Solo gas",
                "Acido lattico che riduce il pH e inibisce i patogeni",
                "Solo alcol",
                "Solo proteine"
            ],
            correct: 1
        },
        {
            question: "Quale test è caratteristico per identificare E. coli?",
            answers: [
                "Solo catalasi",
                "Produzione di indolo, rosso-metile positivo, VP negativo",
                "Solo fermentazione del lattosio",
                "Solo crescita in aerobiosi"
            ],
            correct: 1
        },
        {
            question: "Perché gli streptococchi fecali sono utili come indicatori?",
            answers: [
                "Sono sempre patogeni",
                "Hanno notevole resistenza e indicano ricontaminazioni post-processo",
                "Crescono solo ad alte temperature",
                "Sono presenti solo nell'acqua"
            ],
            correct: 1
        },
        {
            question: "Cosa indica un alto numero di microrganismi aerobi totali?",
            answers: [
                "Sempre sicurezza alimentare",
                "Informazioni sulla storia produttiva e stato di conservazione",
                "Presenza di vitamine",
                "Assenza di contaminazione"
            ],
            correct: 1
        },
        {
            question: "Quali sono le caratteristiche generali delle Enterobacteriaceae?",
            answers: [
                "Gram-positivi, sporigeni, aerobi",
                "Gram-negativi, non sporigeni, anaerobi facoltativi, catalasi positivi",
                "Solo lieviti",
                "Solo anaerobi obbligati"
            ],
            correct: 1
        },
        {
            question: "In quali prodotti lieviti e muffe diventano problematici?",
            answers: [
                "Solo nella carne",
                "Prodotti caseari fermentati, bevande fermentate, pane, frutta",
                "Solo nel pesce",
                "Solo negli oli"
            ],
            correct: 1
        },
        {
            question: "Cosa sono le muffe termoresistenti?",
            answers: [
                "Muffe che muoiono sempre al calore",
                "Muffe che possono sopravvivere ai processi termici per frutta",
                "Solo lieviti",
                "Batteri sporigeni"
            ],
            correct: 1
        },
        {
            question: "Qual è lo scopo ultimo delle analisi microbiologiche alimentari?",
            answers: [
                "Aumentare i costi",
                "Ottenere un prodotto conforme, sano e salubre per il consumatore",
                "Ridurre la shelf-life",
                "Aumentare la contaminazione"
            ],
            correct: 1
        }
    ],
    5: [ // Livello 5: Fattori che influenzano la crescita microbica
        {
            question: "Qual è il valore di aw dell'acqua pura?",
            answers: [
                "aw = 0",
                "aw = 0.5",
                "aw = 1.0",
                "aw = 2.0"
            ],
            correct: 2
        },
        {
            question: "Quale valore di aw è considerato il limite minimo per la crescita della maggior parte dei batteri patogeni?",
            answers: [
                "aw = 0.85",
                "aw = 0.90",
                "aw = 0.95",
                "aw = 0.99"
            ],
            correct: 2
        },
        {
            question: "Quali microrganismi sono più resistenti a bassi valori di aw?",
            answers: [
                "Batteri Gram-negativi",
                "Virus",
                "Muffe xerofite",
                "Batteri sporigeni"
            ],
            correct: 2
        },
        {
            question: "Cosa succede all'attività dell'acqua quando si aggiunge sale agli alimenti?",
            answers: [
                "Aumenta",
                "Rimane invariata",
                "Diminuisce",
                "Diventa negativa"
            ],
            correct: 2
        },
        {
            question: "Quale pH è considerato neutro?",
            answers: [
                "pH = 5",
                "pH = 6",
                "pH = 7",
                "pH = 8"
            ],
            correct: 2
        },
        {
            question: "Quali microrganismi preferiscono ambienti acidi (pH basso)?",
            answers: [
                "Batteri patogeni",
                "Lieviti e muffe",
                "Virus",
                "Batteri alcalofili"
            ],
            correct: 1
        },
        {
            question: "Qual è l'intervallo di temperatura ottimale per i microrganismi mesofili?",
            answers: [
                "0-15°C",
                "15-45°C",
                "45-65°C",
                "65-80°C"
            ],
            correct: 1
        },
        {
            question: "Come vengono chiamati i microrganismi che crescono a temperature inferiori a 20°C?",
            answers: [
                "Termofili",
                "Mesofili",
                "Psicrofili",
                "Ipertermofili"
            ],
            correct: 2
        },
        {
            question: "Quale fattore è determinante per la crescita dei microrganismi anaerobi?",
            answers: [
                "Presenza di ossigeno",
                "Assenza di ossigeno",
                "Alta temperatura",
                "Basso pH"
            ],
            correct: 1
        },
        {
            question: "Cosa rappresenta il potenziale redox (Eh) di un alimento?",
            answers: [
                "Il contenuto di acqua",
                "La capacità di cedere o acquisire elettroni",
                "La temperatura di conservazione",
                "Il contenuto di sale"
            ],
            correct: 1
        },
        {
            question: "Quali microrganismi sono favoriti da un basso potenziale redox?",
            answers: [
                "Microrganismi aerobi",
                "Microrganismi anaerobi",
                "Solo lieviti",
                "Solo muffe"
            ],
            correct: 1
        },
        {
            question: "Qual è l'aw minima per la crescita di Staphylococcus aureus?",
            answers: [
                "aw = 0.83",
                "aw = 0.86",
                "aw = 0.90",
                "aw = 0.95"
            ],
            correct: 1
        },
        {
            question: "Come si può ridurre l'aw in un alimento?",
            answers: [
                "Aggiungendo acqua",
                "Riducendo il sale",
                "Essiccamento o aggiunta di soluti",
                "Aumentando la temperatura"
            ],
            correct: 2
        },
        {
            question: "Quale categoria di alimenti ha generalmente aw più bassa?",
            answers: [
                "Alimenti freschi",
                "Alimenti disidratati",
                "Alimenti surgelati",
                "Alimenti in salamoia"
            ],
            correct: 1
        },
        {
            question: "Cosa significa il termine 'alofilo' riferito ai microrganismi?",
            answers: [
                "Che amano le alte temperature",
                "Che amano il sale",
                "Che amano l'acidità",
                "Che amano l'ossigeno"
            ],
            correct: 1
        },
        {
            question: "Quale valore di aw blocca la crescita di quasi tutti i microrganismi patogeni?",
            answers: [
                "aw < 0.60",
                "aw < 0.70",
                "aw < 0.85",
                "aw < 0.95"
            ],
            correct: 2
        },
        {
            question: "Come influisce la combinazione di più fattori (temperatura, pH, aw) sulla crescita microbica?",
            answers: [
                "Non ha effetti",
                "Ha effetti additivi",
                "Ha effetti sinergici (moltiplicativi)",
                "Ha solo effetti negativi"
            ],
            correct: 2
        },
        {
            question: "Qual è l'aw tipica del pane fresco?",
            answers: [
                "aw = 0.70-0.80",
                "aw = 0.85-0.90",
                "aw = 0.94-0.97",
                "aw = 0.99"
            ],
            correct: 2
        },
        {
            question: "Perché i microrganismi osmofili sono importanti nell'industria alimentare?",
            answers: [
                "Crescono solo in acqua pura",
                "Resistono ad alte concentrazioni di zucchero",
                "Non crescono mai",
                "Crescono solo a temperature elevate"
            ],
            correct: 1
        },
        {
            question: "Quale strategia combinata è più efficace per prevenire la crescita microbica?",
            answers: [
                "Solo refrigerazione",
                "Solo acidificazione",
                "Tecnologia delle barriere multiple",
                "Solo disidratazione"
            ],
            correct: 2
        }
    ]
};

let currentLevel = 1;
let currentQuestion = 0;
let score = 0;
let levelQuestions = [];
let powerups = {
    fiftyFifty: 2,
    skipQuestion: 1,
    timeBonus: 2,
    doublePoints: 1
};
let activePowerups = {
    timeBonus: false,
    doublePoints: false
};
let eliminatedAnswers = [];

// Dati per il cruciverba
const crosswordData = {
    grid: [
        ['', '', '', 'E', '', '', '', '', 'S', '', '', '', '', '', '', ''],
        ['E', '', '', 'N', '', 'P', 'A', 'T', 'O', 'G', 'E', 'N', 'I', '', '', ''],
        ['C', '', '', 'D', '', 'S', '', '', 'R', '', '', '', 'N', '', 'S', ''],
        ['O', 'S', 'A', 'L', 'U', 'B', 'R', 'I', 'T', 'A', '', '', 'D', '', 'C', ''],
        ['S', '', '', 'O', '', 'C', '', '', 'G', '', 'Q', '', 'I', '', 'I', ''],
        ['I', '', '', 'G', '', 'R', '', '', 'E', '', 'U', '', 'C', '', 'S', ''],
        ['S', 'M', 'U', 'F', 'F', 'E', '', '', 'N', '', 'A', '', 'A', 'T', 'S', ''],
        ['T', '', '', 'N', '', 'T', '', 'H', 'A', 'B', 'I', 'T', 'A', 'E', 'I', ''],
        ['E', 'L', 'I', 'E', 'V', 'I', 'T', 'I', '', '', 'T', '', 'T', 'R', 'O', ''],
        ['M', '', '', 'A', '', 'O', '', '', 'C', 'R', 'O', 'C', 'I', 'A', 'T', 'A'],
        ['A', '', '', '', '', 'F', '', '', '', '', '', '', 'O', 'M', 'N', ''],
        ['', '', '', '', '', 'I', 'M', 'A', 'R', 'K', 'E', 'R', 'R', 'O', 'E', ''],
        ['', '', 'C', 'O', 'L', 'I', 'F', 'O', 'R', 'M', 'I', '', 'I', 'F', '', ''],
        ['', '', '', '', '', '', 'T', 'I', 'P', 'I', 'C', 'I', 'T', 'A', '', ''],
        ['', '', 'L', 'A', 'T', 'T', 'I', 'C', 'I', '', '', '', '', 'I', '', ''],
        ['', '', '', '', '', '', '', '', 'A', 'E', 'R', 'O', 'B', 'I', 'A', '']
    ],
    words: [
        {
            word: "PATOGENI",
            clue: "Microrganismi che causano malattie al consumatore (Livello 1)",
            row: 1,
            col: 5,
            direction: "horizontal",
            number: 1
        },
        {
            word: "PSICROTROFI",
            clue: "Microrganismi favoriti dalle basse temperature (Livello 3)",
            row: 1,
            col: 5,
            direction: "vertical",
            number: 2
        },
        {
            word: "INDICATORI",
            clue: "Microrganismi che forniscono informazioni sulla qualità (Livello 4)",
            row: 1,
            col: 12,
            direction: "vertical",
            number: 3
        },

        {
            word: "MUFFE",
            clue: "Microrganismi che crescono per accrescimento apicale (Livello 1)",
            row: 6,
            col: 1,
            direction: "horizontal",
            number: 4
        },
        {
            word: "LIEVITI",
            clue: "Microrganismi che si riproducono per gemmazione (Livello 1)",
            row: 8,
            col: 1,
            direction: "horizontal",
            number: 5
        },
        {
            word: "ENDOGENA",
            clue: "Origine dei microrganismi dall'organismo stesso (Livello 2)",
            row: 0,
            col: 3,
            direction: "vertical",
            number: 6
        },
        {
            word: "HABITAT",
            clue: "Caratteristiche abiotiche dell'ambiente (Livello 2)",
            row: 7,
            col: 7,
            direction: "horizontal",
            number: 7
        },
        {
            word: "SPORIGENI",
            clue: "Batteri che formano spore in condizioni avverse (Livello 3)",
            row: 0,
            col: 8,
            direction: "vertical",
            number: 8
        },
        {
            word: "CROCIATA",
            clue: "Tipo di contaminazione tra alimenti diversi (Livello 3)",
            row: 9,
            col: 8,
            direction: "horizontal",
            number: 9
        },
        {
            word: "QUALITA",
            clue: "Categoria di indicatori per valutare condizioni di processo (Livello 4)",
            row: 4,
            col: 10,
            direction: "vertical",
            number: 10
        },
        {
            word: "MARKER",
            clue: "Organismi che indicano situazioni potenzialmente pericolose (Livello 4)",
            row: 11,
            col: 6,
            direction: "horizontal",
            number: 11
        },
        {
            word: "SCISSIONE",
            clue: "Tipo di riproduzione tipica dei batteri (Livello 1)",
            row: 2,
            col: 14,
            direction: "vertical",
            number: 12
        },
        {
            word: "ECOSISTEMA",
            clue: "Sistema complesso formato da ambiente e microrganismi (Livello 2)",
            row: 1,
            col: 0,
            direction: "vertical",
            number: 13
        },
        {
            word: "TIPICITA",
            clue: "Categoria di indicatori per processi fermentativi (Livello 4)",
            row: 13,
            col: 7,
            direction: "horizontal",
            number: 14
        },
        {
            word: "SALUBRITA",
            clue: "Categoria di indicatori per la sicurezza alimentare (Livello 4)",
            row: 3,
            col: 1,
            direction: "horizontal",
            number: 15
        },
        {
            word: "LATTICI",
            clue: "Batteri che producono acido lattico (Livello 4)",
            row: 14,
            col: 2,
            direction: "horizontal",
            number: 16
        },
        {
            word: "TERMOFILI",
            clue: "Microrganismi che crescono ad alte temperature (Livello 3)",
            row: 6,
            col: 13,
            direction: "vertical",
            number: 17
        },
        {
            word: "AEROBIA",
            clue: "Microflora che cresce in presenza di ossigeno (Livello 4)",
            row: 15,
            col: 9,
            direction: "horizontal",
            number: 18
        },
        {
            word: "COLIFORMI",
            clue: "Batteri indicatori di contaminazione fecale (Livello 4)",
            row: 12,
            col: 2,
            direction: "horizontal",
            number: 19
        }
    ]
};

let currentWord = null;
let completedWords = new Set();
let crosswordStartTime = null;

function startLevel(level) {
    currentLevel = level;
    currentQuestion = 0;
    score = 0;
    levelQuestions = [...questions[level]]; // Copia le domande

    // Reset powerups per ogni livello
    powerups = {
        fiftyFifty: 2,
        skipQuestion: 1,
        timeBonus: 2,
        doublePoints: 1
    };
    activePowerups = {
        timeBonus: false,
        doublePoints: false
    };
    eliminatedAnswers = [];

    document.getElementById('levelSelector').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';
    document.getElementById('currentLevel').textContent = level;
    document.getElementById('totalQuestions').textContent = levelQuestions.length;
    document.getElementById('completionMessage').style.display = 'none';

    updatePowerupCounts();
    showQuestion();
}

// Funzione per mescolare array (Fisher-Yates shuffle)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function showQuestion() {
    if (currentQuestion >= levelQuestions.length) {
        showCompletion();
        return;
    }

    const questionData = levelQuestions[currentQuestion];
    document.getElementById('question').textContent = questionData.question;
    document.getElementById('questionNumber').textContent = currentQuestion + 1;
    document.getElementById('score').textContent = score;

    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';
    eliminatedAnswers = [];
    
    // Crea array di oggetti con risposta e indice originale
    const answersWithIndex = questionData.answers.map((answer, index) => ({
        text: answer,
        originalIndex: index,
        isCorrect: index === questionData.correct
    }));

    // Mescola le risposte
    const shuffledAnswers = shuffleArray(answersWithIndex);

    // Trova il nuovo indice della risposta corretta
    const newCorrectIndex = shuffledAnswers.findIndex(answer => answer.isCorrect);

    // Crea i bottoni con l'ordine mescolato
    shuffledAnswers.forEach((answerObj, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answerObj.text;
        button.onclick = () => selectAnswer(index, button, newCorrectIndex);
        answersContainer.appendChild(button);
    });

    // Applica effetto time bonus se attivo
    if (activePowerups.timeBonus) {
        answersContainer.classList.add('time-bonus-active');
    }

    updateProgress();
}

    function selectAnswer(selectedIndex, buttonElement, correctIndex = null) {
        const questionData = levelQuestions[currentQuestion];
        const buttons = document.querySelectorAll('.answer-btn');
    

    buttons.forEach(btn => btn.style.pointerEvents = 'none');

    let pointsToAdd = 10;

    // Applica bonus double points
    if (activePowerups.doublePoints) {
        pointsToAdd = 20;
        activePowerups.doublePoints = false;
        showPowerupNotification('Punti raddoppiati! 💎');
    }

    // Applica bonus time bonus (punti extra)
    if (activePowerups.timeBonus) {
        pointsToAdd += 5;
        activePowerups.timeBonus = false;
        showPowerupNotification('Bonus velocità! ⚡');
    }
    
    // Usa correctIndex se fornito (per risposte mischiate), altrimenti usa l'indice originale
    const actualCorrectIndex = correctIndex !== null ? correctIndex : levelQuestions[currentQuestion].correct;

    if (selectedIndex === actualCorrectIndex) {
        buttonElement.classList.add('correct');
        score += pointsToAdd;
        createParticles('🎉');
    } else {
        buttonElement.classList.add('incorrect');
        buttons[actualCorrectIndex].classList.add('correct');
        createParticles('💔');
    }
    document.getElementById('score').textContent = score;
        
    setTimeout(() => {
        currentQuestion++;
        showQuestion();
    }, 2000);
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / levelQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

function showCompletion() {
    document.getElementById('completionMessage').style.display = 'block';
    document.getElementById('finalScore').textContent = score + '/' + (levelQuestions.length * 10);
    createParticles('🎊');
}

function backToMenu() {
    document.getElementById('levelSelector').style.display = 'grid';
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('crosswordArea').style.display = 'none';
    // Reset powerups quando si torna al menu
    activePowerups.timeBonus = false;
    activePowerups.doublePoints = false;
}

function startCrossword() {
    document.getElementById('levelSelector').style.display = 'none';
    document.getElementById('crosswordArea').style.display = 'block';
    initializeCrossword();
}

function initializeCrossword() {
    const grid = document.getElementById('crosswordGrid');
    grid.innerHTML = '';
    currentWord = null;
    completedWords.clear();
    crosswordStartTime = Date.now();

    // Crea la griglia
    for (let row = 0; row < 16; row++) {
        for (let col = 0; col < 16; col++) {
            const cell = document.createElement('div');
            cell.className = 'crossword-cell';
            cell.dataset.row = row;
            cell.dataset.col = col;

            if (crosswordData.grid[row][col] === '') {
                cell.classList.add('blocked');
            } else {
                const input = document.createElement('input');
                input.maxLength = 1;
                input.addEventListener('input', handleCellInput);
                input.addEventListener('focus', handleCellFocus);
                cell.appendChild(input);
            }

            grid.appendChild(cell);
        }
    }

    // Aggiungi numeri alle celle
    crosswordData.words.forEach(word => {
        const cell = grid.children[word.row * 16 + word.col];
        if (!cell.classList.contains('blocked')) {
            const number = document.createElement('div');
            number.className = 'cell-number';
            number.textContent = word.number;
            cell.appendChild(number);
        }
    });

    // Crea gli indizi
    createClues();
    updateCrosswordTimer();
}

function createClues() {
    const horizontalClues = document.getElementById('horizontalClues');
    const verticalClues = document.getElementById('verticalClues');

    horizontalClues.innerHTML = '';
    verticalClues.innerHTML = '';

    crosswordData.words.forEach(word => {
        const clueElement = document.createElement('div');
        clueElement.className = 'clue';
        clueElement.textContent = `${word.number}. ${word.clue}`;
        clueElement.onclick = () => selectWord(word);

        if (word.direction === 'horizontal') {
            horizontalClues.appendChild(clueElement);
        } else {
            verticalClues.appendChild(clueElement);
        }
    });
}

function selectWord(word) {
    const grid = document.getElementById('crosswordGrid');

    // Rimuovi highlight precedenti
    Array.from(grid.children).forEach(cell => {
        cell.classList.remove('word-highlight', 'active');
    });

    // Rimuovi active dalle clues
    document.querySelectorAll('.clue').forEach(clue => {
        clue.classList.remove('active');
    });

    currentWord = word;

    // Evidenzia la parola
    for (let i = 0; i < word.word.length; i++) {
        const row = word.direction === 'horizontal' ? word.row : word.row + i;
        const col = word.direction === 'horizontal' ? word.col + i : word.col;
        const cell = grid.children[row * 16 + col];
        cell.classList.add('word-highlight');
    }

    // Attiva la clue
    const clues = document.querySelectorAll('.clue');
    clues[crosswordData.words.indexOf(word)].classList.add('active');

    // Focus sulla prima cella vuota
    const firstEmptyCell = findFirstEmptyCell(word);
    if (firstEmptyCell) {
        firstEmptyCell.querySelector('input').focus();
    }
}

function findFirstEmptyCell(word) {
    const grid = document.getElementById('crosswordGrid');
    for (let i = 0; i < word.word.length; i++) {
        const row = word.direction === 'horizontal' ? word.row : word.row + i;
        const col = word.direction === 'horizontal' ? word.col + i : word.col;
        const cell = grid.children[row * 16 + col];
        const input = cell.querySelector('input');
        if (!input.value) {
            return cell;
        }
    }
    return null;
}

function handleCellInput(event) {
    const input = event.target;
    const cell = input.parentElement;
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);

    input.value = input.value.toUpperCase();

    // Controlla se le parole sono completate
    checkCompletedWords();

    // Muovi al prossimo input se currentWord è selezionata
    if (currentWord && input.value) {
        moveToNextCell(row, col);
    }
}

function handleCellFocus(event) {
    const cell = event.target.parentElement;
    cell.classList.add('active');

    // Rimuovi active da altre celle
    document.querySelectorAll('.crossword-cell').forEach(c => {
        if (c !== cell) c.classList.remove('active');
    });
}

function moveToNextCell(currentRow, currentCol) {
    if (!currentWord) return;

    const grid = document.getElementById('crosswordGrid');
    const wordIndex = crosswordData.words.indexOf(currentWord);

    // Trova la posizione corrente nella parola
    let positionInWord = -1;
    for (let i = 0; i < currentWord.word.length; i++) {
        const row = currentWord.direction === 'horizontal' ? currentWord.row : currentWord.row + i;
        const col = currentWord.direction === 'horizontal' ? currentWord.col + i : currentWord.col;

        if (row === currentRow && col === currentCol) {
            positionInWord = i;
            break;
        }
    }

    // Muovi alla prossima cella
    if (positionInWord < currentWord.word.length - 1) {
        const nextRow = currentWord.direction === 'horizontal' ? currentWord.row : currentWord.row + positionInWord + 1;
        const nextCol = currentWord.direction === 'horizontal' ? currentWord.col + positionInWord + 1 : currentWord.col;
        const nextCell = grid.children[nextRow * 16 + nextCol];
        nextCell.querySelector('input').focus();
    }
}

function checkCompletedWords() {
    const grid = document.getElementById('crosswordGrid');

    crosswordData.words.forEach((word, index) => {
        let isComplete = true;
        let currentAnswer = '';

        for (let i = 0; i < word.word.length; i++) {
            const row = word.direction === 'horizontal' ? word.row : word.row + i;
            const col = word.direction === 'horizontal' ? word.col + i : word.col;
            const cell = grid.children[row * 16 + col];
            const input = cell.querySelector('input');

            currentAnswer += input.value;
            if (!input.value || input.value !== word.word[i]) {
                isComplete = false;
            }
        }

        if (isComplete && !completedWords.has(index)) {
            completedWords.add(index);

            // Marca le celle come corrette
            for (let i = 0; i < word.word.length; i++) {
                const row = word.direction === 'horizontal' ? word.row : word.row + i;
                const col = word.direction === 'horizontal' ? word.col + i : word.col;
                const cell = grid.children[row * 16 + col];
                cell.classList.add('correct');
            }

            // Marca la clue come completata
            const clues = document.querySelectorAll('.clue');
            clues[index].classList.add('completed');

            createParticles('🎉');
        }
    });

    document.getElementById('crosswordProgress').textContent = completedWords.size;

    // Controlla se il cruciverba è completato
    if (completedWords.size === crosswordData.words.length) {
        showCrosswordCompletion();
    }
}

function showCrosswordCompletion() {
    const endTime = Date.now();
    const totalTime = Math.floor((endTime - crosswordStartTime) / 1000);
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    document.getElementById('finalTime').textContent = timeString;
    document.getElementById('crosswordComplete').style.display = 'block';

    createParticles('🎊');
}

function updateCrosswordTimer() {
    if (document.getElementById('crosswordArea').style.display !== 'block') return;

    const currentTime = Date.now();
    const elapsed = Math.floor((currentTime - crosswordStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    document.getElementById('crosswordTime').textContent = timeString;

    setTimeout(updateCrosswordTimer, 1000);
}

function usePowerup(type) {
    if (powerups[type] <= 0) return;

    const button = document.getElementById(type);
    if (button.classList.contains('disabled') || button.classList.contains('used')) return;

    powerups[type]--;

    switch(type) {
        case 'fiftyFifty':
            useFiftyFifty();
            break;
        case 'skipQuestion':
            useSkipQuestion();
            break;
        case 'timeBonus':
            useTimeBonus();
            break;
        case 'doublePoints':
            useDoublePoints();
            break;
    }

    updatePowerupCounts();
}

function useFiftyFifty() {
    const questionData = levelQuestions[currentQuestion];
    const buttons = document.querySelectorAll('.answer-btn');
    const correctIndex = questionData.correct;
    const incorrectIndices = [];

    buttons.forEach((btn, index) => {
        if (index !== correctIndex && !eliminatedAnswers.includes(index)) {
            incorrectIndices.push(index);
        }
    });

    // Elimina 2 risposte sbagliate casuali
    const toEliminate = incorrectIndices.sort(() => 0.5 - Math.random()).slice(0, 2);
    toEliminate.forEach(index => {
        buttons[index].classList.add('eliminated');
        buttons[index].onclick = null;
        eliminatedAnswers.push(index);
    });

    showPowerupNotification('2 risposte eliminate! 🎯');
}

function useSkipQuestion() {
    showPowerupNotification('Domanda saltata! ⏭️');
    setTimeout(() => {
        currentQuestion++;
        showQuestion();
    }, 1000);
}

function useTimeBonus() {
    activePowerups.timeBonus = true;
    showPowerupNotification('Bonus velocità attivato! ⚡');
}

function useDoublePoints() {
    activePowerups.doublePoints = true;
    showPowerupNotification('Punti raddoppiati attivato! 💎');
}

function updatePowerupCounts() {
    document.getElementById('fiftyFiftyCount').textContent = powerups.fiftyFifty;
    document.getElementById('skipQuestionCount').textContent = powerups.skipQuestion;
    document.getElementById('timeBonusCount').textContent = powerups.timeBonus;
    document.getElementById('doublePointsCount').textContent = powerups.doublePoints;

    // Disabilita powerups esauriti
    Object.keys(powerups).forEach(key => {
        const button = document.getElementById(key);
        if (powerups[key] <= 0) {
            button.classList.add('disabled');
        } else {
            button.classList.remove('disabled');
        }
    });
}

function showPowerupNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'powerup-notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}

function createParticles(emoji) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.textContent = emoji;
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = Math.random() * window.innerHeight + 'px';
            document.body.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 2000);
        }, i * 100);
    }
}

// Animazione di background
function createBackgroundParticles() {
    const particles = ['🦠', '🧬', '⚗️', '🔬'];
    setInterval(() => {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = '-50px';
        particle.style.fontSize = '20px';
        particle.style.opacity = '0.1';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '-1';
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.animation = 'particleFloat 10s linear forwards';

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 10000);
    }, 3000);
}

// Inizializza animazioni di sfondo
createBackgroundParticles();