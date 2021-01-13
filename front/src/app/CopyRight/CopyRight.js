import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class CopyRight extends React.Component {
    render () {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                { 'Copyright © ' }
                <Link color="inherit" href={ this.props.data.link }>
                    { this.props.data.website }
                </Link>{ ' ' }
                { new Date().getFullYear() }
                <br></br>
                { this.props.data.createdby.text }
                <Link color="inherit" href={ this.props.data.createdby.link }>
                    { this.props.data.createdby.name }
                </Link>
            </Typography>
        );
    }
}

export default CopyRight;