const styles = theme => ({
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
        marginTop: theme.spacing(10),
    },
    spinnerContainer: {
        alignItems: 'center',
    },
});
export default styles;