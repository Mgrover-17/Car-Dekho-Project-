"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image"

const CustomButton=({title, containerStyles, handleClick, btnType, rightIcon, textStyles}:CustomButtonProps)=>{
    return(
        <button disabled={false} type={btnType || "button"}
        title="Explore Cars"
            className={`custom-btn ${containerStyles}`}
            onClick={()=>{handleClick}}>
            <span className={`flex-1 ${textStyles}`}>
            {title}
            </span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image alt="carImage" src={rightIcon} fill className="object-contain" />
                </div>
            )}

        </button>
    )
}

export default CustomButton;