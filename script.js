// ============================================
// GLOBAL DATA
// ============================================
const products = [
  // ── MODE (A) ──────────────────────────────
  {
    id: '1',
    name: 'Ceinture en pneu recyclé',
    category: 'mode',
    price: 25000,
    image: 'images/products/1A.png',
    materials: ['Pneu recyclé'],
    sizes: ['S', 'M', 'L'],
    colors: ['Noir', 'Bleu foncé'],
    tag: 'Upcycled',
  },
  {
    id: '2',
    name: 'Éventail en tissu recyclé',
    category: 'mode',
    price: 10000,
    image: 'images/products/2A.png',
    materials: ['Chutes de tissus', 'Bois'],
    sizes: ['S', 'M', 'L'],
    colors: ['Noir', 'Bleu', 'Blanc', 'Multicolore'],
    tag: 'Fait main',
  },
  {
    id: '4',
    name: 'Chapeau en jean recyclé',
    category: 'mode',
    price: 30000,
    image: 'images/products/4A.png',
    materials: ['Chutes de jean'],
    sizes: ['S', 'M', 'L'],
    colors: ['Noir', 'Blanc', 'Bleu foncé'],
    tag: 'Upcycled',
  },
  {
    id: '5',
    name: 'Chapeau en jean recyclé XL',
    category: 'mode',
    price: 40000,
    image: 'images/products/5A.png',
    materials: ['Chutes de jean'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Noir', 'Blanc', 'Bleu foncé'],
    tag: 'Upcycled',
  },
  {
    id: '15',
    name: 'Sac à main en tissu upcyclé',
    category: 'mode',
    price: 22000,
    image: 'images/products/15A.png',
    materials: ['Tissus récupérés'],
    sizes: ['Unique'],
    colors: ['Multicolore'],
    tag: 'Fait main',
  },
  {
    id: '16',
    name: 'Ceinture large en tissu recyclé',
    category: 'mode',
    price: 18000,
    image: 'images/products/16A.png',
    materials: ['Chutes de tissus'],
    sizes: ['S', 'M', 'L'],
    colors: ['Noir', 'Multicolore'],
    tag: 'Upcycled',
  },
  {
    id: '17',
    name: 'Chapeau en wax recyclé',
    category: 'mode',
    price: 28000,
    image: 'images/products/17A.png',
    materials: ['Wax récupéré'],
    sizes: ['S', 'M', 'L'],
    colors: ['Multicolore'],
    tag: 'Fait main',
  },
  {
    id: '19',
    name: 'Collier en matériaux recyclés',
    category: 'mode',
    price: 15000,
    image: 'images/products/19A.png',
    materials: ['Capsules', 'Fil'],
    sizes: ['Unique'],
    colors: ['Doré', 'Argenté'],
    tag: 'Upcycled',
  },
  {
    id: '30',
    name: 'Sac cabas en jean recyclé',
    category: 'mode',
    price: 35000,
    image: 'images/products/30A.png',
    materials: ['Chutes de jean'],
    sizes: ['Unique'],
    colors: ['Bleu', 'Noir'],
    tag: 'Fait main',
  },
  {
    id: '32',
    name: 'Gilet en tissu patchwork',
    category: 'mode',
    price: 45000,
    image: 'images/products/32A.png',
    materials: ['Tissus récupérés'],
    sizes: ['S', 'M', 'L'],
    colors: ['Multicolore'],
    tag: 'Fait main',
  },
  {
    id: '41',
    name: 'Casquette en jean recyclé',
    category: 'mode',
    price: 20000,
    image: 'images/products/41A.png',
    materials: ['Chutes de jean'],
    sizes: ['Unique'],
    colors: ['Bleu', 'Noir'],
    tag: 'Upcycled',
  },
  {
    id: '42',
    name: 'Chaussures en tissu upcyclé',
    category: 'mode',
    price: 55000,
    image: 'images/products/42A.png',
    materials: ['Tissus récupérés', 'Semelles recyclées'],
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: ['Multicolore'],
    tag: 'Fait main',
  },
  {
    id: '43',
    name: 'Sac à dos en matériaux recyclés',
    category: 'mode',
    price: 50000,
    image: 'images/products/43A.png',
    materials: ['Jean recyclé', 'Pneu'],
    sizes: ['Unique'],
    colors: ['Noir', 'Bleu'],
    tag: 'Upcycled',
  },
  {
    id: '44',
    name: 'Bracelet en pneu recyclé',
    category: 'mode',
    price: 8000,
    image: 'images/products/44A.png',
    materials: ['Pneu recyclé'],
    sizes: ['S', 'M', 'L'],
    colors: ['Noir'],
    tag: 'Upcycled',
  },
  {
    id: '45',
    name: 'Ceinture fine en cuir recyclé',
    category: 'mode',
    price: 20000,
    image: 'images/products/45A.png',
    materials: ['Cuir récupéré'],
    sizes: ['S', 'M', 'L'],
    colors: ['Marron', 'Noir'],
    tag: 'Upcycled',
  },
  {
    id: '50',
    name: 'Foulard en chutes de tissu',
    category: 'mode',
    price: 12000,
    image: 'images/products/50A.png',
    materials: ['Chutes de tissus'],
    sizes: ['Unique'],
    colors: ['Multicolore'],
    tag: 'Fait main',
  },
  {
    id: '51',
    name: 'Bague en capsules recyclées',
    category: 'mode',
    price: 5000,
    image: 'images/products/51A.png',
    materials: ['Capsules recyclées'],
    sizes: ['Unique'],
    colors: ['Argenté', 'Doré'],
    tag: 'Upcycled',
  },
  {
    id: '52',
    name: 'Veste en jean recyclé',
    category: 'mode',
    price: 65000,
    image: 'images/products/52A.png',
    materials: ['Chutes de jean'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Bleu', 'Noir'],
    tag: 'Fait main',
  },
  {
    id: '53',
    name: 'Bijou de tête en matériaux recyclés',
    category: 'mode',
    price: 18000,
    image: 'images/products/53A.png',
    materials: ['Capsules', 'Tissus'],
    sizes: ['Unique'],
    colors: ['Doré', 'Multicolore'],
    tag: 'Upcycled',
  },
  {
    id: '54',
    name: 'Boucles d\'oreilles en canettes',
    category: 'mode',
    price: 7000,
    image: 'images/products/54A.png',
    materials: ['Canettes recyclées'],
    sizes: ['Unique'],
    colors: ['Argenté', 'Doré'],
    tag: 'Upcycled',
  },
  {
    id: '55',
    name: 'Chapeau de soleil en tissu',
    category: 'mode',
    price: 25000,
    image: 'images/products/55A.png',
    materials: ['Tissu wax récupéré'],
    sizes: ['S', 'M', 'L'],
    colors: ['Multicolore'],
    tag: 'Fait main',
  },
  {
    id: '56',
    name: 'Sac clutch en jean recyclé',
    category: 'mode',
    price: 28000,
    image: 'images/products/56A.png',
    materials: ['Chutes de jean'],
    sizes: ['Unique'],
    colors: ['Bleu', 'Noir'],
    tag: 'Fait main',
  },
  {
    id: '63',
    name: 'Tote bag en tissu recyclé',
    category: 'mode',
    price: 15000,
    image: 'images/products/63A.jpg',
    materials: ['Tissus récupérés'],
    sizes: ['Unique'],
    colors: ['Multicolore'],
    tag: 'Fait main',
  },
  {
    id: '64',
    name: 'Chapeau en paille tressée recyclée',
    category: 'mode',
    price: 22000,
    image: 'images/products/64A.jpg',
    materials: ['Paille recyclée'],
    sizes: ['S', 'M', 'L'],
    colors: ['Naturel', 'Noir'],
    tag: 'Fait main',
  },
  {
    id: '68',
    name: 'Robe en tissu patchwork',
    category: 'mode',
    price: 75000,
    image: 'images/products/68A.png',
    materials: ['Tissus récupérés'],
    sizes: ['S', 'M', 'L'],
    colors: ['Multicolore'],
    tag: 'Fait main',
  },
  {
    id: '71',
    name: 'Sandales en pneu recyclé',
    category: 'mode',
    price: 30000,
    image: 'images/products/71A.png',
    materials: ['Pneu recyclé'],
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: ['Noir'],
    tag: 'Upcycled',
  },

  // ── MOBILIER (B) ─────────────────────────
  {
    id: '3',
    name: 'Chaise en pneu recyclé',
    category: 'mobilier',
    price: 85000,
    image: 'images/products/3B.png',
    materials: ['Pneu recyclé', 'Bois'],
    colors: ['Noir', 'Bleu', 'Blanc'],
    tag: 'Upcycled',
  },
  {
    id: '6',
    name: 'Chaise en capsules recyclées',
    category: 'mobilier',
    price: 65000,
    image: 'images/products/6B.png',
    materials: ['Fer recyclé', 'Capsules recyclées'],
    colors: ['Noir', 'Rouge', 'Blanc'],
    tag: 'Upcycled',
  },
  {
    id: '8',
    name: 'Table en capsules recyclées',
    category: 'mobilier',
    price: 80000,
    image: 'images/products/8B.png',
    materials: ['Capsules recyclées', 'Fer'],
    colors: ['Noir', 'Rouge', 'Blanc'],
    tag: 'Upcycled',
  },
  {
    id: '9',
    name: 'Chaise en capsules (variante)',
    category: 'mobilier',
    price: 60000,
    image: 'images/products/9B.png',
    materials: ['Capsules recyclées', 'Fer recyclé'],
    colors: ['Noir', 'Bleu', 'Rouge', 'Blanc'],
    tag: 'Upcycled',
  },
  {
    id: '11',
    name: 'Étagère en bois recyclé',
    category: 'mobilier',
    price: 75000,
    image: 'images/products/11B.png',
    materials: ['Bois récupéré'],
    colors: ['Naturel', 'Noir'],
    tag: 'Upcycled',
  },
  {
    id: '12',
    name: 'Table de salon en palettes',
    category: 'mobilier',
    price: 90000,
    image: 'images/products/12B.png',
    materials: ['Palettes récupérées'],
    colors: ['Naturel', 'Blanc'],
    tag: 'Upcycled',
  },
  {
    id: '13',
    name: 'Banc en pneus recyclés',
    category: 'mobilier',
    price: 95000,
    image: 'images/products/13B.png',
    materials: ['Pneus recyclés', 'Bois'],
    colors: ['Noir', 'Bois naturel'],
    tag: 'Upcycled',
  },
  {
    id: '20',
    name: 'Tabouret en capsules',
    category: 'mobilier',
    price: 45000,
    image: 'images/products/20B.png',
    materials: ['Capsules recyclées', 'Fer'],
    colors: ['Noir', 'Rouge'],
    tag: 'Upcycled',
  },
  {
    id: '21',
    name: 'Fauteuil en pneu recyclé',
    category: 'mobilier',
    price: 110000,
    image: 'images/products/21B.png',
    materials: ['Pneu recyclé', 'Tissu'],
    colors: ['Noir', 'Multicolore'],
    tag: 'Upcycled',
  },
  {
    id: '22',
    name: 'Table d\'appoint en bois',
    category: 'mobilier',
    price: 55000,
    image: 'images/products/22B.png',
    materials: ['Bois récupéré', 'Métal'],
    colors: ['Naturel', 'Noir'],
    tag: 'Upcycled',
  },
  {
    id: '23',
    name: 'Étagère murale en palettes',
    category: 'mobilier',
    price: 50000,
    image: 'images/products/23B.png',
    materials: ['Palettes récupérées'],
    colors: ['Naturel'],
    tag: 'Upcycled',
  },
  {
    id: '24',
    name: 'Table basse en capsules',
    category: 'mobilier',
    price: 70000,
    image: 'images/products/24B.png',
    materials: ['Capsules recyclées', 'Verre'],
    colors: ['Noir', 'Transparent'],
    tag: 'Upcycled',
  },
  {
    id: '25',
    name: 'Chaise longue en palettes',
    category: 'mobilier',
    price: 130000,
    image: 'images/products/25B.png',
    materials: ['Palettes récupérées', 'Tissu'],
    colors: ['Naturel', 'Multicolore'],
    tag: 'Upcycled',
  },
  {
    id: '26',
    name: 'Bureau en bois recyclé',
    category: 'mobilier',
    price: 120000,
    image: 'images/products/26B.png',
    materials: ['Bois récupéré'],
    colors: ['Naturel', 'Noir'],
    tag: 'Upcycled',
  },
  {
    id: '33',
    name: 'Canapé en pneus recyclés',
    category: 'mobilier',
    price: 180000,
    image: 'images/products/33B.png',
    materials: ['Pneus recyclés', 'Tissu'],
    colors: ['Noir', 'Bleu', 'Multicolore'],
    tag: 'Upcycled',
  },
  {
    id: '34',
    name: 'Meuble TV en palettes',
    category: 'mobilier',
    price: 100000,
    image: 'images/products/34B.png',
    materials: ['Palettes récupérées'],
    colors: ['Naturel', 'Blanc'],
    tag: 'Upcycled',
  },
  {
    id: '35',
    name: 'Lit en palettes recyclées',
    category: 'mobilier',
    price: 200000,
    image: 'images/products/35B.png',
    materials: ['Palettes récupérées'],
    colors: ['Naturel'],
    tag: 'Upcycled',
  },
  {
    id: '36',
    name: 'Commode en bois récupéré',
    category: 'mobilier',
    price: 140000,
    image: 'images/products/36B.png',
    materials: ['Bois récupéré'],
    colors: ['Naturel', 'Blanc'],
    tag: 'Upcycled',
  },
  {
    id: '37',
    name: 'Armoire en palettes',
    category: 'mobilier',
    price: 220000,
    image: 'images/products/37B.png',
    materials: ['Palettes récupérées'],
    colors: ['Naturel', 'Noir'],
    tag: 'Upcycled',
  },
  {
    id: '38',
    name: 'Cadre mural en bois recyclé',
    category: 'mobilier',
    price: 35000,
    image: 'images/products/38B.png',
    materials: ['Bois récupéré'],
    colors: ['Naturel', 'Noir'],
    tag: 'Upcycled',
  },
  {
    id: '39',
    name: 'Bibliothèque en palettes',
    category: 'mobilier',
    price: 160000,
    image: 'images/products/39B.png',
    materials: ['Palettes récupérées'],
    colors: ['Naturel'],
    tag: 'Upcycled',
  },
  {
    id: '40',
    name: 'Chevet en bois récupéré',
    category: 'mobilier',
    price: 60000,
    image: 'images/products/40B.png',
    materials: ['Bois récupéré'],
    colors: ['Naturel', 'Blanc', 'Noir'],
    tag: 'Upcycled',
  },
  {
    id: '46',
    name: 'Pouf en pneu recyclé',
    category: 'mobilier',
    price: 40000,
    image: 'images/products/46B.png',
    materials: ['Pneu recyclé', 'Tissu'],
    colors: ['Noir', 'Multicolore'],
    tag: 'Upcycled',
  },
  {
    id: '73',
    name: 'Table en fer et bois recyclés',
    category: 'mobilier',
    price: 95000,
    image: 'images/products/73B.png',
    materials: ['Fer récupéré', 'Bois'],
    colors: ['Noir', 'Naturel'],
    tag: 'Upcycled',
  },
  {
    id: '74',
    name: 'Chaise design en matériaux mixtes',
    category: 'mobilier',
    price: 70000,
    image: 'images/products/74B.png',
    materials: ['Fer recyclé', 'Tissu'],
    colors: ['Noir', 'Blanc'],
    tag: 'Upcycled',
  },

  // ── DÉCOR (C) ─────────────────────────────
  {
    id: '7',
    name: 'Objet décoratif en capsules',
    category: 'decor',
    price: 30000,
    image: 'images/products/7C.png',
    materials: ['Capsules recyclées', 'Fer recyclé'],
    colors: ['Noir', 'Rouge', 'Blanc'],
    tag: 'Upcycled',
  },
  {
    id: '10',
    name: 'Objet décoratif en canettes',
    category: 'decor',
    price: 30000,
    image: 'images/products/10C.png',
    materials: ['Canettes recyclées', 'Fer'],
    colors: ['Noir', 'Bleu', 'Vert'],
    tag: 'Upcycled',
  },
  {
    id: '14',
    name: 'Luminaire en canettes recyclées',
    category: 'decor',
    price: 45000,
    image: 'images/products/14C.png',
    materials: ['Canettes recyclées', 'Fil électrique'],
    colors: ['Argenté', 'Doré'],
    tag: 'Upcycled',
  },
  {
    id: '18',
    name: 'Sculpture murale en capsules',
    category: 'decor',
    price: 55000,
    image: 'images/products/18C.png',
    materials: ['Capsules recyclées'],
    colors: ['Argenté', 'Doré', 'Multicolore'],
    tag: 'Upcycled',
  },
  {
    id: '27',
    name: 'Tableau en matériaux recyclés',
    category: 'decor',
    price: 60000,
    image: 'images/products/27C.png',
    materials: ['Capsules', 'Canettes', 'Fer'],
    colors: ['Multicolore'],
    tag: 'Œuvre unique',
  },
  {
    id: '28',
    name: 'Vase décoratif en canettes',
    category: 'decor',
    price: 25000,
    image: 'images/products/28C.png',
    materials: ['Canettes recyclées'],
    colors: ['Argenté', 'Bleu'],
    tag: 'Upcycled',
  },
  {
    id: '29',
    name: 'Horloge murale en bois recyclé',
    category: 'decor',
    price: 40000,
    image: 'images/products/29C.png',
    materials: ['Bois récupéré'],
    colors: ['Naturel', 'Noir'],
    tag: 'Fait main',
  },
  {
    id: '31',
    name: 'Cadre photo en capsules',
    category: 'decor',
    price: 20000,
    image: 'images/products/31C.png',
    materials: ['Capsules recyclées'],
    colors: ['Argenté', 'Doré'],
    tag: 'Upcycled',
  },
  {
    id: '47',
    name: 'Miroir encadré en canettes',
    category: 'decor',
    price: 50000,
    image: 'images/products/47C.png',
    materials: ['Canettes recyclées', 'Miroir'],
    colors: ['Argenté'],
    tag: 'Upcycled',
  },
  {
    id: '48',
    name: 'Lampe de table en capsules',
    category: 'decor',
    price: 55000,
    image: 'images/products/48C.png',
    materials: ['Capsules recyclées', 'Fil électrique'],
    colors: ['Noir', 'Argenté'],
    tag: 'Upcycled',
  },
  {
    id: '49',
    name: 'Sculpture en fer recyclé',
    category: 'decor',
    price: 120000,
    image: 'images/products/49C.png',
    materials: ['Fer recyclé'],
    colors: ['Noir', 'Rouille'],
    tag: 'Œuvre unique',
  },
  {
    id: '57',
    name: 'Bougeoir en canettes recyclées',
    category: 'decor',
    price: 15000,
    image: 'images/products/57C.png',
    materials: ['Canettes recyclées'],
    colors: ['Argenté', 'Doré'],
    tag: 'Upcycled',
  },
  {
    id: '58',
    name: 'Déco murale en capsules',
    category: 'decor',
    price: 35000,
    image: 'images/products/58C.png',
    materials: ['Capsules recyclées'],
    colors: ['Multicolore'],
    tag: 'Upcycled',
  },
  {
    id: '59',
    name: 'Figurine en fer et capsules',
    category: 'decor',
    price: 45000,
    image: 'images/products/59C.png',
    materials: ['Fer recyclé', 'Capsules'],
    colors: ['Argenté', 'Doré'],
    tag: 'Œuvre unique',
  },
  {
    id: '60',
    name: 'Plante artificielle en canettes',
    category: 'decor',
    price: 20000,
    image: 'images/products/60C.png',
    materials: ['Canettes recyclées', 'Fil de fer'],
    colors: ['Vert', 'Argenté'],
    tag: 'Upcycled',
  },
  {
    id: '61',
    name: 'Pot en capsules recyclées',
    category: 'decor',
    price: 18000,
    image: 'images/products/61C.png',
    materials: ['Capsules recyclées'],
    colors: ['Argenté', 'Multicolore'],
    tag: 'Upcycled',
  },
  {
    id: '62',
    name: 'Attrape-rêves en matériaux recyclés',
    category: 'decor',
    price: 22000,
    image: 'images/products/62C.png',
    materials: ['Tissu récupéré', 'Fil'],
    colors: ['Multicolore'],
    tag: 'Fait main',
  },
  {
    id: '65',
    name: 'Mobile décoratif en canettes',
    category: 'decor',
    price: 28000,
    image: 'images/products/65C.png',
    materials: ['Canettes recyclées', 'Fil de fer'],
    colors: ['Argenté', 'Multicolore'],
    tag: 'Upcycled',
  },
  {
    id: '66',
    name: 'Photophore en canettes',
    category: 'decor',
    price: 12000,
    image: 'images/products/66C.png',
    materials: ['Canettes recyclées'],
    colors: ['Argenté'],
    tag: 'Upcycled',
  },
  {
    id: '67',
    name: 'Suspension lumineuse en capsules',
    category: 'decor',
    price: 65000,
    image: 'images/products/67C.png',
    materials: ['Capsules recyclées', 'Fil électrique'],
    colors: ['Argenté', 'Multicolore'],
    tag: 'Upcycled',
  },
  {
    id: '69',
    name: 'Tableau en canettes aplaties',
    category: 'decor',
    price: 70000,
    image: 'images/products/69C.png',
    materials: ['Canettes recyclées'],
    colors: ['Multicolore'],
    tag: 'Œuvre unique',
  },
  {
    id: '70',
    name: 'Composition florale en fil de fer',
    category: 'decor',
    price: 30000,
    image: 'images/products/70C.png',
    materials: ['Fil de fer recyclé', 'Canettes'],
    colors: ['Argenté', 'Vert'],
    tag: 'Fait main',
  },
  {
    id: '72',
    name: 'Panneau décoratif en capsules',
    category: 'decor',
    price: 80000,
    image: 'images/products/72C.png',
    materials: ['Capsules recyclées', 'Bois'],
    colors: ['Argenté', 'Doré', 'Multicolore'],
    tag: 'Œuvre unique',
  },
];

// ============================================
// THEME TOGGLE
// ============================================
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const sunIcon = document.querySelector('.theme-icon-sun');
  const moonIcon = document.querySelector('.theme-icon-moon');
  
  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateIcons(true);
  } else {
    updateIcons(false);
  }
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        updateIcons(false);
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateIcons(true);
      }
    });
  }
  
  function updateIcons(isDark) {
    if (sunIcon && moonIcon) {
      if (isDark) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      }
    }
  }
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeBtn = document.querySelector('.mobile-menu-close');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
  
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// ============================================
// HERO CAROUSEL
// ============================================
function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.querySelector('.hero-nav-prev');
  const nextBtn = document.querySelector('.hero-nav-next');
  
  if (slides.length === 0) return;

  let currentSlide = 0;
  let autoSlideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function goToSlide(index) {
    showSlide(index);
    resetAutoSlide();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 6000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });

  startAutoSlide();
}

