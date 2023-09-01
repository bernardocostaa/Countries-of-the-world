import React from 'react'

const useFetch = () => {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try{
      setError(null)
      setLoading(true)
      response = await fetch(url, options);
      json = await response.json();
    }catch(error){
      json = null
      setError('API com erro')
    }finally{
      setData(json)
      setLoading(false)
      return { response, json };
    }
     
  }, []);
  return{
    data,
    error,
    loading,
    request,
    setLoading
  }
}

export default useFetch