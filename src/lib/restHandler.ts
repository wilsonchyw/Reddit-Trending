import axios from 'axios';
//const ENDPOINT = 'https://api.reddittrend.com/api';
const ENDPOINT = process.env.NODE_ENV === 'production' ? 'https://api.reddittrend.com/api' : "https://api.reddittrend.com/api"//'http://api.reddittrend.com:3003/api';

/**
 * Makes HTTP requests using the REST API.
 * @param {Array} args - An array of argument pairs, where each pair consists of an Axios request config object and a callback function.
 * @returns {Promise} A promise that resolves when all of the HTTP requests have completed.
 */
export default async function restHandler(args) {
    const start = Date.now();
    return Promise.all(
        args.map(arg => {
            const [option, callback] = arg;
            if (!option.method) option.method = 'get';
            option.url = `${ENDPOINT}${option.url}`;
            //console.log({option})
            //console.log(option.url)
            return axios(option).then(
                res => {
                    const { data } = res;
                    if (callback) {
                        callback(data);
                    } else {
                        return data;
                    }
                },
                value => console.log('value => ', value.data)
            );
        })
    ).then(data => {
        //console.log(data)
        const end = Date.now();
        //console.log(`Fetch ${args.length} request using REST`);
        //console.log(`Time usage: ${end - start}ms`);
        //store.dispatch(setMsg(`Fetch ${args.length} request using REST`))
        return data;
    });
}
