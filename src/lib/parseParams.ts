/**
 * Converts an object of key-value pairs into a string of parameter assignments.
 * @param {Object} params - The object to be converted.
 * @returns {string} A string of parameter assignments in the form "key1:value1,key2:value2,..."
 */
export default function parseParams(params) {
    let result = '';
    for (const key in params) {
        if (typeof params[key] == 'string') {
            result += `${key}:"${params[key]}",`;
        } else {
            result += `${key}:${params[key]},`;
        }
    }
    return result.slice(0, -1);
}
