import { useContext,createContext,useReducer } from "react";

export const Context=createContext();

export const ContextProvider=({children})=>
{
    const Reducer=(state,{type,payload,inputField})=>
    {
        const clearInput={name:"",description:""};
        switch(type) 
        {
            case "INPUT_FIELDS":
                return {...state,input:{...state.input,[inputField]:payload}};
               
            case "TOGGLE_MODAL":
                return {...state,showModal:payload};    
               
            case "ADD":
                return {...state,list:[...state.list,state.input],input:clearInput,showModal:false};  
             
            case "CLEAR_INPUT":
                return {...state,input:clearInput,showModal:false};    

            case "DELETE_ITEM":
                // const updatedPlaylist=playlists.filter(({name})=>name!==playlistName);
                const updateList=state.list.filter((item,index)=>index!==payload);
                return {...state,list:updateList}

            default:
                return state;    
        }
    }
    const initialState= {
        input:{name:"",description:""},
        showModal:false,
        list:[{name:"hello"}],
    }
    const [state,dispatch]=useReducer(Reducer,initialState);


    return (
        <Context.Provider value={{state,dispatch}}>
            {children}
        </Context.Provider>
    )
}
export  const useData= ()=> useContext(Context)