import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';

export interface CartItem {
    id: string;
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    variant?: string;
    sku?: string;
}

interface CartContextType {
    items: CartItem[];
    itemCount: number;
    subtotal: number;
    isLoading: boolean;
    addItem: (item: Omit<CartItem, 'id'>) => Promise<void>;
    updateQuantity: (itemId: string, quantity: number) => Promise<void>;
    removeItem: (itemId: string) => Promise<void>;
    clearCart: () => Promise<void>;
    syncCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'itsme_cart';

export function CartProvider({ children }: { children: ReactNode }) {
    const { user, isAuthenticated } = useAuth();
    const [items, setItems] = useState<CartItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Load cart from localStorage on mount
    useEffect(() => {
        const loadCart = async () => {
            setIsLoading(true);
            try {
                if (isAuthenticated && user) {
                    // Load from Firestore for authenticated users
                    const cartData = await fetchCartFromFirestore(user.id);
                    setItems(cartData);
                } else {
                    // Load from localStorage for guests
                    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
                    if (savedCart) {
                        setItems(JSON.parse(savedCart));
                    }
                }
            } catch (error) {
                console.error('Failed to load cart:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadCart();
    }, [isAuthenticated, user]);

    // Sync cart to storage whenever items change
    useEffect(() => {
        if (!isLoading) {
            if (isAuthenticated && user) {
                // Sync to Firestore
                syncCartToFirestore(user.id, items);
            } else {
                // Sync to localStorage
                localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
            }
        }
    }, [items, isAuthenticated, user, isLoading]);

    // Merge guest cart with user cart on login
    useEffect(() => {
        if (isAuthenticated && user) {
            const mergeGuestCart = async () => {
                const guestCart = localStorage.getItem(CART_STORAGE_KEY);
                if (guestCart) {
                    const guestItems: CartItem[] = JSON.parse(guestCart);
                    if (guestItems.length > 0) {
                        // Merge with server cart
                        await mergeCartItems(user.id, guestItems);
                        // Clear guest cart
                        localStorage.removeItem(CART_STORAGE_KEY);
                        // Reload cart
                        const mergedCart = await fetchCartFromFirestore(user.id);
                        setItems(mergedCart);
                    }
                }
            };
            mergeGuestCart();
        }
    }, [isAuthenticated, user]);

    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const addItem = async (item: Omit<CartItem, 'id'>) => {
        const existingItem = items.find(
            (i) => i.productId === item.productId && i.variant === item.variant
        );

        if (existingItem) {
            await updateQuantity(existingItem.id, existingItem.quantity + item.quantity);
        } else {
            const newItem: CartItem = {
                ...item,
                id: generateCartItemId(),
            };
            setItems([...items, newItem]);
        }
    };

    const updateQuantity = async (itemId: string, quantity: number) => {
        if (quantity <= 0) {
            await removeItem(itemId);
            return;
        }

        setItems(items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
        ));
    };

    const removeItem = async (itemId: string) => {
        setItems(items.filter((item) => item.id !== itemId));
    };

    const clearCart = async () => {
        setItems([]);
        if (isAuthenticated && user) {
            await clearCartInFirestore(user.id);
        } else {
            localStorage.removeItem(CART_STORAGE_KEY);
        }
    };

    const syncCart = async () => {
        if (isAuthenticated && user) {
            const cartData = await fetchCartFromFirestore(user.id);
            setItems(cartData);
        }
    };

    return (
        <CartContext.Provider
            value={{
                items,
                itemCount,
                subtotal,
                isLoading,
                addItem,
                updateQuantity,
                removeItem,
                clearCart,
                syncCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
}

// Helper functions (to be implemented with actual Firebase calls)
async function fetchCartFromFirestore(userId: string): Promise<CartItem[]> {
    // TODO: Implement Firestore fetch
    return [];
}

async function syncCartToFirestore(userId: string, items: CartItem[]): Promise<void> {
    // TODO: Implement Firestore sync
}

async function mergeCartItems(userId: string, guestItems: CartItem[]): Promise<void> {
    // TODO: Implement cart merge logic
}

async function clearCartInFirestore(userId: string): Promise<void> {
    // TODO: Implement Firestore clear
}

function generateCartItemId(): string {
    return `cart_${Date.now()}_${Math.random().toString(36).substring(7)}`;
}
