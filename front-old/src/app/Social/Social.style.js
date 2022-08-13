import { red } from '@material-ui/core/colors';
const styles = theme => ({
    social: {
        '& > svg': {
            margin: theme.spacing(3),
        },
    },
    iconHover: {
        '&:hover': {
            color: red[800],
        },
    },

});
export default styles;
