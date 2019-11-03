
import {ConfirmSettings} from './confirmSetting';
 
export interface ConfirmEmit {
    close?: boolean;
    message?: string;
    title?: string;
    resolve$?: any;
    override?: ConfirmSettings;
}