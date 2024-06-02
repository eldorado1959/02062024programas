document.getElementById('entryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const item = document.getElementById('item').value;
    if (item) {
        const itemList = document.getElementById('itemList');
        const listItem = document.createElement('li');
        listItem.textContent = item;
        itemList.appendChild(listItem);
        document.getElementById('item').value = '';
    }
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('#sections section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}
