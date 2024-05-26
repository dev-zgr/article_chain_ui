export const extractAuthors = (data, authorNumber) => {
    let authors = [];

    for(let i = 1; i <= authorNumber; i++){
        authors.push({
            "title": data.get(`author_title${i}`),
            "author_name": data.get(`author_name${i}`),
            "author_email": data.get(`author_email${i}`),
            institution: data.get(`institution${i}`),
            department: data.get(`department${i}`),
            address: {
                country: data.get(`country${i}`),
                state: data.get(`state${i}`),
                zipCode: data.get(`zipCode${i}`)
            }
        })
    }
    return authors;
}



export const prepareSubmissionBody = (data, authors) =>{
 const body = {
     "articleEmbeddable" :{
         "authors": authors,
         "article_title": data.get("article_title"),
         "article_type": data.get("article_type"),
         "article_resField": data.get("article_resField"),
         "article_keywords": data.get("article_keywords"),
         "paperAbstract": data.get("paperAbstract"),
     },
     "paperHash" : "00000"
 }


    const formData = new FormData();

    formData.append('jsonBody', new Blob([JSON.stringify(body)], { type: 'application/json' }));
    formData.append('file', data.get("article_file"), data.get("article_file").name);
    return formData;
}