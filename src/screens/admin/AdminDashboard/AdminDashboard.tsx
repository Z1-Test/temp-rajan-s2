import { Link } from 'react-router-dom';
import {
  Package,
  ShoppingCart,
  Users,
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { OrderStatus } from '@/components/app/OrderStatus';

// Mock data
const stats = [
  {
    title: 'Total Revenue',
    value: '₹12,45,890',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Total Orders',
    value: '1,234',
    change: '+8.2%',
    trend: 'up',
    icon: ShoppingCart,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Total Products',
    value: '456',
    change: '+3',
    trend: 'up',
    icon: Package,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    title: 'Total Customers',
    value: '2,891',
    change: '+5.1%',
    trend: 'up',
    icon: Users,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
];

const recentOrders = [
  {
    id: 'ORD-2025-001234',
    customer: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
    total: 4361,
    status: 'shipped' as const,
    date: '2 hours ago',
  },
  {
    id: 'ORD-2025-001233',
    customer: 'Ananya Patel',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop',
    total: 2599,
    status: 'processing' as const,
    date: '3 hours ago',
  },
  {
    id: 'ORD-2025-001232',
    customer: 'Meera Iyer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop',
    total: 1299,
    status: 'confirmed' as const,
    date: '5 hours ago',
  },
  {
    id: 'ORD-2025-001231',
    customer: 'Kavya Reddy',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop',
    total: 3799,
    status: 'pending' as const,
    date: '6 hours ago',
  },
];

const topProducts = [
  { name: 'Rose Glow Serum', sales: 234, revenue: 304566, stock: 45 },
  { name: 'Vitamin C Face Wash', sales: 189, revenue: 113211, stock: 128 },
  { name: 'Argan Hair Oil', sales: 156, revenue: 116844, stock: 67 },
  { name: 'Matte Lipstick Set', sales: 134, revenue: 200866, stock: 23 },
  { name: 'Hydrating Face Cream', sales: 121, revenue: 108779, stock: 89 },
];

const lowStockProducts = [
  { name: 'Matte Lipstick Set', stock: 23, threshold: 50 },
  { name: 'Rose Glow Serum', stock: 45, threshold: 50 },
  { name: 'Aloe Vera Gel', stock: 12, threshold: 30 },
];

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your store.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          Last updated: Just now
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className={`rounded-lg p-2 ${stat.bgColor}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <Badge
                  variant={stat.trend === 'up' ? 'default' : 'destructive'}
                  className="flex items-center gap-1"
                >
                  {stat.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {stat.change}
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Orders */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Orders</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin/orders">
                View all
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={order.avatar} />
                      <AvatarFallback>{order.customer[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{order.customer}</p>
                      <p className="text-sm text-muted-foreground">
                        {order.id} • {order.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium">
                      ₹{order.total.toLocaleString('en-IN')}
                    </span>
                    <OrderStatus status={order.status} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Top Products</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin/products">
                View all
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="truncate font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {product.sales} sales • {product.stock} in stock
                    </p>
                  </div>
                  <span className="font-medium">
                    ₹{product.revenue.toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Low Stock Alert */}
      <Card className="border-warning/50 bg-warning/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5 text-warning" />
            Low Stock Alert
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            {lowStockProducts.map((product) => (
              <div key={product.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{product.name}</span>
                  <Badge variant="outline">{product.stock} left</Badge>
                </div>
                <Progress
                  value={(product.stock / product.threshold) * 100}
                  className="h-2"
                />
                <p className="text-xs text-muted-foreground">
                  Threshold: {product.threshold} units
                </p>
              </div>
            ))}
          </div>
          <Button variant="outline" className="mt-4" asChild>
            <Link to="/admin/products?filter=low-stock">
              Manage Inventory
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
