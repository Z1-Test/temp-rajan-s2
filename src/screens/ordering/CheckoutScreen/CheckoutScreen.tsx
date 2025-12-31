import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CreditCard, Loader2, Check, ChevronRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { useCart } from '@/contexts/CartContext';
import { useCheckout, Address } from '@/contexts/CheckoutContext';
import { toast } from 'sonner';

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

// Mock saved addresses (in real app, these would come from user profile)
const savedAddresses: Address[] = [
  {
    id: '1',
    fullName: 'Priya Sharma',
    phone: '+91 98765 43210',
    addressLine1: '123, Green Valley Apartments',
    addressLine2: 'Near City Mall',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
  }
];

export function CheckoutScreen() {
  const navigate = useNavigate();
  const { items, subtotal } = useCart();
  const {
    currentStep,
    setCurrentStep,
    selectedAddress,
    setSelectedAddress,
    selectedPayment,
    setSelectedPayment,
    nextStep
  } = useCheckout();
  const [useNewAddress, setUseNewAddress] = useState(savedAddresses.length === 0);
  const [isProcessing, setIsProcessing] = useState(false);

  const shipping = subtotal >= 999 ? 0 : 99;
  const discount = 0; // Simplified for now
  const total = subtotal + shipping - discount;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
  });

  const handleAddressSubmit = (data: AddressFormData) => {
    setSelectedAddress(data);
    nextStep();
  };

  const handlePlaceOrder = async () => {
    if (!selectedAddress || !selectedPayment) {
      toast.error('Please complete all steps');
      return;
    }

    setIsProcessing(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success('Order placed successfully!');
      navigate('/order/confirmation/ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase());
    } catch (err) {
      toast.error('Failed to place order');
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <Button className="mt-4" onClick={() => navigate('/products')}>
          Go to Products
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Main Content */}
      <div className="space-y-6 lg:col-span-2">
        {/* Step 1: Shipping Address */}
        <Card className={cn(currentStep !== 1 && 'opacity-60 overflow-hidden')}>
          <CardHeader className="flex flex-row items-center justify-between border-b bg-muted/30">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors',
                  currentStep >= 1
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                )}
              >
                {currentStep > 1 ? <Check className="h-4 w-4" /> : '1'}
              </div>
              <CardTitle className="text-lg">Shipping Address</CardTitle>
            </div>
            {currentStep > 1 && (
              <Button variant="ghost" size="sm" onClick={() => setCurrentStep(1)}>
                Change
              </Button>
            )}
          </CardHeader>
          {currentStep === 1 && (
            <CardContent className="pt-6">
              {!useNewAddress ? (
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {savedAddresses.map((address) => (
                      <div
                        key={address.id}
                        className={cn(
                          'relative cursor-pointer rounded-xl border-2 p-4 transition-all',
                          selectedAddress?.id === address.id
                            ? 'border-primary bg-primary/5'
                            : 'border-transparent bg-muted/50 hover:bg-muted'
                        )}
                        onClick={() => setSelectedAddress(address)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <p className="font-bold">{address.fullName}</p>
                            <p className="text-sm text-muted-foreground">{address.addressLine1}</p>
                            <p className="text-sm text-muted-foreground">
                              {address.city}, {address.state} {address.pincode}
                            </p>
                            <p className="text-sm text-muted-foreground">{address.phone}</p>
                          </div>
                          {selectedAddress?.id === address.id && (
                            <Check className="h-5 w-5 text-primary" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full dashed border-2"
                    onClick={() => setUseNewAddress(true)}
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add New Address
                  </Button>
                  <Button className="w-full py-6 text-lg" onClick={nextStep} disabled={!selectedAddress}>
                    Use Selected Address <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(handleAddressSubmit)} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" placeholder="Jane Doe" {...register('fullName')} />
                      {errors.fullName && <p className="text-xs text-destructive">{errors.fullName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="+91 00000 00000" {...register('phone')} />
                      {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="addressLine1">Address Line 1</Label>
                    <Input id="addressLine1" placeholder="House/Flat No, Street" {...register('addressLine1')} />
                    {errors.addressLine1 && <p className="text-xs text-destructive">{errors.addressLine1.message}</p>}
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" {...register('city')} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" {...register('state')} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input id="pincode" {...register('pincode')} />
                    </div>
                  </div>
                  <div className="pt-4 flex gap-4">
                    <Button type="submit" className="flex-1 py-6 text-lg">
                      Save & Continue <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                    {savedAddresses.length > 0 && (
                      <Button type="button" variant="outline" onClick={() => setUseNewAddress(false)}>
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              )}
            </CardContent>
          )}
        </Card>

        {/* Step 2: Payment */}
        <Card className={cn(currentStep !== 2 && 'opacity-60 overflow-hidden')}>
          <CardHeader className="flex flex-row items-center justify-between border-b bg-muted/30">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors',
                  currentStep >= 2
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                )}
              >
                {currentStep > 2 ? <Check className="h-4 w-4" /> : '2'}
              </div>
              <CardTitle className="text-lg">Payment Method</CardTitle>
            </div>
          </CardHeader>
          {currentStep === 2 && (
            <CardContent className="pt-6">
              <RadioGroup
                value={selectedPayment?.type}
                onValueChange={(val: any) => setSelectedPayment({ type: val })}
                className="grid gap-4"
              >
                {[
                  { id: 'card', name: 'Credit / Debit Card', icon: CreditCard },
                  { id: 'upi', name: 'UPI (GPay, PhonePe, Paytm)', icon: () => <span className="font-bold">UPI</span> },
                  { id: 'netbanking', name: 'Net Banking', icon: () => <span>🏦</span> },
                  { id: 'cod', name: 'Cash on Delivery', icon: () => <span>💵</span> },
                ].map((method) => (
                  <label
                    key={method.id}
                    className={cn(
                      'flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition-all',
                      selectedPayment?.type === method.id
                        ? 'border-primary bg-primary/5'
                        : 'border-transparent bg-muted/50 hover:bg-muted'
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value={method.id} />
                      <method.icon className="h-5 w-5" />
                      <span className="font-medium">{method.name}</span>
                    </div>
                    {selectedPayment?.type === method.id && (
                      <Check className="h-5 w-5 text-primary" />
                    )}
                  </label>
                ))}
              </RadioGroup>

              <div className="mt-8">
                <Button
                  className="w-full py-8 text-xl font-bold rounded-2xl"
                  size="lg"
                  onClick={handlePlaceOrder}
                  disabled={isProcessing || !selectedPayment}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                      Processing Payment...
                    </>
                  ) : (
                    `Pay ₹${total.toLocaleString('en-IN')}`
                  )}
                </Button>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Your transaction is secure and encrypted.
                </p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>

      {/* Order Summary Sidebar */}
      <div className="space-y-6">
        <Card className="sticky top-24 overflow-hidden border-2 border-primary/10">
          <CardHeader className="bg-primary/5 border-b">
            <CardTitle className="text-lg">Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 text-sm">
                  <div className="h-16 w-16 shrink-0 rounded-lg border overflow-hidden">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium leading-tight">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Qty: {item.quantity} {item.variant && `• ${item.variant}`}
                    </p>
                    <p className="font-bold">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                  </div>
                </div>
              ))}
            </div>

            <Separator />

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>
                  {shipping === 0 ? 'FREE' : `₹${shipping}`}
                </span>
              </div>
            </div>

            <Separator />

            <div className="flex justify-between items-baseline">
              <span className="text-lg font-bold">Total</span>
              <span className="text-2xl font-black text-primary">
                ₹{total.toLocaleString('en-IN')}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
