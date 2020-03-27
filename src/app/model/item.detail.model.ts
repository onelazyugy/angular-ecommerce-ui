import {Deserializable} from './deserializable.model';
import {Item} from './item.model';
import { Status } from './status.model';

export class ItemDetail implements Deserializable {
    status: Status;
    item: Item;

    deserialize(input: any): this {
        Object.assign(this, input);
        this.status = input.status;
        this.item = input.item;
        return this;
    }
}