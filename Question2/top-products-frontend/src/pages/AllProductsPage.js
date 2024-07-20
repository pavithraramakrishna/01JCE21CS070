//AllProductsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import { Container, Pagination } from '@mui/material';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    rating: '',
    minPrice: '',
    maxPrice: '',
    availability: '',
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/categories/Laptop/products', {
          params: {
            ...filters,
            n: 10, // Number of products per page
            page: page
          }
        });
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages); // Assume your API returns totalPages
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [filters, page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <Filters filters={filters} setFilters={setFilters} />
      <ProductList products={products} />
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        color="primary"
        style={{ marginTop: '20px' }}
      />
    </Container>
  );
};

export default AllProductsPage;
