import HttpClient from "../axiosClient"

export const UserApi = {
    register(user) {
       return HttpClient.post("/auth/register", user)
    },
    login(user){
        return HttpClient.post("/auth/login", user)
    },
    signout(next){
        if(typeof window != "undefined"){
            localStorage.removeItem("user");
            next();
            return HttpClient.get("/signout");
        }
    },
    authenticated(data, next){
        if(typeof window != "undefined"){
            localStorage.setItem("user", JSON.stringify(data));
            next();
        }
    },
    isAuthenticated(){
        if(typeof window == "undefined"){
            return false
        }
        if(localStorage.getItem("user")){
            return JSON.parse(localStorage.getItem("user"))
        }else {
           return false
        }
    }
}
