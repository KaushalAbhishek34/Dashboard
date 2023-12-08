function toggleMainContent() {
  $('main').toggleClass('shifted');
}
$(document).ready(function () {
  // Open sidebar by default on large screens
  if (window.innerWidth >= 768) {
    $('.sidebar').addClass('show'); // Use Bootstrap's show class to open the sidebar
    toggleMainContent(); // Apply the main content toggle function
  }

  // Toggle sidebar on button click
  $('#sidebarToggle').click(function () {
    $('.sidebar').toggleClass('show');
    toggleMainContent(); // Apply the main content toggle function
  });
});


new DataTable('#example');


