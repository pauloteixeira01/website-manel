import { useState } from "react"

import {GetGitHubApiProps} from './interface'

export const useProjects = () => {
  const [itemsApi, setItemsApi] = useState<GetGitHubApiProps[]>([])

  function getGitHubAPI() {
    fetch('https://api.github.com/users/pauloteixeira01/repos')
    .then(async res => {
      let data = await res.json()
      setItemsApi(data)
    })
    .catch(e => {
      console.log(e)
      throw new Error(e.status)
    })
  }
  
  return {getGitHubAPI, itemsApi}
}
 