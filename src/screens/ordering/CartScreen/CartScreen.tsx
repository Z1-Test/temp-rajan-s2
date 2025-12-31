import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Truck, Tag, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CartItem } from '@/components/app/CartItem';

// Mock cart data
const mockCartItems = [
  { id: '1', name: 'Rose Glow Serum', price: 1299, quantity: 2, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop', variant: '30ml' },
  { id: '3', name: 'Argan Hair Oil', price: 749, quantity: 1, image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=200&h=200&fit=crop', variant: '100ml' },
  { id: '4', name: 'Matte Lipstick Set', price: 1499, quantity: 1, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=200&h=200&fit=crop', variant: 'Berry Collection' },
];

interface CartItemData {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  variant?: string;
}

export function CartScreen() {
  const [cartItems, setCartItems] = useState<CartItemData[]>(mockCartItems);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 999 ? 0 : 99;
  const discount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal + shipping - discount;

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemove = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === 'beauty10') {
      setPromoApplied(true);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="mt-6 text-2xl font-bold">Your cart is empty</h2>
          <p className="mt-2 max-w-sm text-muted-foreground">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Button className="mt-6" asChild>
            <Link to="/products">
              Continue Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-lg">
                {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}
              </CardTitle>
            </CardHeader>
            <CardContent className="divide-y p-0">
              {cartItems.map((item) => (
                <div key={item.id} className="px-6">
                  <CartItem
                    {...item}
                    onUpdateQuantity={(qty) => handleUpdateQuantity(item.id, qty)}
                    onRemove={() => handleRemove(item.id)}
                  />
                </div>
              ))}
            </CardContent>
            <CardFooter className="justify-between border-t bg-muted/30 py-4">
              <Link
                to="/products"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                ← Continue Shopping
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          {/* Free Shipping Alert */}
          {subtotal < 999 && (
            <Alert>
              <Truck className="h-4 w-4" />
              <AlertDescription>
                Add ₹{(999 - subtotal).toLocaleString('en-IN')} more for free shipping!
              </AlertDescription>
            </Alert>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Promo Code */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Promo Code</label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    disabled={promoApplied}
                  />
                  <Button
                    variant="outline"
                    onClick={handleApplyPromo}
                    disabled={promoApplied || !promoCode}
                  >
                    {promoApplied ? '✓ Applied' : 'Apply'}
                  </Button>
                </div>
                {promoApplied && (
                  <p className="flex items-center gap-1 text-sm text-green-600">
                    <Tag className="h-3 w-3" />
                    10% discount applied!
                  </p>
                )}
              </div>

              <Separator />

              {/* Totals */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>

              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <Info className="h-3 w-3" />
                Tax included. Shipping calculated at checkout.
              </p>
            </CardContent>
            <CardFooter className="flex-col gap-3">
              <Button className="w-full" size="lg" asChild>
                <Link to="/checkout">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Secure checkout powered by Cashfree
              </p>
            </CardFooter>
          </Card>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span>🔒 Secure Payment</span>
            <span>•</span>
            <span>🚚 Fast Delivery</span>
            <span>•</span>
            <span>↩️ Easy Returns</span>
          </div>
        </div>
      </div>
    </div>
  );
}
