import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, Grid3X3, LayoutGrid, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { ProductCard } from '@/components/app/ProductCard';
import { cn } from '@/lib/utils';

// Mock products data
const allProducts = [
  { id: '1', name: 'Rose Glow Serum', price: 1299, originalPrice: 1599, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop', category: 'Skin Care', badges: ['cruelty-free', 'vegan'] as const },
  { id: '2', name: 'Hydrating Face Cream', price: 899, image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop', category: 'Skin Care', badges: ['paraben-free'] as const },
  { id: '3', name: 'Argan Hair Oil', price: 749, originalPrice: 999, image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop', category: 'Hair Care', badges: ['organic', 'cruelty-free'] as const },
  { id: '4', name: 'Matte Lipstick Set', price: 1499, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop', category: 'Cosmetics', badges: ['vegan'] as const },
  { id: '5', name: 'Vitamin C Brightening Serum', price: 1199, image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop', category: 'Skin Care', badges: ['cruelty-free'] as const },
  { id: '6', name: 'Keratin Hair Mask', price: 649, originalPrice: 799, image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=400&fit=crop', category: 'Hair Care', badges: ['paraben-free'] as const },
  { id: '7', name: 'Foundation Palette', price: 2499, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop', category: 'Cosmetics', badges: ['cruelty-free', 'vegan'] as const },
  { id: '8', name: 'Aloe Vera Gel', price: 349, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop', category: 'Skin Care', badges: ['organic', 'vegan'] as const },
];

const categories = ['All', 'Skin Care', 'Hair Care', 'Cosmetics'];
const ethicalFilters = [
  { value: 'cruelty-free', label: 'Cruelty-Free' },
  { value: 'vegan', label: 'Vegan' },
  { value: 'paraben-free', label: 'Paraben-Free' },
  { value: 'organic', label: 'Organic' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

export function ProductListingScreen() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [gridCols, setGridCols] = useState<3 | 4>(4);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedEthical, setSelectedEthical] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [sortBy, setSortBy] = useState('featured');

  // Filter products
  const filteredProducts = allProducts.filter((product) => {
    if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;
    if (selectedEthical.length > 0 && !selectedEthical.some((e) => product.badges?.includes(e as any))) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedEthical([]);
    setPriceRange([0, 3000]);
  };

  const activeFiltersCount = (selectedCategory !== 'All' ? 1 : 0) + selectedEthical.length + (priceRange[0] > 0 || priceRange[1] < 3000 ? 1 : 0);

  const FiltersContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="mb-3 font-semibold">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex cursor-pointer items-center gap-2">
              <Checkbox
                checked={selectedCategory === category}
                onCheckedChange={() => setSelectedCategory(category)}
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div>
        <h3 className="mb-3 font-semibold">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={3000}
          step={100}
          className="mb-2"
        />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>

      <Separator />

      {/* Ethical Filters */}
      <div>
        <h3 className="mb-3 font-semibold">Ethical Markers</h3>
        <div className="space-y-2">
          {ethicalFilters.map((filter) => (
            <label key={filter.value} className="flex cursor-pointer items-center gap-2">
              <Checkbox
                checked={selectedEthical.includes(filter.value)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedEthical([...selectedEthical, filter.value]);
                  } else {
                    setSelectedEthical(selectedEthical.filter((v) => v !== filter.value));
                  }
                }}
              />
              <span className="text-sm">{filter.label}</span>
            </label>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <>
          <Separator />
          <Button variant="outline" className="w-full" onClick={clearFilters}>
            Clear All Filters
          </Button>
        </>
      )}
    </div>
  );

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">All Products</h1>
        <p className="mt-2 text-muted-foreground">
          Discover our collection of premium, clean beauty products
        </p>
      </div>

      {/* Toolbar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {/* Mobile Filter Button */}
          <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  Narrow down products by your preferences
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6">
                <FiltersContent />
              </div>
            </SheetContent>
          </Sheet>

          {/* Active Filters */}
          {activeFiltersCount > 0 && (
            <div className="hidden items-center gap-2 lg:flex">
              {selectedCategory !== 'All' && (
                <Badge variant="secondary" className="gap-1">
                  {selectedCategory}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => setSelectedCategory('All')}
                  />
                </Badge>
              )}
              {selectedEthical.map((filter) => (
                <Badge key={filter} variant="secondary" className="gap-1">
                  {filter}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => setSelectedEthical(selectedEthical.filter((v) => v !== filter))}
                  />
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          {/* Results Count */}
          <span className="text-sm text-muted-foreground">
            {sortedProducts.length} products
          </span>

          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Grid Toggle (Desktop) */}
          <div className="hidden items-center gap-1 lg:flex">
            <Button
              variant={gridCols === 3 ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setGridCols(3)}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={gridCols === 4 ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setGridCols(4)}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="flex gap-8">
        {/* Desktop Filters Sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24 rounded-lg border bg-card p-6">
            <h2 className="mb-4 font-semibold">Filters</h2>
            <FiltersContent />
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {sortedProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-lg font-medium">No products found</p>
              <p className="mt-1 text-muted-foreground">
                Try adjusting your filters to find what you're looking for
              </p>
              <Button variant="outline" className="mt-4" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div
              className={cn(
                'grid gap-6',
                gridCols === 3
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              )}
            >
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={() => console.log('Add to cart:', product.id)}
                  onAddToWishlist={() => console.log('Add to wishlist:', product.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
