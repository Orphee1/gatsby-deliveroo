// import React, { useState, useEffect } from "react"
import React, { useState, useEffect } from "react"

export const formatPrice = num => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(num)
}

export const useIsSSr = () => {
  const [isSsr, setIsSsr] = useState(true)

  useEffect(() => {
    setIsSsr(false)
  }, [])

  return isSsr
}
