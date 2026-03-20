import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      setIsLoading(true)
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false)
      })
    
    }, [url]);
    
  return {data, isLoading}
}
