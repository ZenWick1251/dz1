const nameList = document.getElementById('list');
const listItems = Array.from(nameList.getElementsByTagName('li'));

const filteredItems = listItems.filter(item => /\d+/.test(item.textContent));

console.log(filteredItems);

listItems.forEach(item => item.style.display = 'none');

filteredItems.forEach(item => item.style.display = '');