import { Deserializable } from './deserializable.model';
import { Item } from './item.model';
import { User } from './user.model';

export class CartItem implements Deserializable {
    id: number;
    timestamp: string;
    item: Item;
    user: User;

    deserialize(input: any): this {
        Object.assign(this, input);
        this.id = input.id;
        this.item = input.item;
        this.user = input.user;
        this.timestamp = input.timestamp;
        return this;
    }

}