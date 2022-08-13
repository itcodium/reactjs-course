const AplicationText =
{
    title: "Test",
    lang: ["es", "en"],
    menu: [
        {
            title: "Tienda",
            url: "",
            items: [{
                title: "Productos",
                url: "/#",
                items: []
            }]
        },
        {
            title: "User",
            url: "/Login",
            icon: "login",
            items: [{
                title: "Logout",
                url: "",
                action: "logout"
            }]
        },
    ],
    footer: {
        links: [
            {
                title: 'Company',
                urls: [{ text: 'Team', href: "/#" }, { text: 'History', href: "/#" }, { text: 'Contact us', href: "/#" }, { text: 'Locations', href: "/#" }],
            },
           {
                title: 'Company 2',
                urls: [{ text: 'Team', href: "/#" }, { text: 'History', href: "/#" }, { text: 'Contact us', href: "/#" }, { text: 'Locations', href: "/#" }],
            },
            {
                title: 'Company 3',
                urls: [{ text: 'Team', href: "/#" }, { text: 'History', href: "/#" }, { text: 'Contact us', href: "/#" }, { text: 'Locations', href: "/#" }],
            },           
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