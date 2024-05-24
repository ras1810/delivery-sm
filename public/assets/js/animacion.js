
const animation = (id, delay, element, animacion) => {
    const btn = document.querySelectorAll(element);


    btn[id].classList.add('animate__animated',delay, animacion);

    btn[id].addEventListener('animationend', () => {
      btn[id].classList.remove('animate__animated',delay, animacion);
   });
  }

const foo = () => {
  console.log("FOO!!!");
}

module.exports = {animation}