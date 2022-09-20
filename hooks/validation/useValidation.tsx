import { useContractRead, erc721ABI } from 'wagmi'
import { BigNumber } from 'ethers';
  
  export function useValidation(
    nftAddress,
    ownerAddress
  ) {

    // might want to change the curation contract
    // so that it returns a true/false bool on a read call
    // whether a specific eth address has the curation pass
    
    console.log("nftaddress: ", nftAddress)
    console.log("ownerAddress: ", ownerAddress)

    const { data, error, isLoading } = useContractRead({
        addressOrName: nftAddress,
        contractInterface: erc721ABI,
        functionName: 'balanceOf',
        args: [
          ownerAddress
        ]
    })

    const isValidated = data ? (
      Number(BigNumber.from(data).toBigInt()) > 0
        ? true
        : false
      ) : (
        false
      )

    console.log("data", data)
    console.log("balance", isValidated)
    return { isValidated, error, isLoading }
  }