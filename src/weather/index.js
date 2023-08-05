import { showLoading, hiddenLoading} from '../loading/index'
const section = document.getElementById('weather')
const url = `https://api.openweathermap.org/data/2.5/weather?lat=35.7219&lon=51.3347`
export const search = document.getElementById('search')
const name = document.getElementById('name')
const weatherShow=document.getElementById('weatherShow')
const wind = document.getElementById('wind')
const icon = document.getElementById('icon')
const temp = document.getElementById('temp')
import {searchItem} from '../../main'
import { userlogin, getdb } from '../login';
import {img} from '../svg'
export async function getApi() {
    try{
        const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=c2a5e5757bf8e2de367336c584de74bd&units=metric`)
        if(!req.ok ){
            throw new Error('error')
        }
        const res = await req.json()
        console.log(res);
    name.innerHTML = res.name
    icon.setAttribute("src",img[res.weather[0].icon])
    temp.innerHTML = res.main.temp
    weatherShow.innerHTML= res.weather[0].main
    wind.innerHTML= `<img src="img/22903-7-wind-transparent-background.png" alt="" class="w-10"> `+ res.wind.speed
    searchItem.push(res.name)
    postSearchDb()
    }catch(err){ 
    console.log(err)
    }
    hiddenLoading()
}





    export function postSearchDb() {
        getdb(`?email=${userlogin.email}`).then(res=>{ 
            // postData(`http://localhost:3000/users/${res[0].id}`,{data})
            postData(`http://localhost:3004/users/${res[0].id}`,{
                email:userlogin.email,
                password:userlogin.password,
                search:searchItem
            })
        })
        // })
        
    }
    // searchItem = []
    
   export async function postData(url, data) {
        const response = await fetch(url, {
          method: 'PUT',
          headers:{ 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
      }
