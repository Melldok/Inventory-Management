import { useState } from "react";
import { AllItems } from "../components/Kitchen/Table/ddbb"


 
 const ddbb = AllItems;
 
 export const createNewItem = (product_name, in_stock, category, img, storage) => { 
    return {
    product_name, in_stock, category, img, storage}
}


export const formCreateNew = () => {

}