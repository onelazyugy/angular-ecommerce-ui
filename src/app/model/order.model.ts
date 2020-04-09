import {Deserializable} from './deserializable.model';
import {Item} from './item.model';
import { User } from './user.model';

export class Order implements Deserializable {
    
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}