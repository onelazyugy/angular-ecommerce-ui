import { Deserializable } from '../deserializable.model';
import { User } from '../user.model';

export class SignUpUserRequest implements Deserializable {
    email: string;
    password: string;
    confirmPassword: string;


    deserialize(input: any): this {
        Object.assign(this, input);
        this.email = input.email;
        this.password = input.password;
        this.confirmPassword = input.confirmPassword;
        return this;
    }
}