    
    // toggle button functionality
    document.addEventListener('DOMContentLoaded', function () {
      const toggleBtn = document.getElementById('toggle-btn');
      const sidebar = document.getElementById('sidebar');
    
      toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('open');
      });
    
      // Open sidebar by default on large screens
      if (window.innerWidth >= 993) {
        sidebar.classList.add('open');
      }
    });

    
    
    // Data table
    
    new DataTable('#example');
    

