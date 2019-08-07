import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'location',
                loadChildren: './location/location.module#TenderManagementLocationModule'
            },
            {
                path: 'tender',
                loadChildren: './tender/tender.module#TenderManagementTenderModule'
            },
            {
                path: 'customer',
                loadChildren: './customer/customer.module#TenderManagementCustomerModule'
            },
            {
                path: 'product',
                loadChildren: './product/product.module#TenderManagementProductModule'
            },
            {
                path: 'tender',
                loadChildren: './tender/tender.module#TenderManagementTenderModule'
            },
            {
                path: 'customer',
                loadChildren: './customer/customer.module#TenderManagementCustomerModule'
            },
            {
                path: 'product',
                loadChildren: './product/product.module#TenderManagementProductModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#TenderManagementLocationModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TenderManagementEntityModule {}
