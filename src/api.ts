/*const saveData = async (key: string, data: any) => {
    await fetch('http://localhost:3001/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ key, data })
    });
  }
  
  const loadData = async (key: string) => {
    const response = await fetch(`http://localhost:3001/load/${key}`);
    if (response.ok) {
      return await response.json();
    } else if (response.status === 404) {
        return [];
    }
    throw new Error('Failed to load data');
  }
  
  export { saveData, loadData };
  */
 
// src/api.ts
const loadProducts = async () => {
  const response = await fetch('http://localhost:3001/api/products');
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to load products');
};

export { loadProducts };
