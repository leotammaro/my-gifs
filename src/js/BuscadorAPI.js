const MY_KEY = "5f7wbKwbAW8jGWILRYbaJHmfKlHa2KlI&q"

export default function BuscadorAPI(keyword,page){
  console.log(keyword,page)
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${MY_KEY}=${keyword}&limit=10&offset=${page*10}&rating=g&lang=es`)
    .then(data=>data.json())
    .then(response=>{
      const {data} = response
      const dataGifs = data.map(image=>{
        const {images,id} = image;
        // const imagen = images.downsized_medium.url;
        // const height = images.downsized_medium.height;
        const { url, height, width } = images.downsized_medium;
        return  { url, height, width, id}
      })
      return dataGifs
    })
}