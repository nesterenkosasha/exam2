import { BASE_URL } from "./constants"
/**
 * To get a image from the server.
 * 
 * @return {string} src
 */
export const getImgApi = async function (url) {
    try {
      const headers = new Headers()
      const res = await fetch(`${BASE_URL}${url}`, {
        method: "GET",
        mode: "cors",
        cache: "default",
        headers 
      })
      const data = await res.blob()
      const src = URL.createObjectURL(data)
      return src
    } catch (err) {
      console.error(err.message)
      return null
    }
  }
