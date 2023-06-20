"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image"

const CustomButton=({title,containerStyles,handleClick,btnType}:CustomButtonProps)=>{
    return(
        <button disabled={false} type={btnType || "button"}
        title="Explore Cars"
            className={`custom-btn ${containerStyles}`}
            onClick={()=>{handleClick}}>
            <span className={`flex-1`}>
            
            </span>
            {title}
        </button>
    )
}

export default CustomButton;