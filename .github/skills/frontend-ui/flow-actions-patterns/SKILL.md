---
title: Flow Actions & Patterns
description: Complete user flow patterns for actions, forms, navigation, and state transitions
tags:
  - frontend
  - flows
  - actions
  - user-journey
  - interactions
name: flow-actions-patterns
---

# Flow Actions & Patterns Skill

## What is it?

This skill defines complete user flow patterns—from initial action trigger through completion. It ensures all interactions are logically connected, properly confirmed, and appropriately provide feedback.

## Why use it?

- **Completeness**: No action left half-implemented
- **Consistency**: Same flow patterns everywhere
- **UX Quality**: Users always know what happened
- **Error Prevention**: Proper validation and confirmation
- **Accessibility**: Clear action feedback for all users

---

## Action Flow States

### Complete Action Lifecycle

```
┌─────────────────────────────────────────────────────────────────┐
│                       ACTION LIFECYCLE                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [Idle] → [Pending] → [Processing] → [Success/Error] → [Idle]  │
│    ↑                                        │                   │
│    └────────────────────────────────────────┘                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

Each action MUST handle all states:

```tsx
interface ActionState {
  status: 'idle' | 'pending' | 'processing' | 'success' | 'error';
  error?: string;
  data?: any;
}

function ActionButton({ onAction }: { onAction: () => Promise<void> }) {
  const [state, setState] = useState<ActionState>({ status: 'idle' });
  
  const handleClick = async () => {
    setState({ status: 'processing' });
    try {
      await onAction();
      setState({ status: 'success' });
      toast.success('Action completed!');
    } catch (error) {
      setState({ status: 'error', error: error.message });
      toast.error('Action failed');
    } finally {
      setTimeout(() => setState({ status: 'idle' }), 2000);
    }
  };
  
  return (
    <Button 
      onClick={handleClick} 
      disabled={state.status === 'processing'}
    >
      {state.status === 'processing' && <Loader2 className="mr-2 size-4 animate-spin" />}
      {state.status === 'success' && <Check className="mr-2 size-4" />}
      {state.status === 'error' && <X className="mr-2 size-4" />}
      {state.status === 'idle' ? 'Save' : 
       state.status === 'processing' ? 'Saving...' :
       state.status === 'success' ? 'Saved!' : 'Retry'}
    </Button>
  );
}
```

---

## Form Submission Flows

### Standard Form Flow

```
┌──────────────────────────────────────────────────────────────────┐
│ FORM SUBMISSION FLOW                                             │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│ 1. [Pristine Form] - All fields empty, submit disabled          │
│         ↓                                                        │
│ 2. [Dirty Form] - User entered data, validation pending         │
│         ↓                                                        │
│ 3. [Validated] - All validations pass, submit enabled           │
│         ↓                                                        │
│ 4. [Submitting] - Form locked, loading indicator                │
│         ↓                                                        │
│ 5. [Success] - Redirect or success message                      │
│    OR                                                            │
│ 5. [Error] - Show errors, unlock form for correction            │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

```tsx
function CreateUserForm() {
  const [formState, setFormState] = useState<'pristine' | 'dirty' | 'submitting' | 'success' | 'error'>('pristine');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const form = useForm({
    defaultValues: { name: '', email: '', role: '' },
    onChange: () => setFormState('dirty'),
  });
  
  const onSubmit = async (data: FormData) => {
    setFormState('submitting');
    setErrors({});
    
    try {
      // Client-side validation
      const validationErrors = validate(data);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setFormState('error');
        return;
      }
      
      // Server submission
      await createUser(data);
      setFormState('success');
      toast.success('User created successfully!');
      router.push('/users');
      
    } catch (error) {
      if (error.status === 422) {
        // Server validation errors
        setErrors(error.fieldErrors);
      } else {
        // General error
        toast.error('Failed to create user');
      }
      setFormState('error');
    }
  };
  
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <fieldset disabled={formState === 'submitting'}>
        {/* Form fields */}
        <FormField name="name" error={errors.name} />
        <FormField name="email" error={errors.email} />
        <FormField name="role" error={errors.role} />
        
        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" disabled={formState === 'pristine'}>
            {formState === 'submitting' && <Loader2 className="mr-2 size-4 animate-spin" />}
            Create User
          </Button>
        </div>
      </fieldset>
    </form>
  );
}
```

---

## CRUD Action Flows

### Create Flow

