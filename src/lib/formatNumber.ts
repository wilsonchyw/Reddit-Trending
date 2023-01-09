/**
 * Formats a number by adding commas as thousands separators.
 * @param {number} x - The number to be formatted.
 * @returns {string} A string representation of the formatted number.
 */
export default function formatNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
