
const login= document.getElementById('login')
const form = document.getElementById('formlogin')

const weather =document.getElementById('weather')
import Cookies from 'js-cookie'
import { stringify } from 'postcss'
import { Routes } from '../routes'
import {updateSearchItem ,searchItem } from '../../main'
import { showLoading, hiddenLoading} from '../loading/index'

export let userlogin={}

export const loginUser = ()=>{
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        userlogin = {
            email:form.email.value,
            password: form.password.value
        }
        showLoading()

        getdb(`?email=${userlogin.email}&password=${userlogin.password}`).then(res=>{
           if(res.length == 0) return;
            history.pushState(null , null, '/weather')
            weather.classList.remove('hidden')
            updateSearchItem(res[0].search)
            // console.log(res[0].search);
            Routes()

            hiddenLoading()


            Cookies.set('user',JSON.stringify(res[0]), { expires: 2 })
            // console.log(JSON.parse(Cookies.get("user")));
        })
        form.reset()
    })

}
export async function getdb(x) {
    try {
      const res = await fetch(`http://localhost:3004/users${x}`);
      return await res.json()
    } catch (error) {
      console.log(error);
    }
    }
