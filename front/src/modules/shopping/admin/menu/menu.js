import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
    root: {
        height: 110,
        flexGrow: 1,
        maxWidth: 400,
    },
});

const MenuCustom = ({ menu, classes }) => {
    const renderTree = (nodes) => (
        <TreeItem key={nodes.id_menu} nodeId={nodes.id_menu} label={nodes.title}>
            {Array.isArray(nodes.items) ? nodes.items.map((node) => renderTree(node)) : null}
        </TreeItem>
    );
    return (
        <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpanded={['root']}
            defaultExpandIcon={<ChevronRightIcon />}
        >
            {Array.isArray(menu) ? menu.map((node) => renderTree(node)) : null}
        </TreeView>
    );
}
MenuCustom.propTypes = {
    menu: PropTypes.object,
};

export default withStyles(useStyles)(MenuCustom);
