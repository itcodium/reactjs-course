const styles = theme => ({
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
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: "100%",

        padding: theme.spacing(1),
    },
});
export default styles;