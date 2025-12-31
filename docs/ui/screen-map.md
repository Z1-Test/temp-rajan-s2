# Screen Map - itsme.fashion

## Complete Route Structure

```
/                               # Home (Landing)
├── /products                   # Product Listing (All)
├── /products/:category         # Category View
├── /product/:slug              # Product Detail
├── /search?q=                  # Search Results
├── /cart                       # Shopping Cart
├── /checkout                   # Checkout Flow (Multi-step)
├── /order/:id                  # Order Confirmation
├── /login                      # User Login
├── /register                   # User Registration
├── /forgot-password            # Password Reset
├── /account                    # Account Dashboard
│   ├── /account/profile        # Profile Management
│   ├── /account/addresses      # Address Management
│   ├── /account/orders         # Order History
│   ├── /account/orders/:id     # Order Detail
│   └── /account/wishlist       # Wishlist
└── /admin                      # Admin Area
    ├── /admin/dashboard        # Admin Dashboard
    ├── /admin/products         # Product Management
    └── /admin/orders           # Order Management
```

## Screen Details

### Public Screens (No Auth)

| Screen | Route | Layout | Key Components |
|--------|-------|--------|----------------|
| Home | `/` | Marketing | Hero, Featured Products, Categories, Benefits |
| Product Listing | `/products` | Catalog | Filters, Product Grid, Sorting, View Toggle |
| Category View | `/products/:category` | Catalog | Category Header, Products, Filters |
| Product Detail | `/product/:slug` | Catalog | Gallery, Info, Tabs, Related Products |
| Search Results | `/search?q=` | Catalog | Search Input, Results Grid, Popular Searches |
| Cart | `/cart` | Root | Cart Items, Promo Code, Order Summary |
| Login | `/login` | Auth | Login Form, Register Link, Social Login |
| Register | `/register` | Auth | Register Form, Password Strength, Terms |
| Forgot Password | `/forgot-password` | Auth | Email Input, Success State |
| 404 Not Found | `*` | Root | Error Message, Navigation Links |

### Protected Screens (Auth Required)

| Screen | Route | Layout | Key Components |
|--------|-------|--------|----------------|
| Checkout | `/checkout` | Checkout | Multi-step Form, Address, Payment, Summary |
| Order Confirmation | `/order/:id` | Root | Success Animation, Order Details, Next Steps |
| Profile | `/account/profile` | Account | Avatar, Profile Form, Password Change |
| Addresses | `/account/addresses` | Account | Address Cards, Add/Edit Dialog, Set Default |
| Order History | `/account/orders` | Account | Order List, Filters, Search |
| Order Detail | `/account/orders/:id` | Account | Timeline, Items, Summary, Actions |
| Wishlist | `/account/wishlist` | Account | Product Grid, Move to Cart, Remove |

### Admin Screens

| Screen | Route | Layout | Key Components |
|--------|-------|--------|----------------|
| Admin Dashboard | `/admin/dashboard` | Admin | Stats Cards, Charts, Recent Orders, Alerts |
| Product Management | `/admin/products` | Admin | Data Table, Add/Edit Dialog, Filters |
| Order Management | `/admin/orders` | Admin | Order Table, Status Updates, Search |

## Layout Templates

1. **RootLayout** - Main app wrapper with Header, Footer, Toaster
2. **MarketingLayout** - Pass-through for landing pages
3. **CatalogLayout** - Container wrapper for product pages
4. **AuthLayout** - Centered card layout for auth screens
5. **AccountLayout** - Sidebar navigation for user account
6. **CheckoutLayout** - Minimal header for secure checkout
7. **AdminLayout** - Sidebar navigation for admin panel

## Total Screens: 19

| Category | Count | Screens |
|----------|-------|---------|
| **Identity** | 5 | Login, Register, ForgotPassword, Profile, Addresses |
| **Catalog** | 5 | Home, ProductListing, ProductDetail, Search, Wishlist |
| **Ordering** | 5 | Cart, Checkout, OrderConfirmation, OrderHistory, OrderDetail |
| **Admin** | 3 | Dashboard, ProductManagement, OrderManagement |
| **Common** | 1 | NotFound (404) |
