/*
import React, { createContext, useContext, useState } from 'react';

export const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [storeDetails, setStoreDetails] = useState({
    selectedColor: '#000000',
    logo: null,
    companyName: ''
  });

  return (
    <StoreContext.Provider value={{ products, setProducts, storeDetails, setStoreDetails }}>
      {children}
    </StoreContext.Provider>
  );
};
*/

// StoreContext.js
















/*import React, { createContext, useState, useContext } from 'react';

const StoreContext = createContext(null);

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <StoreContext.Provider value={{ products, addProduct, setProducts }}>
      {children}
    </StoreContext.Provider>
  );
};*/
















/*
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Primeiro, definimos o tipo para o nosso produto
type ProductType = {
  id: string;
  name: string;
  price: number;
  // outros atributos do produto
};

// Definimos o tipo para o contexto que incluirá todos os produtos e funções associadas
interface StoreContextType {
  products: ProductType[];
  addProduct: (newProduct: ProductType) => void;
  // outras funções ou estados que você quer disponibilizar
}

// Inicializamos o contexto com um valor padrão
export const StoreContext = createContext<StoreContextType | null>(null);

// Agora, criamos um provedor de contexto que irá envolver nossos componentes
type StoreProviderProps = {
  children: ReactNode;
};

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  // A função para adicionar produtos ao estado
  const addProduct = (newProduct: ProductType) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  // Outras funções ou estados que você quer passar para os componentes podem ser adicionados aqui

  return (
    <StoreContext.Provider value={{ products, addProduct }}>
      {children}
    </StoreContext.Provider>
  );
};

// Criamos um hook personalizado para facilitar a utilização do contexto
export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
*/



















/*
import React, { createContext, ReactNode } from 'react';

export type ProductType = {
    name: string;
    value: string;
    images: string[];
};

export type StoreContextType = {
    products: ProductType[];
    addProduct: (product: ProductType) => void;
};

// Defina um valor padrão aqui que coincida com o tipo do seu contexto.
const defaultValue: StoreContextType = {
    products: [],
    addProduct: () => {
        // Implementação da função addProduct ou uma função de placeholder.
    }
};

export const StoreContext = createContext<StoreContextType>(defaultValue);

//export const StoreProvider: React.FC = ({ children }) => {
  export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
const addProduct = (product: ProductType) => {
        // Implemente a adição de um produto ao seu estado ou lógica de banco de dados aqui.
    };

    return (
        <StoreContext.Provider value={{ products: [], addProduct }}>
            {children}
        </StoreContext.Provider>
    );
};
*/



















import React, { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

export type ProductType = {
  name: string;
  value: string;
  images: string[];
};

export type StoreContextType = {
  products: ProductType[];
  addProduct: (product: ProductType) => void;
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
};

const defaultValue: StoreContextType = {
  products: [],
  addProduct: () => {},
  setProducts: () => {}, // Placeholder function
};

export const StoreContext = createContext<StoreContextType>(defaultValue);


type StoreProviderProps = {
  children: ReactNode;
};

//export const StoreProvider: React.FC = ({ children }) => {
  export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
const [products, setProducts] = useState<ProductType[]>([]);

  const addProduct = (product: ProductType) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <StoreContext.Provider value={{ products, addProduct, setProducts }}>
      {children}
    </StoreContext.Provider>
  );
};
