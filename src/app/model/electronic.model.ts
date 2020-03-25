import {Deserializable} from './deserializable.model';
import {Item} from './item.model';
import { Status } from './status.model';

export class Electronic implements Deserializable {
    status: Status;
    electronicItems: Item[];

    deserialize(input: any): this {
        Object.assign(this, input);
        this.status = input.status;
        this.electronicItems = input.electronicItems.map(electronicItem => new Item().deserialize(electronicItem));
        return this;
    }
}