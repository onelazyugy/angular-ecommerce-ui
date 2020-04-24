import { Deserializable } from './deserializable.model';
import { Item } from './item.model';
import { User } from './user.model';

export class AddItemToCartRequest implements Deserializable {
    item: Item;
    user: User;
    qty: number;

    deserialize(input: any): this {
        Object.assign(this, input);
        this.item = input.item;
        this.user = input.user;
        this.qty = input.qty;
        return this;
    }
}