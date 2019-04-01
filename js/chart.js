// first chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
        type: 'line',
        data: {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                datasets: [{
                        label: 'New Visitor',
                        data: [3, 3, 8, 5, 7, 4, 6, 4, 6, 3],
                        backgroundColor: '#b47fe9',
                        borderColor: "transparent",
                        pointRadius :"0",
                        borderWidth: 3
                }, {
                        label: 'Old Visitor',
                        data: [7, 5, 14, 7, 12, 6, 10, 6, 11, 5],
                        backgroundColor: "#dbc2f5",
                        borderColor: "transparent",
                        pointRadius :"0",
                        borderWidth: 1
                }]
        },
        options: {
                legend: {
                    display: false,
                    labels: {
                        fontColor: '#585757',  
                        boxWidth:40
                }
        },
        tooltips: {
            displayColors:false
    },  
    scales: {
            xAxes: [{
                ticks: {
                        beginAtZero:true,
                        fontColor: '#585757'
                },
                gridLines: {
                    display: true ,
                    color: "rgba(0, 0, 0, 0.05)"
            },
    }],
        yAxes: [{
            ticks: {
                    beginAtZero:true,
                    fontColor: '#585757'
            },
            gridLines: {
                display: true ,
                color: "rgba(0, 0, 0, 0.05)"
        },
    }]
}
}
});  

// second chart
var ctx = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
                labels: ["Direct", "Affiliate", "E-mail", "Other"],
                datasets: [{
                        backgroundColor: [
                        "#14abef",
                        "#02ba5a",
                        "#d13adf",
                        "#fba540"
                        ],
                        data: [5856, 2602, 1802, 1105],
                        borderWidth: [0, 0, 0, 0]
                }]
        },
        options: {
             legend: {
                 position :"bottom",    
                 display: false,
                 labels: {
                    fontColor: '#ddd',  
                    boxWidth:15
            }
    }
    ,
    tooltips: {
            displayColors:false
    }
    }
});

// chart6
var ctx = document.getElementById('dash2-chart1').getContext('2d');

var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                            label: 'Orders',
                            data: [25, 23, 27, 15, 27, 23, 31, 41, 31, 25, 35, 25, 30],
                            backgroundColor: 'rgba(0, 0, 0, 0.07)',
                            borderColor: "transparent",
                            borderWidth: 3
                    }, {
                            label: 'Payments',
                            type: 'line',
                            data: [10, 8, 12, 5, 12, 8, 16, 25, 15, 10, 20, 10, 15],
                            backgroundColor: "rgba(3, 208, 234, 0.23)",
                            borderColor: "#03d0ea",
                            pointBackgroundColor:'transparent',
                            pointHoverBackgroundColor:'#03d0ea',
                            pointBorderWidth :2,
                            pointRadius :3,
                            pointHoverRadius :3,
                            borderWidth: 3
                            
                    }]
            },
    options: {
            legend: {
                display: false,
                labels: {
                    fontColor: '#585757',  
                    boxWidth:40
                }
            },
            tooltips: {
                displayColors:false
            },  
        scales: {
                xAxes: [{
                    barPercentage: .3,
                    ticks: {
                            beginAtZero:true,
                            fontColor: '#585757'
                    },
                    gridLines: {
                        display: true ,
                        color: "rgba(0, 0, 0, 0.05)"
                    },
                }],
                 yAxes: [{
                    ticks: {
                            beginAtZero:true,
                            fontColor: '#585757'
                    },
                    gridLines: {
                        display: true ,
                        color: "rgba(0, 0, 0, 0.05)"
                    },
                }]
             }

     }
    }); 

