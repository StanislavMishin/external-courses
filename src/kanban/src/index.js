/* eslint-disable max-len */
import { createHeader } from './components/header/header';
import { createFooter } from './components/footer/footer';
import { updateStorageFromLocal, repaintBoardFromLocal } from './components/main/main';

window.onload = () => {
  const wrapper = document.querySelector('.wrapper');
  wrapper.insertAdjacentHTML('afterbegin', createHeader());

  const mainContent = document.createElement('main');
  mainContent.classList.add('content');
  mainContent.setAttribute('id', 'main');
  const blockContainer = document.createElement('div');
  blockContainer.setAttribute('class', 'container');
  const blockFlexRow = document.createElement('div');
  blockFlexRow.setAttribute('class', 'blockFlexRow');
  blockContainer.appendChild(blockFlexRow);
  mainContent.appendChild(blockContainer);
  wrapper.appendChild(mainContent);

  updateStorageFromLocal();
  repaintBoardFromLocal();

  wrapper.insertAdjacentHTML('beforeend', createFooter());
};
