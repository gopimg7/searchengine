
let accesskey='EPr0uGgZGl9R019e2sI5EaeBLxoGrBihqZhsiUjFCg8'


const searchform=document.getElementById('search');
const inputbox=document.getElementById('search-box');
const scresult=document.getElementById('seach-result');
const showmore=document.getElementById('show-btn');

let keywords='';
let page=1;

async function searchimage() {

    keywords=inputbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}1&query=${keywords}&client_id=${accesskey}& per-page=12 `

    

    const responce=await fetch(url)
    const data=await responce.json();
    const results=data.results;

    results.map((result)=>{
        
        const image=document.createElement('img')

        image.src=result.urls.small

        const imagelink=document.createElement('a')

        imagelink.href=result.links.html;

        imagelink.target='_blank'

        imagelink.appendChild(image)

        scresult.appendChild(imagelink)

    })

    showmore.style.display="block"

}



searchform.addEventListener('submit',(e)=>{
    e.preventDefault();
    page=1;
    searchimage()
})


showmore.addEventListener("click",()=>{
    page++
    searchimage()

})