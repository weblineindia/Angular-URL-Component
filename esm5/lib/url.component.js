/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
var UrlComponent = /** @class */ (function () {
    function UrlComponent() {
        this.urlErrorName = "The url entered is not valid and must be changed";
        this.disabled = false;
        this.tabindex = 1;
        this.id = "facebookUrl";
        this.name = "facebookUrl";
        this.placeholder = "Enter Url";
        this.regex = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/;
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'lib-url',
                    template: "<input\n      type=\"url\"\n      [ngClass]=\"{\n        'form-control': true\n      }\"\n      [(placeholder)]=\"placeholder\"\n      [(ngModel)]=\"value\"\n      [(name)]=\"name\"\n      [(id)]=\"id\"\n      #url=\"ngModel\"\n      [(disabled)]=\"disabled\"\n      [(tabindex)]=\"tabindex\"\n      (focus)=\"onFocus($event)\"\n      (blur)=\"onBlur($event)\"\n      (input)=\"onChange($event)\"\n      [pattern]=\"onValidateUrl(urltype, regex)\"\n      autofocus\n      required\n    />\n\n    <div\n      class=\"md-errors-spacer\"\n      *ngIf=\"url.invalid && url.touched\"\n    >\n      <div *ngIf=\"url.errors && url.errors.pattern\">\n        <p class=\"error-text\">{{ urlErrorName }}</p>\n      </div>\n    </div>",
                    styles: [".form-control{width:50%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}.error-text{color:red}"]
                },] },
    ];
    UrlComponent.propDecorators = {
        urlErrorName: [{ type: Input }],
        urltype: [{ type: Input }],
        disabled: [{ type: Input }],
        value: [{ type: Input }],
        tabindex: [{ type: Input }],
        id: [{ type: Input }],
        name: [{ type: Input }],
        placeholder: [{ type: Input }],
        regex: [{ type: Input }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        blur: [{ type: Output }]
    };
    return UrlComponent;
}());
export { UrlComponent };
if (false) {
    /** @type {?} */
    UrlComponent.prototype.urlErrorName;
    /** @type {?} */
    UrlComponent.prototype.urltype;
    /** @type {?} */
    UrlComponent.prototype.disabled;
    /** @type {?} */
    UrlComponent.prototype.value;
    /** @type {?} */
    UrlComponent.prototype.tabindex;
    /** @type {?} */
    UrlComponent.prototype.id;
    /** @type {?} */
    UrlComponent.prototype.name;
    /** @type {?} */
    UrlComponent.prototype.placeholder;
    /** @type {?} */
    UrlComponent.prototype.regex;
    /** @type {?} */
    UrlComponent.prototype.change;
    /** @type {?} */
    UrlComponent.prototype.focus;
    /** @type {?} */
    UrlComponent.prototype.blur;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItd2VibGluZWluZGlhLXVybC8iLCJzb3VyY2VzIjpbImxpYi91cmwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7NEJBcUNyRSxrREFBa0Q7d0JBRXZCLEtBQUs7d0JBRU4sQ0FBQztrQkFDUCxhQUFhO29CQUNYLGFBQWE7MkJBQ04sV0FBVztxQkFFMUIsbUlBQW1JO3NCQUU3RyxJQUFJLFlBQVksRUFBTztxQkFDeEIsSUFBSSxZQUFZLEVBQU87b0JBRXhCLElBQUksWUFBWSxFQUFPOzs7Ozs7SUFFM0QsOEJBQU87Ozs7SUFBUCxVQUFRLEtBQUs7UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4Qjs7Ozs7SUFDRCw2QkFBTTs7OztJQUFOLFVBQU8sS0FBSztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3ZCOzs7OztJQUNELCtCQUFROzs7O0lBQVIsVUFBUyxLQUFLO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekI7Ozs7OztJQUVELG9DQUFhOzs7OztJQUFiLFVBQWMsSUFBSSxFQUFFLEtBQUs7UUFDdkIsUUFBUSxDQUFDOztRQUNULElBQUksUUFBUSxDQUFDO1FBQ2IsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNiLEtBQUssVUFBVTtnQkFDYixRQUFRLEdBQUcsbUlBQW1JLENBQUM7Z0JBQy9JLEtBQUssQ0FBQztZQUNSLEtBQUssV0FBVztnQkFDZCxRQUFRLEdBQUcsK0dBQStHLENBQUM7Z0JBQzNILEtBQUssQ0FBQztZQUNSLEtBQUssVUFBVTtnQkFDYixRQUFRLEdBQUcsOEdBQThHLENBQUM7Z0JBQzFILEtBQUssQ0FBQztZQUNSLEtBQUssS0FBSztnQkFDUixRQUFRLEdBQUcseUhBQXlILENBQUM7Z0JBQ3JJLEtBQUssQ0FBQztZQUNSLEtBQUssT0FBTztnQkFDVixRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUNqQixLQUFLLENBQUM7WUFDUjtnQkFDRSxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUNqQixLQUFLLENBQUM7U0FDVDtRQUNELE1BQU0sQ0FBQyxRQUFRLENBQUM7S0FDakI7O2dCQXJGQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxxdEJBMkJEO29CQUNULE1BQU0sRUFBRSxDQUFDLGdKQUFnSixDQUFDO2lCQUMzSjs7OytCQUdFLEtBQUs7MEJBRVAsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUdMLE1BQU07d0JBQ04sTUFBTTt1QkFFTixNQUFNOzt1QkFuRFA7O1NBa0NhLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi11cmwnLFxuICB0ZW1wbGF0ZTogYDxpbnB1dFxuICAgICAgdHlwZT1cInVybFwiXG4gICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICdmb3JtLWNvbnRyb2wnOiB0cnVlXG4gICAgICB9XCJcbiAgICAgIFsocGxhY2Vob2xkZXIpXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgWyhuYW1lKV09XCJuYW1lXCJcbiAgICAgIFsoaWQpXT1cImlkXCJcbiAgICAgICN1cmw9XCJuZ01vZGVsXCJcbiAgICAgIFsoZGlzYWJsZWQpXT1cImRpc2FibGVkXCJcbiAgICAgIFsodGFiaW5kZXgpXT1cInRhYmluZGV4XCJcbiAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuICAgICAgKGJsdXIpPVwib25CbHVyKCRldmVudClcIlxuICAgICAgKGlucHV0KT1cIm9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgW3BhdHRlcm5dPVwib25WYWxpZGF0ZVVybCh1cmx0eXBlLCByZWdleClcIlxuICAgICAgYXV0b2ZvY3VzXG4gICAgICByZXF1aXJlZFxuICAgIC8+XG5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cIm1kLWVycm9ycy1zcGFjZXJcIlxuICAgICAgKm5nSWY9XCJ1cmwuaW52YWxpZCAmJiB1cmwudG91Y2hlZFwiXG4gICAgPlxuICAgICAgPGRpdiAqbmdJZj1cInVybC5lcnJvcnMgJiYgdXJsLmVycm9ycy5wYXR0ZXJuXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiZXJyb3ItdGV4dFwiPnt7IHVybEVycm9yTmFtZSB9fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmAsXG4gIHN0eWxlczogW2AuZm9ybS1jb250cm9se3dpZHRoOjUwJTtwYWRkaW5nOjEycHggMjBweDttYXJnaW46OHB4IDA7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JveC1zaXppbmc6Ym9yZGVyLWJveH0uZXJyb3ItdGV4dHtjb2xvcjpyZWR9YF1cbn0pXG5leHBvcnQgY2xhc3MgVXJsQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSB1cmxFcnJvck5hbWU6IHN0cmluZyA9XG4gIFwiVGhlIHVybCBlbnRlcmVkIGlzIG5vdCB2YWxpZCBhbmQgbXVzdCBiZSBjaGFuZ2VkXCI7XG5ASW5wdXQoKSB1cmx0eXBlOiBTdHJpbmc7XG5ASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuQElucHV0KCkgdmFsdWU6IFN0cmluZztcbkBJbnB1dCgpIHRhYmluZGV4OiBOdW1iZXIgPSAxO1xuQElucHV0KCkgaWQ6IFN0cmluZyA9IFwiZmFjZWJvb2tVcmxcIjtcbkBJbnB1dCgpIG5hbWU6IFN0cmluZyA9IFwiZmFjZWJvb2tVcmxcIjtcbkBJbnB1dCgpIHBsYWNlaG9sZGVyOiBTdHJpbmcgPSBcIkVudGVyIFVybFwiO1xuQElucHV0KClcbnJlZ2V4OiBSZWdFeHAgPSAvKD86KD86aHR0cHxodHRwcyk6XFwvXFwvKT8oPzp3d3cuKT9mYWNlYm9vay5jb21cXC8oPzooPzpcXHcpKiMhXFwvKT8oPzpwYWdlc1xcLyk/KD86Wz9cXHdcXC1dKlxcLyk/KD86cHJvZmlsZS5waHBcXD9pZD0oPz1cXGQuKikpPyhbXFx3XFwtXSopPy87XG5cbkBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5AT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbkBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5vbkZvY3VzKGV2ZW50KSB7XG4gIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XG59XG5vbkJsdXIoZXZlbnQpIHtcbiAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xufVxub25DaGFuZ2UoZXZlbnQpIHtcbiAgdGhpcy5jaGFuZ2UuZW1pdChldmVudCk7XG59XG5cbm9uVmFsaWRhdGVVcmwodHlwZSwgcmVnZXgpIHtcbiAgZGVidWdnZXI7XG4gIGxldCB1cmxSZWdleDtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBcImZhY2Vib29rXCI6XG4gICAgICB1cmxSZWdleCA9IC8oPzooPzpodHRwfGh0dHBzKTpcXC9cXC8pPyg/Ond3dy4pP2ZhY2Vib29rLmNvbVxcLyg/Oig/OlxcdykqIyFcXC8pPyg/OnBhZ2VzXFwvKT8oPzpbP1xcd1xcLV0qXFwvKT8oPzpwcm9maWxlLnBocFxcP2lkPSg/PVxcZC4qKSk/KFtcXHdcXC1dKik/LztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJpbnN0YWdyYW1cIjpcbiAgICAgIHVybFJlZ2V4ID0gLyg/Oig/Omh0dHB8aHR0cHMpOlxcL1xcLyk/KD86d3d3XFwuKT9pbnN0YWdyYW0uY29tKFxcdys6ezAsMX1cXHcqQCk/KFxcUyspKDooWzAtOV0pKyk/KFxcL3xcXC8oW1xcdyMhOi4/Kz0mJUAhXFwtXFwvXSkpPy87XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibGlua2VkaW5cIjpcbiAgICAgIHVybFJlZ2V4ID0gLyg/Oig/Omh0dHB8aHR0cHMpOlxcL1xcLyk/KD86d3d3XFwuKT9saW5rZWRpbi5jb20oXFx3Kzp7MCwxfVxcdypAKT8oXFxTKykoOihbMC05XSkrKT8oXFwvfFxcLyhbXFx3IyE6Lj8rPSYlQCFcXC1cXC9dKSk/LztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ3ZWJcIjpcbiAgICAgIHVybFJlZ2V4ID0gL14oaHR0cDpcXC9cXC93d3dcXC58aHR0cHM6XFwvXFwvd3d3XFwufGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcLyk/W2EtejAtOV0rKFtcXC1cXC5dezF9W2EtejAtOV0rKSpcXC5bYS16XXsyLDV9KDpbMC05XXsxLDV9KT8oXFwvLiopPyQvO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm90aGVyXCI6XG4gICAgICB1cmxSZWdleCA9IHJlZ2V4O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHVybFJlZ2V4ID0gcmVnZXg7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gdXJsUmVnZXg7XG59XG59XG4iXX0=