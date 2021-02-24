const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: theme.spacing(5),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        marginBottom: theme.spacing(3),
    },
    actions: {
        textAlign: "center",
        marginTop: theme.spacing(5),
    },
    title: {
        marginTop: theme.spacing(2),
    },
    error: {
        color: "red"
    }
});
export default styles;