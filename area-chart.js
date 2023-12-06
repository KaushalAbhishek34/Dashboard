var data = {
    labels: ['Mar 1', 'Mar 3', 'Mar 5', 'Mar 7','Mar 9', 'Mar 11','Mar 13'],
    datasets: [{
      label: 'Monthly Sales',
      data: [10000, 29000, 18000, 31500, 25000, 32000,38500],
      borderColor: 'rgb(11, 169, 231)', 
      backgroundColor: 'rgb(190, 223, 234)', 
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
            stepSize:10000
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
  var ctx = document.getElementById('myAreaChart').getContext('2d');
  var myAreaChart = new Chart(ctx, {
    type: 'line', // Use 'line' type for area chart
    data: data,
    options: options
  });