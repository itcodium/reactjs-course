const styles = theme => ({
    paper: {
        padding: theme.spacing(1),
    }, icon: {
        paddinRight: `5px`,
    },
    red: {
        color: "red"
    },
    green: {
        color: "green"
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
                },
            },
        },
    },
    edition: {
        opacity: 0,
    },
    text: {
        marginRight: theme.spacing(1),

    }


});

/* 
     '&:hover': {
            color: "green",
            "& span": {
                color: "red"
            }
        },
        
*/
export default styles;