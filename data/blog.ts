export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    category: string;
    readTime: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Comment prévenir les fuites d\'eau : 5 conseils d\'experts',
        excerpt: 'Les fuites d\'eau peuvent causer des dommages importants. Apprenez à les repérer et à les prévenir grâce à nos conseils professionnels.',
        date: '15 Janvier 2024',
        image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2000&auto=format&fit=crop',
        category: 'Conseils',
        readTime: '5 min'
    },
    {
        id: '2',
        title: 'Choisir le bon chauffe-eau pour votre maison',
        excerpt: 'Électrique, gaz ou thermodynamique ? Découvrez quel système est le plus adapté à vos besoins et à votre budget.',
        date: '28 Janvier 2024',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2069&auto=format&fit=crop',
        category: 'Installation',
        readTime: '7 min'
    },
    {
        id: '3',
        title: 'Débouchage : Les gestes à éviter absolument',
        excerpt: 'Certains produits chimiques peuvent endommager vos canalisations. Voici les méthodes douces pour un débouchage efficace.',
        date: '05 Février 2024',
        image: 'https://images.unsplash.com/photo-1620629707891-ce48b656392c?q=80&w=2070&auto=format&fit=crop',
        category: 'Entretien',
        readTime: '4 min'
    }
];
