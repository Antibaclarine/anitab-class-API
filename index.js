const userContainer=document.getElementById('user')

const getUsers=()=>{
  return  fetch('https://dummyjson.com/users?limit=100')
    .then(response =>response.json())
    .then(response=>response)
    .catch(error=>error)
}
getUsers();
const displayUsers=async()=>{
    const users =await getUsers();
    console.log(users);
    users.users.map(item=>{
        console.log(item);
        let div=document.createElement('div')
        let image =document.createElement('img')
        let name=document.createElement('h2')
        let userName=document.createElement('p')
        image.src=item.image
        name.innerHTML=`${item.firstname} ${item.lastname}`;
        userName.innerHTML=item.username;
        div.appendChild(image);
        div.appendChild(name);
        div.appendChild(userName);
        div.setAttribute('key',item.id)
        div.setAttribute('class','people')
        userContainer.appendChild(div)

    });
}
displayUsers();