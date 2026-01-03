// ====================
// INITIALIZATION
// ====================

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Business Card data - renamed to businessCardsData to match usage
const businessCardsData = {
    1: {
        title: "Clean White Business Card",
        subtitle: "Simple and professional design with ample white space",
        description: "This minimalist business card design focuses on clean typography and generous white space to create a professional, uncluttered appearance. The design uses a single accent color to highlight key information while maintaining an elegant, understated aesthetic. Perfect for professionals who want to convey sophistication and clarity.",
        imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        designType: "Minimal",
        fileFormat: "AI, PDF, PNG",
        dimensions: "3.5×2 in (300dpi)",
        downloadCount: "1,245",
        likes: 342,
        colors: ["#FFFFFF", "#333333", "#4361ee"],
        colorNames: ["White", "Dark Gray", "Primary Blue"],
        tags: ["minimal", "professional", "clean", "typography", "white space"],
        related: [
            {id: 6, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Black & White"},
            {id: 16, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Two-Tone"},
            {id: 21, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Typography Focus"}
        ]
    },
    2: {
        title: "Geometric Business Card",
        subtitle: "Contemporary design with bold geometric elements",
        description: "This modern business card features striking geometric patterns that create visual interest while maintaining professionalism. The design uses overlapping shapes and a limited color palette to achieve a contemporary look that stands out. Ideal for creative professionals and tech companies looking to showcase their modern approach.",
        imageUrl: "https://images.unsplash.com/photo-1629196911285-60af2f113aab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        designType: "Modern",
        fileFormat: "AI, PDF, PNG, SVG",
        dimensions: "3.5×2 in (300dpi)",
        downloadCount: "892",
        likes: 215,
        colors: ["#212121", "#4361ee", "#f72585"],
        colorNames: ["Black", "Primary Blue", "Accent Pink"],
        tags: ["modern", "geometric", "bold", "contemporary", "creative"],
        related: [
            {id: 7, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Gradient"},
            {id: 12, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Transparent"},
            {id: 22, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Duotone"}
        ]
    },
    
            3: {
                title: "Watercolor Business Card",
                subtitle: "Artistic design with soft watercolor textures",
                description: "This creative business card features beautiful watercolor washes that add an artistic, handcrafted feel. The design blends soft color transitions with crisp typography for a balanced look. Perfect for artists, designers, and creative professionals who want to showcase their artistic sensibility.",
                imageUrl: "https://images.unsplash.com/photo-1611944213016-db5d1f57d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                designType: "Creative",
                fileFormat: "AI, PSD, PNG",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "1,532",
                likes: 478,
                colors: ["#FF5252", "#FFD740", "#69F0AE", "#40C4FF", "#E040FB"],
                colorNames: ["Red", "Yellow", "Green", "Blue", "Purple"],
                tags: ["watercolor", "artistic", "creative", "handmade", "colorful"],
                related: [
                    {id: 8, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Die-Cut"},
                    {id: 13, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Illustrated"},
                    {id: 18, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Textured"}
                ]
            },
            4: {
                title: "Executive Business Card",
                subtitle: "Professional design with premium finishes",
                description: "This corporate business card design exudes professionalism and authority. The layout uses a balanced grid system with carefully chosen typography to create a sense of reliability and trust. Ideal for executives, lawyers, and financial professionals who need to convey competence and experience.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Corporate",
                fileFormat: "AI, PDF, EPS",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "1,789",
                likes: 567,
                colors: ["#000000", "#FFFFFF", "#CCCCCC"],
                colorNames: ["Black", "White", "Silver"],
                tags: ["corporate", "professional", "executive", "premium", "business"],
                related: [
                    {id: 9, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Embossed"},
                    {id: 14, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Luxury"},
                    {id: 24, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Premium Stock"}
                ]
            },
            5: {
                title: "Foil Stamped Business Card",
                subtitle: "Luxury design with gold foil accents",
                description: "This elegant business card design features metallic foil stamping that catches the light and creates a luxurious impression. The combination of foil with premium paper stock conveys exclusivity and attention to detail. Perfect for high-end brands, luxury services, and professionals who want to make a memorable impression.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Elegant",
                fileFormat: "AI, PDF, PSD",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "1,024",
                likes: 412,
                colors: ["#000000", "#FFD700", "#FFFFFF"],
                colorNames: ["Black", "Gold", "White"],
                tags: ["elegant", "luxury", "foil", "premium", "gold"],
                related: [
                    {id: 10, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Letterpress"},
                    {id: 15, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Debossed"},
                    {id: 20, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Raised Ink"}
                ]
            },
            6: {
                title: "Black & White Business Card",
                subtitle: "High contrast design with clean typography",
                description: "This minimal business card uses only black and white to create striking contrast and visual impact. The design relies on careful typographic hierarchy and negative space to communicate effectively. Ideal for designers, photographers, and creatives who appreciate simplicity and boldness.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Minimal",
                fileFormat: "AI, PDF, PNG",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "876",
                likes: 298,
                colors: ["#000000", "#FFFFFF"],
                colorNames: ["Black", "White"],
                tags: ["minimal", "black and white", "high contrast", "typography", "bold"],
                related: [
                    {id: 1, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Clean White"},
                    {id: 11, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Monochrome"},
                    {id: 16, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Two-Tone"}
                ]
            },
            7: {
                title: "Gradient Business Card",
                subtitle: "Smooth color transitions with modern typography",
                description: "This modern business card features vibrant gradient colors that create visual interest and contemporary appeal. The design pairs the gradients with clean, sans-serif typography for balance. Perfect for tech companies, startups, and creative agencies looking for a fresh, energetic look.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Modern",
                fileFormat: "AI, PDF, PNG",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "1,432",
                likes: 521,
                colors: ["#4361ee", "#3a0ca3", "#f72585"],
                colorNames: ["Blue", "Dark Blue", "Pink"],
                tags: ["modern", "gradient", "colorful", "vibrant", "tech"],
                related: [
                    {id: 2, image: "https://images.unsplash.com/photo-1629196911285-60af2f113aab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", title: "Geometric"},
                    {id: 12, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Transparent"},
                    {id: 17, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Metallic"}
                ]
            },
            8: {
                title: "Die-Cut Business Card",
                subtitle: "Unique shape with custom cutout details",
                description: "This creative business card stands out with its custom die-cut shape that breaks from the traditional rectangle. The unusual silhouette immediately captures attention while the design maintains readability. Perfect for businesses that want to make a bold statement and stand out from competitors.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Creative",
                fileFormat: "AI, PDF, EPS",
                dimensions: "Custom (300dpi)",
                downloadCount: "987",
                likes: 376,
                colors: ["#FFFFFF", "#000000", "#f72585"],
                colorNames: ["White", "Black", "Accent Pink"],
                tags: ["creative", "die-cut", "unique", "custom shape", "bold"],
                related: [
                    {id: 3, image: "https://images.unsplash.com/photo-1611944213016-db5d1f57d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", title: "Watercolor"},
                    {id: 13, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Illustrated"},
                    {id: 18, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Textured"}
                ]
            },
            9: {
                title: "Embossed Business Card",
                subtitle: "Tactile design with raised lettering",
                description: "This corporate business card features elegant embossing that creates a subtle but luxurious tactile experience. The raised elements catch light differently throughout the day, adding dynamic visual interest. Perfect for professionals who want to convey quality and attention to detail through both sight and touch.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Corporate",
                fileFormat: "AI, PDF, EPS",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "1,210",
                likes: 432,
                colors: ["#FFFFFF", "#333333"],
                colorNames: ["White", "Dark Gray"],
                tags: ["corporate", "embossed", "tactile", "luxury", "professional"],
                related: [
                    {id: 4, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Executive"},
                    {id: 14, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Luxury"},
                    {id: 19, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Spot UV"}
                ]
            },
            10: {
                title: "Letterpress Business Card",
                subtitle: "Classic design with deep impression printing",
                description: "This elegant business card showcases the beautiful craftsmanship of traditional letterpress printing. The deep impression creates a distinctive tactile quality, while the slightly imperfect ink coverage adds artisanal charm. Perfect for boutique businesses, craftspeople, and those who appreciate traditional printing techniques.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Elegant",
                fileFormat: "AI, PDF, EPS",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "1,543",
                likes: 587,
                colors: ["#000000", "#FFFFFF", "#FFD700"],
                colorNames: ["Black", "White", "Gold"],
                tags: ["elegant", "letterpress", "traditional", "craftsmanship", "luxury"],
                related: [
                    {id: 5, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Foil Stamped"},
                    {id: 15, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Debossed"},
                    {id: 20, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Raised Ink"}
                ]
            },
            11: {
                title: "Monochrome Business Card",
                subtitle: "Single color design with clean layout",
                description: "This minimal business card uses a single color to create a cohesive, understated design. The restrained color palette focuses attention on the typography and layout. Perfect for professionals who want a sophisticated look that's both distinctive and versatile.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Minimal",
                fileFormat: "AI, PDF, PNG",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "765",
                likes: 254,
                colors: ["#4361ee"],
                colorNames: ["Primary Blue"],
                tags: ["minimal", "monochrome", "single color", "clean", "versatile"],
                related: [
                    {id: 1, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Clean White"},
                    {id: 6, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Black & White"},
                    {id: 16, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Two-Tone"}
                ]
            },
            12: {
                title: "Transparent Business Card",
                subtitle: "Clear acrylic with printed details",
                description: "This modern business card uses transparent acrylic material to create a contemporary, high-tech impression. The see-through design allows for creative layering effects and stands out in any setting. Perfect for innovative companies, designers, and tech professionals who want to showcase their forward-thinking approach.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Modern",
                fileFormat: "AI, PDF, EPS",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "1,876",
                likes: 643,
                colors: ["#FFFFFF", "#000000", "#4361ee"],
                colorNames: ["White", "Black", "Primary Blue"],
                tags: ["modern", "transparent", "acrylic", "innovative", "tech"],
                related: [
                    {id: 2, image: "https://images.unsplash.com/photo-1629196911285-60af2f113aab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", title: "Geometric"},
                    {id: 7, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Gradient"},
                    {id: 17, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Metallic"}
                ]
            },
            13: {
                title: "Illustrated Business Card",
                subtitle: "Custom artwork with hand-drawn elements",
                description: "This creative business card features bespoke illustrations that tell a visual story about your brand. The handcrafted aesthetic adds personality and warmth. Perfect for illustrators, artists, and creative businesses that want to showcase their unique style and artistic capabilities.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Creative",
                fileFormat: "AI, PSD, PNG",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "1,098",
                likes: 398,
                colors: ["#FFFFFF", "#000000", "#f72585"],
                colorNames: ["White", "Black", "Accent Pink"],
                tags: ["creative", "illustrated", "hand-drawn", "custom", "artistic"],
                related: [
                    {id: 3, image: "https://images.unsplash.com/photo-1611944213016-db5d1f57d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", title: "Watercolor"},
                    {id: 8, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Die-Cut"},
                    {id: 18, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Textured"}
                ]
            },
            14: {
                title: "Luxury Business Card",
                subtitle: "Premium materials with sophisticated design",
                description: "This corporate business card uses high-end materials and refined design elements to convey exclusivity and prestige. The subtle textures and careful typography create a sense of understated luxury. Perfect for high-end brands, executives, and professionals who want to make an impression of quality and sophistication.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Corporate",
                fileFormat: "AI, PDF, EPS",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "1,654",
                likes: 587,
                colors: ["#000000", "#FFFFFF", "#CCCCCC"],
                colorNames: ["Black", "White", "Silver"],
                tags: ["corporate", "luxury", "premium", "sophisticated", "executive"],
                related: [
                    {id: 4, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Executive"},
                    {id: 9, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Embossed"},
                    {id: 19, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Spot UV"}
                ]
            },
            15: {
                title: "Debossed Business Card",
                subtitle: "Subtle engraved details with refined typography",
                description: "This elegant business card features debossed elements that create a sophisticated tactile experience. The recessed areas catch shadows beautifully, adding depth and dimension. Perfect for professionals who appreciate subtle details and want to convey craftsmanship and attention to detail.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Elegant",
                fileFormat: "AI, PDF, EPS",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "1,321",
                likes: 476,
                colors: ["#FFFFFF", "#333333"],
                colorNames: ["White", "Dark Gray"],
                tags: ["elegant", "debossed", "tactile", "sophisticated", "craftsmanship"],
                related: [
                    {id: 5, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Foil Stamped"},
                    {id: 10, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Letterpress"},
                    {id: 20, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Raised Ink"}
                ]
            },
            16: {
                title: "Two-Tone Business Card",
                subtitle: "Limited color palette with bold contrast",
                description: "This minimal business card uses just two colors to create striking visual impact. The restrained palette focuses attention on the typography and layout. Perfect for professionals who want a distinctive look that's both simple and memorable.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Minimal",
                fileFormat: "AI, PDF, PNG",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "987",
                likes: 345,
                colors: ["#000000", "#f72585"],
                colorNames: ["Black", "Accent Pink"],
                tags: ["minimal", "two-tone", "contrast", "bold", "simple"],
                related: [
                    {id: 1, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Clean White"},
                    {id: 6, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Black & White"},
                    {id: 11, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Monochrome"}
                ]
            },
            17: {
                title: "Metallic Business Card",
                subtitle: "Shiny metallic finish with modern aesthetic",
                description: "This modern business card features a sleek metallic finish that catches the light from every angle. The reflective surface creates dynamic visual interest while maintaining a professional appearance. Perfect for tech companies, designers, and professionals who want a contemporary, high-end look.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Modern",
                fileFormat: "AI, PDF, EPS",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "1,543",
                likes: 587,
                colors: ["#CCCCCC", "#000000"],
                colorNames: ["Silver", "Black"],
                tags: ["modern", "metallic", "shiny", "contemporary", "tech"],
                related: [
                    {id: 2, image: "https://images.unsplash.com/photo-1629196911285-60af2f113aab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", title: "Geometric"},
                    {id: 7, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Gradient"},
                    {id: 12, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Transparent"}
                ]
            },
            18: {
                title: "Textured Business Card",
                subtitle: "Tactile surface with unique material finish",
                description: "This creative business card features a distinctive textured surface that invites touch. The physical texture complements the visual design to create a multi-sensory experience. Perfect for brands that want to stand out and create a memorable tactile impression.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Creative",
                fileFormat: "AI, PDF, EPS",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "1,210",
                likes: 432,
                colors: ["#FFFFFF", "#333333", "#f72585"],
                colorNames: ["White", "Dark Gray", "Accent Pink"],
                tags: ["creative", "textured", "tactile", "unique", "memorable"],
                related: [
                    {id: 3, image: "https://images.unsplash.com/photo-1611944213016-db5d1f57d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", title: "Watercolor"},
                    {id: 8, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Die-Cut"},
                    {id: 13, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Illustrated"}
                ]
            },
            19: {
                title: "Spot UV Business Card",
                subtitle: "Glossy UV coating on select areas",
                description: "This corporate business card uses spot UV coating to create contrast between matte and glossy areas. The selective shine highlights key elements and adds depth to the design. Perfect for professionals who want to add subtle sophistication and visual interest to their cards.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Corporate",
                fileFormat: "AI, PDF, EPS",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "1,876",
                likes: 643,
                colors: ["#000000", "#FFFFFF"],
                colorNames: ["Black", "White"],
                tags: ["corporate", "spot UV", "glossy", "sophisticated", "contrast"],
                related: [
                    {id: 4, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Executive"},
                    {id: 9, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Embossed"},
                    {id: 14, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Luxury"}
                ]
            },
            20: {
                title: "Raised Ink Business Card",
                subtitle: "Thick ink application for dimensional effect",
                description: "This elegant business card features raised ink printing that creates subtle dimension and texture. The technique adds a luxurious tactile quality while maintaining a clean visual aesthetic. Perfect for professionals who appreciate fine printing techniques and want to convey quality through both sight and touch.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Elegant",
                fileFormat: "AI, PDF, EPS",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "1,321",
                likes: 476,
                colors: ["#000000", "#FFFFFF"],
                colorNames: ["Black", "White"],
                tags: ["elegant", "raised ink", "dimensional", "luxury", "tactile"],
                related: [
                    {id: 5, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Foil Stamped"},
                    {id: 10, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Letterpress"},
                    {id: 15, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Debossed"}
                ]
            },
            21: {
                title: "Typography Business Card",
                subtitle: "Focus on beautiful typographic hierarchy",
                description: "This minimal business card puts typography front and center, using carefully selected fonts and spacing to create visual interest. The design proves that words alone can be powerful when arranged with intention. Perfect for writers, designers, and professionals who want to showcase their appreciation for good typography.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Minimal",
                fileFormat: "AI, PDF, PNG",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "987",
                likes: 345,
                colors: ["#000000", "#FFFFFF"],
                colorNames: ["Black", "White"],
                tags: ["minimal", "typography", "fonts", "clean", "text-focused"],
                related: [
                    {id: 1, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Clean White"},
                    {id: 6, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Black & White"},
                    {id: 11, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Monochrome"}
                ]
            },
            22: {
                title: "Duotone Business Card",
                subtitle: "Two-color design with modern aesthetic",
                description: "This modern business card uses a duotone color scheme to create bold visual impact. The limited palette focuses attention on the essential information while creating a contemporary look. Perfect for creatives and professionals who want a distinctive yet clean design that stands out.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Modern",
                fileFormat: "AI, PDF, PNG",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "1,543",
                likes: 587,
                colors: ["#4361ee", "#f72585"],
                colorNames: ["Primary Blue", "Accent Pink"],
                tags: ["modern", "duotone", "two-color", "bold", "contemporary"],
                related: [
                    {id: 2, image: "https://images.unsplash.com/photo-1629196911285-60af2f113aab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", title: "Geometric"},
                    {id: 7, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Gradient"},
                    {id: 17, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Metallic"}
                ]
            },
            23: {
                title: "Interactive Business Card",
                subtitle: "Unique elements that engage the recipient",
                description: "This creative business card features interactive elements that invite participation, such as tear-off sections, fold-out panels, or other engaging features. The design turns a simple card into a memorable experience. Perfect for marketers, designers, and creative professionals who want to make a lasting impression.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Creative",
                fileFormat: "AI, PDF, EPS",
                dimensions: "Custom (300dpi)",
                downloadCount: "1,210",
                likes: 432,
                colors: ["#FFFFFF", "#000000", "#f72585"],
                colorNames: ["White", "Black", "Accent Pink"],
                tags: ["creative", "interactive", "engaging", "unique", "memorable"],
                related: [
                    {id: 3, image: "https://images.unsplash.com/photo-1611944213016-db5d1f57d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", title: "Watercolor"},
                    {id: 8, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Die-Cut"},
                    {id: 13, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Illustrated"}
                ]
            },
            24: {
                title: "Premium Stock Business Card",
                subtitle: "Thick, luxurious paper stock with refined finish",
                description: "This corporate business card uses premium paper stock to convey quality and substance. The substantial weight and refined finish create an immediate impression of professionalism. Perfect for executives and professionals who want their card to feel as impressive as it looks.",
                imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                designType: "Corporate",
                fileFormat: "AI, PDF, EPS",
                dimensions: "3.5×2 in (300dpi)",
                downloadCount: "1,876",
                likes: 643,
                colors: ["#FFFFFF", "#000000"],
                colorNames: ["White", "Black"],
                tags: ["corporate", "premium", "thick stock", "professional", "executive"],
                related: [
                    {id: 4, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Executive"},
                    {id: 9, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Embossed"},
                    {id: 14, image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Luxury"}
                ]
            }
        };
    

// ====================
// DOM ELEMENTS
// ====================

const modal = document.getElementById('projectModal');
const closeModal = document.getElementById('closeModal');
const businessCards = document.querySelectorAll('.business-card'); // This is the DOM elements
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalDescription = document.getElementById('modalDescription');
const designType = document.getElementById('designType');
const fileFormat = document.getElementById('fileFormat');
const dimensions = document.getElementById('dimensions');
const downloadCount = document.getElementById('downloadCount');
const likeBtn = document.getElementById('likeBtn');
const downloadBtn = document.getElementById('downloadBtn');
const favoriteBtn = document.getElementById('favoriteBtn');
const shareBtn = document.getElementById('shareBtn');
const expandBtn = document.getElementById('expandBtn');
const colorPalette = document.getElementById('colorPalette');
const tagsContainer = document.getElementById('tagsContainer');
const relatedDesigns = document.getElementById('relatedDesigns');
const filterBtns = document.querySelectorAll('.filter-btn');
const backToTopBtn = document.getElementById('backToTop');

// Mobile navigation elements
const mobileNavToggle = document.querySelectorAll('.mobile-nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
const overlay = document.getElementById('overlay');
const mobileNavClose = document.querySelector('.mobile-nav-header .mobile-nav-toggle');

// ====================
// MODAL FUNCTIONS
// ====================

// Current project ID
let currentProjectId = null;

// Open modal with business card data
function openModal(projectId) {
    currentProjectId = projectId;
    const card = businessCardsData[projectId];
    
    if (!card) {
        console.error(`No data found for project ID: ${projectId}`);
        return;
    }
    
    // Set basic info
    modalImage.src = card.imageUrl;
    modalImage.alt = card.title;
    modalTitle.textContent = card.title;
    modalSubtitle.textContent = card.subtitle;
    modalDescription.textContent = card.description;
    designType.textContent = card.designType;
    fileFormat.textContent = card.fileFormat;
    dimensions.textContent = card.dimensions;
    downloadCount.textContent = card.downloadCount;
    
    // Reset button states
    likeBtn.classList.remove('active');
    favoriteBtn.classList.remove('active');
    
    // Set color palette
    colorPalette.innerHTML = '';
    card.colors.forEach((color, index) => {
        const colorElement = document.createElement('div');
        colorElement.className = 'color';
        colorElement.style.backgroundColor = color;
        
        const tooltip = document.createElement('span');
        tooltip.className = 'color-tooltip';
        tooltip.textContent = `${card.colorNames[index]} ${color}`;
        
        colorElement.appendChild(tooltip);
        colorPalette.appendChild(colorElement);
    });
    
    // Set tags
    tagsContainer.innerHTML = '';
    card.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });
    
    // Set related designs
    relatedDesigns.innerHTML = '';
    card.related.forEach(design => {
        const designElement = document.createElement('div');
        designElement.className = 'related-item';
        designElement.innerHTML = `
            <img src="${design.image}" alt="${design.title}">
        `;
        relatedDesigns.appendChild(designElement);
        
        // Click handler for related designs
        designElement.addEventListener('click', () => {
            openModal(design.id);
        });
    });
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModalFunc() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ====================
// FILTER FUNCTIONS
// ====================

// Filter business cards
function filterCards(category) {
    const cards = document.querySelectorAll('.business-card');
    
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ====================
// HELPER FUNCTIONS
// ====================

// Copy text to clipboard
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// ====================
// EVENT LISTENERS - MODAL
// ====================

// Add click event to each business card
businessCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Prevent event from bubbling up to parent elements
        e.stopPropagation();
        
        const projectId = card.getAttribute('data-project');
        if (projectId) {
            openModal(projectId);
        } else {
            console.error('No data-project attribute found on card:', card);
        }
    });
});

// Close modal when clicking on close button
closeModal.addEventListener('click', closeModalFunc);

// Close modal when clicking outside content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Like button functionality
likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('active');
});

// Favorite button functionality
favoriteBtn.addEventListener('click', () => {
    favoriteBtn.classList.toggle('active');
});

// Download button functionality
downloadBtn.addEventListener('click', () => {
    if (currentProjectId && businessCardsData[currentProjectId]) {
        alert(`Downloading ${businessCardsData[currentProjectId].title}`);
        // In a real app, this would trigger a file download
        const currentDownloads = parseInt(downloadCount.textContent.replace(/,/g, ''));
        downloadCount.textContent = (currentDownloads + 1).toLocaleString();
    }
});

// Expand button functionality
expandBtn.addEventListener('click', () => {
    if (currentProjectId && businessCardsData[currentProjectId]) {
        window.open(businessCardsData[currentProjectId].imageUrl, '_blank');
    }
});

// Share button functionality
shareBtn.addEventListener('click', () => {
    if (currentProjectId && businessCardsData[currentProjectId]) {
        if (navigator.share) {
            navigator.share({
                title: businessCardsData[currentProjectId].title,
                text: `Check out this ${businessCardsData[currentProjectId].designType} business card: ${businessCardsData[currentProjectId].description.substring(0, 100)}...`,
                url: window.location.href
            }).catch(err => {
                console.log('Error sharing:', err);
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            copyToClipboard(window.location.href);
            const originalHTML = shareBtn.innerHTML;
            shareBtn.innerHTML = `<i class="fas fa-check"></i>`;
            setTimeout(() => {
                shareBtn.innerHTML = originalHTML;
            }, 2000);
        }
    }
});

// ====================
// EVENT LISTENERS - FILTERS
// ====================

// Filter button functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Filter cards
        const category = btn.getAttribute('data-filter');
        filterCards(category);
    });
});

// ====================
// EVENT LISTENERS - KEYBOARD
// ====================

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModalFunc();
    }
});

// ====================
// EVENT LISTENERS - BACK TO TOP
// ====================

// Back to top button functionality
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ====================
// EVENT LISTENERS - MOBILE NAVIGATION
// ====================

// Mobile Navigation Toggle
mobileNavToggle.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !isExpanded);
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
});

// Close mobile menu when clicking on overlay
overlay.addEventListener('click', () => {
    mobileNavToggle.forEach(toggle => {
        toggle.setAttribute('aria-expanded', 'false');
    });
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

// Mobile dropdown toggle
const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdown = toggle.nextElementSibling;
        const icon = toggle.querySelector('i');
        
        dropdown.classList.toggle('active');
        if (dropdown.classList.contains('active')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });
});

// ====================
// INITIALIZATION ON LOAD
// ====================

// Initialize filter to show all cards
filterCards('all');

// Initialize first filter button as active
if (filterBtns.length > 0) {
    filterBtns[0].classList.add('active');
}

console.log('Business cards page initialized successfully');