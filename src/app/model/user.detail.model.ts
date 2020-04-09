import {Deserializable} from './deserializable.model';
import { Status } from './status.model';
import { User } from './user.model';

export class UserDetail implements Deserializable {
    status: Status;
    user: User;
    success: boolean;
    
    deserialize(input: any): this {
        Object.assign(this, input);
        this.status = input.status;
        this.user = input.user;
        this.success = input.success;
        return this;
    }
}