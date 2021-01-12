let buttton = document.getElementById('button');
let modal = document.getElementById('page-modal');
let close = document.getElementById('hide');
let button1 = document.getElementById('button1');
let form = document.getElementById('form');
//*var close = document.getElementsByClassName('modal-close');

buttton.onclick = function(){
  modal.style.display = 'block';
}

close.onclick = function(){
  modal.style.display = 'none';
}

window.onclick = function(event){
  if (event.target.className == 'modal-background'){
      modal.style.display = 'none';
  }
}

// button1.addEventListener('click', function(){
  // submit();
// });
