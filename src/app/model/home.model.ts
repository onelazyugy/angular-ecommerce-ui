import {Deserializable} from './deserializable.model';
import {Item} from './item.model';
import { Status } from './status.model';

// https://nehalist.io/angular-7-models/
export class Home implements Deserializable {
    status: Status;
    newArrivalItems: Item[];
    discountedItems: Item[];

    deserialize(input: any): this {
        Object.assign(this, input);
        this.status = input.status;
        this.newArrivalItems = input.newArrivalItems.map(newArrivalItem => new Item().deserialize(newArrivalItem));
        this.discountedItems = input.discountedItems.map(discountedItem => new Item().deserialize(discountedItem));
        return this;
    }
}