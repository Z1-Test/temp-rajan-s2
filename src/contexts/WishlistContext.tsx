import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';

export interface WishlistItem {
    id: string;
    productId: string;
    name: string;
    price: number;
    image: string;
    category: string;
    addedAt: Date;
}

interface WishlistContextType {
    items: WishlistItem[];
    itemCount: number;
    isLoading: boolean;
    isInWishlist: (productId: string) => boolean;
    addItem: (item: Omit<WishlistItem, 'id' | 'addedAt'>) => Promise<void>;
    removeItem: (productId: string) => Promise<void>;
    clearWishlist: () => Promise<void>;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const WISHLIST_STORAGE_KEY = 'itsme_wishlist';

export function WishlistProvider({ children }: { children: ReactNode }) {
    const { user, isAuthenticated } = useAuth();
    const [items, setItems] = useState<WishlistItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Load wishlist on mount
    useEffect(() => {
        const loadWishlist = async () => {
            setIsLoading(true);
            try {
                if (isAuthenticated && user) {
                    const wishlistData = await fetchWishlistFromFirestore(user.id);
                    setItems(wishlistData);
                } else {
                    const savedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
                    if (savedWishlist) {
                        setItems(JSON.parse(savedWishlist).map((item: any) => ({
                            ...item,
                            addedAt: new Date(item.addedAt),
                        })));
                    }
                }
            } catch (error) {
                console.error('Failed to load wishlist:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadWishlist();
    }, [isAuthenticated, user]);

    // Sync to storage
    useEffect(() => {
        if (!isLoading) {
            if (isAuthenticated && user) {
                syncWishlistToFirestore(user.id, items);
            } else {
                localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
            }
        }
    }, [items, isAuthenticated, user, isLoading]);

    // Merge guest wishlist on login
    useEffect(() => {
        if (isAuthenticated && user) {
            const mergeGuestWishlist = async () => {
                const guestWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
                if (guestWishlist) {
                    const guestItems: WishlistItem[] = JSON.parse(guestWishlist);
                    if (guestItems.length > 0) {
                        await mergeWishlistItems(user.id, guestItems);
                        localStorage.removeItem(WISHLIST_STORAGE_KEY);
                        const mergedWishlist = await fetchWishlistFromFirestore(user.id);
                        setItems(mergedWishlist);
                    }
                }
            };
            mergeGuestWishlist();
        }
    }, [isAuthenticated, user]);

    const isInWishlist = (productId: string) => {
        return items.some((item) => item.productId === productId);
    };

    const addItem = async (item: Omit<WishlistItem, 'id' | 'addedAt'>) => {
        if (isInWishlist(item.productId)) {
            return; // Already in wishlist
        }

        const newItem: WishlistItem = {
            ...item,
            id: generateWishlistItemId(),
            addedAt: new Date(),
        };

        setItems([newItem, ...items]);
    };

    const removeItem = async (productId: string) => {
        setItems(items.filter((item) => item.productId !== productId));
    };

    const clearWishlist = async () => {
        setItems([]);
        if (isAuthenticated && user) {
            await clearWishlistInFirestore(user.id);
        } else {
            localStorage.removeItem(WISHLIST_STORAGE_KEY);
        }
    };

    return (
        <WishlistContext.Provider
            value={{
                items,
                itemCount: items.length,
                isLoading,
                isInWishlist,
                addItem,
                removeItem,
                clearWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error('useWishlist must be used within WishlistProvider');
    }
    return context;
}

// Helper functions
async function fetchWishlistFromFirestore(_userId: string): Promise<WishlistItem[]> {
    // TODO: Implement Firestore fetch
    return [];
}

async function syncWishlistToFirestore(_userId: string, _items: WishlistItem[]): Promise<void> {
    // TODO: Implement Firestore sync
}

async function mergeWishlistItems(_userId: string, _guestItems: WishlistItem[]): Promise<void> {
    // TODO: Implement merge logic
}

async function clearWishlistInFirestore(_userId: string): Promise<void> {
    // TODO: Implement Firestore clear
}

function generateWishlistItemId(): string {
    return `wish_${Date.now()}_${Math.random().toString(36).substring(7)}`;
}
