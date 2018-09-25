import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.show') isOpen = false;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {

    }

    @HostListener('click') onClick(eventData: Event) {
        this.isOpen = !this.isOpen;
        var divEl = this.elRef.nativeElement.querySelector('div.dropdown-menu') ? "div.dropdown-menu" : "ul.dropdown-menu";
        if (this.elRef.nativeElement.querySelector(divEl).classList.contains('show'))
            this.elRef.nativeElement.querySelector(divEl).classList.remove('show');
        else
            this.elRef.nativeElement.querySelector(divEl).classList.add('show');
    }
}