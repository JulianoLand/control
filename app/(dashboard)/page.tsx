"use client"

import { useEffect, useState } from "react"

const Collections = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true)
  const [collections, setCollections] = useState([])

  const getCollection = async () => {
    try {
      const res = await fetch("/api/users", {
        method: "GET",
      })

      console.log(res)

      const data = await res.json()
      setCollections(data)
      setLoading(false)

    } catch(err) {
      console.log('[erro no retorno da colection', err)
    }
  }

  useEffect(() =>{
    getCollection()
  }, [])

  console.log(collections)
  
  return (
    <div>
    teste  
    </div>
  )
}

export default Collections
