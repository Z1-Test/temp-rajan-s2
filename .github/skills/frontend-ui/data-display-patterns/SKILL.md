---
title: Data Display Patterns
description: Generate consistent data display components - tables, lists, cards, grids
tags:
  - frontend
  - tables
  - lists
  - cards
  - data-display
name: data-display-patterns
---

# Data Display Patterns Skill

## What is it?

This skill generates consistent data display patterns for tables, lists, cards, and grids, handling sorting, filtering, and pagination.

## Why use it?

- **Consistency**: Same data patterns everywhere
- **UX**: Familiar interaction models
- **Responsive**: Works on all devices
- **Features**: Sorting, filtering, pagination included
- **Accessibility**: Screen reader friendly

---

## Table Pattern

### Basic Table

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.id}>
        <TableCell className="font-medium">{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>
          <Badge variant={user.active ? 'default' : 'secondary'}>
            {user.active ? 'Active' : 'Inactive'}
          </Badge>
        </TableCell>
        <TableCell className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

### Sortable Table

```tsx
function SortableTable({ data, columns }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const requestSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead 
              key={column.key}
              className="cursor-pointer select-none"
              onClick={() => requestSort(column.key)}
            >
              <div className="flex items-center gap-2">
                {column.label}
                <ArrowUpDown className="size-4" />
              </div>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedData.map((row, i) => (
          <TableRow key={i}>
            {columns.map((column) => (
              <TableCell key={column.key}>{row[column.key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

---

## List Patterns

### Simple List

```tsx
<ul className="divide-y divide-border">
  {items.map((item) => (
    <li key={item.id} className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={item.avatar} />
          <AvatarFallback>{item.initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-muted-foreground">{item.email}</p>
        </div>
      </div>
      <Button variant="ghost" size="sm">View</Button>
    </li>
  ))}
</ul>
```

### Stacked List

```tsx
<ul className="space-y-4">
  {items.map((item) => (
    <li key={item.id}>
      <Card className="p-4 hover:bg-accent transition-colors">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="font-medium">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
          <Badge>{item.status}</Badge>
        </div>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="size-4" />
            {item.date}
          </span>
          <span className="flex items-center gap-1">
            <User className="size-4" />
            {item.author}
          </span>
        </div>
      </Card>
    </li>
  ))}
</ul>
```

---

## Card Grid Patterns

### Auto-Fit Grid

```tsx
<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
  {items.map((item) => (
    <Card key={item.id} className="overflow-hidden">
      <img 
        src={item.image} 
        alt={item.title}
        className="h-48 w-full object-cover"
      />
      <CardContent className="p-6">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  ))}
</div>
```

### Stats Cards

```tsx
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
  {stats.map((stat) => (
    <Card key={stat.label}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            {stat.label}
          </span>
          <stat.icon className="size-4 text-muted-foreground" />
        </div>
        <div className="mt-2">
          <span className="text-3xl font-bold">{stat.value}</span>
          {stat.change && (
            <span className={cn(
              "ml-2 text-sm",
              stat.change > 0 ? "text-green-500" : "text-red-500"
            )}>
              {stat.change > 0 ? '+' : ''}{stat.change}%
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  ))}
</div>
```

---

## Pagination

```tsx
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-between px-2">
      <p className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </p>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronLeft className="size-4" />
        </Button>
        
        {/* Page numbers */}
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          const page = i + 1;
          return (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              onClick={() => onPageChange(page)}
            >
              {page}
            </Button>
          );
        })}
        
        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
```

---

## Filtering

```tsx
function DataFilter({ filters, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="relative flex-1 min-w-[200px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          placeholder="Search..."
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
          className="pl-10"
        />
      </div>
      
      <Select
        value={filters.status}
        onValueChange={(value) => onChange({ ...filters, status: value })}
      >
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
        </SelectContent>
      </Select>
      
      <Button variant="outline" size="icon">
        <Filter className="size-4" />
      </Button>
    </div>
  );
}
```

---

## Responsive Table → Cards

```tsx
// Desktop: Table, Mobile: Cards
function ResponsiveDataDisplay({ data }) {
  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block">
        <Table>{/* Table content */}</Table>
      </div>
      
      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {data.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="flex justify-between">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.email}</p>
              </div>
              <Badge>{item.status}</Badge>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
```

---

## Best Practices

✅ **DO**:
- Right-align numbers in tables
- Include loading and empty states
- Make rows/cards clickable for details
- Show actions on hover or in dropdown
- Use consistent column widths

❌ **DON'T**:
- Show too many columns (max 6-7)
- Force horizontal scroll on mobile
- Forget pagination for long lists
- Use tables for simple lists
- Hide important data in dropdowns
