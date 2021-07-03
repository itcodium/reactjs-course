const styles = theme => ({
    container: {
        width: 'auto',
        padding: theme.spacing(1),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(1000 + theme.spacing(0))]: {
            width: 1000,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
    },
    item: {
        alignItems: "center",
    },
    image: {
        flexDirection: 'column',
        textAlign: "center"
    },
    center: {
        textAlign: "center",
        margin: "15px"
    },
    title: {
        marginBottom: "15px"
    },
    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    spinnerContainer: {
        alignItems: 'center',
    },
});
export default styles;