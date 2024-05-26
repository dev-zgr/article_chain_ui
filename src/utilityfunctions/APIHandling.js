import {BACK_END_URL} from "../config/config";

export const prepareURL = (path) => {
    return `${BACK_END_URL}${path}`;
}


export const addParametersToURL = (url, parameters) => {
    // Create a new URL object from the provided URL string
    const urlObject = new URL( url);

    // Check if parameters is an object
    if (parameters && typeof parameters === 'object') {
        // Iterate over the parameters object and append each key-value pair to the URL
        for (const key in parameters) {
            urlObject.searchParams.append(key, parameters[key]);
        }
    }

    // Convert the URL object back to a string and return it
    return urlObject.toString();
};


export const apiLoader = async (url,source) => {
    const response = await fetch(url, {});
    if (response.status === 200) {
        return await response.json();
    } else if(response.status === 500){
        throw new Error("Something went wrong")
    }else if(response.status === 401){
        throw new Response(JSON.stringify({header: "You aren't allowed to be here ❌", description: "401 Unauthorized"}), {status: 401});
    }else if(response.status === 404){
        throw new Response(JSON.stringify({header: `${source} Not Found 🔎`, description:` "We couldn't find the ${source} you've looking for..."`}), {status: 404});
    }else {
        return await response.json();
    }

}


export const extractParameters = (path) => {
    const queryString = path.split("?")[1];
    if (!queryString) {
        return {}; // Return an empty object if there are no query parameters
    }
    const params = new URLSearchParams(queryString);
    const parameters = {};
    for (const [key, value] of params.entries()) {
        parameters[key] = value;
    }
    return parameters;
};

    export const genericLoader = async (url, parameters) => {
        const firstUrl = prepareURL(url);
        const newUrl = addParametersToURL(firstUrl, parameters);
        const response = await fetch(newUrl);
        if (response.status === 200) {
            return await response.json();
        }else if(response.status === 204){
            return await response.json();
        }else if(response.status === 500){
            throw new Error("Something went wrong")
        }
        else {
            return await response.json();
        }

    }


export const addPathVariablesToURL = (url, pathVariables) => {
    return `${url}/${pathVariables}`;
}