import { useState, useEffect } from "react"

const useFetchData = (url) => {
    const [Data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
  
    //fetch data
    useEffect(() => {
      console.log("Project List loaded...")
      fetch(url)
      .then(res => {
        if(!res.ok)
          throw Error('could not fetch data')
        return res.json()
      })
      .then(data => {
        console.log(data);
        setData(data)
        setIsPending(false)
      })
      .catch(err => {
        setError(err)
        setIsPending(false)
      })
    }, [url])

    return {Data, isPending, error}
}
 
export default useFetchData;