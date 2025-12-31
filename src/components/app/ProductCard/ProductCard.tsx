import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badges?: Array<'cruelty-free' | 'vegan' | 'paraben-free' | 'organic'>;
  isOutOfStock?: boolean;
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
  isInWishlist?: boolean;
  className?: string;
}

const badgeLabels = {
  'cruelty-free': '🐰 Cruelty-Free',
  'vegan': '🌱 Vegan',
  'paraben-free': 'Paraben-Free',
  'organic': '🍃 Organic',
};

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  badges = [],
  isOutOfStock = false,
  onAddToCart,
  onAddToWishlist,
  isInWishlist = false,
  className,
}: ProductCardProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className={cn('group overflow-hidden transition-all duration-300 hover:shadow-lg', className)}>
      <div className="relative aspect-square overflow-hidden">
        {/* Product Image */}
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Badges Overlay */}
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {isOutOfStock && (
            <Badge variant="secondary" className="bg-gray-900 text-white">
              Out of Stock
            </Badge>
          )}
          {discount > 0 && !isOutOfStock && (
            <Badge variant="destructive">{discount}% OFF</Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="secondary"
          size="icon"
          className={cn(
            'absolute right-2 top-2 h-8 w-8 rounded-full opacity-0 transition-all group-hover:opacity-100',
            isInWishlist && 'opacity-100 bg-primary text-primary-foreground'
          )}
          onClick={(e) => {
            e.preventDefault();
            onAddToWishlist?.();
          }}
        >
          <Heart className={cn('h-4 w-4', isInWishlist && 'fill-current')} />
          <span className="sr-only">Add to wishlist</span>
        </Button>

        {/* Quick Add Button */}
        {!isOutOfStock && (
          <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
            <Button
              variant="secondary"
              className="w-full"
              onClick={(e) => {
                e.preventDefault();
                onAddToCart?.();
              }}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        {/* Category */}
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {category}
        </p>

        {/* Product Name */}
        <Link to={`/product/${id}`}>
          <h3 className="mt-1 line-clamp-2 text-sm font-medium transition-colors hover:text-primary">
            {name}
          </h3>
        </Link>

        {/* Ethical Badges */}
        {badges.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {badges.slice(0, 2).map((badge) => (
              <Badge key={badge} variant="outline" className="text-xs">
                {badgeLabels[badge]}
              </Badge>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold">₹{price.toLocaleString('en-IN')}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
