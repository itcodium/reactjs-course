const styles = theme => ({

    container: {
        width: 'auto',
        marginBottom: theme.spacing(3),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(1000 + theme.spacing(0))]: {
            width: 1000,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

    layout: {
        width: 'auto',
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        [theme.breakpoints.up(1100 + theme.spacing(0))]: {
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    markdown: {
        padding: `${theme.spacing(3)}px 0`,
    },
    titleBar: {
        height: "100%",
        paddingTop: "10px"

    },
    icon: {
        color: 'white',
    },
    menu: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        paddingTop: "10px",
        paddingBottom: "10px",
        textAlign: "right"
    },
});

export default styles;