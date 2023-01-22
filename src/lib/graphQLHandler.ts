import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

const ENDPOINT = 'https://api.rtrend.site/graphql';
//const ENDPOINT = 'http://api.rtrend.site:3003/graphql';

/**
 * Sends a GraphQL query to the specified endpoint and handles the response.
 * @param {string} query - The GraphQL query to send.
 * @param {Object} params - The variables to include in the query.
 * @param {function[]} [callBacks=null] - An array of callback functions to be called with the response data.
 * @returns {Promise} A promise that resolves when the query has been sent and the response has been handled.
 */
export default async function graphQLHandler(query, params, callBacks = null) {
    const graphqlQuery = {
        //operationName: 'fetch',
        query: query,
        variables: params
    };
    const headers: AxiosRequestHeaders = { 'content-type': 'application/json' };
    const opt: AxiosRequestConfig = {
        method: 'POST',
        url: ENDPOINT,
        headers: headers,
        data: graphqlQuery
    }; //as AxiosRequestConfig;
    const start = Date.now();

    //axios.defaults.headers.common['Content-type'] = 'application/json'

    return axios(opt)
        .then(({ data }) => data.data)
        .then(data => {
            console.log(data);
            callBacks.forEach(callback => {
                try {
                    callback(data);
                } catch (e) {
                    console.log(callback);
                    console.log(e);
                }
            });
        })
        .catch(e => console.log(e))
        .finally(() => {
            const end = Date.now();
            console.log(`Fetch ${callBacks.length} request using GraphQL`);
            console.log(`Time usage: ${end - start}ms`);
            //store.dispatch(setMsg(`Fetch ${callBacks.length} request using GraphQL`))
        });
}
