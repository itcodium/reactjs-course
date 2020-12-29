const styles = theme => ({
    menu: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        paddingTop: "10px",
        paddingBottom: "10px",
        textAlign: "right"
    },
    menuHover: {
        cursor: "pointer"
    }
});

export default styles;