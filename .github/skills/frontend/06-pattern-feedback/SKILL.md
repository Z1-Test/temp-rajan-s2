---
title: Feedback Patterns
description: Toast notifications, alerts, and user feedback patterns
tags:
  - frontend
  - toast
  - alert
  - notifications
name: feedback-patterns
---

# Feedback Patterns Skill

## Toast (Sonner)

```tsx
import { toast } from 'sonner';

// Success
toast.success('Changes saved successfully');

// Error
toast.error('Failed to save changes');

// Info
toast.info('New update available');

// Warning
toast.warning('Your session expires in 5 minutes');

// With action
toast('File uploaded', {
  action: {
    label: 'View',
    onClick: () => navigate('/files'),
  },
});

// Promise
toast.promise(saveData(), {
  loading: 'Saving...',
  success: 'Data saved!',
  error: 'Failed to save',
});
```

## Alerts

```tsx
// Info
<Alert>
  <Info className="size-4" />
  <AlertTitle>Note</AlertTitle>
  <AlertDescription>This is an informational message.</AlertDescription>
</Alert>

// Destructive
<Alert variant="destructive">
  <AlertCircle className="size-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>

// Success (custom)
<Alert className="border-green-200 bg-green-50 text-green-800">
  <CheckCircle className="size-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Your changes have been saved.</AlertDescription>
</Alert>
```

## Inline Feedback

```tsx
// Form error
<p className="flex items-center gap-1 text-sm text-destructive">
  <AlertCircle className="size-4" />
  Email is required
</p>

// Success message
<p className="flex items-center gap-1 text-sm text-green-600">
  <CheckCircle className="size-4" />
  Password updated
</p>
```

## Badge Status

```tsx
<Badge variant="default">Active</Badge>
<Badge variant="secondary">Pending</Badge>
<Badge variant="destructive">Failed</Badge>
<Badge variant="outline">Draft</Badge>
```

## Best Practices

✅ Use toast for transient feedback  
✅ Use alert for persistent messages  
✅ Include clear action text  
✅ Auto-dismiss non-critical toasts  
❌ Don't stack too many toasts  
❌ Don't use toast for errors requiring action
