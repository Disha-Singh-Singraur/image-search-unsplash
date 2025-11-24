const accessKey = "I-sgUSN_b8OQNMrsysmgWbAllLT7v7UEeFkzkPqcS0I";

let input=document.querySelector("#search-box");
let form=document.querySelector("#form");
let output=document.querySelector("#output");
let show=document.querySelector("#show-more")

let page=1;
let keyword="";

async function imageSearch(){
   keyword=input.value;
   const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

   const response = await fetch(url);
   const data = await response.json();

   const results=data.results;

   if(page===1){
    output.innerHTML="";
   }

   results.map((result)=>{
       const image=document.createElement("img");
       image.src=result.urls.small;
       const imagelink=document.createElement("a");
       imagelink.href=result.links.html;
       imagelink.target="_blank";
       imagelink.appendChild(image);
       output.appendChild(imagelink);
   })
   show.style.display="block";
}

form.addEventListener("submit",(e)=>{
   e.preventDefault();
   page=1;
   imageSearch();
})

show.addEventListener("click",()=>{
    page=page+1;
    imageSearch();
})