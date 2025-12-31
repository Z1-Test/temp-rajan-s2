import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Package, Truck, MapPin, CheckCircle, Clock, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { OrderStatus } from '@/components/app/OrderStatus';
import { toast } from 'sonner';

// Mock order data
const mockOrder = {
  id: 'ORD-2025-001234',
  date: '2025-12-31',
  status: 'shipped' as const,
  total: 4361,
  subtotal: 4846,
  shipping: 0,
  discount: 485,
  paymentMethod: 'Credit Card ending in 4242',
  items: [
    {
      id: '1',
      name: 'Rose Glow Serum',
      variant: '30ml',
      quantity: 2,
      price: 1299,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=100&h=100&fit=crop',
    },
    {
      id: '2',
      name: 'Argan Hair Oil',
      variant: '100ml',
      quantity: 1,
      price: 749,
      image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=100&h=100&fit=crop',
    },
    {
      id: '3',
      name: 'Matte Lipstick Set',
      variant: 'Berry Collection',
      quantity: 1,
      price: 1499,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=100&h=100&fit=crop',
    },
  ],
  shippingAddress: {
    fullName: 'Priya Sharma',
    addressLine1: '123, Green Valley Apartments',
    addressLine2: 'Near City Mall',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    phone: '+91 98765 43210',
  },
  timeline: [
    { status: 'Order Placed', date: '31 Dec 2025, 10:30 AM', completed: true },
    { status: 'Payment Confirmed', date: '31 Dec 2025, 10:32 AM', completed: true },
    { status: 'Order Processing', date: '31 Dec 2025, 11:00 AM', completed: true },
    { status: 'Shipped', date: '31 Dec 2025, 4:00 PM', completed: true },
    { status: 'Out for Delivery', date: 'Expected: 2 Jan 2026', completed: false },
    { status: 'Delivered', date: '', completed: false },
  ],
};

export function OrderDetailScreen() {
  const { id } = useParams();
  const order = mockOrder;

  const copyOrderId = () => {
    navigator.clipboard.writeText(order.id);
    toast.success('Order ID copied to clipboard');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/account/orders">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">{order.id}</h1>
              <Button variant="ghost" size="icon" onClick={copyOrderId}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Placed on {new Date(order.date).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>
        <OrderStatus status={order.status} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="space-y-6 lg:col-span-2">
          {/* Order Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Order Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {order.timeline.map((step, index) => (
                  <div key={step.status} className="flex gap-4 pb-8 last:pb-0">
                    {/* Timeline line */}
                    <div className="relative flex flex-col items-center">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                          step.completed
                            ? 'border-green-500 bg-green-500 text-white'
                            : 'border-muted bg-background'
                        }`}
                      >
                        {step.completed ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <Clock className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                      {index < order.timeline.length - 1 && (
                        <div
                          className={`absolute top-8 h-full w-0.5 ${
                            step.completed ? 'bg-green-500' : 'bg-muted'
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1 pt-1">
                      <p className={`font-medium ${!step.completed && 'text-muted-foreground'}`}>
                        {step.status}
                      </p>
                      {step.date && (
                        <p className="text-sm text-muted-foreground">{step.date}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Order Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-lg object-cover"
                    />
                    <div className="flex flex-1 flex-col justify-center">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.variant}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <div className="flex flex-col justify-center text-right">
                      <p className="font-medium">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        ₹{item.price.toLocaleString('en-IN')} each
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{order.subtotal.toLocaleString('en-IN')}</span>
                </div>
                {order.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹{order.discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{order.shipping === 0 ? 'FREE' : `₹${order.shipping}`}</span>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{order.total.toLocaleString('en-IN')}</span>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Payment Method</p>
                <p className="font-medium">{order.paymentMethod}</p>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Address */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Shipping Address
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="font-medium">{order.shippingAddress.fullName}</p>
              <p className="text-muted-foreground">{order.shippingAddress.addressLine1}</p>
              {order.shippingAddress.addressLine2 && (
                <p className="text-muted-foreground">{order.shippingAddress.addressLine2}</p>
              )}
              <p className="text-muted-foreground">
                {order.shippingAddress.city}, {order.shippingAddress.state} -{' '}
                {order.shippingAddress.pincode}
              </p>
              <p className="mt-2 text-muted-foreground">{order.shippingAddress.phone}</p>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardContent className="space-y-3 pt-6">
              <Button variant="outline" className="w-full">
                Download Invoice
              </Button>
              {order.status !== 'delivered' && order.status !== 'cancelled' && (
                <Button variant="outline" className="w-full text-destructive hover:text-destructive">
                  Cancel Order
                </Button>
              )}
              <Button variant="ghost" className="w-full" asChild>
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
