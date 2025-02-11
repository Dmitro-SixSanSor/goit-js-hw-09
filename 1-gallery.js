import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as l}from"./assets/vendor-CgTBfC_f.js";const r=[{preview:"path-to-preview-image1.jpg",original:"path-to-original-image1.jpg",description:"Image 1 description"},{preview:"path-to-preview-image2.jpg",original:"path-to-original-image2.jpg",description:"Image 2 description"}],t=document.querySelector(".gallery"),g=r.map(({preview:a,original:i,description:e})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${a}" alt="${e}" />
      </a>
    </li>
  `).join("");t.innerHTML=g;new l(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
