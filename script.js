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
new DataTable('#example');
// new DataTable('#userTable')



// for user table


document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch user data from the API
  async function fetchUserData() {
      try {
          const response = await fetch("https://fakestoreapi.com/users");
          const data = await response.json();
          return data;
      } catch (error) {
          console.error("Error fetching user data:", error);
          return [];
      }
  }

  // Function to generate HTML table from data
  function generateTable(data) {
      var tbody = document.getElementById('tbody');

      // Clear existing content in tbody
      tbody.innerHTML = '';

      // Populate the table with data
      data.forEach(function (user) {
          var row = tbody.insertRow();

          // Extract relevant data from the user object
          var userId = user.id;
          var firstName = user.name.firstname;
          var lastName = user.name.lastname;
          var email = user.email;
          var username = user.username;
          var password = user.password;
          var phone = user.phone;

          // Create cells in the row
          var cellId = row.insertCell();
          var cellFirstName = row.insertCell();
          var cellLastName = row.insertCell();
          var cellEmail = row.insertCell();
          var cellUsername = row.insertCell();
          var cellPassword = row.insertCell();
          var cellPhone = row.insertCell();

          // Add data to cells
          cellId.textContent = userId;
          cellFirstName.textContent = firstName;
          cellLastName.textContent = lastName;
          cellEmail.textContent = email;
          cellUsername.textContent = username;
          cellPassword.textContent = password;
          cellPhone.textContent = phone;
      });
  }

  // Fetch user data and generate the table
  fetchUserData().then(generateTable);
});