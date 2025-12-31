import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Leaf, Heart, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/app/ProductCard';

// Mock featured products
const featuredProducts = [
  {
    id: '1',
    name: 'Rose Glow Serum',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    category: 'Skin Care',
    badges: ['cruelty-free', 'vegan'] as const,
  },
  {
    id: '2',
    name: 'Hydrating Face Cream',
    price: 899,
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop',
    category: 'Skin Care',
    badges: ['paraben-free'] as const,
  },
  {
    id: '3',
    name: 'Argan Hair Oil',
    price: 749,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop',
    category: 'Hair Care',
    badges: ['organic', 'cruelty-free'] as const,
  },
  {
    id: '4',
    name: 'Matte Lipstick Set',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
    category: 'Cosmetics',
    badges: ['vegan'] as const,
  },
];

const categories = [
  {
    name: 'Skin Care',
    slug: 'skincare',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
    description: 'Nourish your skin naturally',
  },
  {
    name: 'Hair Care',
    slug: 'haircare',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400&h=400&fit=crop',
    description: 'Healthy, beautiful hair',
  },
  {
    name: 'Cosmetics',
    slug: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop',
    description: 'Express your beauty',
  },
];

const features = [
  {
    icon: Leaf,
    title: 'Clean Ingredients',
    description: 'All products made with natural, safe ingredients',
  },
  {
    icon: Heart,
    title: '100% Cruelty-Free',
    description: 'Never tested on animals, certified cruelty-free',
  },
  {
    icon: Sparkles,
    title: 'Premium Quality',
    description: 'Handpicked products that deliver results',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On all orders over ₹999',
  },
];

export function HomeScreen() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <Badge variant="secondary" className="px-4 py-1.5">
                🌿 Clean Beauty, Beautiful Results
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Embrace Your{' '}
                <span className="text-primary">Natural Beauty</span>
              </h1>
              <p className="max-w-lg text-lg text-muted-foreground">
                Discover premium, cruelty-free beauty products made with clean, 
                natural ingredients that let your true beauty shine.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/products">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">Our Story</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-accent/30">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop"
                  alt="Premium beauty products"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -left-6 bottom-12 rounded-2xl bg-card p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">10,000+</p>
                    <p className="text-sm text-muted-foreground">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">Shop by Category</h2>
            <p className="mt-2 text-muted-foreground">
              Find the perfect products for your beauty routine
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  <p className="mt-1 text-white/80">{category.description}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-white">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <p className="mt-2 text-muted-foreground">
                Our most loved products by customers
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/products">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={() => console.log('Add to cart:', product.id)}
                onAddToWishlist={() => console.log('Add to wishlist:', product.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden bg-gradient-to-r from-primary/10 to-accent/20">
            <CardContent className="flex flex-col items-center gap-6 p-8 text-center md:p-12">
              <Badge variant="secondary">Join Our Community</Badge>
              <h2 className="text-3xl font-bold md:text-4xl">
                Get 15% Off Your First Order
              </h2>
              <p className="max-w-md text-muted-foreground">
                Sign up for exclusive offers, beauty tips, and early access to new products.
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link to="/register">Create Account</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
