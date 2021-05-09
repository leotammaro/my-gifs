export const LoadSection = (categorie,page)=>{
    return fetch(`https://api.giphy.com/v1/gifs/${categorie}?api_key=5f7wbKwbAW8jGWILRYbaJHmfKlHa2KlI&q&limit=20&offset=${page*20}`)
    .then(data=>data.json())
    .then(response=>{
        const {data} = response
        const dataGifs = data.map(gif=>{
            const {id, images} = gif
            const {height,width,url} = images.fixed_height

            return {url,id,height,width}
        })
        return dataGifs
    })
}