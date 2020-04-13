// 1)
// fetch("http://127.0.0.1:8080/")

fetch("https://yts.am/api/v2/list_movies.json")
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(json => console.log(json))
    .catch(e => console.log(`X ${e}`))