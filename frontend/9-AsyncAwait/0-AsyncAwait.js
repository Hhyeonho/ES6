// 1)

const getMoviesPromise = () => {
    fetch("https://yts.am/api/v2/list_movies.json")
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(json => console.log(json))
        .catch(e => console.log(`X ${e}`))
}


// await은 항상 async function에서만 사용가능
const getMoviesAsync = async () => {
    const response = await fetch("https://yts.am/api/v2/list_movies.json");
    console.log(response);
    const EXjson = await response.json();
    console.log(EXjson);
}

getMoviesAsync();

// => 안쓰고 선언법 (위의 선언과 내용은 같음)
// async function getmovies(){
// } 