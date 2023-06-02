// Get the image parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const imageUrl = urlParams.get('image');
// const nameUrl = urlParams.get('content');

const Test = document.body.getElementsByClassName('head')
// Header[0]
console.log(Test[0])
// const Name = document.createElement('h1')
// Name.innerText = nameUrl.decodeURIComponent(nameUrl)
// Header = document.getElementsByTagName('h1')
// Header.appendChild(Name.innerText)
// Display the image on the page
const ImageLocation = document.getElementsByClassName('col-sm-6');

const imageElement = document.createElement('img');
imageElement.setAttribute("src", decodeURIComponent(imageUrl))
imageElement.classList.add("img-fluid")
imageElement.setAttribute("alt", "Responsive image")
ImageLocation[0].appendChild(imageElement);
