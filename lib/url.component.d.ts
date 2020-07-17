import { EventEmitter } from "@angular/core";
export declare class UrlComponent {
    urlErrorName: string;
    urltype: String;
    disabled: boolean;
    value: String;
    tabindex: Number;
    id: String;
    name: String;
    placeholder: String;
    regex: RegExp;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    blur: EventEmitter<any>;
    onFocus(event: any): void;
    onBlur(event: any): void;
    onChange(event: any): void;
    onValidateUrl(type: any, regex: any): any;
}
