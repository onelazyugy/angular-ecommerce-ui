import {Deserializable} from './deserializable.model';

export class Token implements Deserializable {
    accessToken: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        this.accessToken = input.accessToken;
        return this;
    }
}