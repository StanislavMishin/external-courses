function debounce(f, ms = 500) {
  let timeout;

  return function (...rest) {
    clearTimeout(timeout);
    const call = () => {
      f.call(this, ...rest);
    };

    timeout = setTimeout(call, ms);
  };
}

const input = document.getElementById('input');
const outputText = document.querySelector('.output');

function test(e) {
  outputText.textContent = e.target.value;
}

input.addEventListener('keyup', debounce(test));

module.exports = debounce;
