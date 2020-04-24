import {Deserializable} from './deserializable.model';
import {Item} from './item.model';
import { Status } from './status.model';
import { User } from './user.model';

export class CartDetail implements Deserializable {
    qty: number;
    item: Item;
    user: User;

    deserialize(input: any): this {
        Object.assign(this, input);
        this.qty = input.qty == undefined ? 1 : input.qty;
        this.item = input.item;
        this.user = input.user;
        return this;
    }
}