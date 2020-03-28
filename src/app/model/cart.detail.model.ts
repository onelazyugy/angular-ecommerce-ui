import {Deserializable} from './deserializable.model';
import {Item} from './item.model';
import { Status } from './status.model';

export class CartDetail implements Deserializable {
    qty: number;
    itemToAddToCart: Item;

    deserialize(input: any): this {
        Object.assign(this, input);
        this.qty = input.qty == undefined ? 1 : input.qty;
        this.itemToAddToCart = input.itemToAddToCart;
        return this;
    }
}