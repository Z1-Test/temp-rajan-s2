---
title: State UI Patterns
description: Generate consistent loading, error, empty, and success state UI patterns
tags:
  - frontend
  - states
  - loading
  - error
  - empty-state
name: state-ui-patterns
---

# State UI Patterns Skill

## What is it?

This skill generates consistent UI patterns for application states: loading, error, empty, and success, ensuring users always have clear feedback.

## Why use it?

- **Clarity**: Users know what's happening
- **Trust**: Proper error handling builds confidence
- **Engagement**: Empty states guide action
- **Consistency**: Same patterns everywhere
- **UX**: Prevents confusion and frustration

---

## Loading States

### Skeleton Loading

```tsx
// Card skeleton
function CardSkeleton() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4">
        <Skeleton className="size-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-3 w-[150px]" />
        </div>
      </div>
      <Skeleton className="mt-4 h-20 w-full" />
    </Card>
  );
}

// Table skeleton
function TableSkeleton({ rows = 5 }) {
  return (
    <div className="space-y-3">
      <Skeleton className="h-10 w-full" /> {/* Header */}
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-12 w-full" />
      ))}
    </div>
  );
}

// Page skeleton
function PageSkeleton() {
  return (
    <div className="space-y-6 p-6">
      <Skeleton className="h-8 w-[300px]" /> {/* Title */}
      <Skeleton className="h-4 w-[500px]" /> {/* Description */}
      <div className="grid grid-cols-3 gap-6">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}
```

### Spinner Loading

```tsx
// Inline spinner
<Button disabled>
  <Loader2 className="mr-2 size-4 animate-spin" />
  Loading...
</Button>

// Full page spinner
function PageLoading() {
  return (
    <div className="flex h-[50vh] items-center justify-center">
      <div className="text-center">
        <Loader2 className="mx-auto size-8 animate-spin text-primary" />
        <p className="mt-4 text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

// Overlay spinner
function LoadingOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <Loader2 className="size-8 animate-spin text-primary" />
    </div>
  );
}
```

### Progress Loading

```tsx
// Determinate progress
<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Uploading...</span>
    <span>{progress}%</span>
  </div>
  <Progress value={progress} />
</div>

// Indeterminate progress
<div className="h-1 w-full overflow-hidden bg-muted">
  <div className="h-full w-1/3 animate-[indeterminate_1s_ease-in-out_infinite] bg-primary" />
</div>
```

---

## Error States

### Inline Error

```tsx
// Form field error
<div className="space-y-2">
  <Input className="border-destructive" aria-invalid="true" />
  <p className="flex items-center gap-1 text-sm text-destructive">
    <AlertCircle className="size-4" />
    Email is required
  </p>
</div>
```

### Error Alert

```tsx
// Dismissible error alert
<Alert variant="destructive">
  <AlertCircle className="size-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Failed to save changes. Please try again.
  </AlertDescription>
</Alert>

// Error with retry
<Alert variant="destructive">
  <AlertCircle className="size-4" />
  <AlertTitle>Connection Error</AlertTitle>
  <AlertDescription className="flex items-center justify-between">
    <span>Unable to connect to server.</span>
    <Button variant="outline" size="sm" onClick={retry}>
      Retry
    </Button>
  </AlertDescription>
</Alert>
```

### Error Page

```tsx
function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <div className="rounded-full bg-destructive/10 p-4">
        <XCircle className="size-8 text-destructive" />
      </div>
      <h1 className="mt-6 text-2xl font-semibold">Something went wrong</h1>
      <p className="mt-2 max-w-md text-muted-foreground">
        {error.message || 'An unexpected error occurred. Please try again.'}
      </p>
      <div className="mt-6 flex gap-3">
        <Button variant="outline" onClick={() => window.location.reload()}>
          Refresh Page
        </Button>
        <Button onClick={reset}>Try Again</Button>
      </div>
    </div>
  );
}
```

### 404 Page

```tsx
function NotFoundPage() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <p className="text-8xl font-bold text-muted-foreground/20">404</p>
      <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-muted-foreground">
        The page you're looking for doesn't exist.
      </p>
      <Button className="mt-6" asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
}
```

