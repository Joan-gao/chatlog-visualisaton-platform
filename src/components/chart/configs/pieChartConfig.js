const pieChartConfig = {
  options: {
    labels: [
      'Violent Crime',
      'Property Crime',
      'Cybercrime',
      'Drug-related Crime',
      'Domestic Crime',
      'Public Order Crime',
      'Organized Crime',
      'Others',
    ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  },
  series: [15, 35, 5, 15, 10, 5, 10, 5], // Adjusted data to sum up to 100
};

export default pieChartConfig;
