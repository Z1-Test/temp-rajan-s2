import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Plus, Pencil, Trash2, MapPin, Loader2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const addressSchema = z.object({
  label: z.string().min(1, 'Please provide a label'),
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  addressLine1: z.string().min(5, 'Please enter your street address'),
  addressLine2: z.string().optional(),
  city: z.string().min(2, 'Please enter your city'),
  state: z.string().min(2, 'Please select your state'),
  pincode: z.string().regex(/^\d{6}$/, 'Please enter a valid 6-digit pincode'),
  isDefault: z.boolean().optional(),
});

type AddressFormData = z.infer<typeof addressSchema>;

interface Address extends AddressFormData {
  id: string;
}

// Mock addresses
const mockAddresses: Address[] = [
  {
    id: '1',
    label: 'Home',
    fullName: 'Priya Sharma',
    phone: '+91 98765 43210',
    addressLine1: '123, Green Valley Apartments',
    addressLine2: 'Near City Mall',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    isDefault: true,
  },
  {
    id: '2',
    label: 'Office',
    fullName: 'Priya Sharma',
    phone: '+91 98765 43210',
    addressLine1: 'Tech Park, Building B, Floor 5',
    addressLine2: 'Whitefield',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560066',
    isDefault: false,
  },
];

export function AddressesScreen() {
  const [addresses, setAddresses] = useState<Address[]>(mockAddresses);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      label: '',
      fullName: '',
      phone: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      pincode: '',
      isDefault: false,
    },
  });

  const onSubmit = async (data: AddressFormData) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    if (editingAddress) {
      setAddresses(addresses.map((addr) =>
        addr.id === editingAddress.id ? { ...data, id: addr.id } : addr
      ));
    } else {
      setAddresses([...addresses, { ...data, id: Date.now().toString() }]);
    }
    
    setIsLoading(false);
    setIsDialogOpen(false);
    setEditingAddress(null);
    reset();
  };

  const handleEdit = (address: Address) => {
    setEditingAddress(address);
    reset(address);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  const handleSetDefault = (id: string) => {
    setAddresses(addresses.map((addr) => ({
      ...addr,
      isDefault: addr.id === id,
    })));
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEditingAddress(null);
    reset();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Addresses</h1>
          <p className="text-muted-foreground">Manage your shipping addresses</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Address
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>
                {editingAddress ? 'Edit Address' : 'Add New Address'}
              </DialogTitle>
              <DialogDescription>
                {editingAddress
                  ? 'Update your shipping address details'
                  : 'Add a new shipping address to your account'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Label */}
              <div className="space-y-2">
                <Label htmlFor="label">Address Label</Label>
                <RadioGroup
                  defaultValue={editingAddress?.label || 'Home'}
                  onValueChange={(value) => reset({ ...editingAddress, label: value } as any)}
                >
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Home" id="home" />
                      <Label htmlFor="home" className="font-normal">Home</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Office" id="office" />
                      <Label htmlFor="office" className="font-normal">Office</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Other" id="other" />
                      <Label htmlFor="other" className="font-normal">Other</Label>
                    </div>
                  </div>
                </RadioGroup>
                <Input
                  id="label"
                  {...register('label')}
                  className="hidden"
                />
              </div>

              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  {...register('fullName')}
                  placeholder="Enter recipient's name"
                  aria-invalid={!!errors.fullName}
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName.message}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  placeholder="+91 XXXXX XXXXX"
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              {/* Address Lines */}
              <div className="space-y-2">
                <Label htmlFor="addressLine1">Address Line 1</Label>
                <Input
                  id="addressLine1"
                  {...register('addressLine1')}
                  placeholder="House no., Building, Street"
                  aria-invalid={!!errors.addressLine1}
                />
                {errors.addressLine1 && (
                  <p className="text-sm text-destructive">{errors.addressLine1.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="addressLine2">Address Line 2 (Optional)</Label>
                <Input
                  id="addressLine2"
                  {...register('addressLine2')}
                  placeholder="Landmark, Area"
                />
              </div>

              {/* City, State, Pincode */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    {...register('city')}
                    placeholder="City"
                    aria-invalid={!!errors.city}
                  />
                  {errors.city && (
                    <p className="text-sm text-destructive">{errors.city.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    {...register('state')}
                    placeholder="State"
                    aria-invalid={!!errors.state}
                  />
                  {errors.state && (
                    <p className="text-sm text-destructive">{errors.state.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input
                    id="pincode"
                    {...register('pincode')}
                    placeholder="6-digit"
                    aria-invalid={!!errors.pincode}
                  />
                  {errors.pincode && (
                    <p className="text-sm text-destructive">{errors.pincode.message}</p>
                  )}
                </div>
              </div>

              <DialogFooter className="pt-4">
                <Button type="button" variant="outline" onClick={handleDialogClose}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : editingAddress ? (
                    'Update Address'
                  ) : (
                    'Add Address'
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Address List */}
      {addresses.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <MapPin className="h-12 w-12 text-muted-foreground/50" />
            <h3 className="mt-4 text-lg font-semibold">No addresses saved</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Add a shipping address to speed up checkout
            </p>
            <Button className="mt-4" onClick={() => setIsDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Your First Address
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {addresses.map((address) => (
            <Card key={address.id} className={address.isDefault ? 'border-primary' : ''}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-base">{address.label}</CardTitle>
                    {address.isDefault && (
                      <Badge variant="default" className="text-xs">Default</Badge>
                    )}
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleEdit(address)}
                    >
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => handleDelete(address.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="font-medium">{address.fullName}</p>
                <p className="text-sm text-muted-foreground">{address.phone}</p>
                <p className="mt-2 text-sm">
                  {address.addressLine1}
                  {address.addressLine2 && <>, {address.addressLine2}</>}
                </p>
                <p className="text-sm">
                  {address.city}, {address.state} - {address.pincode}
                </p>
                {!address.isDefault && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    onClick={() => handleSetDefault(address.id)}
                  >
                    <Check className="mr-2 h-4 w-4" />
                    Set as Default
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
