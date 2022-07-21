// ponemos async para poder usar await
export const getGifs = async (category) => {

    const apiKey = '8Nl7nF9LzsVH3Q3PqTYnlpQ5OYxNRhV8'
    const baseURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}`
    const limit = 10;
    const url = `${baseURL}&limit=${limit}&q=${category}`
    const { data } = await (await fetch(url)).json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    })
    )
    console.log(gifs);
    return gifs;
}