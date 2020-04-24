import { Deserializable } from './deserializable.model';
import { Status } from './status.model';
import { CartItem } from './cart-item.model';

export class AddItemToCartResponse implements Deserializable {
    status: Status;
    cartItem: CartItem;

    deserialize(input: any): this {
        Object.assign(this, input);
        this.status = input.status;
        this.cartItem = input.cartItem;
        return this;
    }
}