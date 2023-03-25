export const barChartData = [
    {
        name: 'Sales',
        data: [15, 25, 28, 10, 25, 20]
    }
];

export const barChartOptions = {
    chart: {
        toolbar: {
            show: false
        }
    },

    tooltip: {
        theme: 'dark'
    },
    xaxis: {
        labels: {
            style: {
                colors: 'rgba(40, 47, 74, 1)',
                fontSize: '12px'
            }
        },
        type: 'datetime',
        show: true,
        axisBorder: {
            show: false
        }
    },
    yaxis: {
        show: true,
        color: 'rgb(49, 56, 96)',
        labels: {
            show: true,
            style: {
                colors: 'rgb(49, 56, 96)',
                fontSize: '14px'
            }
        }
    },
    fill: {
        colors: '#ED8936'
    },
    dataLabels: {
        enabled: false
    },
    grid: {
        strokeDashArray: 5
    },
    plotOptions: {
        bar: {
            borderRadius: 15,
            columnWidth: '15px'
        }
    },
    responsive: [
        {
            breakpoint: 768,
            options: {
                plotOptions: {
                    bar: {
                        borderRadius: 0
                    }
                }
            }
        }
    ]
};

export const pieChartOptions = {
    chart: {
        width: 380,
        type: 'donut'
    },
    dataLabels: {
        enabled: false
    },
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    show: false
                }
            }
        }
    ],
    legend: {
        position: 'right',
        offsetY: 0,
        height: 230
    }
};

export const lineChartOptions = {
    chart: {
        id: 'apexchart-example',
        toolbar: {
            show: true
        },
        events: {},
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 1000,
            animateGradually: {
                enabled: true,
                delay: 10
            },
            dynamicAnimation: {
                enabled: true,
                speed: 50
            }
        }
    },
    tooltip: {
        theme: 'dark',
        y: {
            formatter: undefined,
            title: {
                formatter: seriesName => {
                    if (/@/.test(seriesName)) {
                        return seriesName.split('@')[1];
                    }
                    return seriesName;
                }
            }
        }
    },
    dataLabels: {
        enabled: false
    },

    stroke: {
        width: 3,
        curve: 'straight'
    },
    xaxis: {
        type: 'datetime',
        axisTicks: {
            show: false
        },
        axisBorder: {
            show: true
        },
        labels: {
            style: {
                colors: '#fff',
                fontSize: '12px'
            },
            datetimeUTC: false
            //formatter: (value) => { return new Date(parseInt(value)).toLocaleTimeString().split(":").slice(0,2).join(":") },
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: '#fff',
                fontSize: '12px'
            }
        },
        min: 50,
        max: 2000
    },
    legend: {
        show: false
    },
    grid: {
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.5,
            inverseColors: true,
            opacityFrom: 0.8,
            opacityTo: 0,
            stops: []
        },
        colors: ['#fff', '#3182CE']
    },
    colors: ['#fff', '#3182CE']
};
