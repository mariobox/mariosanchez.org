let gallery = "";

const fetchPhotos = async () => {
    const res = await fetch("/js/pix.json");
    const photos = await res.json();
    photos.map( (photo, i) => {
        gallery += `<div class="picbox"><figure><img src="${photo.url}" class="gallery medium"><figcaption>${photo.desc}</figcaption></figure></div>`
    });
    document.getElementById("pix").innerHTML = gallery;
}

fetchPhotos();


