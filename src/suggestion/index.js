import { userlogin, getdb } from '../login';
import {showLoading} from '../loading'
import {getApi} from '../weather'
import { remove } from 'lodash';
import{postData} from '../weather'
import  {updateSearchItem} from '../../main'
let set
const box = document.getElementById('box')
const box1 = document.getElementById('box1')


let searchinput = document.getElementById("search")
export async function suggestion() {
   await getdb(`?email=${userlogin.email}`).then(res=>{
       set = new Set(res[0].search.reverse())    
       box1.innerHTML=""
       console.log(set);
    Array.from(set).map((item,index) => {
        if (index < 6 && searchinput.value !== "" ) {
                box.classList.remove("hidden")
                box1.innerHTML  += `<p class="item p-3 mb-1 border-2 border-indigo-200"> ${item} </p>`

            }
            
        })
        
   })
}
let body = document.querySelector("body")
body.addEventListener("click",(e)=>{
    if(e.target.id !== 'box') box.classList.add("hidden")
    if (e.target.classList.contains("item")) {
        searchinput.value = e.target.innerHTML
        showLoading()
        getApi()
        // searchinput.value = ""
    }
})
const btnDelete = document.getElementById("btnDelete")

    btnDelete.addEventListener("click" , ()=>{
        getdb(`?email=${userlogin.email}`).then(res=>{ 
            postData(`http://localhost:3000/users/${res[0].id}`,{
                email:userlogin.email,
                password:userlogin.password,
                search:[]
            })
                
              postData( `http://localhost:3000/users/${res[0].id}`,information)
        })
        updateSearchItem([])
       
    })
