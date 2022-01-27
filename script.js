const form = document.querySelector('.validation_form')
const admin_btn = form.querySelector('.btn')
const input_pass = form.querySelector('.pass-field__input')
const input_login= form.querySelector('.text-field__input')
const fields = form.querySelectorAll('.field')
const user_form =document.querySelector('.container_admin')
const user_block = document.querySelector('.user_block')
const input_search = document.querySelector('.input_search')



form.addEventListener('submit', function (event) {
    event.preventDefault()
    let errors = form.querySelectorAll('.error')

    for (var i = 0; i < errors.length; i++) {
         errors[i].remove()
    }
    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].value) {
        console.log('field is blank', fields[i])
        let error = document.createElement('div')
          error.className = 'error'
          error.style.color = 'red'
          error.innerHTML = 'Ошибка в заполнении формы'
          form[i].parentElement.insertBefore(error, fields[i])
          
      } else{
        admin_btn.removeAttribute('disabled');
        }
    }
  })

  
admin_btn.addEventListener('click', function(){
    user_form.style.display='flex';
     GetUsers ()
}) 

    async function GetUsers () {    
      const url = 'https://jsonplaceholder.typicode.com/users';
      const response = await fetch(url)
      const data = await response.json()
             
          data.forEach((user, index)=>{
                  let li = document.createElement('li')
                  li.classList.add("user_card")
                  li.innerHTML = `
                           <span class="user_card_name">${user.name}</span>
                           <span class="user_card_web"><a href="http://${user.website}" target="_blank">${user.website} </a></span>
                           `
                user_block.appendChild(li)
          })
          localStorage.setItem('users',JSON.stringify(data)) 
    }


        input_search.addEventListener('keypress', (event)=>{
          let input_key= event.target.value;
        }) 

          const users = JSON.parse(localStorage.getItem('users')) 
            users.forEach(user=>{
              let nameArr=[]
              nameArr.push(user.name)
              let wordNameArr= nameArr.map(item=>
                item.toLowerCase().split('')
              )

              console.log(wordNameArr)

             /* for (i = 0, i < wordNameArr.length, i++) {
                console.log(wordNameArr[i])
            }*/
          })