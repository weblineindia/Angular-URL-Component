(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular-weblineindia-url', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (factory((global['angular-weblineindia-url'] = {}),global.ng.core,global.ng.forms,global.ng.common));
}(this, (function (exports,i0,forms,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UrlService = (function () {
        function UrlService() {
        }
        UrlService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        UrlService.ctorParameters = function () { return []; };
        /** @nocollapse */ UrlService.ngInjectableDef = i0.defineInjectable({ factory: function UrlService_Factory() { return new UrlService(); }, token: UrlService, providedIn: "root" });
        return UrlService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UrlComponent = (function () {
        function UrlComponent() {
            this.urlErrorName = "The url entered is not valid and must be changed";
            this.disabled = false;
            this.tabindex = 1;
            this.id = "facebookUrl";
            this.name = "facebookUrl";
            this.placeholder = "Enter Url";
            this.regex = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/;
            this.change = new i0.EventEmitter();
            this.focus = new i0.EventEmitter();
            this.blur = new i0.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        UrlComponent.prototype.onFocus = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.focus.emit(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        UrlComponent.prototype.onBlur = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.blur.emit(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        UrlComponent.prototype.onChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.change.emit(event);
            };
        /**
         * @param {?} type
         * @param {?} regex
         * @return {?}
         */
        UrlComponent.prototype.onValidateUrl = /**
         * @param {?} type
         * @param {?} regex
         * @return {?}
         */
            function (type, regex) {
                debugger;
                /** @type {?} */
                var urlRegex;
                switch (type) {
                    case "facebook":
                        urlRegex = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/;
                        break;
                    case "instagram":
                        urlRegex = /(?:(?:http|https):\/\/)?(?:www\.)?instagram.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                        break;
                    case "linkedin":
                        urlRegex = /(?:(?:http|https):\/\/)?(?:www\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                        break;
                    case "web":
                        urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
                        break;
                    case "other":
                        urlRegex = regex;
                        break;
                    default:
                        urlRegex = regex;
                        break;
                }
                return urlRegex;
            };
        UrlComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-url',
                        template: "<input\n      type=\"url\"\n      [ngClass]=\"{\n        'form-control': true\n      }\"\n      [(placeholder)]=\"placeholder\"\n      [(ngModel)]=\"value\"\n      [(name)]=\"name\"\n      [(id)]=\"id\"\n      #url=\"ngModel\"\n      [(disabled)]=\"disabled\"\n      [(tabindex)]=\"tabindex\"\n      (focus)=\"onFocus($event)\"\n      (blur)=\"onBlur($event)\"\n      (input)=\"onChange($event)\"\n      [pattern]=\"onValidateUrl(urltype, regex)\"\n      autofocus\n      required\n    />\n\n    <div\n      class=\"md-errors-spacer\"\n      *ngIf=\"url.invalid && url.touched\"\n    >\n      <div *ngIf=\"url.errors && url.errors.pattern\">\n        <p class=\"error-text\">{{ urlErrorName }}</p>\n      </div>\n    </div>",
                        styles: [".form-control{width:50%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}.error-text{color:red}"]
                    },] },
        ];
        UrlComponent.propDecorators = {
            urlErrorName: [{ type: i0.Input }],
            urltype: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            value: [{ type: i0.Input }],
            tabindex: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            name: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            regex: [{ type: i0.Input }],
            change: [{ type: i0.Output }],
            focus: [{ type: i0.Output }],
            blur: [{ type: i0.Output }]
        };
        return UrlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UrlModule = (function () {
        function UrlModule() {
        }
        UrlModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            common.CommonModule
                        ],
                        declarations: [UrlComponent],
                        exports: [UrlComponent]
                    },] },
        ];
        return UrlModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.UrlService = UrlService;
    exports.UrlComponent = UrlComponent;
    exports.UrlModule = UrlModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci13ZWJsaW5laW5kaWEtdXJsLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci13ZWJsaW5laW5kaWEtdXJsL2xpYi91cmwuc2VydmljZS50cyIsIm5nOi8vYW5ndWxhci13ZWJsaW5laW5kaWEtdXJsL2xpYi91cmwuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLXdlYmxpbmVpbmRpYS11cmwvbGliL3VybC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVcmxTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdXJsJyxcbiAgdGVtcGxhdGU6IGA8aW5wdXRcbiAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAnZm9ybS1jb250cm9sJzogdHJ1ZVxuICAgICAgfVwiXG4gICAgICBbKHBsYWNlaG9sZGVyKV09XCJwbGFjZWhvbGRlclwiXG4gICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICAgIFsobmFtZSldPVwibmFtZVwiXG4gICAgICBbKGlkKV09XCJpZFwiXG4gICAgICAjdXJsPVwibmdNb2RlbFwiXG4gICAgICBbKGRpc2FibGVkKV09XCJkaXNhYmxlZFwiXG4gICAgICBbKHRhYmluZGV4KV09XCJ0YWJpbmRleFwiXG4gICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcbiAgICAgIChibHVyKT1cIm9uQmx1cigkZXZlbnQpXCJcbiAgICAgIChpbnB1dCk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtwYXR0ZXJuXT1cIm9uVmFsaWRhdGVVcmwodXJsdHlwZSwgcmVnZXgpXCJcbiAgICAgIGF1dG9mb2N1c1xuICAgICAgcmVxdWlyZWRcbiAgICAvPlxuXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJtZC1lcnJvcnMtc3BhY2VyXCJcbiAgICAgICpuZ0lmPVwidXJsLmludmFsaWQgJiYgdXJsLnRvdWNoZWRcIlxuICAgID5cbiAgICAgIDxkaXYgKm5nSWY9XCJ1cmwuZXJyb3JzICYmIHVybC5lcnJvcnMucGF0dGVyblwiPlxuICAgICAgICA8cCBjbGFzcz1cImVycm9yLXRleHRcIj57eyB1cmxFcnJvck5hbWUgfX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gLFxuICBzdHlsZXM6IFtgLmZvcm0tY29udHJvbHt3aWR0aDo1MCU7cGFkZGluZzoxMnB4IDIwcHg7bWFyZ2luOjhweCAwO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlcjoxcHggc29saWQgI2NjYztib3gtc2l6aW5nOmJvcmRlci1ib3h9LmVycm9yLXRleHR7Y29sb3I6cmVkfWBdXG59KVxuZXhwb3J0IGNsYXNzIFVybENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgdXJsRXJyb3JOYW1lOiBzdHJpbmcgPVxuICBcIlRoZSB1cmwgZW50ZXJlZCBpcyBub3QgdmFsaWQgYW5kIG11c3QgYmUgY2hhbmdlZFwiO1xuQElucHV0KCkgdXJsdHlwZTogU3RyaW5nO1xuQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbkBJbnB1dCgpIHZhbHVlOiBTdHJpbmc7XG5ASW5wdXQoKSB0YWJpbmRleDogTnVtYmVyID0gMTtcbkBJbnB1dCgpIGlkOiBTdHJpbmcgPSBcImZhY2Vib29rVXJsXCI7XG5ASW5wdXQoKSBuYW1lOiBTdHJpbmcgPSBcImZhY2Vib29rVXJsXCI7XG5ASW5wdXQoKSBwbGFjZWhvbGRlcjogU3RyaW5nID0gXCJFbnRlciBVcmxcIjtcbkBJbnB1dCgpXG5yZWdleDogUmVnRXhwID0gLyg/Oig/Omh0dHB8aHR0cHMpOlxcL1xcLyk/KD86d3d3Lik/ZmFjZWJvb2suY29tXFwvKD86KD86XFx3KSojIVxcLyk/KD86cGFnZXNcXC8pPyg/Ols/XFx3XFwtXSpcXC8pPyg/OnByb2ZpbGUucGhwXFw/aWQ9KD89XFxkLiopKT8oW1xcd1xcLV0qKT8vO1xuXG5AT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuQE91dHB1dCgpIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5AT3V0cHV0KCkgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxub25Gb2N1cyhldmVudCkge1xuICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xufVxub25CbHVyKGV2ZW50KSB7XG4gIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbn1cbm9uQ2hhbmdlKGV2ZW50KSB7XG4gIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQpO1xufVxuXG5vblZhbGlkYXRlVXJsKHR5cGUsIHJlZ2V4KSB7XG4gIGRlYnVnZ2VyO1xuICBsZXQgdXJsUmVnZXg7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgXCJmYWNlYm9va1wiOlxuICAgICAgdXJsUmVnZXggPSAvKD86KD86aHR0cHxodHRwcyk6XFwvXFwvKT8oPzp3d3cuKT9mYWNlYm9vay5jb21cXC8oPzooPzpcXHcpKiMhXFwvKT8oPzpwYWdlc1xcLyk/KD86Wz9cXHdcXC1dKlxcLyk/KD86cHJvZmlsZS5waHBcXD9pZD0oPz1cXGQuKikpPyhbXFx3XFwtXSopPy87XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaW5zdGFncmFtXCI6XG4gICAgICB1cmxSZWdleCA9IC8oPzooPzpodHRwfGh0dHBzKTpcXC9cXC8pPyg/Ond3d1xcLik/aW5zdGFncmFtLmNvbShcXHcrOnswLDF9XFx3KkApPyhcXFMrKSg6KFswLTldKSspPyhcXC98XFwvKFtcXHcjITouPys9JiVAIVxcLVxcL10pKT8vO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImxpbmtlZGluXCI6XG4gICAgICB1cmxSZWdleCA9IC8oPzooPzpodHRwfGh0dHBzKTpcXC9cXC8pPyg/Ond3d1xcLik/bGlua2VkaW4uY29tKFxcdys6ezAsMX1cXHcqQCk/KFxcUyspKDooWzAtOV0pKyk/KFxcL3xcXC8oW1xcdyMhOi4/Kz0mJUAhXFwtXFwvXSkpPy87XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwid2ViXCI6XG4gICAgICB1cmxSZWdleCA9IC9eKGh0dHA6XFwvXFwvd3d3XFwufGh0dHBzOlxcL1xcL3d3d1xcLnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC8pP1thLXowLTldKyhbXFwtXFwuXXsxfVthLXowLTldKykqXFwuW2Etel17Miw1fSg6WzAtOV17MSw1fSk/KFxcLy4qKT8kLztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJvdGhlclwiOlxuICAgICAgdXJsUmVnZXggPSByZWdleDtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB1cmxSZWdleCA9IHJlZ2V4O1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHVybFJlZ2V4O1xufVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVybENvbXBvbmVudCB9IGZyb20gJy4vdXJsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJzsgLy8gPD09IGFkZCB0aGUgaW1wb3J0cyFcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPD09PT09PT09PT0gQWRkIHRoaXMgbGluZSFcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlICxcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVXJsQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1VybENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVXJsTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJJbnB1dCIsIk91dHB1dCIsIk5nTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozt5QkFKRDs7Ozs7OztBQ0FBOztnQ0FxQ0Usa0RBQWtEOzRCQUV2QixLQUFLOzRCQUVOLENBQUM7c0JBQ1AsYUFBYTt3QkFDWCxhQUFhOytCQUNOLFdBQVc7eUJBRTFCLG1JQUFtSTswQkFFN0csSUFBSUMsZUFBWSxFQUFPO3lCQUN4QixJQUFJQSxlQUFZLEVBQU87d0JBRXhCLElBQUlBLGVBQVksRUFBTzs7Ozs7O1FBRTNELDhCQUFPOzs7O1lBQVAsVUFBUSxLQUFLO2dCQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCOzs7OztRQUNELDZCQUFNOzs7O1lBQU4sVUFBTyxLQUFLO2dCQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3ZCOzs7OztRQUNELCtCQUFROzs7O1lBQVIsVUFBUyxLQUFLO2dCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCOzs7Ozs7UUFFRCxvQ0FBYTs7Ozs7WUFBYixVQUFjLElBQUksRUFBRSxLQUFLO2dCQUN2QixTQUFTOztnQkFDVCxJQUFJLFFBQVEsQ0FBQztnQkFDYixRQUFRLElBQUk7b0JBQ1YsS0FBSyxVQUFVO3dCQUNiLFFBQVEsR0FBRyxtSUFBbUksQ0FBQzt3QkFDL0ksTUFBTTtvQkFDUixLQUFLLFdBQVc7d0JBQ2QsUUFBUSxHQUFHLCtHQUErRyxDQUFDO3dCQUMzSCxNQUFNO29CQUNSLEtBQUssVUFBVTt3QkFDYixRQUFRLEdBQUcsOEdBQThHLENBQUM7d0JBQzFILE1BQU07b0JBQ1IsS0FBSyxLQUFLO3dCQUNSLFFBQVEsR0FBRyx5SEFBeUgsQ0FBQzt3QkFDckksTUFBTTtvQkFDUixLQUFLLE9BQU87d0JBQ1YsUUFBUSxHQUFHLEtBQUssQ0FBQzt3QkFDakIsTUFBTTtvQkFDUjt3QkFDRSxRQUFRLEdBQUcsS0FBSyxDQUFDO3dCQUNqQixNQUFNO2lCQUNUO2dCQUNELE9BQU8sUUFBUSxDQUFDO2FBQ2pCOztvQkFyRkFDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLHF0QkEyQkQ7d0JBQ1QsTUFBTSxFQUFFLENBQUMsZ0pBQWdKLENBQUM7cUJBQzNKOzs7bUNBR0VDLFFBQUs7OEJBRVBBLFFBQUs7K0JBQ0xBLFFBQUs7NEJBQ0xBLFFBQUs7K0JBQ0xBLFFBQUs7eUJBQ0xBLFFBQUs7MkJBQ0xBLFFBQUs7a0NBQ0xBLFFBQUs7NEJBQ0xBLFFBQUs7NkJBR0xDLFNBQU07NEJBQ05BLFNBQU07MkJBRU5BLFNBQU07OzJCQW5EUDs7Ozs7OztBQ0FBOzs7O29CQUtDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxpQkFBVzs0QkFDWEMseUJBQW1COzRCQUNuQkMsbUJBQVk7eUJBQ2I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO3dCQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7cUJBQ3hCOzt3QkFiRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==