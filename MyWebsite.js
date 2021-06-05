const button = document.querySelector('.menu-button');
const tiles = document.querySelector('.list');
let menuOpen = false;
button.addEventListener('click', () => {
	if(!menuOpen){
		button.classList.add('open');
		tiles.classList.add('scaled');
		menuOpen = true;
	}
	else{
		button.classList.remove('open');
		tiles.classList.remove('scaled');
		menuOpen = false;
	}
})