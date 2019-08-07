import { ITender } from 'app/shared/model/tender.model';

export interface ILocation {
    id?: number;
    locationName?: string;
    quantity?: number;
    tender?: ITender;
}

export class Location implements ILocation {
    constructor(public id?: number, public locationName?: string, public quantity?: number, public tender?: ITender) {}
}
