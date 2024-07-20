//Filters.js
import React from 'react';
import { TextField, MenuItem, Button, Grid } from '@mui/material';

const Filters = ({ filters, setFilters }) => {
  const handleChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const handleReset = () => {
    setFilters({
      category: '',
      company: '',
      rating: '',
      minPrice: '',
      maxPrice: '',
      availability: '',
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          select
          label="Category"
          name="category"
          value={filters.category}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="Laptop">Laptop</MenuItem>
          {/* Add more categories as needed */}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          select
          label="Company"
          name="company"
          value={filters.company}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="AMZ">AMZ</MenuItem>
          {/* Add more companies as needed */}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Min Price"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleChange}
          type="number"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Max Price"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleChange}
          type="number"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          select
          label="Rating"
          name="rating"
          value={filters.rating}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="4">4 and above</MenuItem>
          <MenuItem value="3">3 and above</MenuItem>
          {/* Add more ratings as needed */}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          select
          label="Availability"
          name="availability"
          value={filters.availability}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="yes">Available</MenuItem>
          <MenuItem value="no">Out of Stock</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleReset}>Reset Filters</Button>
      </Grid>
    </Grid>
  );
};

export default Filters;
