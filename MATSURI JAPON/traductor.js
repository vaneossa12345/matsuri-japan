const translations = {
    es: {
        navInicio: "Inicio",
        navEstaciones: "Estaciones",
        navEtiqueta: "Etiqueta",

        heroTitle: "Descubre el alma de Japón",
        heroButton: "Explora ahora",
        estacionesTexto: "Primavera | Verano | Otoño | Invierno",
        introTitulo: "Bienvenidos a Matsuri Japan",
        introTexto1: "Matsuri Japan es un sitio web cultural inspirado en las tradiciones japonesas, sus festivales más representativos y algunas normas básicas de protocolo y etiqueta. Su propósito es presentar información de forma visual, organizada y fácil de recorrer.",
        introTexto2: "A través de sus páginas principales, el sitio reúne una portada de acceso, una sección dedicada a celebraciones destacadas y otra enfocada en el respeto por las costumbres culturales de Japón.",
        footerInicio: "Matsuri Japan - Sitio académico sobre cultura y tradición japonesa.",

        destacadosTitulo: "Destacados del mes",
        card1Titulo: "Sakura Matsuri: Primavera",
        card1Texto: "Vive la magia del florecimiento de los cerezos en Kioto. Un evento que simboliza la belleza de lo efímero y el inicio de la primavera en el corazón de Japón.",
        card2Titulo: "Tenjin Matsuri: Festival de los Dioses",
        card2Texto: "Uno de los festivales más grandes de Osaka. Disfruta de procesiones terrestres y fluviales acompañadas de un ambiente tradicional lleno de luz y color.",
        card3Titulo: "Gion Matsuri: El Alma de Kioto",
        card3Texto: "Conoce la elegancia de la vestimenta tradicional y el valor cultural de las celebraciones japonesas, donde destacan la artesanía, el protocolo y la tradición.",
        footerEstaciones: "Matsuri Japan - Festivales destacados y estaciones culturales de Japón.",

        etiquetaTitulo: "PROTOCOLO Y ETIQUETA CULTURAL",
        etiquetaIntro: "La etiqueta en Japón refleja respeto, armonía y consideración hacia los demás. Conocer estas normas básicas ayuda a comprender mejor su cultura y a participar de manera adecuada en sus espacios y celebraciones.",
        regla1Titulo: "Fotografía",
        regla1Texto: "No tomar fotos sin permiso.",
        regla2Titulo: "El saludo",
        regla2Texto: "Realizar una reverencia con respeto.",
        regla3Titulo: "Basura",
        regla3Texto: "Usar los recipientes adecuados.",
        regla4Titulo: "Vestimenta",
        regla4Texto: "Mantener una presentación apropiada.",
        regla5Titulo: "Comida",
        regla5Texto: "Evitar comer caminando en lugares concurridos.",
        regla6Titulo: "Silencio",
        regla6Texto: "Hablar en voz baja en espacios sagrados.",
        footerEtiqueta: "Matsuri Japan - Protocolo y normas básicas de respeto cultural en Japón."
    },

    en: {
        navInicio: "Home",
        navEstaciones: "Seasons",
        navEtiqueta: "Etiquette",

        heroTitle: "Discover the soul of Japan",
        heroButton: "Explore now",
        estacionesTexto: "Spring | Summer | Autumn | Winter",
        introTitulo: "Welcome to Matsuri Japan",
        introTexto1: "Matsuri Japan is a cultural website inspired by Japanese traditions, its most representative festivals, and some basic rules of protocol and etiquette. Its purpose is to present information in a visual, organized, and easy-to-browse way.",
        introTexto2: "Through its main pages, the site includes a home page, a section dedicated to featured celebrations, and another focused on respect for Japanese cultural customs.",
        footerInicio: "Matsuri Japan - Academic website about Japanese culture and tradition.",

        destacadosTitulo: "Highlights of the month",
        card1Titulo: "Sakura Matsuri: Spring",
        card1Texto: "Experience the magic of cherry blossom season in Kyoto. An event that symbolizes the beauty of the fleeting and the beginning of spring in the heart of Japan.",
        card2Titulo: "Tenjin Matsuri: Festival of the Gods",
        card2Texto: "One of Osaka's largest festivals. Enjoy land and river processions surrounded by a traditional atmosphere full of light and color.",
        card3Titulo: "Gion Matsuri: The Soul of Kyoto",
        card3Texto: "Discover the elegance of traditional clothing and the cultural value of Japanese celebrations, where craftsmanship, protocol, and tradition stand out.",
        footerEstaciones: "Matsuri Japan - Featured festivals and cultural seasons of Japan.",

        etiquetaTitulo: "CULTURAL PROTOCOL AND ETIQUETTE",
        etiquetaIntro: "Etiquette in Japan reflects respect, harmony, and consideration for others. Knowing these basic rules helps people better understand its culture and participate appropriately in its spaces and celebrations.",
        regla1Titulo: "Photography",
        regla1Texto: "Do not take photos without permission.",
        regla2Titulo: "Greeting",
        regla2Texto: "Bow respectfully when greeting.",
        regla3Titulo: "Trash",
        regla3Texto: "Use the proper containers.",
        regla4Titulo: "Clothing",
        regla4Texto: "Maintain appropriate presentation.",
        regla5Titulo: "Food",
        regla5Texto: "Avoid eating while walking in crowded places.",
        regla6Titulo: "Silence",
        regla6Texto: "Speak softly in sacred spaces.",
        footerEtiqueta: "Matsuri Japan - Protocol and basic rules of cultural respect in Japan."
    }
};

function setLanguage(lang) {
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-key]").forEach((element) => {
        const key = element.getAttribute("data-key");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    const esBtn = document.getElementById("btn-es");
    const enBtn = document.getElementById("btn-en");

    if (esBtn && enBtn) {
        esBtn.classList.toggle("activo-idioma", lang === "es");
        enBtn.classList.toggle("activo-idioma", lang === "en");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "es";
    setLanguage(savedLang);

    const esBtn = document.getElementById("btn-es");
    const enBtn = document.getElementById("btn-en");

    if (esBtn) {
        esBtn.addEventListener("click", () => setLanguage("es"));
    }

    if (enBtn) {
        enBtn.addEventListener("click", () => setLanguage("en"));
    }
});