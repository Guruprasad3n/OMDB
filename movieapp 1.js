 // let api_key =`https://www.omdbapi.com/?t=avengers&apikey=d73c1e58`

    

 async function searchMovie(){
    let search = document.getElementById("enterMovie").value
    let api = `https://www.omdbapi.com/?t=${search}&apikey=d73c1e58`

    try{
        
        let res = await fetch(api)
        let data = await res.json()
        console.log(data)
        appendData(data)
    }
    catch(err){
        console.log(err)
    }

    // console.log(search)
}
// appendData(data)
// searchMovie()
function appendData(data){
// data.forEach(function(ele){

    let container = document.getElementById("cont")
    container.innerHTML=null;

    let image = document.createElement("img");
        image.src = data.Poster
    let div = document.createElement("div");

    let h1 = document.createElement("h1")
        h1.innerText = data.Title

    let p = document.createElement("p")
        p.innerText = data.Year


        div.append(image,h1,p)
        container.append(div)

    

// })
    
}