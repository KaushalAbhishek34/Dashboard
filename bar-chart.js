var data = {
    labels: ['January', 'February', 'March', 'April','May', 'June'],
    datasets: [{
      label: 'Revenue',
      data: [4215, 5312, 6251, 7841, 9821, 14984],
      borderColor: 'rgb(26, 97, 230)', 
      backgroundColor: 'rgb(26, 97, 230)', 
      borderWidth: 2.5,
      fill:true,
      tension:0.5,
    }]
  };

  // Configuration options
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category',
        labels: data.labels,
        grid: {
            display:false,
        }
      },
      y: {
        beginAtZero: true,
        ticks:{
            stepSize:5000
        }
      },
      

    },
    plugins: {
      legend: {
        display: false,
        position: 'top',
      }
    }
  };

  // Create the area chart
  var ctx = document.getElementById('myBarChart').getContext('2d');
  var myAreaChart = new Chart(ctx, {
    type: 'bar', // Use 'line' type for area chart
    data: data,
    options: options
  });