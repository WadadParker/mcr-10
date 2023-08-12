import { useContext,createContext,useReducer } from "react";

import { inventoryData } from "../backend/Data";

export const StockContext=createContext();

export const StockContextProvider=({children})=>
{
    const Reducer=(state,{type,payload,inputField})=>
    {
        const clearInput={name:"",description:""};
        switch(type) 
        {





            case "INPUT_FIELDS":
                return {...state,input:{...state.input,[inputField]:payload}};  
               
            case "ADD":
                return {...state,list:[...state.list,state.input],input:clearInput,showModal:false};  
             
            case "CLEAR_INPUT":
                return {...state,input:clearInput,showModal:false};    



            default:
                return state;    
        }
    }
    const initialState= {
        inventory:inventoryData,
    }
    const [state,dispatch]=useReducer(Reducer,initialState);


    return (
        <StockContext.Provider value={{state,dispatch}}>
            {children}
        </StockContext.Provider>
    )
}
export  const useData= ()=> useContext(StockContext)