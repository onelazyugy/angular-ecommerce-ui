import { Deserializable } from './deserializable.model';

export class Item implements Deserializable{
    id: number;
    name: string;
    imgurl: string;
    price: number;
    category: number;
    description: string;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}