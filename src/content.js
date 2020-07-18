const element = document.createElement('div');
element.style.position = 'fixed';
element.style.width = '100%';
element.style.height = '100%';
element.style.background = 'black';
element.style.zIndex = 99999;

const body = document.getElementsByTagName('body')[0];
body.prepend(element);
