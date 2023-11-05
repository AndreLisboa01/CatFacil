/*import React, { useState, ChangeEvent } from 'react';
import '../home.css';
import Header from '../Header';

type Tab3Props = {
    onAddProduct: (product: { name: string; value: string; images: string[] }) => void;
};

function Tab3({ onAddProduct }: Tab3Props) {
    const [productName, setProductName] = useState<string>('');
    const [productValue, setProductValue] = useState<string>('');
    const [productImages, setProductImages] = useState<string[]>([]);
    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (productImages.length >= 4) {
            alert('Você só pode enviar no máximo 4 imagens.');
            return;
        }
    
        const files = Array.from(e.target.files as FileList).slice(0, 4 - productImages.length);
        const fileURLs = files.map(file => URL.createObjectURL(file as Blob));
        setProductImages([...productImages, ...fileURLs]);
    };
    

    const handleSubmit = () => {
        const newProduct = {
            name: productName,
            value: productValue,
            images: productImages
        };
        alert('Produto salvo!');

        onAddProduct(newProduct);
        setProductName('');
        setProductValue('');
        setProductImages([]);
    };

    return (
        <div className="cont">
            <h2>Cadastrar Produto</h2>

            <div className='imagensdoprod'>
                <label>Imagens do Produto:</label>
                <div className='images'>
                {productImages.map((img, index) => (
                    <img key={index} src={img} alt={`Preview ${index}`} width="50" height="50" />
                ))}
                </div>
                <input
                className="hidden-input"
                id="file-upload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                required
            />
            <label htmlFor="file-upload" className="custom-upload-btn">
                Escolher Arquivos
            </label>
            </div>

            <div className='nomedoprod'>
                <input
                placeholder="Nome do produto"
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
            </div>

            <div className='precodoprod'>
                <input
                placeholder="100,00"
                    type="text"
                    value={productValue}
                    onChange={(e) => setProductValue(e.target.value)}
                    required
                />
            </div>

            <button onClick={handleSubmit} className='conf'>Confirmar</button>
        </div>
    );
}

export default Tab3;
*/
















/*
import React, { useState, ChangeEvent, useContext } from 'react';
import '../home.css';
import Header from '../Header';
import { StoreContext } from '../../../StoreContext';

function Tab3() {
    const [productName, setProductName] = useState('');
    const [productValue, setProductValue] = useState('');
    const [productImages, setProductImages] = useState<string[]>([]);
    const { addProduct } = useContext(StoreContext); // Nome correto da função

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            // Certifique-se de que cada arquivo é um Blob antes de chamar createObjectURL
            const fileURLs = files.map(file => URL.createObjectURL(file as Blob));
            setProductImages(prevImages => [...prevImages, ...fileURLs]);
        }
    };

    const handleSubmit = () => {
        if (!productName || !productValue || productImages.length === 0) {
            alert('Por favor, preencha todos os campos e faça o upload de pelo menos uma imagem.');
            return;
        }

        const newProduct = {
            name: productName,
            value: productValue,
            images: productImages
        };

        addProduct(newProduct); // Utilize a função correta do contexto
        alert('Produto salvo!');
        
        // Reset dos estados para limpar o formulário
        setProductName('');
        setProductValue('');
        setProductImages([]);
    };
    return (
        <div className="cont">
            <h2>Cadastrar Produto</h2>

            <div className='imagensdoprod'>
                <label>Imagens do Produto:</label>
                <div className='images'>
                {productImages.map((img, index) => (
                    <img key={index} src={img} alt={`Preview ${index}`} width="50" height="50" />
                ))}
                </div>
                <input
                className="hidden-input"
                id="file-upload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                required
            />
            <label htmlFor="file-upload" className="custom-upload-btn">
                Escolher Arquivos
            </label>
            </div>

            <div className='nomedoprod'>
                <input
                placeholder="Nome do produto"
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
            </div>

            <div className='precodoprod'>
                <input
                placeholder="100,00"
                    type="text"
                    value={productValue}
                    onChange={(e) => setProductValue(e.target.value)}
                    required
                />
            </div>

            <button onClick={handleSubmit} className='conf'>Confirmar</button>
        </div>
    );
}

export default Tab3;*/




import React, { useState, ChangeEvent, useContext } from 'react';
import '../home.css';
// Importar o tipo do contexto para usar no `useContext`.
import { StoreContext, StoreContextType } from '../../../StoreContext';

function Tab3() {
    const [productName, setProductName] = useState('');
    const [productValue, setProductValue] = useState('');
    const [productImages, setProductImages] = useState<string[]>([]);

    // Utilize o tipo do contexto aqui para assegurar que você terá os métodos disponíveis
    const storeContext = useContext(StoreContext) as StoreContextType;

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            const fileURLs = files.map(file => URL.createObjectURL(file as Blob));
            setProductImages(prevImages => [...prevImages, ...fileURLs]);
        }
    };

    const handleSubmit = () => {
        if (!productName || !productValue || productImages.length === 0) {
            alert('Por favor, preencha todos os campos e faça o upload de pelo menos uma imagem.');
            return;
        }

        const newProduct = {
            name: productName,
            value: productValue,
            images: productImages
        };

        // Certifique-se de que o contexto tem a função addProduct antes de chamá-la.
        storeContext.addProduct(newProduct);
        alert('Produto adicionado com sucesso!');

        // Reset dos estados para limpar o formulário
        setProductName('');
        setProductValue('');
        setProductImages([]);
    };

    return (
        <div className="cont">
            <h2>Cadastrar Produto</h2>
            <div className='imagensdoprod'>
            <label>Imagens do Produto:</label>
                <div className='images'>
                {productImages.map((img, index) => (
                    <img key={index} src={img} alt={`Preview ${index}`} width="50" height="50" />
                ))}
                </div>
                <input
                className="hidden-input"
                id="file-upload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                required
            />
            <label htmlFor="file-upload" className="custom-upload-btn">
                Escolher Arquivos
            </label>
            </div>
            <div className='nomedoprod'>
            <input
                placeholder="Nome do produto"
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
            </div>
            <div className='precodoprod'>
            <input
                placeholder="100,00"
                    type="text"
                    value={productValue}
                    onChange={(e) => setProductValue(e.target.value)}
                    required
                />
            </div>
            <button onClick={handleSubmit} className='conf'>Confirmar</button>
        </div>
    );
}

export default Tab3;

