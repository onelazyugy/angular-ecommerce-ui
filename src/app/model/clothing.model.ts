import {Deserializable} from './deserializable.model';
import {Item} from './item.model';
import { Status } from './status.model';

export class Clothing implements Deserializable {
    status: Status;
    clothingItems: Item[];

    deserialize(input: any): this {
        Object.assign(this, input);
        this.status = input.status;
        this.clothingItems = input.clothingItems.map(clothingItem => new Item().deserialize(clothingItem));
        return this;
    }
}