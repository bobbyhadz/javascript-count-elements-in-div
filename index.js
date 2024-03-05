console.log('bobbyhadz.com');

const box = document.getElementById('box');

const allChildren = box.getElementsByTagName('*').length;
console.log(allChildren); // 👉️ 4

const directChildren = box.children.length;
console.log(directChildren); // 👉️ 2
