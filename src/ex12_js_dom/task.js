const arrImage = ['asset/1.webp', 'asset/2.webp', 'asset/3.jpeg', 'asset4.webp', 'asset/5.webp'];

let offset = 0;
const sliderFlexRow = document.querySelector('.slider-flexRow');

const buttonSliderPrev = document.querySelector('.button__prev');
const buttoSlidernNext = document.querySelector('.button__next');

for (let i = 1; i <= arrImage.length; i += 1) {
  sliderFlexRow.insertAdjacentHTML('beforeend', `<img src="asset/${i}.webp">`);
}

buttoSlidernNext.addEventListener('click', () => {
  offset += 400;
  if (offset > 1600) {
    offset = 0;
  }
  sliderFlexRow.style.left = `${-offset}px`;
});

buttonSliderPrev.addEventListener('click', () => {
  offset -= 400;
  if (offset < 0) {
    offset = 1600;
  }
  sliderFlexRow.style.left = `${-offset}px`;
});
