function addItem() {
    const itemText = document.getElementById('newItemText')
    const itemValue = document.getElementById('newItemValue')

    const opt = document.createElement('option');
    opt.textContent = itemText.value
    opt.value = itemValue.value
    opt.id = 'menu';
    
    const selected = document.querySelector('select');
    selected.appendChild(opt);

    itemText.value = '';
    itemValue.value = '';
}