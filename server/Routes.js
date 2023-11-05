/*const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.post('/save-info', async (req, res) => {
    try {
        // Salvar informações no MongoDB...
        const { products, storeName, logo, storeColor } = req.body;

        // Gerar conteúdo para script2.js
        const scriptContent = `
            const customData = {
                storeName: "${storeName}",
                logo: "${logo}",
                storeColor: "${storeColor}",
                // outros dados personalizáveis...
            };

            // ... restante do código, incluindo a lista de produtos
            const products = ${JSON.stringify(products)};
        `;

        // Salvar script2.js em um diretório apropriado
        fs.writeFileSync(path.join(__dirname, '../scripts', 'script2.js'), scriptContent);

        res.send({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false });
    }
});

module.exports = router;
*/











const express = require('express');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const router = express.Router();

const StoreInfo = mongoose.model('StoreInfo', {
    products: Array,
    storeName: String,
    logo: String,
    storeColor: String,
})

router.post('/save-info', async (req, res) => {
    try {
        const { products, storeName, logo, storeColor } = req.body;

        // Validar dados aqui...

        // Salvar informações no MongoDB
        const storeInfo = new StoreInfo({ products, storeName, logo, storeColor });
        await storeInfo.save();

        // Gerar conteúdo para script2.js
        const scriptContent = `
            const customData = {
                storeName: "${storeName}",
                logo: "${logo}",
                storeColor: "${storeColor}"
            };
            const products = ${JSON.stringify(products)};
        `;

        // Salvar script2.js em um diretório apropriado
        fs.writeFileSync(path.join(__dirname, '../scripts', 'script2.js'), scriptContent);

        res.send({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false });
    }
});

module.exports = router;
