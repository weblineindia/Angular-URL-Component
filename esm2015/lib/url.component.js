/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
export class UrlComponent {
    constructor() {
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
    onFocus(event) {
        this.focus.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        this.blur.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        this.change.emit(event);
    }
    /**
     * @param {?} type
     * @param {?} regex
     * @return {?}
     */
    onValidateUrl(type, regex) {
        debugger;
        /** @type {?} */
        let urlRegex;
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
    }
}
UrlComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-url',
                template: `<input
      type="url"
      [ngClass]="{
        'form-control': true
      }"
      [(placeholder)]="placeholder"
      [(ngModel)]="value"
      [(name)]="name"
      [(id)]="id"
      #url="ngModel"
      [(disabled)]="disabled"
      [(tabindex)]="tabindex"
      (focus)="onFocus($event)"
      (blur)="onBlur($event)"
      (input)="onChange($event)"
      [pattern]="onValidateUrl(urltype, regex)"
      autofocus
      required
    />

    <div
      class="md-errors-spacer"
      *ngIf="url.invalid && url.touched"
    >
      <div *ngIf="url.errors && url.errors.pattern">
        <p class="error-text">{{ urlErrorName }}</p>
      </div>
    </div>`,
                styles: [`.form-control{width:50%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}.error-text{color:red}`]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItd2VibGluZWluZGlhLXVybC8iLCJzb3VyY2VzIjpbImxpYi91cmwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBa0N2RSxNQUFNOzs0QkFHSixrREFBa0Q7d0JBRXZCLEtBQUs7d0JBRU4sQ0FBQztrQkFDUCxhQUFhO29CQUNYLGFBQWE7MkJBQ04sV0FBVztxQkFFMUIsbUlBQW1JO3NCQUU3RyxJQUFJLFlBQVksRUFBTztxQkFDeEIsSUFBSSxZQUFZLEVBQU87b0JBRXhCLElBQUksWUFBWSxFQUFPOzs7Ozs7SUFFM0QsT0FBTyxDQUFDLEtBQUs7UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4Qjs7Ozs7SUFDRCxNQUFNLENBQUMsS0FBSztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3ZCOzs7OztJQUNELFFBQVEsQ0FBQyxLQUFLO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekI7Ozs7OztJQUVELGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSztRQUN2QixRQUFRLENBQUM7O1FBQ1QsSUFBSSxRQUFRLENBQUM7UUFDYixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2IsS0FBSyxVQUFVO2dCQUNiLFFBQVEsR0FBRyxtSUFBbUksQ0FBQztnQkFDL0ksS0FBSyxDQUFDO1lBQ1IsS0FBSyxXQUFXO2dCQUNkLFFBQVEsR0FBRywrR0FBK0csQ0FBQztnQkFDM0gsS0FBSyxDQUFDO1lBQ1IsS0FBSyxVQUFVO2dCQUNiLFFBQVEsR0FBRyw4R0FBOEcsQ0FBQztnQkFDMUgsS0FBSyxDQUFDO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLFFBQVEsR0FBRyx5SEFBeUgsQ0FBQztnQkFDckksS0FBSyxDQUFDO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQztZQUNSO2dCQUNFLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQztTQUNUO1FBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztLQUNqQjs7O1lBckZBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0EyQkQ7Z0JBQ1QsTUFBTSxFQUFFLENBQUMsZ0pBQWdKLENBQUM7YUFDM0o7OzsyQkFHRSxLQUFLO3NCQUVQLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7aUJBQ0wsS0FBSzttQkFDTCxLQUFLOzBCQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFHTCxNQUFNO29CQUNOLE1BQU07bUJBRU4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXVybCcsXG4gIHRlbXBsYXRlOiBgPGlucHV0XG4gICAgICB0eXBlPVwidXJsXCJcbiAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgJ2Zvcm0tY29udHJvbCc6IHRydWVcbiAgICAgIH1cIlxuICAgICAgWyhwbGFjZWhvbGRlcildPVwicGxhY2Vob2xkZXJcIlxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICBbKG5hbWUpXT1cIm5hbWVcIlxuICAgICAgWyhpZCldPVwiaWRcIlxuICAgICAgI3VybD1cIm5nTW9kZWxcIlxuICAgICAgWyhkaXNhYmxlZCldPVwiZGlzYWJsZWRcIlxuICAgICAgWyh0YWJpbmRleCldPVwidGFiaW5kZXhcIlxuICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXG4gICAgICAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiXG4gICAgICAoaW5wdXQpPVwib25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbcGF0dGVybl09XCJvblZhbGlkYXRlVXJsKHVybHR5cGUsIHJlZ2V4KVwiXG4gICAgICBhdXRvZm9jdXNcbiAgICAgIHJlcXVpcmVkXG4gICAgLz5cblxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwibWQtZXJyb3JzLXNwYWNlclwiXG4gICAgICAqbmdJZj1cInVybC5pbnZhbGlkICYmIHVybC50b3VjaGVkXCJcbiAgICA+XG4gICAgICA8ZGl2ICpuZ0lmPVwidXJsLmVycm9ycyAmJiB1cmwuZXJyb3JzLnBhdHRlcm5cIj5cbiAgICAgICAgPHAgY2xhc3M9XCJlcnJvci10ZXh0XCI+e3sgdXJsRXJyb3JOYW1lIH19PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5mb3JtLWNvbnRyb2x7d2lkdGg6NTAlO3BhZGRpbmc6MTJweCAyMHB4O21hcmdpbjo4cHggMDtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXI6MXB4IHNvbGlkICNjY2M7Ym94LXNpemluZzpib3JkZXItYm94fS5lcnJvci10ZXh0e2NvbG9yOnJlZH1gXVxufSlcbmV4cG9ydCBjbGFzcyBVcmxDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHVybEVycm9yTmFtZTogc3RyaW5nID1cbiAgXCJUaGUgdXJsIGVudGVyZWQgaXMgbm90IHZhbGlkIGFuZCBtdXN0IGJlIGNoYW5nZWRcIjtcbkBJbnB1dCgpIHVybHR5cGU6IFN0cmluZztcbkBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5ASW5wdXQoKSB2YWx1ZTogU3RyaW5nO1xuQElucHV0KCkgdGFiaW5kZXg6IE51bWJlciA9IDE7XG5ASW5wdXQoKSBpZDogU3RyaW5nID0gXCJmYWNlYm9va1VybFwiO1xuQElucHV0KCkgbmFtZTogU3RyaW5nID0gXCJmYWNlYm9va1VybFwiO1xuQElucHV0KCkgcGxhY2Vob2xkZXI6IFN0cmluZyA9IFwiRW50ZXIgVXJsXCI7XG5ASW5wdXQoKVxucmVnZXg6IFJlZ0V4cCA9IC8oPzooPzpodHRwfGh0dHBzKTpcXC9cXC8pPyg/Ond3dy4pP2ZhY2Vib29rLmNvbVxcLyg/Oig/OlxcdykqIyFcXC8pPyg/OnBhZ2VzXFwvKT8oPzpbP1xcd1xcLV0qXFwvKT8oPzpwcm9maWxlLnBocFxcP2lkPSg/PVxcZC4qKSk/KFtcXHdcXC1dKik/LztcblxuQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbkBPdXRwdXQoKSBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbm9uRm9jdXMoZXZlbnQpIHtcbiAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcbn1cbm9uQmx1cihldmVudCkge1xuICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG59XG5vbkNoYW5nZShldmVudCkge1xuICB0aGlzLmNoYW5nZS5lbWl0KGV2ZW50KTtcbn1cblxub25WYWxpZGF0ZVVybCh0eXBlLCByZWdleCkge1xuICBkZWJ1Z2dlcjtcbiAgbGV0IHVybFJlZ2V4O1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwiZmFjZWJvb2tcIjpcbiAgICAgIHVybFJlZ2V4ID0gLyg/Oig/Omh0dHB8aHR0cHMpOlxcL1xcLyk/KD86d3d3Lik/ZmFjZWJvb2suY29tXFwvKD86KD86XFx3KSojIVxcLyk/KD86cGFnZXNcXC8pPyg/Ols/XFx3XFwtXSpcXC8pPyg/OnByb2ZpbGUucGhwXFw/aWQ9KD89XFxkLiopKT8oW1xcd1xcLV0qKT8vO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImluc3RhZ3JhbVwiOlxuICAgICAgdXJsUmVnZXggPSAvKD86KD86aHR0cHxodHRwcyk6XFwvXFwvKT8oPzp3d3dcXC4pP2luc3RhZ3JhbS5jb20oXFx3Kzp7MCwxfVxcdypAKT8oXFxTKykoOihbMC05XSkrKT8oXFwvfFxcLyhbXFx3IyE6Lj8rPSYlQCFcXC1cXC9dKSk/LztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJsaW5rZWRpblwiOlxuICAgICAgdXJsUmVnZXggPSAvKD86KD86aHR0cHxodHRwcyk6XFwvXFwvKT8oPzp3d3dcXC4pP2xpbmtlZGluLmNvbShcXHcrOnswLDF9XFx3KkApPyhcXFMrKSg6KFswLTldKSspPyhcXC98XFwvKFtcXHcjITouPys9JiVAIVxcLVxcL10pKT8vO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIndlYlwiOlxuICAgICAgdXJsUmVnZXggPSAvXihodHRwOlxcL1xcL3d3d1xcLnxodHRwczpcXC9cXC93d3dcXC58aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvKT9bYS16MC05XSsoW1xcLVxcLl17MX1bYS16MC05XSspKlxcLlthLXpdezIsNX0oOlswLTldezEsNX0pPyhcXC8uKik/JC87XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwib3RoZXJcIjpcbiAgICAgIHVybFJlZ2V4ID0gcmVnZXg7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdXJsUmVnZXggPSByZWdleDtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiB1cmxSZWdleDtcbn1cbn1cbiJdfQ==