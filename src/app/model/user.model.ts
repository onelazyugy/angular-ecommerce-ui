import {Deserializable} from './deserializable.model';
import { Order } from './order.model';

export class User implements Deserializable {
    id?: number;
    email?: string;
    password?: string;
    signupDate?: string;
    order?: Order;
    roles?: [];

    deserialize(input: any): this {
        Object.assign(this, input);
        this.id = input.id;
        this.email = input.email;
        this.password = input.password;
        this.signupDate = input.signupDate;
        this.order = input.order;
        this.roles = input.roles;
        return this;
    }
}