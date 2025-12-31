import { Trash2, ShoppingBag, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { EmptyState } from '@/components/app/EmptyState/EmptyState';

export function WishlistScreen() {
  const navigate = useNavigate();
  const { items, removeItem, itemCount } = useWishlist();
  const { addItem: addToCart } = useCart();

  const handleRemove = (productId: string) => {
    removeItem(productId);
    toast.success('Removed from wishlist');
  };

  const handleMoveToCart = async (item: any) => {
    await addToCart({
      productId: item.productId,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
      variant: item.variant,
    });
    removeItem(item.productId);
    toast.success('Moved to cart');
  };

  const handleAddAllToCart = async () => {
    for (const item of items) {
      await addToCart({
        productId: item.productId,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1,
      });
      removeItem(item.productId);
    }
    toast.success('All items moved to cart');
  };

  if (items.length === 0) {
    return (
      <EmptyState
        icon={Heart}
        title="Your wishlist is empty"
        description="Save items you love to your wishlist and come back to them anytime."
        action={{
          label: "Start Shopping",
          onClick: () => navigate("/products")
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Wishlist</h1>
          <p className="text-muted-foreground">
            {itemCount} {itemCount === 1 ? 'item' : 'items'} saved
          </p>
        </div>
        {items.length > 0 && (
          <Button onClick={handleAddAllToCart}>
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add All to Cart
          </Button>
        )}
      </div>

      {/* Wishlist Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} className="overflow-hidden group">
            <div className="relative aspect-square">
              <Link to={`/product/${item.productId}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </Link>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-2 top-2 h-8 w-8 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => handleRemove(item.productId)}
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Remove from wishlist</span>
              </Button>
            </div>
            <CardContent className="p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {item.category}
              </p>
              <Link to={`/product/${item.productId}`}>
                <h3 className="mt-1 font-medium hover:text-primary transition-colors">{item.name}</h3>
              </Link>
              <div className="mt-2 flex items-center gap-2">
                <span className="font-bold text-lg">₹{item.price.toLocaleString('en-IN')}</span>
              </div>
              <Button
                className="mt-4 w-full"
                onClick={() => handleMoveToCart(item)}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Move to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
