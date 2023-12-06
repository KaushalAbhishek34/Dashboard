var data = {
    labels: ['January', 'February', 'March', 'April','May', 'June'],
    datasets: [{
      label: 'Monthly Sales',
      data: [4500, 5300, 6000, 7500, 9600, 15000],
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