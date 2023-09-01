import React from 'react'

export const ThemaContex = React.createContext()


export const ThemaMode = ({children}) =>{
  const [thema,setThema] = React.useState('light')

  function toggleThema(){
    if(thema === 'light'){
      setThema('dark')
      localStorage.setItem('thema','dark')
    }else{
      setThema('light')
      localStorage.setItem('thema','light')
    }
  }

  React.useEffect(()=>{
    const themaSelect = localStorage.getItem('thema')
    setThema(themaSelect)
  },[])

  return <ThemaContex.Provider value={{thema,toggleThema}}>{children}</ThemaContex.Provider>

}

