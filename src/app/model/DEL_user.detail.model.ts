import {Deserializable} from './deserializable.model';
import { Status } from './status.model';
import { User } from './user.model';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

export class UserDetail implements Deserializable {
    status: Status;
    user: User;
    token: Token;
    
    deserialize(input: any): this {
        Object.assign(this, input);
        this.status = input.status;
        this.user = input.user;
        this.token = input.token;
        return this;
    }
}