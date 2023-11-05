/*import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './home.css';
import { useUser } from '../SignIn/UserContext';
import { Route, Link, Routes } from 'react-router-dom';
import { StoreProvider } from '../../StoreContext';

// Componentes das Abas
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';


// Defina o tipo para seus produtos
type Product = {
    name: string;
    value: string;
    images: string[];
};

function Home() {
    const location = useLocation();
    const { user } = useUser();
    const [products, setProducts] = useState<Product[]>([]);

    const addProduct = (newProduct: Product) => {
        setProducts([...products, newProduct]);
    };

    return (
        <div className="cont">
            {user && (
                <div className='header'>
                    <img src={user.photoURL || ''} alt="Foto do usuário" />
                    <span>{user.displayName}</span>
                </div>
            )}

            <StoreProvider>
            <Routes>
                <Route path="/tab1" element={<Tab1 products={products} />} />
                <Route path="/tab2" element={<Tab2 products={products} setProducts={setProducts} />} />
                <Route path="/tab3" element={<Tab3 onAddProduct={addProduct} />} />
                <Route path="/" element={<Tab1 products={products} />} />
            </Routes> 
            </StoreProvider>

            <div className="tabs">
                <Link className='link' to="/home/tab1"><i className="bi bi-house-door"></i></Link>
                <Link className='link' to="/home/tab2"><i className="bi bi-box"></i></Link>
                <Link className='link' to="/home/tab3"><i className="bi bi-plus-circle"></i></Link>
            </div>
        </div>
    );
}

export default Home;*/







import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './home.css';
import { useUser } from '../SignIn/UserContext';
import { Route, Link, Routes } from 'react-router-dom';
import { StoreProvider } from '../../StoreContext';

// Componentes das Abas
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';


// Defina o tipo para seus produtos
type Product = {
    name: string;
    value: string;
    images: string[];
};

function Home() {
    const location = useLocation();
    const { user } = useUser();
    const [products, setProducts] = useState<Product[]>([]);

    const addProduct = (newProduct: Product) => {
        setProducts([...products, newProduct]);
    };

    return (
        <StoreProvider>
        <div className="cont">
            {user && (
                <div className='header'>
                    <img src={user.photoURL || ''} alt="Foto do usuário" />
                    <span>{user.displayName}</span>
                </div>
            )}

            <StoreProvider>
            <Routes>
                <Route path="/tab1" element={<Tab1 products={products} />} />
                <Route path="/tab2" element={<Tab2 products={products} setProducts={setProducts} />} />
                <Route path="/tab3" element={<Tab3 onAddProduct={addProduct} />} />
                <Route path="/" element={<Tab1 products={products} />} />
            </Routes> 
            </StoreProvider>

            <div className="tabs">
                <Link className='link' to="/home/tab1"><i className="bi bi-house-door"></i></Link>
                <Link className='link' to="/home/tab2"><i className="bi bi-box"></i></Link>
                <Link className='link' to="/home/tab3"><i className="bi bi-plus-circle"></i></Link>
            </div>
        </div>
        </StoreProvider>
    );
}

export default Home;