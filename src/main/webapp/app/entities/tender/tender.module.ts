import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { TenderManagementSharedModule } from 'app/shared';
import {
    TenderComponent,
    TenderDetailComponent,
    TenderUpdateComponent,
    TenderDeletePopupComponent,
    TenderDeleteDialogComponent,
    tenderRoute,
    tenderPopupRoute
} from './';

const ENTITY_STATES = [...tenderRoute, ...tenderPopupRoute];

@NgModule({
    imports: [TenderManagementSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [TenderComponent, TenderDetailComponent, TenderUpdateComponent, TenderDeleteDialogComponent, TenderDeletePopupComponent],
    entryComponents: [TenderComponent, TenderUpdateComponent, TenderDeleteDialogComponent, TenderDeletePopupComponent],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TenderManagementTenderModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
