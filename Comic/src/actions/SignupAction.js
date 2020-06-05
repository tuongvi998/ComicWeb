import axios from 'axios';
export const signup = (username,email,password,role) =>
{
    return dispatch=>{
       
        return axios.post('http://127.0.0.1:3000/users',{username,email,password,role,image:"http://www.clker.com/cliparts/n/l/p/q/K/L/blue-user-icon.svg"}).then(        
                dispatch(createAccount(true))
        )
    }
}
const createAccount = (check) => ({
    type : 'SIGN_UP',
    isSignupSuccess: check
    
})
