// Get the image parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const imageUrl = urlParams.get('image');
const nameUrl = urlParams.get('content');

// const HeaderText = document.getElementById('PaintingTitle') 
document.getElementById('PaintingTitle').innerHTML = nameUrl
// console.log(decodeURIComponent(nameUrl))
// HeaderText.setAttribute("p", nameUrl)
// HeaderText.setAttribute("p", decodeURIComponent(nameUrl))
// Header[0]
// console.log(HeaderText[0])
// const Name = document.createElement('h1')
// Name.innerText = nameUrl.decodeURIComponent(nameUrl)
// Header = document.getElementsByTagName('h1')
// Header.appendChild(Name.innerText)
// Display the image on the page
// const ImageLocation = document.getElementsByClassName('col-sm-6');
const PaintingImage = document.getElementById('PaintingImage')
console.log(PaintingImage)
// PaintingImage.setAttribute
PaintingImage.setAttribute("src", decodeURIComponent(imageUrl))
// const imageElement = document.createElement('img');
// imageElement.setAttribute("src", decodeURIComponent(imageUrl))
PaintingImage.classList.add("img-fluid")
PaintingImage.setAttribute("alt", "Responsive image")
// ImageLocation[0].appendChild(imageElement);
