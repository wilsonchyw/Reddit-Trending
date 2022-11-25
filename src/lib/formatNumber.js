/**
 * 
 * @param {*} x 
 * @returns string
 * @description Convert number to comma style number
 */
export default function formatNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
