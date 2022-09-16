import axios from "axios";
const ENDPOINT = "https://api.rtrend.site/api";
export default async function apiHandler(option, callBack = null) {
    if (!option.url) throw new Error("URL must be present in option");
    if (!option.method) option.method = "get";
    option.url = `${ENDPOINT}${option.url}`
    return axios(option)
        .then(({ data }) => {
            //console.log(data)
            if (callBack) {
                callBack(data);
            } else {
                return data;
            }
        })
        .catch((e) => console.log(e));
}
