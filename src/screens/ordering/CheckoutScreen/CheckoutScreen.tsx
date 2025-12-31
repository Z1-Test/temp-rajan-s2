import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CreditCard, Loader2, Check, MapPin, ChevronRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

// Mock data
const savedAddresses = [
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
  },
];

const cartSummary = {
  items: [
    { name: 'Rose Glow Serum x 2', price: 2598 },
    { name: 'Argan Hair Oil x 1', price: 749 },
    { name: 'Matte Lipstick Set x 1', price: 1499 },
  ],
  subtotal: 4846,
  shipping: 0,
  discount: 485,
  total: 4361,
};

const addressSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  addressLine1: z.string().min(5, 'Address is required'),
  addressLine2: z.string().optional(),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  pincode: z.string().regex(/^\d{6}$/, 'Valid 6-digit pincode required'),
});

type AddressFormData = z.infer<typeof addressSchema>;

export function CheckoutScreen() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(savedAddresses[0]?.id || '');
  const [useNewAddress, setUseNewAddress] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
  });

  const handleAddressSubmit = (data: AddressFormData) => {
    console.log('New address:', data);
    setCurrentStep(2);
  };

  const handleContinueToPayment = () => {
    if (selectedAddress || useNewAddress) {
      setCurrentStep(2);
    }
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    navigate('/order/confirmation/ORD-001');
  };

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Main Content */}
      <div className="space-y-6 lg:col-span-2">
        {/* Step 1: Shipping Address */}
        <Card className={cn(currentStep !== 1 && 'opacity-60')}>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium',
                  currentStep >= 1
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                )}
              >
                {currentStep > 1 ? <Check className="h-4 w-4" /> : '1'}
              </div>
              <CardTitle>Shipping Address</CardTitle>
            </div>
            {currentStep > 1 && (
              <Button variant="ghost" size="sm" onClick={() => setCurrentStep(1)}>
                Edit
              </Button>
            )}
          </CardHeader>
          {currentStep === 1 && (
            <CardContent className="space-y-4">
              {savedAddresses.length > 0 && !useNewAddress && (
                <>
                  <RadioGroup
                    value={selectedAddress}
                    onValueChange={setSelectedAddress}
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      {savedAddresses.map((address) => (
                        <label
                          key={address.id}
                          className={cn(
                            'flex cursor-pointer flex-col rounded-lg border p-4 transition-colors',
                            selectedAddress === address.id
                              ? 'border-primary bg-primary/5'
                              : 'hover:bg-muted/50'
                          )}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2">
                              <RadioGroupItem value={address.id} />
                              <span className="font-medium">{address.label}</span>
                            </div>
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="mt-2 pl-6 text-sm text-muted-foreground">
                            <p>{address.fullName}</p>
                            <p>{address.addressLine1}</p>
                            {address.addressLine2 && <p>{address.addressLine2}</p>}
                            <p>{address.city}, {address.state} - {address.pincode}</p>
                            <p>{address.phone}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </RadioGroup>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setUseNewAddress(true)}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Address
                  </Button>
                </>
              )}

              {(useNewAddress || savedAddresses.length === 0) && (
                <form onSubmit={handleSubmit(handleAddressSubmit)} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" {...register('fullName')} />
                      {errors.fullName && (
                        <p className="text-sm text-destructive">{errors.fullName.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" {...register('phone')} />
                      {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="addressLine1">Address Line 1</Label>
                    <Input id="addressLine1" {...register('addressLine1')} />
                    {errors.addressLine1 && (
                      <p className="text-sm text-destructive">{errors.addressLine1.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="addressLine2">Address Line 2 (Optional)</Label>
                    <Input id="addressLine2" {...register('addressLine2')} />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" {...register('city')} />
                      {errors.city && (
                        <p className="text-sm text-destructive">{errors.city.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" {...register('state')} />
                      {errors.state && (
                        <p className="text-sm text-destructive">{errors.state.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input id="pincode" {...register('pincode')} />
                      {errors.pincode && (
                        <p className="text-sm text-destructive">{errors.pincode.message}</p>
                      )}
                    </div>
                  </div>
                  {useNewAddress && savedAddresses.length > 0 && (
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setUseNewAddress(false)}
                    >
                      ← Use saved address
                    </Button>
                  )}
                </form>
              )}

              <Separator />

              <Button
                className="w-full"
                onClick={useNewAddress ? handleSubmit(handleAddressSubmit) : handleContinueToPayment}
                disabled={!selectedAddress && !useNewAddress}
              >
                Continue to Payment
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          )}
        </Card>

        {/* Step 2: Payment */}
        <Card className={cn(currentStep !== 2 && 'opacity-60')}>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium',
                  currentStep >= 2
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                )}
              >
                {currentStep > 2 ? <Check className="h-4 w-4" /> : '2'}
              </div>
              <CardTitle>Payment Method</CardTitle>
            </div>
          </CardHeader>
          {currentStep === 2 && (
            <CardContent className="space-y-4">
              <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
                <label
                  className={cn(
                    'flex cursor-pointer items-center justify-between rounded-lg border p-4',
                    selectedPayment === 'card'
                      ? 'border-primary bg-primary/5'
                      : 'hover:bg-muted/50'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="card" />
                    <CreditCard className="h-5 w-5" />
                    <span>Credit / Debit Card</span>
                  </div>
                </label>
                <label
                  className={cn(
                    'flex cursor-pointer items-center justify-between rounded-lg border p-4',
                    selectedPayment === 'upi'
                      ? 'border-primary bg-primary/5'
                      : 'hover:bg-muted/50'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="upi" />
                    <span className="text-lg font-bold">UPI</span>
                    <span>GPay, PhonePe, Paytm</span>
                  </div>
                </label>
                <label
                  className={cn(
                    'flex cursor-pointer items-center justify-between rounded-lg border p-4',
                    selectedPayment === 'netbanking'
                      ? 'border-primary bg-primary/5'
                      : 'hover:bg-muted/50'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="netbanking" />
                    <span>🏦</span>
                    <span>Net Banking</span>
                  </div>
                </label>
              </RadioGroup>

              <p className="text-center text-sm text-muted-foreground">
                You will be redirected to Cashfree secure payment gateway
              </p>

              <Separator />

              <Button
                className="w-full"
                size="lg"
                onClick={handlePlaceOrder}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Place Order • ₹{cartSummary.total.toLocaleString('en-IN')}
                  </>
                )}
              </Button>
            </CardContent>
          )}
        </Card>
      </div>

      {/* Order Summary Sidebar */}
      <div>
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Items */}
            <div className="space-y-2 text-sm">
              {cartSummary.items.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-muted-foreground">{item.name}</span>
                  <span>₹{item.price.toLocaleString('en-IN')}</span>
                </div>
              ))}
            </div>

            <Separator />

            {/* Totals */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₹{cartSummary.subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>-₹{cartSummary.discount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{cartSummary.shipping === 0 ? 'FREE' : `₹${cartSummary.shipping}`}</span>
              </div>
            </div>

            <Separator />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>₹{cartSummary.total.toLocaleString('en-IN')}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
