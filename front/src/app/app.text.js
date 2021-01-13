const AplicationText =
{
    title: "Test",
    lang: ["es", "en"],
    menu: [
        {
            text: "Home",
            url: "/",
            items: []
        },
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
                items: []
            },
            {
                text: "Civil",
                url: "/products/Civil",
                items: []
            }]
        }
        , {
            text: "Oceans",
            url: "/Oceans",
            items: []
        },
        {
            text: "Contacto",
            url: "/Contacto",
            items: []
        }, {
            text: "React Course",
            url: "",
            items: [{
                text: "JSX",
                url: "/ReactJSX",
                items: []
            },
            {
                text: "Forms",
                url: "/Forms",
                items: []
            }, {
                text: "Redux",
                url: "/Redux",
                items: []
            }, {
                text: "Redux Actions",
                url: "/ReduxComplete",
                items: []
            }]
        },
        {
            text: "Login",
            url: "/Login",
            icon: "login",
            items: []
        },

    ],
    footer: {
        links: [
            {
                title: 'Company',
                urls: [{ text: 'Team', href: "/#" }, { text: 'History', href: "/#" }, { text: 'Contact us', href: "/#" }, { text: 'Locations', href: "/#" }],
            },
            {
                title: 'Features',
                urls: [{ text: 'Cool stuff', href: "/#" }, { text: 'Random feature', href: "/#" }, { text: 'Team feature', href: "/#" }, { text: 'Developer stuff', href: "/#" }]
            },
            {
                title: 'Features 2',
                urls: [{ text: 'Cool stuff 2', href: "/#" }, { text: 'Random feature 2', href: "/#" }, { text: 'Team feature2', href: "/#" }, { text: 'Developer stuff 2', href: "/#" }]
            },
            {
                title: 'Features 3',
                urls: [{ text: 'Cool stuff 3', href: "/#" }, { text: 'Random feature3', href: "/#" }, { text: 'Team feature 3', href: "/#" }, { text: 'Developer stuff 3', href: "/#" }]
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
