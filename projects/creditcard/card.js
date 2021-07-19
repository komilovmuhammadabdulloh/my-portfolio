var cardDrop = document.getElementById('card-dropdown');
var activeDropdown;
cardDrop.addEventListener('click',function(){
    var node;
    for (var i = 0; i < this.childNodes.length-1; i++)
        node = this.childNodes[i];
    if (node.className === 'dropdown-select') {
        node.classList.add('visible');
        activeDropdown = node;
    };
})

window.onclick = function(e) {
    console.log(e.target.tagName)
    console.log('dropdown');
    console.log(activeDropdown)
    if (e.target.tagName === 'LI' && activeDropdown){
        if (e.target.innerHTML === 'Uz Card') {
            document.getElementById('credit-card-image').src = 'https://uzoplata.com/wp-content/uploads/2017/01/uzcard1.png';
            activeDropdown.classList.remove('visible');
            activeDropdown = null;
            e.target.innerHTML = document.getElementById('current-card').innerHTML;
            document.getElementById('current-card').innerHTML = 'Uz Card';
        }
        else if (e.target.innerHTML === 'Humo') {
            document.getElementById('credit-card-image').src = 'https://uzoplata.com/wp-content/uploads/2020/10/humocard1.png';
            activeDropdown.classList.remove('visible');
            activeDropdown = null;
            e.target.innerHTML = document.getElementById('current-card').innerHTML;
            document.getElementById('current-card').innerHTML = 'Humo';
        }
        else if (e.target.innerHTML === 'Visa') {
            document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
            activeDropdown.classList.remove('visible');
            activeDropdown = null;
            e.target.innerHTML = document.getElementById('current-card').innerHTML;
            document.getElementById('current-card').innerHTML = 'Visa';
        }
    }
    else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
        activeDropdown.classList.remove('visible');
        activeDropdown = null;
    }
}
