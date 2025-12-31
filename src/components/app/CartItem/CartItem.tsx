import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  variant?: string;
  onUpdateQuantity?: (quantity: number) => void;
  onRemove?: () => void;
}

export function CartItem({
  id,
  name,
  price,
  quantity,
  image,
  variant,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  const total = price * quantity;

  return (
    <div className="flex gap-4 py-4">
      {/* Product Image */}
      <Link to={`/product/${id}`} className="shrink-0">
        <img
          src={image}
          alt={name}
          className="h-24 w-24 rounded-lg object-cover"
        />
      </Link>

      {/* Product Details */}
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <div>
            <Link to={`/product/${id}`}>
              <h3 className="font-medium hover:text-primary">{name}</h3>
            </Link>
            {variant && (
              <p className="mt-0.5 text-sm text-muted-foreground">{variant}</p>
            )}
            <p className="mt-1 text-sm">₹{price.toLocaleString('en-IN')}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-destructive"
            onClick={onRemove}
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remove item</span>
          </Button>
        </div>

        {/* Quantity & Total */}
        <div className="mt-auto flex items-center justify-between">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => onUpdateQuantity?.(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              <Minus className="h-3 w-3" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <span className="w-8 text-center font-medium">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => onUpdateQuantity?.(quantity + 1)}
            >
              <Plus className="h-3 w-3" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>

          {/* Total */}
          <p className="font-semibold">₹{total.toLocaleString('en-IN')}</p>
        </div>
      </div>
    </div>
  );
}
