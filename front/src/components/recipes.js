import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

import { connect } from 'react-redux';

const Recipes = (props) => {
    if (props.state.loading) {
        return <CircularProgress />
    }
    if (props.state.error) {
        return <Typography variant="h6" component="h2">
            Error al obtener el listado.
      </Typography>
    }
    if (props.state.recipes && props.state.recipes.length) {
        return <List>
            {props.state.recipes.map((recipe, index) => (
                <ListItem key={index}>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={recipe.name} secondary={recipe.description} />
                </ListItem>
            ))}
        </List>
    }

    return null
};

const mapStateToProps = state => {
    return { state: state.recipes };
};

export default connect(mapStateToProps)(Recipes);



