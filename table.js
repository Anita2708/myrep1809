let header = document.getElementById ('history-name');

header.addEventListener('click', function() {
  let article = document.getElementById('content');
  if (article.style.display === 'none') {
    article.style.display = 'block';
  } else {
    article.style.display = 'none';
  }
});

let boxGroupNumber = document.querySelectorAll('#group');
Array.from (boxGroupNumber).forEach( function (group){
group.addEventListener('click', function() {
    let series = document.getElementById('table-series');

    if (series.className === 'table-sub') {
      series.classList.add ('table-sub--outline');
    } else {
      series.classList.remove ('table-sub--outline');
    }
  });
})


// add element to DOM
let list = document.querySelector('.learn-list ul');
let addElement = document.forms ['add-element'];

addElement.addEventListener('submit', function() {
let value = addElement.querySelector('input[type="text"]').value;

let li = document.createElement('li');
let elementName = document.createElement('span');
let deleteBtn = document.createElement('button');

  deleteBtn.textContent = 'delete';
  elementName.textContent = value;
  
  li.appendChild(elementName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  
  li.classList.add ('list');
  elementName.classList.add ('name');
  deleteBtn.classList.add ('btn-delete');
});

/*
let list = document.querySelector('.learn-list ul');
let addElement = document.forms ['add-element'];

addElement.addEventListener('submit', function() {
let value = addElement.querySelector('input[type="text"]').value;

let li = document.createElement('li');
let elementName = document.createElement('span');
let deleteBtn = document.createElement('button');

let elemNames = document.querySelectorAll('box__element');
for (let i=0; i<elemNames.length; i++) {
  if ([i] === value) {
    deleteBtn.textContent = 'delete';
    elementName.textContent = value;
    
    li.appendChild(elementName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    
    li.classList.add ('list');
    elementName.classList.add ('name');
    deleteBtn.classList.add ('btn-delete');
  } else {
    alert ('invalid value');
  }
} 
});*/

/*delete
let btns = document.querySelectorAll('.btn-delete');
Array.from(btns).forEach(function(btn){
btn.addEventListener('click', function() {

  let li = target.parentElement;

  li.parentNode.removeChild(li);
})
});*/

list.addEventListener('click', function(e) {
  if (e.target.className === 'btn-delete') {
    let li = e.target.parentElement;
    list.removeChild(li);
  }
});

// checkbox (hide/shove)
let hideBox = document.querySelector('#hide');
hideBox.addEventListener('change',function (){
  if (hideBox.checked){
    list.style.display = 'none';
  } else {
    list.style.display = 'initial';
  }
});

/* modal window
let modalElement = document.querySelector('.modal-window');
let btnSign = document.querySelector('.btn-sign');
let btnClose = document.querySelector('.btn--close');

btnSign.addEventListener('click', function () {
  modalElement.style.display = 'block';
});

btnClose.addEventListener('click', function () {
  modalElement.style.display = 'none';
});*/