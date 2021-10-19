var header = document.querySelector('#header');
var iconMenu = document.querySelector('.icon-menu');
var heightHeader = header.clientHeight;
var itemsMenu = document.querySelectorAll('#nav >  li a[href*="#"]');
// console.log(itemsMenu);


iconMenu.onclick = function(){
    var isclose = header.clientHeight === heightHeader;
    if(isclose)
        header.style.height = 'auto';
    else
        header.style.height = null;
}

for(var i = 0 ; i < itemsMenu.length ; i++){
    var itemMenu = itemsMenu[i];
    itemMenu.onclick = function(event){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu){
            event.preventDefault();     
        }else
            header.style.height = null;  
    }
}


var myIndex = 0;
carousel();

function carousel(){
    var slideItems = document.querySelectorAll('.slide-item');
    for(var i = 0 ; i < slideItems.length; i++)
        slideItems[i].style.display = "none";
    myIndex++;

    if(myIndex > slideItems.length){ myIndex = 1}
    slideItems[myIndex - 1].style.display = 'block';
    setTimeout(carousel, 3000);
}

function pay(){
    document.querySelector('#ticketModal').style.display = 'block';
}


function closeModal(){
    document.getElementById('ticketModal').style.display='none';
}
