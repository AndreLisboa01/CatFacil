/*import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import '../home.css';
import Header from '../Header';


type Product = {
  name: string;
  value: string;
  images: string[];
};

type Tab2Props = {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
};

function Tab2({ products, setProducts }: Tab2Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>('#000000');
  const [logo, setLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [companyName, setCompanyName] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % 4);
    }, 2000); // muda a imagem a cada 2 segundos

    return () => clearInterval(interval); // Limpe o intervalo ao desmontar o componente
  }, []);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLogo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCompanyNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(event.target.value);
  };

  return (
    <div className="cont" id="cont">
      <h2>Produtos Cadastrados</h2>
      <div className='corloja' style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <label htmlFor="color-picker" style={{ marginRight: '10px' }}>Escolha uma cor:</label>
        <input 
          type="color" 
          id="color-picker" 
          value={selectedColor} 
          onChange={handleColorChange}
          style={{ marginRight: '10px' }}
          required
        />
        <div 
          style={{ 
            width: '30px', 
            height: '30px', 
            backgroundColor: selectedColor, 
            border: '1px solid #000',
            display: 'inline-block' 
          }} 
        ></div>
      </div>
      <div className='nomeloja'>
        <label htmlFor="company-name">Nome da Empresa:</label>
        <input
        placeholder="ex: loja generica"
          type="text"
          id="company-name"
          value={companyName}
          onChange={handleCompanyNameChange}
          required
        />
      </div>
      <div className='logoloja'>
        {logo ? (
          <>
            <p>Logo da loja carregada. Deseja trocar?</p>
            <img src={logoPreview} alt="Logo da Loja" />
          </>
        ) : (
          <label htmlFor="logo-upload">Faça o upload da logo da loja:</label>
        )}
        <input 
          type="file" 
          id="logo-upload" 
          onChange={handleLogoUpload}
          accept="image/*"
          style={{ display: 'none' }}
          required
        />
        <label htmlFor="logo-upload" className="custom-upload-btn">
                Escolher Arquivos
            </label>
      </div>

      <div className='prodsalvos'>
        {products.map((product, index) => (
          <div key={index} className="product-card" >
            <div className="product-images">
              <img src={product.images[currentImageIndex]} alt={`Imagem do ${product.name}`} />
            </div>
            <h3>{product.name}</h3>
            <p>{product.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tab2;
*/








/*
import React, { useState, useEffect, Dispatch, SetStateAction, useContext } from 'react';
import '../home.css';
import Header from '../Header';
import { StoreContext } from '../../../StoreContext';

function Tab2() {
  const { products, setProducts } = useContext(StoreContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>('#000000');
  const [logo, setLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [companyName, setCompanyName] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % 4);
    }, 2000); // muda a imagem a cada 2 segundos

    return () => clearInterval(interval); // Limpe o intervalo ao desmontar o componente
  }, []);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLogo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCompanyNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(event.target.value);
  };

  return (
    <div className="cont" id="cont">
      <h2>Produtos Cadastrados</h2>
      <div className='corloja' style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <label htmlFor="color-picker" style={{ marginRight: '10px' }}>Escolha uma cor:</label>
        <input 
          type="color" 
          id="color-picker" 
          value={selectedColor} 
          onChange={handleColorChange}
          style={{ marginRight: '10px' }}
          required
        />
        <div 
          style={{ 
            width: '30px', 
            height: '30px', 
            backgroundColor: selectedColor, 
            border: '1px solid #000',
            display: 'inline-block' 
          }} 
        ></div>
      </div>
      <div className='nomeloja'>
        <label htmlFor="company-name">Nome da Empresa:</label>
        <input
        placeholder="ex: loja generica"
          type="text"
          id="company-name"
          value={companyName}
          onChange={handleCompanyNameChange}
          required
        />
      </div>
      <div className='logoloja'>
        {logo ? (
          <>
            <p>Logo da loja carregada. Deseja trocar?</p>
            <img src={logoPreview} alt="Logo da Loja" />
          </>
        ) : (
          <label htmlFor="logo-upload">Faça o upload da logo da loja:</label>
        )}
        <input 
          type="file" 
          id="logo-upload" 
          onChange={handleLogoUpload}
          accept="image/*"
          style={{ display: 'none' }}
          required
        />
        <label htmlFor="logo-upload" className="custom-upload-btn">
                Escolher Arquivos
            </label>
      </div>

      <div className='prodsalvos'>
        {products.map((product, index) => (
          <div key={index} className="product-card" >
            <div className="product-images">
              <img src={product.images[currentImageIndex]} alt={`Imagem do ${product.name}`} />
            </div>
            <h3>{product.name}</h3>
            <p>{product.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tab2;*/



































import React, { useState, useEffect, Dispatch, SetStateAction, useContext } from 'react';
import '../home.css';
import Header from '../Header';
import { StoreContext } from '../../../StoreContext';

function Tab2() {
  const { products, setProducts } = useContext(StoreContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>('#000000');
  const [logo, setLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % 4);
    }, 2000); // muda a imagem a cada 2 segundos

    return () => clearInterval(interval); // Limpe o intervalo ao desmontar o componente
  }, []);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLogo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCompanyNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(event.target.value);
  };

  return (
    <div className="cont" id="cont">
      <h2>Produtos Cadastrados</h2>
      <div className='corloja' style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <label htmlFor="color-picker" style={{ marginRight: '10px' }}>Escolha uma cor:</label>
        <input 
          type="color" 
          id="color-picker" 
          value={selectedColor} 
          onChange={handleColorChange}
          style={{ marginRight: '10px' }}
          required
        />
        <div 
          style={{ 
            width: '30px', 
            height: '30px', 
            backgroundColor: selectedColor, 
            border: '1px solid #000',
            display: 'inline-block' 
          }} 
        ></div>
      </div>
      <div className='nomeloja'>
        <label htmlFor="company-name">Nome da Empresa:</label>
        <input
        placeholder="ex: loja generica"
          type="text"
          id="company-name"
          value={companyName}
          onChange={handleCompanyNameChange}
          required
        />
      </div>
      <div className='logoloja'>
      {logo && logoPreview && (
  <>
    <p>Logo da loja carregada. Deseja trocar?</p>
    <img src={logoPreview} alt="Logo da Loja" />
  </>
)}
        <input 
          type="file" 
          id="logo-upload" 
          onChange={handleLogoUpload}
          accept="image/*"
          style={{ display: 'none' }}
          required
        />
        <label htmlFor="logo-upload" className="custom-upload-btn">
                Escolher Arquivos
            </label>
      </div>

      <div className='prodsalvos'>
        {products.map((product, index) => (
          <div key={index} className="product-card" >
            <div className="product-images">
              <img src={product.images[currentImageIndex]} alt={`Imagem do ${product.name}`} />
            </div>
            <h3>{product.name}</h3>
            <p>{product.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tab2;