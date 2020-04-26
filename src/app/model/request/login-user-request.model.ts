import { Deserializable } from '../deserializable.model';
import { User } from '../user.model';

export class LoginUserRequest implements Deserializable {
    email: string;
    password: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        this.email = input.email;
        this.password = input.password;
        return this;
    }
}