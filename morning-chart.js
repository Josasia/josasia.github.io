var surveyChart = document.getElementById("surveys").getContext('2d');
var myChart = new Chart(surveyChart, {
 type: 'pie',
 data: {
    labels: ["Custom Color", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
        label: '# of Votes',
        data: [25, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(00, 11, 000, 1)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(00, 11, 000, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 0
    }]
  },
  options: {
    legend: {
    display: false,
      }
    }
 });



 var blocksChart = document.getElementById("blocks").getContext('2d');
 var myChart = new Chart(blocksChart, {
  type: 'bar',
  data: {
     labels: ["Custom Color", "Blue", "Yellow", "Green", "Purple", "Orange"],
     datasets: [{
         label: '# of Votes',
         data: [25, 19, 3, 5, 2, 3],
         backgroundColor: [
             'rgba(00, 11, 000, 1)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(153, 102, 255, 0.2)',
             'rgba(255, 159, 64, 0.2)'
         ],
         borderColor: [
             'rgba(00, 11, 000, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
             'rgba(153, 102, 255, 1)',
             'rgba(255, 159, 64, 1)'
         ],
         borderWidth: 0
     }]
   },
   options: {
     }
  });
