import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock wishlist data
const mockWishlist = [
  { id: '1', name: 'Rose Glow Serum', price: 1299, originalPrice: 1599, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop', category: 'Skin Care', inStock: true },
  { id: '3', name: 'Argan Hair Oil', price: 749, originalPrice: 999, image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop', category: 'Hair Care', inStock: true },
  { id: '4', name: 'Matte Lipstick Set', price: 1499, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop', category: 'Cosmetics', inStock: false },
];

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
}

export function WishlistScreen() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>(mockWishlist);

  const handleRemove = (id: string) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const handleMoveToCart = (id: string) => {
    console.log('Move to cart:', id);
    // In real app, add to cart and optionally remove from wishlist
  };

  const handleAddAllToCart = () => {
    const inStockItems = wishlist.filter((item) => item.inStock);
    console.log('Add all to cart:', inStockItems.map((item) => item.id));
  };

  if (wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <Heart className="h-10 w-10 text-muted-foreground" />
        </div>
        <h2 className="mt-6 text-2xl font-bold">Your wishlist is empty</h2>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Save items you love to your wishlist and come back to them anytime.
        </p>
        <Button className="mt-6" asChild>
          <Link to="/products">
            Start Shopping
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Wishlist</h1>
          <p className="text-muted-foreground">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>
        {wishlist.some((item) => item.inStock) && (
          <Button onClick={handleAddAllToCart}>
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add All to Cart
          </Button>
        )}
      </div>

      {/* Wishlist Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {wishlist.map((item) => {
          const discount = item.originalPrice
            ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
            : 0;

          return (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative aspect-square">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </Link>
                {!item.inStock && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <Badge variant="secondary" className="text-sm">Out of Stock</Badge>
                  </div>
                )}
                {discount > 0 && item.inStock && (
                  <Badge variant="destructive" className="absolute left-2 top-2">
                    {discount}% OFF
                  </Badge>
                )}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-2 top-2 h-8 w-8 rounded-full"
                  onClick={() => handleRemove(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Remove from wishlist</span>
                </Button>
              </div>
              <CardContent className="p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {item.category}
                </p>
                <Link to={`/product/${item.id}`}>
                  <h3 className="mt-1 font-medium hover:text-primary">{item.name}</h3>
                </Link>
                <div className="mt-2 flex items-center gap-2">
                  <span className="font-bold">₹{item.price.toLocaleString('en-IN')}</span>
                  {item.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{item.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
                <Button
                  className="mt-4 w-full"
                  variant={item.inStock ? 'default' : 'secondary'}
                  disabled={!item.inStock}
                  onClick={() => handleMoveToCart(item.id)}
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  {item.inStock ? 'Move to Cart' : 'Out of Stock'}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
