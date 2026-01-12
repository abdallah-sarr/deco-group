export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DECO GROUP — Diong Empire Corporation Group',
    alternateName: 'DECO GROUP',
    url: 'https://decogroup.sn',
    logo: 'https://decogroup.sn/logo.png',
    description: 'DECO GROUP transforme déchets en pièces design : mobilier, mode et matières pour l\'industrie. Ateliers, formations & solutions B2B.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dakar',
      addressCountry: 'SN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+221-XX-XXX-XX-XX',
      contactType: 'customer service',
      email: 'contact@decogroup.sn',
    },
    sameAs: [
      'https://www.facebook.com/deco_group',
      'https://www.instagram.com/deco_group',
    ],
  }
}

export function getProductSchema(product: {
  name: string
  description: string
  price: number
  image: string
  category: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    category: product.category,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'XOF',
      availability: 'https://schema.org/InStock',
    },
  }
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function getBlogPostSchema(post: {
  title: string
  description: string
  image: string
  date: string
  author: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'DECO GROUP',
      logo: {
        '@type': 'ImageObject',
        url: 'https://decogroup.sn/logo.png',
      },
    },
  }
}

