var buttton = document.getElementById('button');
var modal = document.getElementById('page-modal');
var close = document.getElementById('hide');
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