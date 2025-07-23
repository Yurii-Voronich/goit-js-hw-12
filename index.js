import{a as S,S as M,i as c}from"./assets/vendor-df5IXrWy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const g=async(o,e)=>(await S.get("https://pixabay.com/api/",{params:{key:"51348790-b4b99e7923fa7dbd5fd948fd1",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:b}})).data,q=o=>o.map(({largeImageURL:e,tags:s,webformatURL:n,likes:t,views:r,comments:i,downloads:w})=>`<li class="gallery-item">
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
</li>`).join(""),y=o=>{h.insertAdjacentHTML("beforeend",q(o)),x()},P=()=>{h.innerHTML=""},$=new M(".gallery a");function x(){$.refresh()}const f=()=>{E.classList.remove("visually-hidden")},L=()=>{E.classList.add("visually-hidden")},B=()=>{l.classList.remove("visually-hidden")},v=()=>{l.classList.add("visually-hidden")};let a=1,b=15,u=null,d=null,O=null;const p=document.querySelector(".form"),h=document.querySelector(".gallery"),E=document.querySelector(".loader"),l=document.querySelector(".js-show-more"),C=async o=>{try{if(o.preventDefault(),d=p.elements["search-text"].value.trim(),!d)return c.error({position:"topRight",title:"Error",message:"please fill your search request"});f(),P(),v(),l.removeEventListener("click",m),a=1;const e=await g(d,a);u=Math.ceil(e.totalHits/b),e.hits.length===0&&c.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),y(e.hits),p.reset(),u>1&&(B(),l.addEventListener("click",m))}catch(e){c.error({title:"Error",message:`${e}`})}finally{L()}},m=async o=>{try{f(),a++;const e=await g(d,a);y(e.hits),L(),scrollBy({top:O*2,behavior:"smooth"}),a===u&&(v(),l.removeEventListener("click",m),c.error({position:"topRight",title:"Error",message:"You have reached max pages, no more photos avialable"}));const s=h.lastElementChild.getBoundingClientRect().height;scrollBy({top:s*2+48,behavior:"smooth"})}catch(e){console.log(e)}};p.addEventListener("submit",C);
//# sourceMappingURL=index.js.map
