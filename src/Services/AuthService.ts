
import axios from "axios";
import Env from "../../EnvConfig";


class AuthService {

    GetToken(): any {
        
        var username = 'kXmbp2MmX1YFW1Yuz4A5pTA3vFfGXE2g';
        var password = 'EgtQAyNRP1KPYtGZ';
        var env =Env.baseUrl
        console.log("authService",env);
        axios.post(env+"/Authentication/GetToken", {
            username: username,
            password: password
        }).then(res => {
            console.log('response', res)
            //add token to local storage
            localStorage.setItem('token', res.data.token)

        }).catch(err => {
            console.log('error',err)
        })
        
    }

}

export default new AuthService();