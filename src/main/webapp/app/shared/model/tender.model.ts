import { ICustomer } from 'app/shared/model/customer.model';
import { ILocation } from 'app/shared/model/location.model';

export interface ITender {
    id?: number;
    tenderID?: string;
    demandNumber?: string;
    claimAmount1?: number;
    claimAmount2?: number;
    employees?: ICustomer[];
    locations?: ILocation[];
}

export class Tender implements ITender {
    constructor(
        public id?: number,
        public tenderID?: string,
        public demandNumber?: string,
        public claimAmount1?: number,
        public claimAmount2?: number,
        public employees?: ICustomer[],
        public locations?: ILocation[]
    ) {}
}
