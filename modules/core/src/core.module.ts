import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { DynamicFormService } from "./service/dynamic-form.service";
import { DynamicFormAutoFillService } from "./service/dynamic-form-autofill.service";
import { DynamicFormRelationService } from "./service/dynamic-form-relation.service";
import { DynamicIdDirective } from "./directive/dynamic-id.directive";
import { DynamicTemplateDirective } from "./directive/dynamic-template.directive";

@NgModule({

    imports: [CommonModule, ReactiveFormsModule],
    declarations: [DynamicIdDirective, DynamicTemplateDirective],
    exports: [DynamicIdDirective, DynamicTemplateDirective]
})

export class DynamicFormsCoreModule {
    /*
    constructor(@Optional() @SkipSelf() parentModule: DynamicFormsCoreModule) {

        if (parentModule) {
            throw new Error("DynamicFormsCoreModule should only be imported in the root NgModule of the application!");
        }
    }
    */
    static forRoot(): ModuleWithProviders {

        return {

            ngModule: DynamicFormsCoreModule,

            providers: [
                DynamicFormService,
                DynamicFormAutoFillService,
                DynamicFormRelationService
            ]
        };
    }
}