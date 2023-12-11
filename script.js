// for sidebar
function toggleMainContent() {
  $('main').toggleClass('shifted');
}
$(function () {
  // Open sidebar by default on large screens
  if (window.innerWidth >= 992) {
    $('.sidebar').addClass('show'); 
    toggleMainContent(); 
  }
});

// for table example
$('#example').DataTable();






// for user table

async function getData(){
  const records = await fetch('https://fakestoreapi.com/users')
  const data = await records.json();

  let tab='';
  data.forEach(user => {
        tab +=`<tr>
           <td>${user.id}</td>
           <td>${user.name.firstname}</td>
           <td>${user.name.lastname}</td>
           <td>${user.email}</td>
           <td>${user.username}</td>
           <td>${user.password}</td>
           <td>${user.phone}</td>
         </tr>`
    });
    document.getElementById('tbody').innerHTML = tab;


  $('#userTable').DataTable({
    "lengthMenu": [3,5,10],
    "pageLength": 3
  })  
}



