export interface IFormButton {
    text: string;
    size?: string;
    onPress(): any;
    bordered?: boolean;
    type?:string;
    textSize: number;
    textToUpperCase?:boolean;
}