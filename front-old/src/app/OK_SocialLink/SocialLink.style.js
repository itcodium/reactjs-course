import { grey } from '@material-ui/core/colors';

const styles = theme => ({
    social: {
        '& > svg': {
            margin: theme.spacing(1),
            color: grey[800],
        },
    },
    iconHover: {
        '&:hover': {
            color: grey[600],
        },
    },
});
export default styles;
