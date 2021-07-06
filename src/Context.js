import React, { useContext, useReducer, useEffect } from 'react';
import data from './data';

const AppContext = React.createContext();

const url = 'https://course-api.com/react-useReducer-cart-project';

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                items: state.items.map((curItem) => {
                    if (curItem.id === action.payload) {
                        return { ...curItem, amount: curItem.amount + 1 };
                    } else {
                        return curItem;
                    }
                }),
            };
        case 'decrement':
            return {
                ...state,
                items: state.items.map((curItem) => {
                    if (curItem.id === action.payload) {
                        return { ...curItem, amount: curItem.amount - 1 };
                    } else {
                        return curItem;
                    }
                }),
            };

        case 'Cart_Amount':
            return {
                ...state,
                cartAmount: action.payload,
            };

        case 'Remove_Item':
            return {
                ...state,
                items: action.payload,
            };
        case 'Clear_All':
            return {
                ...state,
                items: [],
            };
        case 'Total_Sum':
            return {
                ...state,
                total: action.payload,
            };
        case 'Get_Items':
            return {
                ...state,
                items: action.payload,
                isLoading: false,
            };

        default:
            throw new Error('type mismatch');
    }
}

const initialState = {
    items: [],
    cartAmount: 3,
    total: 1799.97,
    isLoading: true,
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        cartItemCalc();
        calcTotal();
    }, [state.items]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(url);
        const items = await response.json();
        dispatch({ type: 'Get_Items', payload: items });
    };

    const amountChange = (id, ammountType) => {
        if (ammountType === 'increment') {
            dispatch({
                type: 'increment',
                payload: id,
            });
        } else if (ammountType === 'decrement') {
            dispatch({ type: 'decrement', payload: id });
        }
    };

    const cartItemCalc = () => {
        let count = 0;
        state.items.forEach((cur) => {
            count = count + cur.amount;
        });
        dispatch({ type: 'Cart_Amount', payload: count });
    };

    const deleteItem = (id) => {
        const newItems = state.items.filter((curItem) => curItem.id !== id);
        dispatch({ type: 'Remove_Item', payload: newItems });
    };

    const clearAll = () => {
        dispatch({ type: 'Clear_All' });
    };

    const calcTotal = () => {
        let sum = 0;
        state.items.forEach((curItem) => {
            sum = sum + curItem.price * curItem.amount;
        });

        dispatch({ type: 'Total_Sum', payload: sum });
    };

    return (
        <AppContext.Provider
            value={{
                data: state.items,
                amountChange,
                amnt: state.cartAmount,
                cartItemCalc,
                deleteItem,
                clearAll,
                total: state.total,
                isLoading: state.isLoading,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
