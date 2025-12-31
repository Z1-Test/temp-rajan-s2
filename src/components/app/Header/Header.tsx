import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const categories = [
  { href: '/products/skincare', label: 'Skin Care' },
  { href: '/products/haircare', label: 'Hair Care' },
  { href: '/products/makeup', label: 'Makeup' },
];

export function Header() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock cart count - would come from state/context in real app
  const cartCount = 3;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar - Announcement */}
      <div className="bg-primary px-4 py-2 text-center text-sm text-primary-foreground">
        Free shipping on orders over ₹999 • 100% Cruelty-Free
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-bold tracking-tight md:text-2xl">
              itsme<span className="text-primary">.fashion</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {categories.map((category) => (
              <Link
                key={category.href}
                to={category.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {category.label}
              </Link>
            ))}
            <Link
              to="/products"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              All Products
            </Link>
          </nav>

          {/* Search Bar (Desktop) */}
          <form onSubmit={handleSearch} className="hidden flex-1 max-w-md lg:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 pr-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" asChild>
              <Link to="/wishlist">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Link>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link to="/cart">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge
                    variant="default"
                    className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs"
                  >
                    {cartCount}
                  </Badge>
                )}
                <span className="sr-only">Cart ({cartCount} items)</span>
              </Link>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/login">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/register">Create Account</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/account/profile">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/account/orders">My Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/wishlist">Wishlist</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Search (Expandable) */}
        <div
          className={cn(
            'overflow-hidden transition-all duration-300 lg:hidden',
            searchOpen ? 'max-h-16 pb-4' : 'max-h-0'
          )}
        >
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 pr-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'absolute left-0 right-0 top-full overflow-hidden border-b bg-background transition-all duration-300 lg:hidden',
          mobileMenuOpen ? 'max-h-96' : 'max-h-0 border-b-0'
        )}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="space-y-2">
            {categories.map((category) => (
              <Link
                key={category.href}
                to={category.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {category.label}
              </Link>
            ))}
            <Link
              to="/products"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Products
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
