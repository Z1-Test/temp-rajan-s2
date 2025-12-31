import { createContext, useContext, useState, ReactNode } from 'react';

export interface Address {
    id?: string;
    fullName: string;
    phone: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    pincode: string;
    isDefault?: boolean;
}

export interface PaymentMethod {
    type: 'card' | 'upi' | 'netbanking' | 'wallet' | 'cod';
    details?: any;
}

interface CheckoutContextType {
    currentStep: number;
    selectedAddress: Address | null;
    selectedPayment: PaymentMethod | null;
    setCurrentStep: (step: number) => void;
    setSelectedAddress: (address: Address) => void;
    setSelectedPayment: (payment: PaymentMethod) => void;
    nextStep: () => void;
    previousStep: () => void;
    resetCheckout: () => void;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export function CheckoutProvider({ children }: { children: ReactNode }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
    const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null);

    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, 3));
    };

    const previousStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const resetCheckout = () => {
        setCurrentStep(1);
        setSelectedAddress(null);
        setSelectedPayment(null);
    };

    return (
        <CheckoutContext.Provider
            value={{
                currentStep,
                selectedAddress,
                selectedPayment,
                setCurrentStep,
                setSelectedAddress,
                setSelectedPayment,
                nextStep,
                previousStep,
                resetCheckout,
            }}
        >
            {children}
        </CheckoutContext.Provider>
    );
}

export function useCheckout() {
    const context = useContext(CheckoutContext);
    if (!context) {
        throw new Error('useCheckout must be used within CheckoutProvider');
    }
    return context;
}
