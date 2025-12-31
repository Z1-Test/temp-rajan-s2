import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/app/ProductCard';

// Mock search results
const mockProducts = [
  {
    id: '1',
    name: 'Rose Glow Serum',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    category: 'Skincare',
    ethical: ['cruelty-free', 'vegan'] as const,
    rating: 4.8,
    reviews: 234,
  },
  {
    id: '2',
    name: 'Vitamin C Face Wash',
    price: 599,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
    category: 'Skincare',
    ethical: ['cruelty-free'] as const,
    rating: 4.5,
    reviews: 189,
  },
  {
    id: '3',
    name: 'Argan Hair Oil',
    price: 749,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop',
    category: 'Haircare',
    ethical: ['cruelty-free', 'organic'] as const,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: '4',
    name: 'Matte Lipstick Set',
    price: 1499,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
    category: 'Makeup',
    ethical: ['cruelty-free', 'vegan'] as const,
    rating: 4.9,
    reviews: 312,
  },
];

export function SearchResultsScreen() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(query);

  // Filter products based on search query
  const filteredProducts = mockProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchInput });
  };

  const clearSearch = () => {
    setSearchInput('');
    setSearchParams({});
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="pl-10 pr-10"
            />
            {searchInput && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <Button type="submit">Search</Button>
        </form>
      </div>

      {/* Results Header */}
      {query && (
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              {filteredProducts.length > 0
                ? `Search results for "${query}"`
                : `No results for "${query}"`}
            </h1>
            <p className="text-muted-foreground">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
            </p>
          </div>
          {filteredProducts.length > 0 && (
            <div className="flex gap-2">
              <Badge variant="secondary" className="cursor-pointer">
                {query}
                <X className="ml-1 h-3 w-3" onClick={clearSearch} />
              </Badge>
            </div>
          )}
        </div>
      )}

      {/* Empty State */}
      {query && filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <Search className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="mt-6 text-xl font-semibold">No products found</h2>
          <p className="mt-2 max-w-md text-muted-foreground">
            We couldn't find any products matching "{query}". Try searching with different keywords
            or browse our categories.
          </p>
          <div className="mt-6 flex gap-4">
            <Button variant="outline" onClick={clearSearch}>
              Clear Search
            </Button>
            <Button asChild>
              <Link to="/products">Browse All Products</Link>
            </Button>
          </div>

          {/* Popular Searches */}
          <div className="mt-8">
            <p className="mb-3 text-sm text-muted-foreground">Popular searches:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Serum', 'Lipstick', 'Hair Oil', 'Face Wash', 'Moisturizer'].map((term) => (
                <Button
                  key={term}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchInput(term);
                    setSearchParams({ q: term });
                  }}
                >
                  {term}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* No Query State */}
      {!query && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <Search className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="mt-6 text-xl font-semibold">Search for Products</h2>
          <p className="mt-2 max-w-md text-muted-foreground">
            Enter a search term above to find products by name, category, or description.
          </p>

          {/* Popular Searches */}
          <div className="mt-8">
            <p className="mb-3 text-sm text-muted-foreground">Try searching for:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Serum', 'Lipstick', 'Hair Oil', 'Face Wash', 'Moisturizer', 'Cruelty-free'].map(
                (term) => (
                  <Button
                    key={term}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchInput(term);
                      setSearchParams({ q: term });
                    }}
                  >
                    {term}
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* Results Grid */}
      {query && filteredProducts.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
}
