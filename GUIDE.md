# Guide d'utilisation — DECO GROUP

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build de production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
deco-group/
├── app/                    # Pages Next.js (App Router)
│   ├── page.tsx           # Homepage
│   ├── boutique/          # Page boutique
│   ├── a-propos/          # Page à propos
│   ├── processus/          # Page processus
│   ├── b2b/               # Page B2B
│   ├── blog/              # Page blog
│   └── contact/            # Page contact
├── components/            # Composants React
│   ├── Header.tsx         # Header avec navigation
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero carousel
│   ├── sections/          # Sections homepage
│   └── shop/              # Composants e-commerce
├── lib/                   # Utilitaires
│   └── structured-data.ts # Données structurées SEO
└── public/                # Assets statiques
```

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `tailwind.config.js` :

- `deco-gold`: #D4AF37 (Or chaud)
- `deco-terracotta`: #C65D07 (Terracotta)
- `deco-olive`: #6B8E23 (Vert olive)
- `deco-charcoal`: #2C2C2C (Gris charbon)
- `deco-cream`: #FAF8F3 (Blanc cassé)

### Typographie

- **Titres**: Poppins (font-heading)
- **Corps**: Roboto (font-body)

## 📝 Ajouter un produit

1. Ouvrir `components/sections/ProductsSection.tsx` ou `components/shop/ProductsGrid.tsx`
2. Ajouter un objet dans le tableau `products` :

```typescript
{
  id: 'nouveau-id',
  name: 'Nom du produit',
  category: 'mode' | 'mobilier' | 'decor',
  price: 25000, // en FCFA
  image: 'url-de-l-image',
  materials: ['Matière 1', 'Matière 2'],
  tag: 'Upcycled',
  story: 'Histoire du produit',
}
```

## 📧 Gérer les demandes de collecte

Les formulaires de contact sont gérés dans `components/ContactForm.tsx`.

Pour intégrer un backend :

1. Créer une API route dans `app/api/contact/route.ts`
2. Modifier `handleSubmit` dans `ContactForm.tsx` pour envoyer les données

## 🔍 SEO

### Meta tags

Les meta tags sont définis dans chaque page via `export const metadata`.

### Données structurées

Les données structurées JSON-LD sont automatiquement ajoutées via `lib/structured-data.ts`.

### Sitemap

Le sitemap est généré automatiquement via `app/sitemap.ts`.

## 🛒 E-commerce

### Panier (à implémenter)

Pour ajouter un système de panier :

1. Installer un state management (Zustand est déjà dans les dépendances)
2. Créer `lib/store/cart.ts`
3. Connecter les boutons "Ajouter au panier" dans les composants produits

### Paiement

Intégrer :
- **Local**: Wave, Orange Money
- **International**: Stripe

## 📱 Responsive

Le site est entièrement responsive :
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎭 Animations

Les animations utilisent Framer Motion. Les animations sont configurées pour :
- Entrée au scroll (useInView)
- Transitions de page
- Micro-interactions (hover, click)

## 🔧 Configuration

### Variables d'environnement

Créer un fichier `.env.local` :

```env
NEXT_PUBLIC_SITE_URL=https://decogroup.sn
NEXT_PUBLIC_CONTACT_EMAIL=contact@decogroup.sn
```

### Images

Les images sont chargées depuis Unsplash en développement. Pour la production :
1. Uploader les images sur Cloudinary ou Imgix
2. Mettre à jour les URLs dans les composants

## 📚 Ressources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 🆘 Support

Pour toute question, contactez l'équipe technique.

