const styles = theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    home: {
        color: "white"
    },
    menu: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        paddingBottom: "10px",
        textAlign: "right"
    },
    menuHover: {
        cursor: "pointer"
    }
});

export default styles;