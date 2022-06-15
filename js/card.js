
let myCard = {
 poster: "poster.png",
 type: "type.png",
 sale: "act.png",
 title1: "Тайная жизнь",
 title2: "домашних животных 2", 
 price: 52,
 currency: "руб.",
 sale_discount: 15,
 rating: 4,
 button: "order.png",
 promotion: false,
}

//Формат полной стоимости
let fullPrice = `${myCard.price},00 ${myCard.currency}`; 
// console.log(fullPrice);

let salePrice = `${Math.round(myCard.price * (100-myCard.sale_discount)/100)},00 ${myCard.currency}`;
// console.log(salePrice);

// рейтинг (доработать)
let rank = "";
for (i=1; i<=myCard.rating; i++) 
    rank += "star ";
    rank += "star_border";

    // console.log(rank);   

 // Стоимость
    let divPrice = "";

    if (myCard.promotion) 
    divPrice = ` 
    <div>${salePrice}</div> 
    <div>${fullPrice}</div>`;
    else divPrice = `
    <div>${fullPrice}</div>`;



let s = "";

s = `
<div class="card">
    <div class="poster">
        <img src="images/${myCard.poster}" alt="">
        <img src="images/${myCard.sale}" alt="">
        <img src="images/${myCard.type}" alt="">
    </div>

<div class="title">
<div>${myCard.title1}</div>
<div>${myCard.title2}</div>
</div>

<div class="price">
   ${divPrice}
</div>

<div class="rating">
    <span class="material-icons">
           ${rank} 
        </span>
</div>

<div class="order">
    <img src="images/${myCard.button}" alt="">
</div>

</div>
`;

cards.innerHTML = s;
