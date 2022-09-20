import { usePrepareContractWrite} from 'wagmi'
import * as abi from "../../contracts/factory/abi/betaFactory.json"
  
  export function useFactory(
    curationContractAddress,
    curationTitle,
    curationPassAddress,
    curationLimit,
    curationBool
  ) {

    //// will need to update this hook to integrate with 
    //// WIP revamped curator contract
    //// would be ever better if could add
    //// useContractWrite directly into this as well 
    
    const { config, error } = usePrepareContractWrite({
        addressOrName: curationContractAddress,
        contractInterface: abi.abi,
        functionName: 'createCurationManager',
        args: [
            curationTitle,
            curationPassAddress,
            curationLimit,
            curationBool
        ]
    })

    return {config, error}
  }