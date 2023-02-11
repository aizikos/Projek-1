class CardProduct {
    constructor (tooltip,img,title,price,products){
        this.tooltip = tooltip,
        this.img = img,
        this.title = title,
        this.price = price,
        this.products = document.querySelector('.products')
    }

    render (){
        let div = document.createElement ('div');
        div.classList.add('product-card');
        div.innerHTML = `
            <div class="img">
                <div class="toolcard frist">${this.tooltip}</div>
                <img class="picture" src="${this.img}" alt="">
                <div class="info">
                    <h4 class="item-title">${this.title}</h4>
                    <div class="product-size">
                        <span class="size">550 мал.</span>
                        <span class="size">635 сред.</span>
                        <span class="size">700 больш.</span>
                    </div>
                    <div class="prices">
                        <span class="scane">${this.price}</span>
                        <span>сом/кг</span>
                    </div>
                    <div class="stars">
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div class="order">
                        <a href="#" class="add-to-card">Заказать</a>
                    </div>
                </div>
            </div>
    
        `

        this.products.append(div)
    }
}

new CardProduct (
    'New',
    './рисунки/торт котик.jpg',
    'Baby cat',
    1330,
    '.products',
).render()

new CardProduct (
    'new',
    './рисунки/торт7.jpg',
    'aaaaaa',
    2220
    ).render()

