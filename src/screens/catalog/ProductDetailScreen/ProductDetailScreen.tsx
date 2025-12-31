import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Heart, ShoppingBag, Minus, Plus, Truck, RotateCcw, ShieldCheck, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { ProductCard } from '@/components/app/ProductCard';
import { EthicalBadge } from '@/components/app/EthicalBadge';
import { cn } from '@/lib/utils';

// Mock product data
const mockProduct = {
  id: '1',
  name: 'Rose Glow Vitamin C Serum',
  price: 1299,
  originalPrice: 1599,
  images: [
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1617897903246-719242758050?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&h=800&fit=crop',
  ],
  category: 'Skin Care',
  description: 'A powerful antioxidant serum infused with Vitamin C, Rose Extract, and Hyaluronic Acid to brighten, hydrate, and protect your skin. Perfect for all skin types.',
  badges: ['cruelty-free', 'vegan', 'paraben-free'] as const,
  inStock: true,
  sku: 'RGS-001',
  ingredients: 'Water, Ascorbic Acid (Vitamin C), Rosa Damascena Flower Water, Sodium Hyaluronate, Niacinamide, Tocopherol, Aloe Barbadensis Leaf Juice, Glycerin, Citric Acid, Sodium Benzoate, Potassium Sorbate.',
  howToUse: 'Apply 2-3 drops to clean, dry skin. Gently massage in upward circular motions. Use morning and evening. Follow with moisturizer and sunscreen during the day.',
  benefits: [
    'Brightens skin tone',
    'Reduces dark spots',
    'Boosts collagen production',
    'Deep hydration',
    'Antioxidant protection',
  ],
};

const relatedProducts = [
  { id: '2', name: 'Hydrating Face Cream', price: 899, image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop', category: 'Skin Care', badges: ['paraben-free'] as const },
  { id: '5', name: 'Vitamin C Brightening Serum', price: 1199, image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop', category: 'Skin Care', badges: ['cruelty-free'] as const },
  { id: '8', name: 'Aloe Vera Gel', price: 349, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop', category: 'Skin Care', badges: ['organic', 'vegan'] as const },
];

export function ProductDetailScreen() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = mockProduct; // In real app, fetch by id
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/products" className="hover:text-foreground">Products</Link>
        <ChevronRight className="h-4 w-4" />
        <Link to={`/category/${product.category.toLowerCase().replace(' ', '-')}`} className="hover:text-foreground">
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Thumbnails */}
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  'aspect-square w-20 overflow-hidden rounded-lg border-2 transition-all',
                  selectedImage === index
                    ? 'border-primary'
                    : 'border-transparent hover:border-muted-foreground/30'
                )}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Category & Name */}
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {product.category}
            </p>
            <h1 className="mt-2 text-3xl font-bold lg:text-4xl">{product.name}</h1>
          </div>

          {/* Rating (placeholder) */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'h-5 w-5',
                    i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/30'
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">4.0 (128 reviews)</span>
          </div>

          {/* Ethical Badges */}
          <div className="flex flex-wrap gap-2">
            {product.badges.map((badge) => (
              <EthicalBadge key={badge} type={badge} />
            ))}
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice && (
              <>
                <span className="text-xl text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <Badge variant="destructive">{discount}% OFF</Badge>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground">{product.description}</p>

          {/* Stock Status */}
          {product.inStock ? (
            <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
              ✓ In Stock
            </Badge>
          ) : (
            <Badge variant="secondary">Out of Stock</Badge>
          )}

          <Separator />

          {/* Quantity & Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Label className="text-sm font-medium">Quantity</Label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1" disabled={!product.inStock}>
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant={isWishlisted ? 'default' : 'outline'}
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart className={cn('h-5 w-5', isWishlisted && 'fill-current')} />
              </Button>
            </div>
          </div>

          <Separator />

          {/* Benefits */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <div className="text-sm">
                <p className="font-medium">Free Shipping</p>
                <p className="text-muted-foreground">On orders over ₹999</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <RotateCcw className="h-5 w-5 text-primary" />
              </div>
              <div className="text-sm">
                <p className="font-medium">Easy Returns</p>
                <p className="text-muted-foreground">30-day return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <div className="text-sm">
                <p className="font-medium">100% Authentic</p>
                <p className="text-muted-foreground">Guaranteed genuine</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            <TabsTrigger value="how-to-use">How to Use</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Key Benefits</h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Separator className="my-6" />
                <div className="text-sm text-muted-foreground">
                  <p><strong>SKU:</strong> {product.sku}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="ingredients" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Full Ingredient List</h3>
                <p className="text-muted-foreground">{product.ingredients}</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="how-to-use" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">How to Use</h3>
                <p className="text-muted-foreground">{product.howToUse}</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="mb-8 text-2xl font-bold">You May Also Like</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={() => console.log('Add to cart:', product.id)}
              onAddToWishlist={() => console.log('Add to wishlist:', product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Helper component
function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <label className={className}>{children}</label>;
}
