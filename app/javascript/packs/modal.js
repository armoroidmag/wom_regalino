const button = document.getElementById('button');
const modal = document.getElementById('page-modal');
const close = document.getElementById('hide');

button.onclick = function(){
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

const button2 = document.getElementById('search-btn');
const modal2= document.getElementById('page-modal2');
const close2 = document.getElementById('hide2');
let modals = document.querySelectorAll('.modal');
const modalBtn = document.querySelectorAll('.modal-btn');
const closeBtn = document.getElementsByClassName('btn-close')[0];

// Function to OPEN modal
function openModal() {
  modal2.style.display = "block";
}
// Function to CLOSE modal
function closeModal() {
  modal2.style.display = "none";
}
// Function to CLOSE modal
function outsideClick(e) {
  if(e.target.className == 'modal-background') {
    modal2.style.display = "none";
  }
}

modalBtn.forEach(function(e) {
  e.addEventListener('click', openModal);
  })
  // Listen for CLOSE Click
  closeBtn.addEventListener('click', closeModal);
  // Listen for OUTSIDE Click
  window.addEventListener('click', outsideClick);
  
  button2.onclick = function(){
    modal2.style.display = 'block';
  }
  
  close2.onclick = function(){
    modal2.style.display = 'none';
  }
  
  window.onclick = function(event){
    if (event.target.className == 'modal-background'){
        modal2.style.display = 'none';
    }
  }
  