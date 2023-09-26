const body = document.body;
const input = document.querySelector('.link-input');
const overlay = document.querySelector('.overlay');
const allLinks = [];
const form = document.querySelector('#link-form');
const linkList = document.querySelector('.link-list');
const addBtn = document.querySelector('.btn');

input.addEventListener('focus', focusInput);

overlay.addEventListener('click', endFocus);

function focusInput() {
    addBtn.classList.add('btn-focus');
    body.classList.add('focus-form');
}

function endFocus() {
    if (body.classList.contains('focus-form')) body.classList.remove('focus-form');
    if (addBtn.classList.contains('btn-focus')) addBtn.classList.remove('btn-focus');
}

input.addEventListener('focusin', focusInput);
input.addEventListener('focusout', endFocus);


form.addEventListener('submit', createLink);





function createLink(e) {
    e.preventDefault();
    const url = input.value;
    const linkContainer = document.createElement('li');
	const newLink = document.createElement('a');
    allLinks.push(url);
	newLink.className = 'link';
	newLink.innerText = url;
	newLink.href = url;
	newLink.target = '_blank';
    linkContainer.appendChild(newLink);
	linkList.appendChild(linkContainer);
    form.reset();
}





