document.getElementById('form').addEventListener('submit',async function(event){
event.preventDefault();
let firstName=document.getElementById('firstname').value;
let lastName=document.getElementById('lastname').value;
let age=document.getElementById('age').value;
let data={
    firstName:firstName,
    lastName:lastName,
    age:age
}
console.log({data});
let result =await fetch ('https://dummyjson.com/users/add',{
method:'Post',
headers:{
    'Content-Type':'application/json'
},
body:JSON.stringify(data)
})
.then(response=>response.Json())
.then(response=>response)
.catch(error=>error.message)
let success =document.getElementById('success')
result && result.id? success.innerHTML='user created successfully':
success.innerHTML='user not created'
console.log({result});

});