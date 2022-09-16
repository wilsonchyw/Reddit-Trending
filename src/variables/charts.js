export const barChartData = [
    {
        name: "Sales",
        data: [15, 25, 28, 10, 25, 20],
    },
];

export const barChartOptions = {
    chart: {
        toolbar: {
            show: false,
        },
    },

    tooltip: {
        theme: "dark",
    },
    xaxis: {
        labels: {
            style: {
                colors: "#A0AEC0",
                fontSize: "12px",
            },
        },
        type: "datetime",
        show: true,
        axisBorder: {
            show: false,
        },
    },
    yaxis: {
        show: true,
        color: "#A0AEC0",
        labels: {
            show: true,
            style: {
                colors: "#A0AEC0",
                fontSize: "14px",
            },
        },
    },
    fill: {
        colors: "#ED8936",
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        strokeDashArray: 5,
    },
    plotOptions: {
        bar: {
            borderRadius: 15,
            columnWidth: "15px",
        },
    },
    responsive: [
        {
            breakpoint: 768,
            options: {
                plotOptions: {
                    bar: {
                        borderRadius: 0,
                    },
                },
            },
        },
    ],
};

export const lineChartData = [
    {
        name: "Mobile apps",
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
    {
        name: "Websites",
        data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
    },
];

export const pieChartOptions = {
    chart: {
        width: 380,
        type: "donut",
    },
    dataLabels: {
        enabled: false,
    },
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                },
                legend: {
                    show: false,
                },
            },
        },
    ],
    legend: {
        position: "right",
        offsetY: 0,
        height: 230,
    },
};

export const lineChartOptions = {
    chart: {
        toolbar: {
            show: true,
        },
        events: {},
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 50
            },
            dynamicAnimation: {
                enabled: true,
                speed: 150
            }
        }
    },
    tooltip: {
        theme: "dark",
    },
    dataLabels: {
        enabled: false,
    },
    
    stroke: {
        width: 3,
        curve: "straight",
    },
    xaxis: {
        type: "datetime",
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: true,
        },
        labels: {
            style: {
                colors: "#fff",
                fontSize: "12px",
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: "#fff",
                fontSize: "12px",
            },
        },
        min: 0,
        max: 2000,
    },
    legend: {
        show: false,
    },
    grid: {
        yaxis: {
            lines: {
                show: false,
            },
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.5,
            inverseColors: true,
            opacityFrom: 0.8,
            opacityTo: 0,
            stops: [],
        },
        colors: ["#fff", "#3182CE"],
    },
    colors: ["#fff", "#3182CE"],
};
