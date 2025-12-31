---
title: Navigation Patterns
description: Generate consistent navigation components - headers, sidebars, breadcrumbs, tabs
tags:
  - frontend
  - navigation
  - header
  - sidebar
  - breadcrumb
name: navigation-patterns
---

# Navigation Patterns Skill

## What is it?

This skill generates consistent navigation components including headers, sidebars, mobile navigation, breadcrumbs, and tabs.

## Why use it?

- **Consistency**: Unified navigation across all pages
- **UX**: Users always know where they are
- **Responsive**: Works on all device sizes
- **Accessibility**: Keyboard navigable, screen reader friendly
- **Speed**: Proven patterns ready to use

---

## Header Patterns

### Simple Header

```tsx
function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Logo className="size-6" />
          <span>Brand</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
```

### Dashboard Header

```tsx
function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6 bg-background">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <Breadcrumbs />
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Search..." className="w-64 pl-10" />
        </div>
        
        <Button variant="ghost" size="icon">
          <Bell className="size-5" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2">
              <Avatar className="size-8">
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.initials}</AvatarFallback>
              </Avatar>
              <span className="hidden md:inline">{user.name}</span>
              <ChevronDown className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
```

---

## Sidebar Patterns

### Icon + Text Sidebar

```tsx
const navItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Users', href: '/users' },
  { icon: FileText, label: 'Documents', href: '/documents' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

function Sidebar() {
  const pathname = usePathname();
  
  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-64 border-r bg-card">
      <div className="flex h-16 items-center border-b px-6">
        <Logo className="size-6" />
        <span className="ml-2 font-semibold">Dashboard</span>
      </div>
      
      <nav className="p-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              pathname === item.href
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            <item.icon className="size-5" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
```

### Collapsible Sidebar

```tsx
function CollapsibleSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <aside className={cn(
      'fixed inset-y-0 left-0 z-40 border-r bg-card transition-all duration-300',
      collapsed ? 'w-16' : 'w-64'
    )}>
      <div className="flex h-16 items-center justify-between border-b px-4">
        {!collapsed && <span className="font-semibold">Dashboard</span>}
        <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>
      
      <nav className="p-2 space-y-1">
        {navItems.map((item) => (
          <Tooltip key={item.href} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 transition-colors',
                  collapsed && 'justify-center'
                )}
              >
                <item.icon className="size-5 shrink-0" />
                {!collapsed && <span className="text-sm">{item.label}</span>}
              </Link>
            </TooltipTrigger>
            {collapsed && (
              <TooltipContent side="right">{item.label}</TooltipContent>
            )}
          </Tooltip>
        ))}
      </nav>
    </aside>
  );
}
```

---

## Mobile Navigation

### Hamburger Menu

```tsx
function MobileNav() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(true)}>
        <Menu className="size-6" />
      </Button>
      
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-80">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <nav className="mt-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium"
                onClick={() => setOpen(false)}
              >
                <item.icon className="size-5" />
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
```

### Bottom Navigation (Mobile)

```tsx
function BottomNav() {
  const pathname = usePathname();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background md:hidden">
      <div className="flex h-16 items-center justify-around">
        {navItems.slice(0, 4).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex flex-col items-center gap-1 px-3 py-2',
              pathname === item.href ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            <item.icon className="size-5" />
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
```

---

## Breadcrumbs

```tsx
interface BreadcrumbItem {
  label: string;
  href?: string;
}

function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            <Home className="size-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="size-4 text-muted-foreground" />
            {item.href ? (
              <Link href={item.href} className="text-muted-foreground hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Usage
<Breadcrumbs items={[
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Users', href: '/dashboard/users' },
  { label: 'John Doe' },
]} />
```

---

## Tabs Navigation

```tsx
// Page-level tabs
function PageTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
        <TabsTrigger 
          value="overview"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger 
          value="analytics"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
        >
          Analytics
        </TabsTrigger>
        <TabsTrigger 
          value="settings"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
        >
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">...</TabsContent>
      <TabsContent value="analytics">...</TabsContent>
      <TabsContent value="settings">...</TabsContent>
    </Tabs>
  );
}
```

---

## Best Practices

✅ **DO**:
- Keep navigation consistent across pages
- Highlight current location
- Make mobile navigation touch-friendly
- Use semantic nav elements
- Add aria-current for active links

❌ **DON'T**:
- Hide navigation on scroll (frustrating)
- Use too many nav levels
- Forget keyboard navigation
- Make touch targets too small
- Use hover-only navigation on mobile
