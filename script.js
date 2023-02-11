//доваление товара в корзина

let class_name = document.getElementsByClassName('add-to-card');

var myfuntions = function(evt) {
    evt.preventDefault();

    let title = this.parentNode.parentNode.querySelectorAll(".item-title");
    let scanes = this.parentNode.parentNode.querySelectorAll(" .scane");
    let pictures = this.parentNode.parentNode.parentNode .querySelectorAll(".picture"); 
    let creat_li = document.createElement('li');
    creat_li.classList.add('bag_ittem');
    creat_li.innerHTML = ' <div class="bag__img">\
                                <a href="?search=*">\
                                    <img class = "img_bag" src="'+ pictures[0].src +'"alt="">\
                                </a>\
                            </div>\
                            <div class="bag__info">\
                                <p class="info__title"><a href="?search=">'+ title[0].innerText +'</a></p>\
                                <div class="info_price">\
                                    <span class = "oprice">'+ scanes[0].innerText +'</span>\
                                    <span>com/kg</span>\
                                </div>\
                                <div class="trash">\
                                    <a href="?search=#"><i class="fa-solid fa-trash"></i></a>\
                                </div>\
                            </div>';
    
    let block_cart = document.querySelector('.bags.shopcard_dropdown ul');
    block_cart.appendChild(creat_li);

    alert ("Спасибо за покупку!");

    deleteItem();
    total_price();
    total_count();
};

for ( var i = 0 ; i< class_name.length; i++) {
    class_name[i].addEventListener('click', myfuntions, false);
};

///Удаление товара из корзинки:

function deleteItem (evt) {
    var trash = document.querySelectorAll('.trash');

    for(var i = 0; i < trash.length; i++) {
        trash[i].addEventListener('click', delete_item, false);
    };

    function delete_item(evt) {
        evt.preventDefault();
        this.parentNode.parentNode.remove();
        console.log("Товар удален из корзины!");
        total_price();
        total_count();
    };

    
}

///Сумирование товаров:

function total_price(){
    var prace_list = document.querySelectorAll('.info_price .oprice');
    //console.log(prace_list);
    var total_sum = 0;

    for(var i = 0; i < prace_list.length; i++) {
        total_sum = total_sum + (+prace_list[i].innerHTML);
    };
   //console.log(total_sum);

   document.querySelectorAll('.sum')[0].innerHTML = `${total_sum} Сом`;
   document.querySelectorAll('.curr_number .total__price')[0].innerHTML = ` ${total_sum} Сом`;
}

/// Вывод количество товаров в меню
function total_count (){
    var item_count= document.querySelectorAll(".bag_ittem").length;
    document.querySelectorAll('.total_count')[0].innerHTML = `${item_count} / `;
}