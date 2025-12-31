# Screen Map - itsme.fashion

## Complete Route Structure

```
/                           # Home (Landing)
├── /products               # Product Listing (All)
├── /category/:slug         # Category View
├── /product/:id            # Product Detail
├── /search                 # Search Results
├── /wishlist               # Wishlist (auth required)
├── /cart                   # Shopping Cart
├── /checkout               # Checkout Flow
│   ├── /checkout/shipping  # Step 1: Shipping
│   ├── /checkout/payment   # Step 2: Payment
│   └── /checkout/review    # Step 3: Review
├── /order
│   ├── /order/confirmation/:id  # Order Success
│   └── /order/:id              # Order Detail
├── /login                  # User Login
├── /register               # User Registration
├── /account                # Account Dashboard
│   ├── /account/profile    # Profile Management
│   ├── /account/addresses  # Address Management
│   └── /account/orders     # Order History
└── /admin                  # Admin Area
    ├── /admin/login        # Admin Login
    ├── /admin/products     # Product Management
    ├── /admin/orders       # Order Management
    └── /admin/reports      # Basic Reporting
```

## Screen Details

### Public Screens (No Auth)

| Screen | Route | Layout | Key Components |
|--------|-------|--------|----------------|
| Home | `/` | Marketing | Hero, Featured Products, Categories |
| Product Listing | `/products` | Catalog | Filters, Product Grid, Pagination |
| Category View | `/category/:slug` | Catalog | Category Header, Products, Filters |
| Product Detail | `/product/:id` | Detail | Gallery, Info, Add to Cart, Related |
| Search Results | `/search` | Catalog | Search Input, Results Grid |
| Cart | `/cart` | Checkout | Cart Items, Summary, Proceed |
| Login | `/login` | Auth | Login Form, Register Link |
| Register | `/register` | Auth | Register Form, Login Link |

### Protected Screens (Auth Required)

| Screen | Route | Layout | Key Components |
|--------|-------|--------|----------------|
| Wishlist | `/wishlist` | Catalog | Wishlist Items, Move to Cart |
| Checkout | `/checkout` | Checkout | Stepper, Forms, Summary |
| Order Confirmation | `/order/confirmation/:id` | Success | Order Summary, Next Actions |
| Order Detail | `/order/:id` | Detail | Order Info, Items, Status |
| Profile | `/account/profile` | Account | Profile Form, Save |
| Addresses | `/account/addresses` | Account | Address List, Add/Edit/Delete |
| Order History | `/account/orders` | Account | Order List, View Detail |

### Admin Screens

| Screen | Route | Layout | Key Components |
|--------|-------|--------|----------------|
| Admin Login | `/admin/login` | Auth | Admin Login Form |
| Admin Dashboard | `/admin` | Admin | Stats, Quick Actions |
| Product Management | `/admin/products` | Admin | Data Table, CRUD Forms |
| Order Management | `/admin/orders` | Admin | Order Table, Status Updates |

## Layout Templates

1. **RootLayout** - Main app wrapper with theme provider
2. **MarketingLayout** - Header, content, footer (public pages)
3. **CatalogLayout** - Header, filters sidebar, content, footer
4. **AuthLayout** - Centered card layout for auth screens
5. **AccountLayout** - Header, account sidebar, content, footer
6. **CheckoutLayout** - Minimal header, stepper, content
7. **AdminLayout** - Admin sidebar, header, content
