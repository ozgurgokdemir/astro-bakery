const button = document.getElementById('menu-button') as HTMLButtonElement;

const menu = document.getElementById('menu') as HTMLDialogElement;

const overlay = document.getElementById('overlay') as HTMLDivElement;

let isExpanded = document.body.dataset.menuExpanded ?? 'false';

export function open() {
  document.body.dataset.menuExpanded = 'true';

  button.setAttribute('aria-expanded', 'true');

  menu.setAttribute('aria-hidden', 'false');

  overlay.setAttribute('aria-hidden', 'false');

  isExpanded = 'true';
}

export function close() {
  document.body.dataset.menuExpanded = 'false';

  button.setAttribute('aria-expanded', 'false');

  menu.setAttribute('aria-hidden', 'true');

  overlay.setAttribute('aria-hidden', 'true');

  isExpanded = 'false';
}

export function toggle() {
  isExpanded === 'true' ? close() : open();
}
