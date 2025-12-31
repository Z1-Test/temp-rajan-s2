import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Search, Filter, ChevronRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { OrderStatus } from '@/components/app/OrderStatus';

// Mock orders
const mockOrders = [
  {
    id: 'ORD-2025-001234',
    date: '2025-12-31',
    status: 'shipped' as const,
    total: 4361,
    items: [
      { name: 'Rose Glow Serum', quantity: 2, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=100&h=100&fit=crop' },
      { name: 'Argan Hair Oil', quantity: 1, image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=100&h=100&fit=crop' },
    ],
    itemCount: 4,
  },
  {
    id: 'ORD-2025-001189',
    date: '2025-12-25',
    status: 'delivered' as const,
    total: 1299,
    items: [
      { name: 'Vitamin C Serum', quantity: 1, image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=100&h=100&fit=crop' },
    ],
    itemCount: 1,
  },
  {
    id: 'ORD-2025-001045',
    date: '2025-12-20',
    status: 'delivered' as const,
    total: 2248,
    items: [
      { name: 'Foundation Palette', quantity: 1, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=100&h=100&fit=crop' },
      { name: 'Aloe Vera Gel', quantity: 1, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=100&h=100&fit=crop' },
    ],
    itemCount: 2,
  },
  {
    id: 'ORD-2025-000892',
    date: '2025-12-15',
    status: 'cancelled' as const,
    total: 899,
    items: [
      { name: 'Hydrating Face Cream', quantity: 1, image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=100&h=100&fit=crop' },
    ],
    itemCount: 1,
  },
];

export function OrderHistoryScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredOrders = mockOrders.filter((order) => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (mockOrders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <Package className="h-10 w-10 text-muted-foreground" />
        </div>
        <h2 className="mt-6 text-2xl font-bold">No orders yet</h2>
        <p className="mt-2 max-w-sm text-muted-foreground">
          When you place an order, it will appear here for you to track.
        </p>
        <Button className="mt-6" asChild>
          <Link to="/products">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Order History</h1>
        <p className="text-muted-foreground">
          View and track all your orders
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by order ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Orders</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="shipped">Shipped</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Orders List */}
      {filteredOrders.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No orders found matching your criteria.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <Card key={order.id} className="overflow-hidden">
              <CardContent className="p-0">
                {/* Order Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b bg-muted/30 px-6 py-4">
                  <div className="flex flex-wrap items-center gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Order</p>
                      <p className="font-medium">{order.id}</p>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-sm text-muted-foreground">Placed on</p>
                      <p className="font-medium">
                        {new Date(order.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-sm text-muted-foreground">Total</p>
                      <p className="font-medium">₹{order.total.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                  <OrderStatus status={order.status} />
                </div>

                {/* Order Items */}
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-4">
                    {/* Product Images */}
                    <div className="flex -space-x-2">
                      {order.items.slice(0, 3).map((item, index) => (
                        <img
                          key={index}
                          src={item.image}
                          alt={item.name}
                          className="h-12 w-12 rounded-lg border-2 border-background object-cover"
                        />
                      ))}
                      {order.items.length > 3 && (
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-background bg-muted text-sm font-medium">
                          +{order.items.length - 3}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-medium">
                        {order.items[0].name}
                        {order.items.length > 1 && ` +${order.items.length - 1} more`}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {order.itemCount} {order.itemCount === 1 ? 'item' : 'items'}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" asChild>
                    <Link to={`/order/${order.id}`}>
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
