var form = document.getElementById("form")
form.addEventListener("click", (e) => {
  fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: 'POST',
    body: new FormData(form),
  })
  .then(data=>data.json())
  .then(res=>{console.log(res);})
  .catch(error =>{console.log(error);});
});
