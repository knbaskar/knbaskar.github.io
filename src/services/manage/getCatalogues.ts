interface catalogueList {
    "_id": string,
    "merchant_id": string,
    "location_id": string,
    "catalogue_id": string,
    "name": string,
    "alias_code": string,
    "description": string,
    "catalogue_type": string,
    "category": string,
    "subcategory": string
}

//const apiName = 'https://mohanakrish24-sample1.hf.space';
const apiName =  import.meta.env.VITE_API_URL;
export async function fetchCatalogues(requestPayload: any): Promise<catalogueList[]> {
    const serviceName = '/api/v1/catalogue/';
    // Since this request will send JSON data in the body,
    // we need to set the `Content-Type` header to `application/json`
    const headers: Headers = new Headers()
    headers.set('Content-Type', 'application/json')
    // We also need to set the `Accept` header to `application/json`
    // to tell the server that we expect JSON in response
    headers.set('Accept', 'application/json');

    // const request: RequestInfo = new Request(`${apiName}${serviceName}`, {
    //     // We need to set the `method` to `POST` and assign the headers
    //     method: 'POST',
    //     headers: headers,
    //     // Convert the user object to JSON and pass it as the body
    //     body: JSON.stringify(requestPayload)
    // })


    const request: RequestInfo = new Request(`${apiName}${serviceName}?merchant_id=M001&offset=0&limit=10`, {
        // We need to set the `method` to `POST` and assign the headers
        method: 'GET',
        headers: headers
    })

    // Send the request and print the response
    return fetch(request)
        .then(res => res.json())
        .then(res => {
        return res as catalogueList[];
        })
  }