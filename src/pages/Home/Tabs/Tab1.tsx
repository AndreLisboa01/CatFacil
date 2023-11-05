/*import React, { useState } from 'react';
import '../home.css';
import Header from '../Header';
import caixa from './caixa.png';
import caixa2 from './caixa2.png';

// Define o tipo do produto
type Product = {
    name: string;
    value: string;
    images: string[];
};

type Tab1Props = {
    products: Product[];
};

function Tab1({ products }: Tab1Props) {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSendEmail = async () => {
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(products)
            });

            if (response.ok) {
                console.log('E-mail enviado com sucesso.');
            } else {
                console.error('Erro ao enviar e-mail:', await response.text());
            }
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
        }
    };

    const handleSendWhatsApp = () => {
        const catalogLink = "https://seusite.com/catalogo"; // Substitua com o link real do seu catálogo
        const message = `Olá! Confira nosso catálogo de produtos aqui: ${catalogLink}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleChangePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

    return (
        <div className="cont">
            <h2>Seu estoque</h2>
            <p className='numerodeprod'>{products.length} produtos</p>
            <div>
            <img src={products.length === 0 ? caixa : caixa2} alt="Descrição" className='caixa'/>
            </div>

            <div className='celul'>
                <label htmlFor="phoneNumber">Número do celular (com DDI): </label>
                <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={handleChangePhoneNumber}
                    placeholder="Ex: 5511999999999"
                    required
                />
                <button onClick={handleSendWhatsApp} className='enviar'>Enviar por WhatsApp</button>
            </div>
        </div>
    );
}

export default Tab1;
*/






import React, { useState, useContext } from 'react';
import '../home.css';
import Header from '../Header';
import { StoreContext } from '../../../StoreContext';
import caixa from './caixa.png';
import caixa2 from './caixa2.png';

function Tab1() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const { products } = useContext(StoreContext);

    const handleSendEmail = async () => {
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(products)
            });

            if (response.ok) {
                console.log('E-mail enviado com sucesso.');
            } else {
                console.error('Erro ao enviar e-mail:', await response.text());
            }
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
        }
    };

    const handleSendWhatsApp = () => {
        const catalogLink = "https://seusite.com/catalogo"; // Substitua com o link real do seu catálogo
        const message = `Olá! Confira nosso catálogo de produtos aqui: ${catalogLink}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleChangePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

    return (
        <div className="cont">
            <h2>Seu estoque</h2>
            <p className='numerodeprod'>{products.length} produtos</p>
            <div>
            <img src={products.length === 0 ? caixa : caixa2} alt="Descrição" className='caixa'/>
            </div>

            <div className='celul'>
                <label htmlFor="phoneNumber">Número do celular (com DDI): </label>
                <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={handleChangePhoneNumber}
                    placeholder="Ex: 5511999999999"
                    required
                />
                <button onClick={handleSendWhatsApp} className='enviar'>Enviar por WhatsApp</button>
            </div>
        </div>
    );
}

export default Tab1;