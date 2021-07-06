import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Item from './Item';
import Divider from '@material-ui/core/Divider';
import Footer from './Footer';
import { useGlobalContext } from './Context';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5rem',
    },
    title: {
        flexGrow: 1,
        color: '#555',
        letterSpacing: '2px',
        fontWeight: '300',
        marginBottom: '4rem',
    },
    itemContainer: {
        width: '90%',
        marginBottom: '1rem',
    },
    footer: {
        width: '90%',
    },
    loaderContainer: {
        height: '90vh',
        width: '70vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loader: {
        height: '100px',
        width: '100px',
    },
}));

function CartContainer() {
    const classes = useStyles();
    const { data, amnt, isLoading } = useGlobalContext();

    if (isLoading) {
        return (
            <div className={classes.loaderContainer}>
                <CircularProgress
                    size='150px'
                    thickness='4'
                    color='secondary'
                />
            </div>
        );
    } else {
        return (
            <Paper elevation={1} className={classes.root}>
                {amnt > 0 ? (
                    <React.Fragment>
                        <Typography variant='h3' className={classes.title}>
                            Your Cart
                        </Typography>
                        <div className={classes.itemContainer}>
                            {data.map((cur) => (
                                <div key={cur.id} className={classes.item}>
                                    <Item {...cur} />
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className={classes.footer}>
                            <Divider />
                            <Footer />
                        </div>
                    </React.Fragment>
                ) : (
                    <Typography variant='h3' className={classes.title}>
                        Your Cart is empty
                    </Typography>
                )}
            </Paper>
        );
    }
}

export default CartContainer;
