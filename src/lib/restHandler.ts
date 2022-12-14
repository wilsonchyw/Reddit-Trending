import axios from 'axios';
const ENDPOINT = 'https://api.rtrend.site/api';
//const ENDPOINT = "http://api.rtrend.site:3003/api";

/**
 * @param {[{option},function] } args
 * @description Call backend server
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
