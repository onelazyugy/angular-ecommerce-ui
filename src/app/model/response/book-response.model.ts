import {Deserializable} from '../deserializable.model';
import {Item} from '../item.model';
import { Status } from '../status.model';

export class BookResponse implements Deserializable {
    status: Status;
    bookItems: Item[];

    deserialize(input: any): this {
        Object.assign(this, input);
        this.status = input.status;
        this.bookItems = input.bookItems.map(bookItem => new Item().deserialize(bookItem));
        return this;
    }
}