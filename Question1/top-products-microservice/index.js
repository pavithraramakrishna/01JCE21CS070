const express = require('express');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

// To Test server base URL
const BASE_URL = 'http://20.244.56.144/test';

// Fetch top products from the test server
async function fetchTopProducts(company, category, minPrice, maxPrice) {
    const url = `${BASE_URL}/companies/${company}/categories/${category}/products/top-10&minPrice-${minPrice}&maxPrice-${maxPrice}`;
    console.log(`Fetching from URL: ${url}`);
    try {
        const response = await axios.get(url);
        console.log(`Received response for ${company}:`, response.data);
        return response.data;
    } catch (error) {
        console.error(`Error fetching products from ${company}:`, error.message);
        return [];
    }
}

// Generate IDs for products
function generateUniqueProducts(products) {
    return products.map(product => ({
        ...product,
        id: uuidv4(),
    }));
}

// To make Sure Running 
app.get('/', (req, res) => {
    res.send('Top Products Microservice is running');
});

// Add To test Purpoe
app.get('/test', (req, res) => {
    res.json([{ productName: "Test Product", price: 100 }]);
});

// GET /categories/:category/products
app.get('/categories/:category/products', async (req, res) => {
    const { category } = req.params;
    const { n = 10, page = 1, minPrice = 0, maxPrice = 10000, sortBy = 'price', order = 'asc' } = req.query;
    const companies = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'];

    let allProducts = [];
    for (const company of companies) {
        const products = await fetchTopProducts(company, category, minPrice, maxPrice);
        const uniqueProducts = generateUniqueProducts(products);
        allProducts = allProducts.concat(uniqueProducts);
    }

    // Sorting
    allProducts.sort((a, b) => {
        if (order === 'asc') {
            return a[sortBy] - b[sortBy];
        } else {
            return b[sortBy] - a[sortBy];
        }
    });

    // Pagination
    const start = (page - 1) * n;
    const paginatedProducts = allProducts.slice(start, start + n);

    res.json(paginatedProducts);
});

// GET /categories/:category/products/:productId
app.get('/categories/:category/products/:productId', async (req, res) => {
    const { category, productId } = req.params;
    const companies = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'];

    for (const company of companies) {
        const products = await fetchTopProducts(company, category, 0, 10000);
        const uniqueProducts = generateUniqueProducts(products);
        const product = uniqueProducts.find(p => p.id === productId);
        if (product) {
            return res.json(product);
        }
    }

    res.status(404).json({ message: 'Product not found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
