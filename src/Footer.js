import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useGlobalContext } from './Context';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '1rem',
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    upper: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: '2rem',
    },
}));

function Footer() {
    const classes = useStyles();
    const { clearAll, total } = useGlobalContext();

    return (
        <div className={classes.root}>
            <div className={classes.upper}>
                <h3>Total</h3>
                <h3>${total}</h3>
            </div>
            <Button variant='contained' color='secondary' onClick={clearAll}>
                Clear All
            </Button>
        </div>
    );
}

export default Footer;
