let searchTxt

const init = () => {
  search()
  gif()
}

//function to search for giphy
const search = () => {
  document.querySelector(".submit").addEventListener("click", e => {
    e.preventDefault()
    searchTxt = document.querySelector(".search").value
    console.log(searchTxt)
    //take the value of the search and search giphy and display to the page
    //pass value into api search
  })
}

//function for giph api
const gif = () => {
  fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTxt}&api_key=55tnxUVRpACqyUPa6Ktz0n1B1REWyG46&limit=10&rating=g`)
    .then(r => r.json())
    .then(({ data }) => {
      document.querySelector(".gifDiv").innerHTML = ""
      data.forEach(gifObject => {
        //console.log(gifObject.images)
        let gifAnim = gifObject.images.fixed_height.url
        let gifStill = gifObject.images.fixed_height_still.url
        //console.log(gifAnim, gifStill)
        document.querySelector(".gifDiv").innerHTML = `<img src="${gifAnim}" src="${searchTxt}">`
      })
    })
    .catch(e => console.error(e))
}

init()