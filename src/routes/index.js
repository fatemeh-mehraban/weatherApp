
 const main = document.getElementById('routes')
 const home = document.getElementById('home')
 const login= document.getElementById('login')
 const weather =document.getElementById('weather')
 const register =  document.getElementById('register')
 const loginbtn = document.getElementById('loginbtn')
 const registerbtn = document.getElementById('registerbtn')
 import {updateSearchItem } from '../../main'
 import Cookies from 'js-cookie'

//  console.log(login);
export const Routes= () =>{
    const routes = main || ""
    routes.innerHTML=''
    switch(location.pathname){
        case  '/' :
            
            routes.appendChild(home)
            return home.classList.remove('hidden')
        break
        case  '/weather' :
            registerbtn.classList.add('hidden')
            loginbtn.innerHTML= "logout"


            routes.appendChild(weather)
            return  login.classList.add('flex')
            
        break
        case  '/login' :
            routes.appendChild(login)
            login.classList.remove('ml-[100vw]')
            return  login.classList.add('flex')

            
        break

        case  '/register' :
            // register.classList.remove('hidden')
            routes.appendChild(register)
            return register.classList.add('flex')
        break
        default:
            return (routes.innerHTML = 'page not found')


    }
    // console.log(register);
}
const logo = document.getElementById('logo')

loginbtn.addEventListener("click" , (e)=>{
    if(loginbtn.innerHTML === "logout"){
        loginbtn.addEventListener('click',()=>{
            Cookies.remove("user")
            updateSearchItem([])                   
            history.pushState(null , null, '/login')
            loginbtn.innerHTML= "Log In"
            registerbtn.classList.remove('hidden')
            Routes()
        })
    }else{
        history.pushState(null , null, '/login')
        Routes()
    }

})

registerbtn.addEventListener("click" , (e)=>{
    history.pushState(null , null, '/register')
    Routes()
})
logo.addEventListener("click" , (e)=>{
    history.pushState(null , null, '/')
    Routes()
})