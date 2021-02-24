const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function () {
	fetchImages();
	fetchBreeds();
});
    
  // get the images
  function fetchImages() {
	  fetch(imgUrl)
	  .then(resp => resp.json())
	  .then(images => {
		images.message.forEach(image => { return renderImages(image)});
		  })
	};
	
  // render the images to the page
  function renderImages(image) {
	  let imageContainer = document.getElementById('dog-image-container');
	  imageContainer.innerHTML += `<ul><img src="${image}" width="200" height="200"></img></ul>`;
		// let dogImage = document.createElement('img');
		// dogImage.src = imageURL;
		// imageURL.forEach(image => {
		// imageContainer.innerHTML += `<li><img src="${image}><</li>`
		// })
  };
  
//   - on page load, fetch all the dog breeds using the url above ⬆️
//   - add the breeds to the page in an `<ul>` (take a look at the included `index.html`)

  // get the images
  function fetchBreeds() {
	fetch(breedUrl)
	.then(resp => resp.json())
	.then(breeds => {
		Object.keys(breeds.message).forEach(breed => { return addBreeds(breed)});
	})
};

function addBreeds(breed) {
	let breedContainer = document.getElementById('dog-breeds')
	breedContainer.innerHTML += `<ul onclick="this.style.color = 'red'"> "${breed}​"</ul>​`
};
