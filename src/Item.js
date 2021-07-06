import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useGlobalContext } from './Context';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        '& img': {
            height: '90px',
            width: '90px',
        },
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
    },
    price: {
        marginTop: '1rem',
        marginBottom: '0.3rem',
        color: '#666',
    },
    title: {
        letterSpacing: '1px',
    },
    removeBtn: {
        cursor: 'pointer',
        color: '#64b5f6',
        transition: 'color 0.2s ease-in',
        '&:hover': {
            color: '#1e88e5',
        },
    },
    leftSide: {
        width: '40%',
        display: 'flex',
        alignItems: 'center',
    },
    rightSide: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '10%',
    },
    amountBtn: {
        cursor: 'pointer',
        color: '#64b5f6',
        transition: 'color 0.2s ease-in',
        '&:hover': {
            color: '#1e88e5',
        },
    },
}));

function Item(props) {
    const classes = useStyles();
    const { amountChange, deleteItem } = useGlobalContext();
    const { id, title, price, img, amount } = props;

    const handleIncrement = () => {
        amountChange(id, 'increment');
    };
    const handleDecrement = () => {
        amountChange(id, 'decrement');
    };

    return (
        <section className={classes.root}>
            {amount > 0 && (
                <React.Fragment>
                    <div className={classes.leftSide}>
                        <div className={classes.image}>
                            <img src={img} alt='phone-img' />
                        </div>
                        <div className={classes.info}>
                            <h5 className={classes.title}>{title}</h5>
                            <span className={classes.price}>{price}</span>
                            <span
                                className={classes.removeBtn}
                                onClick={() => deleteItem(id)}>
                                remove
                            </span>
                        </div>
                    </div>
                    <div className={classes.rightSide}>
                        <ExpandLessIcon
                            className={classes.amountBtn}
                            onClick={handleIncrement}
                        />
                        <span>{amount}</span>
                        <ExpandMoreIcon
                            className={classes.amountBtn}
                            onClick={handleDecrement}
                        />
                    </div>
                </React.Fragment>
            )}
        </section>
    );
}

export default Item;
