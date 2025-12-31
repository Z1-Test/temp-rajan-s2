import { Link, useParams } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight, Copy, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

// Mock order data
const mockOrder = {
  id: 'ORD-2025-001234',
  date: '2025-12-31',
  status: 'confirmed',
  items: [
    { name: 'Rose Glow Serum', quantity: 2, price: 2598 },
    { name: 'Argan Hair Oil', quantity: 1, price: 749 },
    { name: 'Matte Lipstick Set', quantity: 1, price: 1499 },
  ],
  subtotal: 4846,
  shipping: 0,
  discount: 485,
  total: 4361,
  shippingAddress: {
    fullName: 'Priya Sharma',
    addressLine1: '123, Green Valley Apartments',
    addressLine2: 'Near City Mall',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    phone: '+91 98765 43210',
  },
  paymentMethod: 'Credit Card ending in 4242',
  estimatedDelivery: '3-5 business days',
};

export function OrderConfirmationScreen() {
  const { id: _id } = useParams();
  const order = mockOrder;

  const copyOrderId = () => {
    navigator.clipboard.writeText(order.id);
    toast.success('Order ID copied to clipboard');
  };

  return (
    <div className="mx-auto max-w-3xl">
      {/* Success Header */}
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold">Order Confirmed!</h1>
        <p className="mt-2 text-muted-foreground">
          Thank you for your order. We've sent a confirmation to your email.
        </p>
      </div>

      {/* Order ID */}
      <Card className="mb-6 border-primary/20 bg-primary/5">
        <CardContent className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <div>
            <p className="text-sm text-muted-foreground">Order Number</p>
            <p className="text-xl font-bold">{order.id}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={copyOrderId}>
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Invoice
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Shipping Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Shipping Address</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="font-medium">{order.shippingAddress.fullName}</p>
            <p className="text-muted-foreground">{order.shippingAddress.addressLine1}</p>
            {order.shippingAddress.addressLine2 && (
              <p className="text-muted-foreground">{order.shippingAddress.addressLine2}</p>
            )}
            <p className="text-muted-foreground">
              {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
            </p>
            <p className="mt-2 text-muted-foreground">{order.shippingAddress.phone}</p>
          </CardContent>
        </Card>

        {/* Delivery Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Delivery Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Package className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Estimated Delivery</p>
                <p className="text-sm text-muted-foreground">{order.estimatedDelivery}</p>
              </div>
            </div>
            <div className="text-sm">
              <p className="text-muted-foreground">Payment Method</p>
              <p className="font-medium">{order.paymentMethod}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Order Items */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-base">Order Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>
                  {item.name} <span className="text-muted-foreground">× {item.quantity}</span>
                </span>
                <span className="font-medium">₹{item.price.toLocaleString('en-IN')}</span>
              </div>
            ))}
          </div>

          <Separator className="my-4" />

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>₹{order.subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>-₹{order.discount.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span>{order.shipping === 0 ? 'FREE' : `₹${order.shipping}`}</span>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₹{order.total.toLocaleString('en-IN')}</span>
          </div>
        </CardContent>
      </Card>

      {/* What's Next */}
      <Card className="mt-6 bg-muted/30">
        <CardHeader>
          <CardTitle className="text-base">What's Next?</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Badge variant="outline" className="shrink-0">1</Badge>
              <span>We're preparing your order for shipment.</span>
            </li>
            <li className="flex items-start gap-3">
              <Badge variant="outline" className="shrink-0">2</Badge>
              <span>You'll receive an email with tracking information once shipped.</span>
            </li>
            <li className="flex items-start gap-3">
              <Badge variant="outline" className="shrink-0">3</Badge>
              <span>Track your order status anytime from your account.</span>
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button asChild>
          <Link to={`/order/${order.id}`}>
            Track Order
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/products">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  );
}
