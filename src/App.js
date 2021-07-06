import React from 'react';
import NavBar from './NavBar';
import CartContainer from './CartContainer';

function App() {
    return (
        <div
            style={{
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
            <NavBar />
            <div style={{ alignSelf: 'center', width: '70%' }}>
                <CartContainer />
            </div>
        </div>
    );
}

export default App;
