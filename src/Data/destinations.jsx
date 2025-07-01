export const destinations = [
    {
        id: 1,
        name: "Paris",
        heading: "Explore the Beauty of Paris",
        description: "The city of lights, love, and art awaits you.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", // ✅ This must exist
    },
    {
        id: 2,
        name: "Tokyo",
        heading: "Discover Vibrant Tokyo",
        description: "A mix of tradition and technology in Japan’s capital.",
        image: "https://images.unsplash.com/photo-1557720341-fae668aa6fde",
    },
    {
        id: 3,
        name: "Machu Picchu",
        location: "Peru",
        image: "/assets/Destinations/machu_picchu.jpg",
        rating: 4.9,
        description: "An iconic Incan citadel located in the Andes Mountains, offering breathtaking scenery and rich history.",
        travelTips: "Book permits early and visit early in the morning for fewer crowds.",
        reviews: [
            { user: "Olivia", comment: "Incredible experience! The hike is tough but worth it!" },
            { user: "James", comment: "A must-visit for history lovers and adventure seekers!" }
        ]
    },
    {
        id: 4,
        name: "Venice",
        location: "Italy",
        image: "/assets/Destinations/venice.jpg",
        rating: 4.6,
        description: "Venice is famous for its charming canals, historic architecture, and romantic atmosphere.",
        travelTips: "Avoid peak summer months to escape heavy tourist crowds.",
        reviews: [
            { user: "Ella", comment: "Riding a gondola was a dream come true!" },
            { user: "William", comment: "Beautiful city, but gets crowded quickly—visit early!" }
        ]
    }
];
