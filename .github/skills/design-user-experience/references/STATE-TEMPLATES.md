# UI State Templates Reference

> Code templates for loading, empty, error, and success states

---

## Loading States

### Skeleton Loader

```tsx
<div className="skeleton-card">
  <div className="skeleton skeleton-image" />
  <div className="skeleton skeleton-title" />
  <div className="skeleton skeleton-text" />
  <div className="skeleton skeleton-text short" />
</div>
```

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--surface-vibrant) 25%,
    var(--surface-calm) 50%,
    var(--surface-vibrant) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-badge);
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton-image {
  width: 100%;
  height: 200px;
  border-radius: var(--radius-card);
}

.skeleton-title {
  height: 24px;
  width: 70%;
  margin-top: 16px;
}

.skeleton-text {
  height: 16px;
  width: 100%;
  margin-top: 8px;
}

.skeleton-text.short {
  width: 60%;
}
```

### Spinner Loader

```tsx
<div className="loading-spinner">
  <Loader2 className="spinner-icon" />
  <span className="spinner-text">Loading...</span>
</div>
```

```css
.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
  gap: 16px;
}

.spinner-icon {
  width: 32px;
  height: 32px;
  color: var(--color-ink-muted);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spinner-text {
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
}
```

### Button Loading State

```tsx
<Button variant="expressive" disabled>
  <Loader2 className="animate-spin mr-2 h-4 w-4" />
  Processing...
</Button>
```

---

## Empty States

### First-Use Empty State

```tsx
<div className="empty-state">
  <div className="empty-icon">
    <Package className="icon" />
  </div>
  <h3 className="empty-title">No products yet</h3>
  <p className="empty-description">
    Get started by adding your first product to the catalog.
  </p>
  <Button variant="expressive">
    <Plus className="mr-2 h-4 w-4" />
    Add Product
  </Button>
</div>
```

```css
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 64px 24px;
  gap: 16px;
}

.empty-icon {
  width: 80px;
  height: 80px;
  background: var(--surface-calm);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty-icon .icon {
  width: 40px;
  height: 40px;
  color: var(--color-ink-muted);
}

.empty-title {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--color-ink);
  margin: 0;
}

.empty-description {
  font-size: var(--text-sm);
  color: var(--color-ink-soft);
  max-width: 300px;
  margin: 0;
}
```

### No Results Empty State

```tsx
<div className="empty-state">
  <div className="empty-icon">
    <Search className="icon" />
  </div>
  <h3 className="empty-title">No results found</h3>
  <p className="empty-description">
    Try adjusting your search or filters to find what you're looking for.
  </p>
  <Button variant="standard" onClick={clearFilters}>
    Clear Filters
  </Button>
</div>
```

### Error Empty State

```tsx
<div className="empty-state error">
  <div className="empty-icon error">
    <AlertTriangle className="icon" />
  </div>
  <h3 className="empty-title">Something went wrong</h3>
  <p className="empty-description">
    We couldn't load the data. Please try again.
  </p>
  <Button variant="standard" onClick={retry}>
    <RefreshCw className="mr-2 h-4 w-4" />
    Retry
  </Button>
</div>
```

```css
.empty-icon.error {
  background: var(--color-error-bg);
}

.empty-icon.error .icon {
  color: var(--color-error);
}
```

---

## Success States

### Success Toast

```tsx
<div className="toast toast-success">
  <CheckCircle className="toast-icon" />
  <div className="toast-content">
    <p className="toast-title">Success!</p>
    <p className="toast-message">Your changes have been saved.</p>
  </div>
  <button className="toast-close">
    <X />
  </button>
</div>
```

```css
.toast {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: var(--surface-muted);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-vibrant);
  max-width: 400px;
}

.toast-success {
  border-left: 4px solid var(--color-success);
}

.toast-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.toast-success .toast-icon {
  color: var(--color-success);
}

.toast-content {
  flex: 1;
}

.toast-title {
  font-weight: 600;
  color: var(--color-ink);
  margin: 0;
}

.toast-message {
  font-size: var(--text-sm);
  color: var(--color-ink-soft);
  margin: 4px 0 0;
}

.toast-close {
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: var(--color-ink-muted);
}
```

### Success Page/Confirmation

```tsx
<div className="success-page">
  <div className="success-icon">
    <CheckCircle className="icon" />
  </div>
  <h1 className="success-title">Order Confirmed!</h1>
  <p className="success-message">
    Your order #12345 has been placed successfully.
  </p>
  <div className="success-actions">
    <Button variant="expressive">View Order</Button>
    <Button variant="ghost">Continue Shopping</Button>
  </div>
</div>
```

```css
.success-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 64px 24px;
  min-height: 50vh;
}

.success-icon {
  width: 80px;
  height: 80px;
  background: var(--color-success-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.success-icon .icon {
  width: 40px;
  height: 40px;
  color: var(--color-success);
}

.success-title {
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--color-ink);
  margin: 0;
}

.success-message {
  font-size: var(--text-base);
  color: var(--color-ink-soft);
  margin: 8px 0 32px;
}

.success-actions {
  display: flex;
  gap: 16px;
}
```

---

## Error States

### Error Toast

```tsx
<div className="toast toast-error">
  <XCircle className="toast-icon" />
  <div className="toast-content">
    <p className="toast-title">Error</p>
    <p className="toast-message">Failed to save changes. Please try again.</p>
  </div>
  <button className="toast-close">
    <X />
  </button>
</div>
```

```css
.toast-error {
  border-left: 4px solid var(--color-error);
}

.toast-error .toast-icon {
  color: var(--color-error);
}
```

### Inline Error Alert

```tsx
<div className="alert alert-error">
  <AlertCircle className="alert-icon" />
  <div className="alert-content">
    <p className="alert-title">There was an error</p>
    <p className="alert-message">
      We couldn't process your request. Please check your input and try again.
    </p>
  </div>
</div>
```

```css
.alert {
  display: flex;
  gap: 12px;
  padding: 16px;
  border-radius: var(--radius-card);
}

.alert-error {
  background: var(--color-error-bg);
  border: 1px solid var(--color-error);
}

.alert-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.alert-error .alert-icon {
  color: var(--color-error);
}

.alert-title {
  font-weight: 600;
  color: var(--color-ink);
  margin: 0;
}

.alert-message {
  font-size: var(--text-sm);
  color: var(--color-ink-soft);
  margin: 4px 0 0;
}
```

---

*State Templates — Staylook UX Reference*
