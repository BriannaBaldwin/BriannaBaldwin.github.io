let generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", fetchPics);

function fetchPics() {
    let catsImgDiv = document.querySelector('.catsImg')
    catsImgDiv.innerHTML = '';

  fetch("https://api.thecatapi.com/v1/images/search")
  .then((response) => response.json())
  .then((data) => {
    let catsImgUrl = data[0].url

    let catsImgElement = document.createElement('img')
    catsImgElement.setAttribute('src', `${catsImgUrl}`)
    catsImgElement.classList.add('showcase')
    
    let catsImgDiv = document.querySelector('.catsImg')
    catsImgDiv.appendChild(catsImgElement)
  })
  .catch(error => console.log(error))
}
