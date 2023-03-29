// import { searchItem } from '../weather'
// import { getdb,userlogin } from '../login'
// import {postdb} from '../saveInfodb'
// let data
// export function postSearchDb() {
//     data =[searchItem] 
//     getdb(`?email=${userlogin.email}`).then(res=>{ 
//         // postData(`http://localhost:3000/users/${res[0].id}`,{data})
//         postData(`http://localhost:3000/users/${res[0].id}`,{
//             email:userlogin.email,
//             password:userlogin.password,
//             search:data
//         })
//     })
//     // })
//     searchItem = []
    
// }

// async function postData(url, data) {
//     const response = await fetch(url, {
//       method: 'PUT',
//       headers:{ 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//     })
//   }
