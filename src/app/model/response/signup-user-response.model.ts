import { Status } from '../status.model';
import { Deserializable } from '../deserializable.model';
import { Token } from '../token';

export class SignupUserResponse implements Deserializable {
    status: Status;
    success: boolean;
    email: string;
    
    deserialize(input: any): this {
        Object.assign(this, input);
        this.status = input.status;
        this.success = input.success;
        this.email = input.email;
        return this;
    }
}