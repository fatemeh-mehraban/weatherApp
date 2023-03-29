
const form = document.getElementById('formregister')
let information
export const saveDb = ()=>{
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        information = {
            email:form.email.value,
            password:form.password.value,
            search:[]
         }
        postdb(information)
        form.reset()
    })

}
export async function postdb(info){
        await fetch("http://localhost:3000/users", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(info),
          });
}

