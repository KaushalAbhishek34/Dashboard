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
    
        var userId = user.id;
        var firstName = user.name.firstname;
        var lastName = user.name.lastname;
        var email = user.email;
        var username = user.username;
        var password = user.password;
        var phone = user.phone;
        tab +=`<tr>
           <td>${userId}</td>
           <td>${firstName}</td>
           <td>${lastName}</td>
           <td>${email}</td>
           <td>${username}</td>
           <td>${password}</td>
           <td>${phone}</td>
         </tr>`
    });
    document.getElementById('tbody').innerHTML = tab;


  $('#userTable').DataTable({
    "lengthMenu": [3,5,10],
    "pageLength": 3
  })  
}