```tsx
function CreateEntityFlow() {
  return (
    <>
      {/* 1. Trigger */}
      <Button onClick={() => setDialogOpen(true)}>
        <Plus className="mr-2 size-4" />
        Add New
      </Button>
      
      {/* 2. Form Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Item</DialogTitle>
            <DialogDescription>Fill out the form to create a new item.</DialogDescription>
          </DialogHeader>
          
          {/* 3. Form */}
          <form onSubmit={handleCreate}>
            {/* Fields... */}
            
            {/* 4. Actions */}
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="animate-spin" /> : 'Create'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
      {/* 5. Success - Auto-close dialog, show toast, refresh list */}
    </>
  );
}
```

### Update/Edit Flow

```tsx
function EditEntityFlow({ entity }: { entity: Entity }) {
  const [isEditing, setIsEditing] = useState(false);
  
  // Inline edit mode
  if (isEditing) {
    return (
      <Card className="border-primary">
        <form onSubmit={handleUpdate}>
          {/* Editable fields */}
          <Input defaultValue={entity.name} name="name" />
          
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="ghost" size="sm" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button size="sm" type="submit">
              Save Changes
            </Button>
          </div>
        </form>
      </Card>
    );
  }
  
  // View mode
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div>
          <h3>{entity.name}</h3>
          <p className="text-muted-foreground">{entity.description}</p>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
          <Pencil className="size-4" />
        </Button>
      </div>
    </Card>
  );
}
```

### Delete Flow (Destructive)

```tsx
function DeleteEntityFlow({ entity, onDelete }: DeleteFlowProps) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteEntity(entity.id);
      toast.success(`${entity.name} deleted`);
      setConfirmOpen(false);
      onDelete();
    } catch (error) {
      toast.error('Failed to delete');
    } finally {
      setIsDeleting(false);
    }
  };
  
  return (
    <>
      {/* 1. Delete Trigger */}
      <Button variant="ghost" size="icon" onClick={() => setConfirmOpen(true)}>
        <Trash2 className="size-4 text-destructive" />
      </Button>
      
      {/* 2. Confirmation Dialog */}
      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete {entity.name}?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete 
              <strong> {entity.name}</strong> and all associated data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-destructive hover:bg-destructive/90"
            >
              {isDeleting && <Loader2 className="mr-2 size-4 animate-spin" />}
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
```

---

## Navigation Flows

### Breadcrumb Navigation

```tsx
// Always show user's location in hierarchy
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/users">Users</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>John Doe</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Tab Navigation with State

```tsx
function TabbedContent() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Preserve tab state in URL for shareability
  const searchParams = useSearchParams();
  const router = useRouter();
  
  useEffect(() => {
    const tab = searchParams.get('tab') || 'overview';
    setActiveTab(tab);
  }, [searchParams]);
  
  const handleTabChange = (value: string) => {
    router.push(`?tab=${value}`, { scroll: false });
    setActiveTab(value);
  };
  
  return (
    <Tabs value={activeTab} onValueChange={handleTabChange}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
      </TabsList>
      <TabsContent value="overview"><OverviewPanel /></TabsContent>
      <TabsContent value="settings"><SettingsPanel /></TabsContent>
      <TabsContent value="activity"><ActivityPanel /></TabsContent>
    </Tabs>
  );
}
```

---

## Multi-Step Flows (Wizards)

```tsx
interface WizardStep {
  id: string;
  title: string;
  description: string;
  component: React.ComponentType<StepProps>;
  validation?: (data: WizardData) => boolean;
}

