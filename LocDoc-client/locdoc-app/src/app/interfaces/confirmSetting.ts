import {TemplateRef} from '@angular/core';
export interface ConfirmSettings {
    overlay?: boolean; // Default: true
    overlayClickToClose?: boolean; // Default: true
    showCloseButton?: boolean; // Default: true
    confirmText?: string | TemplateRef<any>; // Default: 'Yes'
    declineText?: string | TemplateRef<any>; // Default: 'No'
}

