const AplicationText =
{
    title: "Test",
    lang: ["es", "en"],
    menu: [
        {
            text: "Tienda",
            url: "",
            items: [{
                text: "Productos",
                url: "/ProductList",
                items: []
            },
            {
                text: "Time Logging",
                url: "/TimeLogging",
            },
            {
                text: "Civil",
                url: "/products/Civil",
                items: []
            }]
        },
        {
            text: "User",
            url: "/Login",
            icon: "login",
            items: [{
                text: "Logout",
                url: "",
                action: "logout",
                onClick: null
            }]
        },
    ],
    footer: {
        links: [
            {
                title: 'Company',
                urls: [{ text: 'Team', href: "/#" }, { text: 'History', href: "/#" }, { text: 'Contact us', href: "/#" }, { text: 'Locations', href: "/#" }],
            }
        ]
    },
    copyright: {
        website: "Your Website",
        url: "https://google.com/",
        createdby: {
            text: "Created by ",
            name: "Someone",
            url: "https://someone.com/"
        }
    },
    contact: {
        title: "Encontranos en",
        cel: "(034) 11-339-4422",
        email: "contact@website.com",
        direction: "Ruta 8 y Subida de Diez, Bariloche",
    },
    social: [{ name: "Facebook", url: "https://www.facebook.com/test/" },
    { name: "instagram", url: "https://www.instagram.com/test/" },
    { name: "twitter", url: "https://twitter.com/test" },
    { name: "youtube", url: "https://www.youtube.com/user/test" }]
}

export default AplicationText;
