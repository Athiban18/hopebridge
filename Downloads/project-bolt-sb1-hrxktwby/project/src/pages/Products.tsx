import React from 'react';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import { Product } from '../data/products';

interface ProductsProps {
  products: Product[];
  searchQuery: string;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const Products: React.FC<ProductsProps> = ({ products, searchQuery, selectedCategory, onCategoryChange }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
          </h1>
          <p className="text-gray-600">
            {products.length} product{products.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />

        {products.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl text-gray-300 mb-4">🔍</div>
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">No products found</h2>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;