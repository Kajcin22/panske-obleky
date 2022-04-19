console.log('funguju');
const productImg = document.querySelector('#product-image');
const changeColor = (event) => {
  productImg.classList.toggle('toggle-color');
};
productImg.addEventListener('click', changeColor);
