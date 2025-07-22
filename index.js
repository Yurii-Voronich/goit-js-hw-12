import{a as S,S as M,i as c}from"./assets/vendor-df5IXrWy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const g=(o,e)=>S.get("https://pixabay.com/api/",{params:{key:"51348790-b4b99e7923fa7dbd5fd948fd1",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:b}}),q=o=>o.map(({largeImageURL:e,tags:s,webformatURL:n,likes:t,views:r,comments:i,downloads:w})=>`<li class="gallery-item">
	<a class="gallery-link" href="${e}">
		<img 
        
		  class="gallery-image" 
		  src="${n}" 
		  alt="${s}" 
		/>
	</a>
        <ul class = "description">
        <li class = "description-item">Likes <p>${t}</p><li>
        <li class = "description-item">Views <p>${r}</p><li>
        <li class = "description-item">Downloads <p>${w}</p><li>
        <li class = "description-item">Comments <p>${i}</p><li>
        </ul>
</li>`).join(""),y=o=>{h.insertAdjacentHTML("beforeend",q(o)),x()},P=()=>{h.innerHTML=""},$=new M(".gallery a");function x(){$.refresh()}const f=()=>{E.classList.remove("visually-hidden")},L=()=>{E.classList.add("visually-hidden")},B=()=>{a.classList.remove("visually-hidden")},v=()=>{a.classList.add("visually-hidden")};let l=1,b=15,u=null,d=null,O=null;const m=document.querySelector(".form"),h=document.querySelector(".gallery"),E=document.querySelector(".loader"),a=document.querySelector(".js-show-more"),C=async o=>{try{if(o.preventDefault(),d=m.elements["search-text"].value.trim(),!d)return c.error({position:"topRight",title:"Error",message:"please fill your search request"});f(),P(),v(),a.removeEventListener("click",p),l=1;const{data:e}=await g(d,l);u=Math.ceil(e.totalHits/b),e.hits.length===0&&c.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),y(e.hits),m.reset(),u>1&&(B(),a.addEventListener("click",p))}catch(e){c.error({title:"Error",message:`${e}`})}finally{L()}},p=async o=>{try{f(),l++;const{data:e}=await g(d,l);y(e.hits),L(),scrollBy({top:O*2,behavior:"smooth"}),l===u&&(v(),a.removeEventListener("click",p),c.error({position:"topRight",title:"Error",message:"You have reached max pages, no more photos avialable"}));const s=h.lastElementChild.getBoundingClientRect().height;scrollBy({top:s*2+48,behavior:"smooth"})}catch(e){console.log(e)}};m.addEventListener("submit",C);
//# sourceMappingURL=index.js.map
