/**
 * 
 * @param {} params 
 * @returns 
 * @description Parse Object to GraphQL params
 */
export default function parseParams(params) {
    let result = "";
    for (const key in params) {
        if (typeof params[key] == "string") {
            result += `${key}:"${params[key]}",`;
        } else {
            result += `${key}:${params[key]},`;
        }
    }
    return result.slice(0, -1);
}
