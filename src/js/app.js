let add = document.getElementById('add');
let list = document.getElementById('task-list');

add.addEventListener("click", function(){
    list.innerHTML = list.innerHTML + '<li class="list-group-item">'+document.getElementById('taskName').value+'</li>';
});

if('serviceWorker' in navigator){

 navigator.serviceWorker.register('/sw.js')

   .then(reg => console.log('service worker registered'))

   .catch(err => console.log('service worker not registered', err));

}
 



