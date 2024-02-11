import React, { ElementType, PropsWithChildren, PropsWithoutRef, ReactComponentElement, ReactElement, ReactNode, ReactPropTypes, useState } from "react";

type setValueType = (error: string, errorDesc?: string)=>void ;
interface ComponentPropsType {
    containerClassName?: string;
    headClassname?: string;
    descClassName?: string;
}
export const useError = (componentProps:ComponentPropsType):[setValueType, ReactNode] => {
  const [storedValue, setStoredValue] = useState<null|{name: string, desc:string}>(null);
  const possibleErrorsNames = {
    "networkerror": {
        name: "NetworkError",
        desc: "Something went wrong with the network, please try again later. Check your internet connection."
    },
    "invalidcredentials": {
        name: "InvalidCredentials",
        desc: "Invalid username or password. Please try again."
    },
    "usernotfound": {
        name: "UserNotFound",
        desc: "User not found. Please try again."
    },
    "internalerror": {
        name: "InternalError",
        desc: "Something went wrong with the server, please try again later."
    }
  }



  const setValue:setValueType = (error, errorDesc) => {
    if(!error){
        setStoredValue(null)
    }
    else{
        const errorName = possibleErrorsNames[error] ? possibleErrorsNames[error].name : error;
        setStoredValue({name: errorName, desc: errorDesc? errorDesc : possibleErrorsNames[error].desc})
    }
  }
  
  // error component in html
  const ErrorComponent:ReactNode = 
  <div className={"bg-[#ad3b3b] font-medium text-lg text-[#fff] p-3 text-left max-w-[24rem] mx-auto mt-2 rounded-lg " + componentProps?.containerClassName}>
        <h1 className={" font-medium " + componentProps?.headClassname}>
          Error {storedValue?.name}: 
        </h1>
        <h1 className={" font-normal text-" + componentProps?.descClassName}>
          {storedValue?.desc}
        </h1>
    </div>

  return [setValue, (storedValue ? ErrorComponent : <div></div>)];
};

