import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import styles from './product.style';
const Product = ({ product, classes }) => (
    <Grid item xs={12} sm={12} md={6} lg={6}>
        <Card className={classes.card}>
            <Hidden smUp>
                <CardMedia
                    className={classes.cardMediaFull}
                    image={product.image}
                    title={product.imageTitle}
                />
            </Hidden>
            <div className={classes.cardDetails}>
                <CardContent>
                    <Typography variant="h6" color="textSecondary">
                        {product.name}
                    </Typography>
                    <Typography variant="h5" component="a">
                        $ {product.price}
                    </Typography>
                    <div className={classes.center}>
                        <Hidden xsDown >
                            <img className={classes.cardMediaFull} src={product.image} alt="" title={product.title} />
                        </Hidden>
                    </div>
                    <div className={classes.right}>
                        <Button href={"#/ProductDetail/" + product.id} color="primary" >
                            Detail
                        </Button>
                    </div>
                </CardContent>
            </div>
        </Card>
    </Grid>
)

Product.propTypes = {
    product: PropTypes.object,
};

export default withStyles(styles)(Product);