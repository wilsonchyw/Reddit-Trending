import axios from "axios";

const ENDPOINT = "https://api.rtrend.site/graphql";
//const ENDPOINT = "http://api.rtrend.site:3003/graphql";

//store.subscribe(restHandler)
export default async function graphQLHandler(data, callBacks = null) {
    const opt = {
        method: "POST",
        url: ENDPOINT,
        headers: { "content-type": "application/json" },
        data: { query: data },
    };
    const start = Date.now();

    /* return axios
        .post(ENDPOINT, { query: data }, { headers: { "content-type": "application/json" } }) */
    return axios(opt)
        .then(({ data }) => data.data)
        .then((data) => {
            console.log(data);
            callBacks.forEach((callback) => {
                try {
                    callback(data);
                } catch (e) {
                    console.log(callback);
                    console.log(e);
                }
            });
        })
        .catch((e) => console.log(e))
        .finally(() => {
            const end = Date.now();
            console.log(`Fetch ${callBacks.length} request using GraphQL`);
            console.log(`Time usage: ${end - start}ms`);
            //store.dispatch(setMsg(`Fetch ${callBacks.length} request using GraphQL`))
        });
}
