const selectAll = document.getElementById('selectAll');
selectAll.addEventListener('click', function (){
    const allCheckbox = document.querySelectorAll('.checkbox-history');
    for (let c = 0; c < allCheckbox.length; c++) {
        allCheckbox[c].checked = (allCheckbox[c].checked ? false : true );
    }
});

const deleteSelected = document.getElementById('deleteSelected');
deleteSelected.addEventListener('click', function () {
    const allCheckbox = document.querySelectorAll('.checkbox-history');
    for (let c = 0; c < allCheckbox.length; c++) {
        var block = allCheckbox[c].parentNode;
        // hide the block
        // block.style.display = (allCheckbox[c].checked ? 'none' : 'flex');
        // delete the block
        if (allCheckbox[c].checked) {
            allCheckbox[c].parentElement.remove();
        }
    }
})