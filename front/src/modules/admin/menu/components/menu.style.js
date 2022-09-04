const styles = theme => ({
    icon: {
        paddinRight: `5px`,
    },
    root: {
        marginBottom: theme.spacing(1),
    },
    nested: {
        paddingLeft: theme.spacing(4),
        margin: 0
    },
    item: {
        listStyle: "none",
        '& a': {
            '&:hover': {
                '& span': {
                    opacity: 1,
                    '& button': {
                        marginLeft: theme.spacing(2)
                    }
                },
            },
        },
    },
    edition: {
        opacity: 0,
    },
    text: {
        marginRight: theme.spacing(1),
    },
    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(10),
    },
    spinnerContainer: {
        alignItems: 'center',
    },


});

export default styles;