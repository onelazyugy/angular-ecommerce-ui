import {Deserializable} from '../deserializable.model';
import {Item} from '../item.model';
import { Status } from '../status.model';

export class StoreResponse implements Deserializable {
    status: Status;
    mostViewedItems: Item[];
    recentlyViewedItems: Item[];

    deserialize(input: any): this {
        Object.assign(this, input);
        this.status = input.status;
        this.mostViewedItems = input.mostViewedItems.map(recentlyViewedItem => new Item().deserialize(recentlyViewedItem));
        this.recentlyViewedItems = input.recentlyViewedItems.map(recentlyViewedItem => new Item().deserialize(recentlyViewedItem));
        return this;
    }
}