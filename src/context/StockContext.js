import { useContext,createContext,useReducer, useEffect } from "react";

import { inventoryData } from "../backend/Data";
import { getLocalStorage,setLocalStorage } from "../utils/utilFunctions";

export const StockContext=createContext();

export const StockContextProvider=({children})=>
{
    const Reducer=(state,{type,payload,inputField})=>
    {
        const clearInput={department:"",name:"",description:"",price:0,stock:0,sku:"",supplier:"",imageUrl:""};
        switch(type) 
        {
            case "DEPARTMENT":
                return {...state,currentDepartment:payload};
               
            case "TOGGLE_LOWSTOCK":
                return {...state,isLowStock:payload};    

            case "FILTER":
                return {...state,currentFilter:payload};    

            case "INPUT_FIELDS":
                return {...state,input:{...state.input,[inputField]:payload}};  
             
            case "CLEAR_INPUT":
                return {...state,input:clearInput,showModal:false};    

            case "GET_INVENTORY":
                return {...state,inventory:payload}

            case "ADD_PRODUCT_TO_INVENTORY":
                const newId=state.id + 1
                return {...state,inventory:payload,id:newId,input:clearInput};    

            default:
                return state;    
        }
    }
    const initialState= {
        inventory:inventoryData,
        currentDepartment:"All",
        input:{department:"",name:"",description:"",price:"",stock:"",sku:"",supplier:"",imageUrl:"",delivered:0},
        id:55,
        isLowStock:false,
        currentFilter:"",
    }
    const [state,dispatch]=useReducer(Reducer,initialState);
    const {inventory,currentDepartment,currentFilter}=state;

    const addNewProduct=()=>
    {
        const {inventory,input,id}=state;
        const product={...input,id};
        const updatedInventory=inventory;
        updatedInventory.push(product);

        dispatch({type:"ADD_PRODUCT_TO_INVENTORY",payload:updatedInventory});
        setLocalStorage("inventory",updatedInventory);
    } 


    useEffect(()=>{
        const fetchedInventory=getLocalStorage("inventory");
        if(fetchedInventory)
        {
            dispatch({type:"GET_INVENTORY",payload:fetchedInventory})
        }
    },[]);

    return (
        <StockContext.Provider value={{state,dispatch,addNewProduct}}>
            {children}
        </StockContext.Provider>
    )
}
export  const useData= ()=> useContext(StockContext)