import { Deserializable } from './deserializable.model';

export class Status implements Deserializable{
    timestamp: string;
    message: string;
    transactionId: string;
    statusCd: number;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}