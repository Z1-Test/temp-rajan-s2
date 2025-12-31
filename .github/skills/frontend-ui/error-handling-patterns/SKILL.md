---
title: Error Handling Patterns
description: Error boundaries, API error handling, fallback UIs, and retry patterns
tags:
  - frontend
  - errors
  - boundaries
  - fallback
  - retry
name: error-handling-patterns
---

# Error Handling Patterns Skill

## Error Boundary

```tsx
'use client';

import { Component, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <AlertTriangle className="size-12 text-destructive mb-4" />
          <h2 className="text-xl font-semibold">Something went wrong</h2>
          <p className="text-muted-foreground mt-2">
            {this.state.error?.message || 'An unexpected error occurred'}
          </p>
          <Button 
            className="mt-4"
            onClick={() => this.setState({ hasError: false })}
          >
            Try Again
          </Button>
        </div>
      );
    }
    return this.props.children;
  }
}
```

---

## API Error Handling

```tsx
// Centralized error handler
function handleApiError(error: unknown): string {
  if (error instanceof Response) {
    switch (error.status) {
      case 400: return 'Invalid request';
      case 401: return 'Please log in again';
      case 403: return 'You don\'t have permission';
      case 404: return 'Not found';
      case 422: return 'Validation error';
      case 429: return 'Too many requests';
      case 500: return 'Server error. Try again later';
      default: return 'Something went wrong';
    }
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'Unknown error';
}

// Usage with React Query
const { error, isError } = useQuery({
  queryKey: ['data'],
  queryFn: fetchData,
});

if (isError) {
  return <ErrorAlert message={handleApiError(error)} />;
}
```

---

## Error Alert Component

```tsx
interface ErrorAlertProps {
  message: string;
  onRetry?: () => void;
}

function ErrorAlert({ message, onRetry }: ErrorAlertProps) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="size-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription className="flex items-center justify-between">
        <span>{message}</span>
        {onRetry && (
          <Button variant="outline" size="sm" onClick={onRetry}>
            Retry
          </Button>
        )}
      </AlertDescription>
    </Alert>
  );
}
```

---

## Retry Pattern

```tsx
// With exponential backoff
async function fetchWithRetry<T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  delay = 1000
): Promise<T> {
  let lastError: Error;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (i < maxRetries - 1) {
        await new Promise(r => setTimeout(r, delay * Math.pow(2, i)));
      }
    }
  }
  
  throw lastError!;
}

// React Query auto-retry
const { data } = useQuery({
  queryKey: ['data'],
  queryFn: fetchData,
  retry: 3,
  retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000),
});
```

---

## Fallback UI Components

```tsx
// Generic fallback
function ErrorFallback({ 
  error, 
  resetErrorBoundary 
}: FallbackProps) {
  return (
    <div className="p-8 text-center">
      <h2 className="text-xl font-semibold">Oops!</h2>
      <p className="text-muted-foreground mt-2">{error.message}</p>
      <Button className="mt-4" onClick={resetErrorBoundary}>
        Try Again
      </Button>
    </div>
  );
}

// 404 Page
function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl text-muted-foreground mt-2">Page not found</p>
      <Button asChild className="mt-6">
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
}
```

---

## Form Error Handling

```tsx
const onSubmit = async (data: FormData) => {
  try {
    await submitForm(data);
    toast.success('Saved successfully!');
  } catch (error) {
    if (error.status === 422) {
      // Field-level errors
      Object.entries(error.errors).forEach(([field, message]) => {
        form.setError(field, { message });
      });
    } else {
      // General error
      toast.error(handleApiError(error));
    }
  }
};
```

---

## Offline Handling

```tsx
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  return isOnline;
}

// Usage
function App() {
  const isOnline = useOnlineStatus();
  
  if (!isOnline) {
    return <Alert>You are offline. Some features may not work.</Alert>;
  }
  
  return <MainApp />;
}
```

---

## Best Practices

✅ Wrap app in ErrorBoundary  
✅ Handle all API error codes  
✅ Provide retry options  
✅ Show user-friendly messages  
✅ Log errors for debugging  
❌ Don't show stack traces to users  
❌ Don't silently fail
