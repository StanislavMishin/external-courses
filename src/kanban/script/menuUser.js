const buttonMenu = document.querySelector('#blockUser__buttonMenu');

function openMenu() {
  const imgButtom = document.querySelector('#img');
  imgButtom.setAttribute('class', 'arrowBottom');
  const parent = document.querySelector('.header-flexRow-blockUser');
  const blockMenu = document.createElement('div');
  blockMenu.setAttribute('class', 'blockMenu');

  const nameUserAndEmail = document.createElement('div');
  nameUserAndEmail.setAttribute('class', 'block__nameUserAndEmail');

  const paragraph = document.createElement('p');
  paragraph.insertAdjacentHTML('afterbegin', 'Mishin Stanislav');

  const link = document.createElement('a');
  link.insertAdjacentHTML('afterbegin', 'mishinstanislav@gmail.com');

  nameUserAndEmail.appendChild(paragraph);
  nameUserAndEmail.appendChild(link);

  const blockButtons = document.createElement('div');
  blockButtons.setAttribute('class', 'blockButtons');
  const link1forBlockbuttons = document.createElement('a');
  link1forBlockbuttons.setAttribute('class', 'buttonMenu');
  link1forBlockbuttons.insertAdjacentHTML('afterbegin', 'My account<img src="https://img.icons8.com/doodle/48/000000/test-account.png"/>');

  const link2forBlockbuttons = document.createElement('a');
  link2forBlockbuttons.setAttribute('class', 'buttonMenu');
  link2forBlockbuttons.insertAdjacentHTML('afterbegin', 'My tasks<img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-clipboard-business-kiranshastry-lineal-color-kiranshastry-2.png"/>');

  const link3forBlockbuttons = document.createElement('a');
  link3forBlockbuttons.setAttribute('class', 'buttonMenu');
  link3forBlockbuttons.insertAdjacentHTML('afterbegin', 'Award<img src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-badge-museum-icongeek26-linear-colour-icongeek26.png"/>');

  const link4forBlockbuttons = document.createElement('a');
  link4forBlockbuttons.setAttribute('class', 'buttonMenu');
  link4forBlockbuttons.insertAdjacentHTML('afterbegin', 'Log out<img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-exit-hotel-wanicon-lineal-color-wanicon.png"/>');

  blockButtons.appendChild(link1forBlockbuttons);
  blockButtons.appendChild(link2forBlockbuttons);
  blockButtons.appendChild(link3forBlockbuttons);
  blockButtons.appendChild(link4forBlockbuttons);

  blockMenu.appendChild(nameUserAndEmail);
  blockMenu.appendChild(blockButtons);
  parent.appendChild(blockMenu);
}

function closeMenu() {
  const blockMenu = document.querySelector('.blockMenu');
  blockMenu.remove();
  const imgButtom = document.querySelector('#img');
  imgButtom.setAttribute('class', 'arrowTop');
}

let flag = false;

function condition() {
  if (flag === true) {
    closeMenu();
    flag = false;
  } else {
    openMenu();
    flag = true;
  }
}

buttonMenu.addEventListener('click', condition);