function MultiStepWizard({ steps }: { steps: WizardStep[] }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<WizardData>({});
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;
  const currentStepConfig = steps[currentStep];
  
  const handleNext = () => {
    if (currentStepConfig.validation && !currentStepConfig.validation(data)) {
      return; // Validation failed
    }
    
    setCompletedSteps(prev => new Set(prev).add(currentStep));
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };
  
  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };
  
  const handleComplete = async () => {
    try {
      await submitWizardData(data);
      toast.success('Wizard completed!');
      router.push('/success');
    } catch (error) {
      toast.error('Failed to complete');
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress indicator */}
      <nav className="mb-8">
        <ol className="flex items-center gap-4">
          {steps.map((step, index) => (
            <li key={step.id} className="flex items-center gap-2">
              <div className={cn(
                'size-8 rounded-full flex items-center justify-center border-2',
                index < currentStep && 'bg-primary border-primary text-primary-foreground',
                index === currentStep && 'border-primary text-primary',
                index > currentStep && 'border-muted text-muted-foreground'
              )}>
                {completedSteps.has(index) ? (
                  <Check className="size-4" />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>
              <span className={cn(
                'text-sm font-medium',
                index === currentStep ? 'text-foreground' : 'text-muted-foreground'
              )}>
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div className="w-8 h-px bg-border" />
              )}
            </li>
          ))}
        </ol>
      </nav>
      
      {/* Step content */}
      <Card className="p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">{currentStepConfig.title}</h2>
          <p className="text-muted-foreground">{currentStepConfig.description}</p>
        </div>
        
        <currentStepConfig.component 
          data={data} 
          onUpdate={(updates) => setData(prev => ({ ...prev, ...updates }))} 
        />
        
        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t">
          <Button 
            variant="outline" 
            onClick={handleBack}
            disabled={isFirstStep}
          >
            <ChevronLeft className="mr-2 size-4" />
            Back
          </Button>
          
          {isLastStep ? (
            <Button onClick={handleComplete}>
              Complete
              <Check className="ml-2 size-4" />
            </Button>
          ) : (
            <Button onClick={handleNext}>
              Next
              <ChevronRight className="ml-2 size-4" />
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
```

---

## Filtering & Search Flows

```tsx
function FilterableList() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<Filters>({});
  const [sort, setSort] = useState<SortConfig>({ field: 'createdAt', direction: 'desc' });
  
  // Debounced search for performance
  const debouncedSearch = useDebounce(search, 300);
  
  // Data fetching with filters
  const { data, isLoading, error } = useQuery({
    queryKey: ['items', debouncedSearch, filters, sort],
    queryFn: () => fetchItems({ search: debouncedSearch, filters, sort }),
  });
  
  return (
    <div className="space-y-4">
      {/* Search bar */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
          {search && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 size-7"
              onClick={() => setSearch('')}
            >
              <X className="size-4" />
            </Button>
          )}
        </div>
        
        {/* Filter dropdown */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <SlidersHorizontal className="mr-2 size-4" />
              Filters
              {Object.keys(filters).length > 0 && (
                <Badge className="ml-2">{Object.keys(filters).length}</Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <FilterPanel filters={filters} onChange={setFilters} />
          </PopoverContent>
        </Popover>
        
        {/* Sort dropdown */}
        <Select value={`${sort.field}-${sort.direction}`} onValueChange={handleSortChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="createdAt-desc">Newest first</SelectItem>
            <SelectItem value="createdAt-asc">Oldest first</SelectItem>
            <SelectItem value="name-asc">Name A-Z</SelectItem>
            <SelectItem value="name-desc">Name Z-A</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Active filters */}
      {Object.keys(filters).length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {Object.entries(filters).map(([key, value]) => (
            <Badge key={key} variant="secondary" className="gap-1">
              {key}: {value}
              <button onClick={() => removeFilter(key)}>
                <X className="size-3" />
              </button>
            </Badge>
          ))}
          <Button variant="ghost" size="sm" onClick={() => setFilters({})}>
            Clear all
          </Button>
        </div>
      )}
      
      {/* Results */}
      {isLoading ? (
        <LoadingSkeleton />
      ) : error ? (
        <ErrorState error={error} onRetry={refetch} />
      ) : data?.length === 0 ? (
        <EmptyState 
          icon={search ? Search : Inbox}
          title={search ? 'No results found' : 'No items'}
          description={search ? `No results for "${search}"` : 'Create your first item'}
        />
      ) : (
        <ItemList items={data} />
      )}
    </div>
  );
}
```

---

## Confirmation Patterns

### Inline Confirmation (Low Risk)

```tsx
// For low-risk actions, use inline confirmation
<Button 
  variant="ghost" 
  onClick={() => setConfirmDelete(itemId)}
>
  {confirmDelete === itemId ? (
    <span className="text-destructive">Click again to delete</span>
  ) : (
    <Trash2 className="size-4" />
  )}
</Button>
```

### Dialog Confirmation (High Risk)

```tsx
// For high-risk actions, use dialog confirmation
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account 
        and remove all data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction className="bg-destructive">
        Yes, delete my account
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

### Type-to-Confirm (Critical Actions)

```tsx
// For critical actions, require typing confirmation
function TypeToConfirmDialog({ entityName, onConfirm, onCancel }) {
  const [input, setInput] = useState('');
  const isMatch = input === entityName;
  
  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete {entityName}?</DialogTitle>
          <DialogDescription>
            This action is irreversible. Type <strong>{entityName}</strong> to confirm.
          </DialogDescription>
        </DialogHeader>
        
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Type "${entityName}" to confirm`}
        />
        
        <DialogFooter>
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
          <Button 
            variant="destructive" 
            disabled={!isMatch}
            onClick={onConfirm}
          >
            Delete Permanently
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

---

## Best Practices

✅ **DO**:
- Handle all action states (idle → processing → success/error)
- Show loading indicators during async operations
- Provide confirmation for destructive actions
- Give clear success/error feedback
- Preserve form state on validation errors
- Make multi-step flows interruptible and resumable

❌ **DON'T**:
- Leave actions without feedback
- Allow double-submission of forms
- Delete without confirmation
- Lose user data on errors
- Break browser back button in flows
- Hide progress in long operations
