import { ITender } from 'app/shared/model/tender.model';
import { IProduct } from 'app/shared/model/product.model';

export interface ICustomer {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: number;
    address1?: string;
    city?: string;
    tender?: ITender;
    products?: IProduct[];
}

export class Customer implements ICustomer {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public phoneNumber?: number,
        public address1?: string,
        public city?: string,
        public tender?: ITender,
        public products?: IProduct[]
    ) {}
}
