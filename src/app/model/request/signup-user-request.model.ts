import { Deserializable } from '../deserializable.model';
import { User } from '../user.model';

export class SignUpUserRequest implements Deserializable {
    user: User;

    deserialize(input: any): this {
        Object.assign(this, input);
        this.user = input.user;
        return this;
    }
}