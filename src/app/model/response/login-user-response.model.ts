import { Status } from '../status.model';
import { Deserializable } from '../deserializable.model';
import { Token } from '../token';

export class LoginUserResponse implements Deserializable {
    status: Status;
    success: boolean;
    email: string;
    token: Token;
    
    deserialize(input: any): this {
        Object.assign(this, input);
        this.status = input.status;
        this.success = input.success;
        this.email = input.email;
        this.token = input.token;
        return this;
    }
}