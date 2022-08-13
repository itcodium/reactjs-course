const styles = theme => ({
    title: {
        marginBottom: theme.spacing(1),
    },
    table: {
        minWidth: 650,
    },
    tableCellHeader: {
        fontWeight: "bold"

    },
    edition: {
        width: `85px`,
        fontWeight: "bold"
    },
    icon: {
        paddinRight: `5px`,
    },
    error: {
        color: `red`,
    },
    paper: {
        maxWidth: "100%",
        padding: theme.spacing(1),
    },
});
export default styles;