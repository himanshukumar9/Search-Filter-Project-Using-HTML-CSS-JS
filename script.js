const searchInput = document.getElementById('searchInput');
const itemList = document.getElementsByClassName('item');

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();

  for (let i = 0; i < itemList.length; i++) {
    const itemName = itemList[i].textContent.toLowerCase();

    if (itemName.includes(searchTerm)) {
      itemList[i].style.display = 'block';
    } else {
      itemList[i].style.display = 'none';
    }
  }
});
