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

// https://yts.am/api/v2/list_movies.json
// * apache 서버에 적용하기
const getMoviesAsync = async () => {
    try {
        const [moviesResponse, suggestionsResponse] = await Promise.all([
            fetch("https://yts.am/api/v2/list_movies.json"),
            fetch("https://yts.am/api/v2/movie_suggestions.json/movie_id=100")
        ]);

        const [movies, suggestions] = await Promise.all([
            moviesResponse.json(),
            suggestionsResponse.json()
        ])

        console.log(response);
        console.log(movies, suggestions)
        const EXjson = await response.json();
        console.log(EXjson);
        throw Error("Im hungry")
    } catch (e) {
        console.log(`X ${e}`)
    } finally {
        console.log("We are done!");
    }
}

getMoviesAsync();