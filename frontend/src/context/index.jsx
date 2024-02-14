import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
  useContractRead,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    
    const { contract } = useContract(
      "0xa28993CFcE4E106ce1E70ac8Ce2623FdD2ea30B1"
    );

      const { mutateAsync: submitIdea} = useContractWrite(contract, "submitIdea")

    
      const address = useAddress();
      const connect = useMetamask();

      const IdeaSubmission = async (formData) => {
        try {
          await submitIdea({
            args: [formData], // Make sure formData is in the expected format for the smart contract
          });
          console.log("Contract call success");
        } catch (error) {
          console.error("Contract call failed", error);
        }
      };

      return (
        <StateContext.Provider
          value={{
            address,
            contract,
            connect,
            submitIdea:IdeaSubmission
          }}
        >
          {children}
        </StateContext.Provider>
      );
    };
    
    export const useStateContext = () => useContext(StateContext);