// ============================================
// ANIMATED COUNTERS
// ============================================
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  if (counters.length === 0) return;

  const observerOptions = {
    threshold: 0.5,
    rootMargin: '-100px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        animateCounter(entry.target);
        entry.target.dataset.animated = 'true';
      }
    });
  }, observerOptions);

  counters.forEach(counter => {
    observer.observe(counter);
  });
}

function animateCounter(element) {
  const target = parseInt(element.dataset.target) || 0;
  const suffix = element.dataset.suffix || '';
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(easeOutQuart * target);
    
    element.textContent = current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// ============================================
// PRODUCTS FILTER
// ============================================
function initProductsFilter() {
  const filters = document.querySelectorAll('.category-filter');
  const grid = document.getElementById('productsGrid');
  
  if (!grid || filters.length === 0) return;

  // Get category from URL
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get('category') || 'all';

  // Update active filter button state
  if (activeCategory !== 'all') {
    filters.forEach(f => {
      if (f.dataset.category === activeCategory) {
        f.classList.add('active');
      } else {
        f.classList.remove('active');
      }
    });
  }

  function renderProducts(category) {
    const filtered = category === 'all' 
      ? products 
      : products.filter(p => p.category === category);

    grid.innerHTML = filtered.map((product, index) => `
      <div class="product-card" style="animation-delay: ${index * 0.05}s">
        <a href="#" onclick="openWhatsAppProduct(event, '${product.name}')">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ''}
            <div class="product-overlay">
              <button class="product-overlay-btn" aria-label="Acheter sur WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                   <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="product-content">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-materials">${product.materials.join(', ')}</p>
            ${product.colors ? `<p class="product-colors"><span class="product-meta-label">Couleurs :</span> ${product.colors.join(', ')}</p>` : ''}
            ${product.sizes ? `<p class="product-sizes"><span class="product-meta-label">Tailles :</span> ${product.sizes.join(' · ')}</p>` : ''}
            <div class="product-footer">
              <span class="product-price">${product.price.toLocaleString()} FCFA</span>
              <button class="product-add-btn" aria-label="Acheter sur WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                <span style="margin-left:5px; font-size: 0.9em;">Acheter</span>
              </button>
            </div>
          </div>
        </a>
      </div>
    `).join('');

    // Add fade-in animation
    const cards = grid.querySelectorAll('.product-card');
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      }, i * 50);
    });
  }

  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      filters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      activeCategory = filter.dataset.category;
      renderProducts(activeCategory);
    });
  });

  // Initial render
  renderProducts(activeCategory);
}

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================
function initTestimonialsCarousel() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dot');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  
  if (slides.length === 0) return;

  let currentIndex = 0;

  function showTestimonial(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function next() {
    const next = (currentIndex + 1) % slides.length;
    showTestimonial(next);
  }

  function prev() {
    const prev = (currentIndex - 1 + slides.length) % slides.length;
    showTestimonial(prev);
  }

  if (nextBtn) nextBtn.addEventListener('click', next);
  if (prevBtn) prevBtn.addEventListener('click', prev);
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showTestimonial(index));
  });

  // Auto-advance
  setInterval(next, 5000);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '-100px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements that should animate on scroll
  const animateElements = document.querySelectorAll('.stat-card, .process-card, .about-preview-image, .about-preview-content, .b2b-content, .b2b-card, .blog-card');
  
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ============================================
// NEWSLETTER FORM
// ============================================
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('.newsletter-input');
    const email = input.value;
    
    // Simulate API call
    console.log('Newsletter subscription:', email);
    alert('Merci pour votre abonnement !');
    input.value = '';
  });
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Simulate API call
    console.log('Form submission:', data);
    
    // Show success message
    const successMsg = document.createElement('div');
    successMsg.className = 'form-success';
    successMsg.innerHTML = `
      <div style="text-align: center; padding: 2rem; background: white; border-radius: 1rem; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
        <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
        <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--deco-charcoal); margin-bottom: 0.5rem;">Message envoyé !</h3>
        <p style="color: rgba(44,44,44,0.7);">Nous vous répondrons dans les plus brefs délais.</p>
      </div>
    `;
    
    form.parentNode.replaceChild(successMsg, form);
    
    setTimeout(() => {
      location.reload();
    }, 3000);
  });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
