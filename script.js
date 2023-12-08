function toggleMainContent() {
  $('main').toggleClass('shifted');
}
$(document).ready(function () {
  // Open sidebar by default on large screens
  if (window.innerWidth >= 992) {
    $('.sidebar').addClass('show'); 
    toggleMainContent(); 
  }

  // Toggle sidebar on button click
  $('#sidebarToggle').click(function () {
    $('.sidebar').toggleClass('show');
    toggleMainContent(); // Apply the main content toggle function
  });
});


new DataTable('#example');


