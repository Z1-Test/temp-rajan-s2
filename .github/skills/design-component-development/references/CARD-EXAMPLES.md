# Card Examples Reference

> Code examples for all Staylook card variants

---

## Base Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
  <CardFooter>
    <Button variant="standard">Action</Button>
  </CardFooter>
</Card>
```

```css
.card {
  background: var(--surface-muted);
  border: 1px solid var(--outline-muted);
  border-radius: var(--radius-card); /* 16px */
  box-shadow: var(--shadow-muted);
  padding: 20px;
}

.card-header {
  margin-bottom: 16px;
}

.card-title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--sl-standard);
}

.card-description {
  font-size: var(--text-sm);
  color: var(--sl-standard-secondary);
  margin-top: 4px;
}

.card-content {
  color: var(--sl-standard-secondary);
}

.card-footer {
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
```

---

## Interactive Card

```tsx
<Card interactive onClick={handleClick}>
  <CardContent>
    Clickable content
  </CardContent>
</Card>
```

```css
.card-interactive {
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-default);
}

/* Resting */
.card-interactive {
  border-color: var(--outline-muted);
  box-shadow: var(--shadow-muted);
}

/* Hover */
.card-interactive:hover {
  border-color: var(--outline-calm);
  box-shadow: var(--shadow-calm);
  transform: translateY(-2px);
}

/* Active */
.card-interactive:active {
  background: var(--surface-calm);
  box-shadow: var(--shadow-muted);
  transform: translateY(0);
}

/* Focus */
.card-interactive:focus-visible {
  outline: 2px solid var(--sl-expressive);
  outline-offset: 2px;
}
```

---

## Outlined Card

```css
.card-outlined {
  background: var(--surface-muted);
  border: 1px solid var(--outline-calm);
  border-radius: var(--radius-card);
  box-shadow: none;
  padding: 20px;
}

.card-outlined:hover {
  border-color: var(--outline-vibrant);
}
```

---

## Elevated Card

```css
.card-elevated {
  background: var(--surface-muted);
  border: none;
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-calm);
  padding: 20px;
  transition: box-shadow var(--duration-fast) var(--ease-default);
}

.card-elevated:hover {
  box-shadow: var(--shadow-vibrant);
}
```

---

## Expressive Card (THE Highlight)

```tsx
{/* Use sparingly - only when card IS the highlight */}
<Card variant="expressive">
  <CardContent>
    Featured content
  </CardContent>
</Card>
```

```css
.card-expressive {
  background: var(--sl-expressive-light);
  border: 1px solid var(--sl-expressive);
  border-radius: var(--radius-card);
  padding: 20px;
}
```

---

## Card Grid

```tsx
<div className="card-grid">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</div>
```

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

/* Fixed columns */
.card-grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

.card-grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.card-grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

/* Responsive */
@media (max-width: 768px) {
  .card-grid-2,
  .card-grid-3,
  .card-grid-4 {
    grid-template-columns: 1fr;
  }
}
```

---

## Product Card Example

```tsx
<Card interactive className="product-card">
  <img src={product.image} alt={product.name} className="product-image" />
  <CardContent>
    <h3 className="product-name">{product.name}</h3>
    <p className="product-price">${product.price}</p>
  </CardContent>
  <CardFooter>
    <Button variant="standard" size="sm">Add to Cart</Button>
  </CardFooter>
</Card>
```

```css
.product-card {
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--radius-card) var(--radius-card) 0 0;
  margin: -20px -20px 16px -20px;
  width: calc(100% + 40px);
}

.product-name {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--sl-standard);
}

.product-price {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--sl-standard);
  margin-top: 4px;
}
```

---

## Stat Card Example

```tsx
<Card className="stat-card">
  <div className="stat-icon">
    <TrendingUp />
  </div>
  <div className="stat-content">
    <p className="stat-label">Revenue</p>
    <p className="stat-value">$12,450</p>
    <p className="stat-change positive">+12.5%</p>
  </div>
</Card>
```

```css
.stat-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.stat-icon {
  width: 48px;
  height: 48px;
  background: var(--surface-vibrant);
  border-radius: var(--radius-badge);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--sl-standard);
}

.stat-label {
  font-size: var(--text-sm);
  color: var(--sl-standard-muted);
}

.stat-value {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--sl-standard);
}

.stat-change {
  font-size: var(--text-sm);
  font-weight: 500;
}

.stat-change.positive { color: var(--color-success); }
.stat-change.negative { color: var(--color-error); }
```

---

*Card Examples — Staylook UI Reference*
