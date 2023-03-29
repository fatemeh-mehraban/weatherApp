import './style.css'
import { Routes } from './src/routes'
import { saveDb } from './src/saveInfodb'
import { loginUser } from './src/login'
import {getApi, search} from './src/weather'
import { showLoading } from './src/loading'
import {suggestion} from './src/suggestion'
export const loading = document.getElementById('loading')
import { debounce } from 'lodash/function';
import Cookies from 'js-cookie'

export let searchItem = []
export function updateSearchItem(arr) {
    searchItem = arr
}
let searchinput = document.getElementById("search")
const box = document.getElementById('box')
export const btn= document.getElementById('btn')

if (Cookies.get("user")) {
    
    history.pushState(null,null, '/weather')

}else{
    history.pushState(null,null, '/')
}
Routes()
 saveDb()
 loginUser()
 btn.addEventListener("click", ()=>{
    loading.classList.remove('hidden')
    showLoading()
     getApi()
    document.getElementById('search').value=''
}) 

searchinput.addEventListener('input',debounce(suggestion, 200))
// searchinput.addEventListener('input',()=>{
//     if (searchinput.value == "") {
//         console.log(1);
//         box.classList.add("hidden")
//     }
// })
window.addEventListener("popstate",Routes)
export const btnMode = document.getElementById('darkmodebtn')
btnMode.addEventListener("change",()=>{

    document.documentElement.classList.toggle("dark")
    localStorage.theme = document.documentElement.classList

})
if(localStorage.theme === "dark"){
    document.documentElement.classList.add("dark")
}else{
    document.documentElement.classList.remove("dark")
}