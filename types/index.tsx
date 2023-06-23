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

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }

  export interface HomeProps {
    searchParams: FilterProps;
  }

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
  }

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}
