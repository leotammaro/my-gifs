const MY_KEY = "5f7wbKwbAW8jGWILRYbaJHmfKlHa2KlI&q"

export default function BuscadorRandomGifsAPI(){
    return fetch(`https://api.giphy.com/v1/gifs/random?api_key=${MY_KEY}`)
    .then(data=>data.json())
    .then(response=>{
        const {data} = response
        const {id,title,images} = data
        const {url,height,width} = images.downsized_large
        return {id,title,url,height,width}
    })
}