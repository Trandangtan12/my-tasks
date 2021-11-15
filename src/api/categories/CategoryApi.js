import { UserApi } from "../auth/usersApi"
import HttpClient from "../axiosClient"
const user = UserApi.isAuthenticated()

export const CategoryApi = {
   getCate() {
       return HttpClient.get("/api/categories", {
           headers: {
               Authorization: `Bearer ${user.token}`
           }
       })
   }
}
