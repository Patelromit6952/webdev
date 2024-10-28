document.querySelector('#button').addEventListener('click',function(){
   const name = document.getElementById('username').value;
   const requesturl = `https://api.github.com/users/${name}`
   const xhr = new XMLHttpRequest();
   xhr.open('GET', requesturl)
   // console.log("hi");
   xhr.onreadystatechange = function(){
       if(xhr.readyState === 4){
           const data = JSON.parse(this.responseText)
           document.getElementById('followers').innerHTML = "Followers:"+ data.followers
           document.getElementById('followings').innerHTML = "Followings:"+data.following
           document.getElementById('Repository').innerHTML = "Number_Of_Repository:"+data.public_repos
           
       }
   }
   xhr.send()
})