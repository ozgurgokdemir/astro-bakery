let isExpanded = document.body.dataset.menuExpanded ?? 'false';

const button = document.getElementById('menu-button') as HTMLButtonElement;

const menu = document.getElementById('menu') as HTMLDialogElement;

const overlay = document.getElementById('overlay') as HTMLDivElement;

function getState() {
  return isExpanded;
}

function setState(state: 'true' | 'false') {
  isExpanded = state;
}

function open() {
  document.body.dataset.menuExpanded = 'true';

  button.setAttribute('aria-expanded', 'true');

  menu.setAttribute('aria-hidden', 'false');

  overlay.setAttribute('aria-hidden', 'false');

  setState('true');
}

function close() {
  document.body.dataset.menuExpanded = 'false';

  button.setAttribute('aria-expanded', 'false');

  menu.setAttribute('aria-hidden', 'true');

  overlay.setAttribute('aria-hidden', 'true');

  setState('false');
}

function toggle() {
  const isExpanded = getState();

  isExpanded === 'true' ? close() : open();
}

export function useMenu() {
  return { getState, open, close, toggle };
}
