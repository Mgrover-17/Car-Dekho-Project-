import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }
 
export interface SearchManufacturersProps{
    manufacturer:string;
    setManufacturer : (manufacturer:string)=>void;
}

export interface CarProperties {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    city_mpg: number;
  }