---

## Empty States

### Simple Empty

```tsx
function EmptyState({ 
  icon: Icon,
  title,
  description,
  action,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: { label: string; onClick: () => void };
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="rounded-full bg-muted p-4">
        <Icon className="size-8 text-muted-foreground" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{description}</p>
      {action && (
        <Button className="mt-6" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
}

// Usage
<EmptyState
  icon={Inbox}
  title="No messages"
  description="You don't have any messages yet. Start a conversation!"
  action={{ label: 'Compose Message', onClick: openCompose }}
/>
```

### Search Empty

```tsx
function SearchEmpty({ query }: { query: string }) {
  return (
    <div className="py-12 text-center">
      <Search className="mx-auto size-8 text-muted-foreground" />
      <h3 className="mt-4 text-lg font-semibold">No results found</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        No results for "{query}". Try a different search term.
      </p>
    </div>
  );
}
```

### First-Time User Empty

```tsx
function OnboardingEmpty() {
  return (
    <Card className="border-dashed p-8 text-center">
      <Sparkles className="mx-auto size-10 text-primary" />
      <h3 className="mt-4 text-xl font-semibold">Welcome!</h3>
      <p className="mt-2 text-muted-foreground">
        Get started by creating your first project.
      </p>
      <Button className="mt-6">
        <Plus className="mr-2 size-4" />
        Create Project
      </Button>
    </Card>
  );
}
```

---

## Success States

### Success Toast

```tsx
// Using Sonner
toast.success('Changes saved successfully');

// Custom success toast
toast.custom((t) => (
  <div className="flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-800">
    <CheckCircle className="size-5" />
    <span>Your profile has been updated.</span>
  </div>
));
```

### Success Alert

```tsx
<Alert className="border-green-200 bg-green-50 text-green-800">
  <CheckCircle className="size-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>
    Your payment has been processed successfully.
  </AlertDescription>
</Alert>
```

### Success Page

```tsx
function SuccessPage() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <div className="rounded-full bg-green-100 p-4">
        <CheckCircle className="size-10 text-green-600" />
      </div>
      <h1 className="mt-6 text-2xl font-semibold">Payment Successful</h1>
      <p className="mt-2 text-muted-foreground">
        Thank you for your purchase. A confirmation email has been sent.
      </p>
      <Button className="mt-6" asChild>
        <Link href="/dashboard">Go to Dashboard</Link>
      </Button>
    </div>
  );
}
```

---

## Combined State Handler

```tsx
interface DataState<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

function DataStateHandler<T>({
  state,
  loadingComponent,
  errorComponent,
  emptyComponent,
  children,
}: {
  state: DataState<T>;
  loadingComponent?: React.ReactNode;
  errorComponent?: (error: Error) => React.ReactNode;
  emptyComponent?: React.ReactNode;
  children: (data: T) => React.ReactNode;
}) {
  if (state.isLoading) {
    return loadingComponent ?? <PageLoading />;
  }
  
  if (state.error) {
    return errorComponent?.(state.error) ?? <ErrorAlert error={state.error} />;
  }
  
  if (!state.data || (Array.isArray(state.data) && state.data.length === 0)) {
    return emptyComponent ?? <EmptyState icon={Inbox} title="No data" description="Nothing here yet." />;
  }
  
  return children(state.data);
}

// Usage
<DataStateHandler
  state={{ data: users, isLoading, error }}
  loadingComponent={<TableSkeleton />}
  emptyComponent={<EmptyState icon={Users} title="No users" description="Add your first user." />}
>
  {(users) => <UserTable users={users} />}
</DataStateHandler>
```

---

## Best Practices

✅ **DO**:
- Always show loading state for async operations
- Provide actionable error messages
- Make empty states guide users to action
- Use consistent patterns throughout
- Show skeleton loaders that match content shape

❌ **DON'T**:
- Leave users staring at blank screens
- Show technical error messages to users
- Use spinners for skeleton-appropriate loading
- Forget to handle edge cases
- Make error recovery difficult
