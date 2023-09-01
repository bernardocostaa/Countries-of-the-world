import React from 'react'
import { ALL_COUNTRIES } from './Api'
import useFetch from './useFetch'

export const CountrieContex = React.createContext()

export const CountriesContextProvider = ({children})=>{
  const [inputSearch,setInputSearch] = React.useState('')
  const [inputFilter,setInputFilter] = React.useState('')
  const {data,request,error,loading,setLoading} = useFetch()

  function getInputFilter(value){
    if(value !== 'All'){
      setInputFilter(value)
    }else{
      setInputFilter('')
    }
  }


  React.useEffect(()=>{
    const {url} = ALL_COUNTRIES()
    request(url)
  },[request])
 
  
  return <CountrieContex.Provider value={{inputSearch,setInputSearch,data,inputFilter,setInputFilter,getInputFilter,error,loading,setLoading}}>
    {children}
  </CountrieContex.Provider>
}