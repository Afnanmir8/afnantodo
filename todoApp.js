//  let btn = document.querySelector('button');
//  let ul = document.querySelector('ul');
//  let inp = document.querySelector('input');


//  btn.addEventListener('click', function()
// {
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let delBtn = document.createElement('button');
//     delBtn.innerText = "delete";
//     delBtn.classList.add('delete');


//     delBtn.addEventListener('click',function()
//     {
        
//         item.remove();
//     })

//     item.appendChild(delBtn);
   
//     ul.appendChild(item);

//     // its black the input value after clicked the button.
//     inp.value = "";
// })


let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener('click',function()
{
    let item = document.createElement('li');
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";


  let delBtn = document.createElement('button');
  delBtn.innerText = "delete";
  delBtn.classList.add('delete');

  delBtn.addEventListener('click',function()
{
    item.remove();
})

item.appendChild(delBtn);


})

