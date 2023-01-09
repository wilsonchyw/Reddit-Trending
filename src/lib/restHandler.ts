import axios from 'axios';
const ENDPOINT = 'https://api.rtrend.site/api';
//const ENDPOINT = "http://api.rtrend.site:3003/api";

/**
 * Makes HTTP requests using the REST API.
 * @param {Array} args - An array of argument pairs, where each pair consists of an Axios request config object and a callback function.
 * @returns {Promise} A promise that resolves when all of the HTTP requests have completed.
 */
export default async function restHandler(args) {
    const start = Date.now();
    Promise.all(
        args.map(arg => {
            const [option, callback] = arg;
            if (!option.method) option.method = 'get';
            option.url = `${ENDPOINT}${option.url}`;
            return axios(option).then(
                ({ data }) => callback(data),
                value => console.log(value.data)
            );
        })
    ).then(() => {
        const end = Date.now();
        console.log(`Fetch ${args.length} request using REST`);
        console.log(`Time usage: ${end - start}ms`);
        //store.dispatch(setMsg(`Fetch ${args.length} request using REST`))
    });
}
