const styles = {
    icon: {
        paddinRight: 1,
    },
    root: {
        marginBottom: 1,
    },
    nested: {
        paddingLeft: 4,
        margin: 0
    },
    item: {
        display: 'block',
        listStyle: "none",
        marginLeft: 0,
        '& a': {
            '&:hover': {
                '& span': {
                    opacity: 1,
                },
            },
        },
    },
    edition: {
        opacity: 0,
        opacity: 1,
    },
    text: {
        marginRight: 1,
    },
    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    spinnerContainer: {
        alignItems: 'center',
    },
};

export default styles;