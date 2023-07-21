import { useState } from "react"
import { useRouter } from "next/router"

export const useHeader = () => {
  const { asPath } = useRouter()
  const [sidebar, setSidebar] = useState(false)
  
  const showSiderbar = () => setSidebar(!sidebar)

  const activeLink = (path: string) => {
    return asPath === `/${path}` ? 'active' : ''
  }

  return {sidebar, activeLink, showSiderbar}
}