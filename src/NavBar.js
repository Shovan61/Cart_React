import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { useGlobalContext } from './Context';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

function NavBar() {
    const classes = useStyles();
    const { amnt } = useGlobalContext();
    return (
        <nav className={classes.root}>
            <AppBar position='static' style={{ backgroundColor: '#555' }}>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>
                        Cart
                    </Typography>
                    <IconButton aria-label='show 4 new mails' color='inherit'>
                        <Badge badgeContent={amnt} color='secondary'>
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </nav>
    );
}

export default NavBar;
