const GraphOptions = {
  type: 'line',
  data: {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ],
    datasets: [{
      label: 'D1',
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 5,
      pointBackgroundColor: ['#000'],
      fill: false,
      pointStyle: ['circle'],
      backgroundColor: '#aaa',
      borderColor: '#777',
      data: [0, 10, 5, 2, 20, 30, 45],
    }],
  },
  options: {
    animation: {
      duration: 0,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#fff',
        },
        grid: {
          color: '#222',
          borderColor: '#222',
          borderWidth: 3,
        },
      },
      y: {
        ticks: {
          color: '#fff',
        },
        grid: {
          color: '#222',
          borderColor: '#222',
          borderWidth: 3,
        },
      },
    },
  },
};

export default GraphOptions;
