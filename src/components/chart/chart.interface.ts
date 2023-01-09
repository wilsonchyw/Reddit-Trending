/**
 * An interface for the data and options needed to render a bar chart.
 * @interface
 * @property {Object} data - The data for the bar chart.
 * @property {string[]} data.labels - The labels for the bar chart.
 * @property {any[]} data.data - The data for the bar chart.
 * @property {string} title - The title for the bar chart.
 * @property {string} subTitle - The subtitle for the bar chart.
 */
export default interface ChartInterface {
    data: {
        labels: string[];
        data: any[];
    };
    title: string;
    subTitle: string;
}