// ============================================
// WHATSAPP INTEGRATION
// ============================================
const WHATSAPP_PHONE = '221778110990';

function getWhatsAppLink(message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
}

function openWhatsAppProduct(event, productName) {
  event.preventDefault();
  const message = `Bonjour, je suis intéressé par le produit "${productName}" vu sur votre site web.`;
  window.open(getWhatsAppLink(message), '_blank');
}

function initWhatsAppButtons() {
  // Collect buttons
  const collectButtons = document.querySelectorAll('a[href="contact.html?type=collecte"]');
  collectButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const message = "Bonjour, je souhaite proposer des produits à recycler.";
      window.open(getWhatsAppLink(message), '_blank');
    });
  });

  // B2B Quote buttons
  const quoteButtons = document.querySelectorAll('a[href="contact.html?type=devis"]');
  quoteButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const message = "Bonjour, je souhaite obtenir un devis pour des matières premières (B2B).";
      window.open(getWhatsAppLink(message), '_blank');
    });
  });
}

function setCurrentYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initHeaderScroll();
  initMobileMenu();
  initHeroCarousel();
  initCounters();
  initProductsFilter();
  initTestimonialsCarousel();
  initScrollAnimations();
  initNewsletterForm();
  initContactForm();
  initWhatsAppButtons();
  setCurrentYear();
});

