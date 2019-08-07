import { ICustomer } from 'app/shared/model/customer.model';

export interface IProduct {
    id?: number;
    name?: string;
    make?: string;
    model?: string;
    qty?: number;
    hsnCode?: string;
    price?: number;
    spec?: string;
    customer?: ICustomer;
}

export class Product implements IProduct {
    constructor(
        public id?: number,
        public name?: string,
        public make?: string,
        public model?: string,
        public qty?: number,
        public hsnCode?: string,
        public price?: number,
        public spec?: string,
        public customer?: ICustomer
    ) {}
}
