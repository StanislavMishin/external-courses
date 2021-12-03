const arrImages = ['asset/1.webp', 'asset/2.webp', 'asset/3.webp', 'asset/4.webp'];

const sliderFlexRow = document.querySelector('.slider-flexRow');
const image = sliderFlexRow.querySelector('img');

const buttonSliderPrev = document.querySelector('.button__prev');
const buttoSlidernNext = document.querySelector('.button__next');

image.src = arrImages[0];
let sliderIndex = 0;

buttoSlidernNext.addEventListener('click', () => {
  if (sliderIndex === arrImages.length - 1) {
    sliderIndex = -1;
  }
  sliderIndex += 1;
  image.src = arrImages[sliderIndex];
  console.log(sliderIndex);
});

buttonSliderPrev.addEventListener('click', () => {
  if (sliderIndex === -1 || sliderIndex === 0) {
    sliderIndex = arrImages.length;
  }
  sliderIndex -= 1;
  image.src = arrImages[sliderIndex];
  console.log(sliderIndex);
});
