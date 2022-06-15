let myCard = [ {
    poster: "poster.png",
    type: "type.png",
    sale: "act.png",
    title1: "Тайная жизнь",
    title2: "домашних животных 2", 
    price: 50,
    currency: "руб.",
    sale_discount: 10,
    rating: 4,
    button: "order.png",
    promotion: true,
   },
   {
       poster: "toy4.jpg",
       type: "type.png",
       sale: "act.png",
       title1: "История игрушек 4",
       title2: "Приключения Вилкинса", 
       price: 60,
       currency: "руб.",
       sale_discount: 10,
       rating: 4.5,
       button: "order.png",
       promotion: true,
      },
      {
       poster: "ferd.jpg",
       type: "type.png",
       sale: "act.png",
       title1: "Фердинанд",
       title2: "Побег из коровника", 
       price: 40,
       currency: "руб.",
       sale_discount: 10,
       rating: 4,
       button: "order.png",
       promotion: true,
      }
   ]
  let s = "";
   for (x=0; x<3; x++) {
//Формат полной стоимости
let fullPrice = `${myCard[x].price},00 ${myCard[x].currency}`; 
// console.log(fullPrice);

let salePrice = `${Math.round(myCard[x].price * (100-myCard[x].sale_discount)/100)},00 ${myCard[x].currency}`;
// console.log(salePrice);

// рейтинг (доработать)
let rank = "";
if (myCard[x].rating <=5 && myCard[x].rating % 0.5 == 0) {
for (i=1; i<=myCard[x].rating; i++) 
    rank += "star "
 if (myCard[x].rating % 1 != 0) 
 rank += "star_half "
 switch (myCard[x].rating) {
    case 0:rank ="star_border star_border star_border star_border star_border";
    break
    case 0.5:
    case 1:
            rank += "star_border star_border star_border star_border" ;
    break
        case 1.5:
        case 2:
                rank += "star_border star_border star_border" ;
                break
     case 2.5:                      
     case 3:  
     rank += "star_border star_border"
     break
     case 3.5:                      
     case 4:  
     rank += "star_border"
     break
 }
} else {rank ="star_border star_border star_border star_border star_border"}
    // console.log(rank);   

 // Стоимость
    let divPrice = "";

    if (myCard[x].promotion) 
    divPrice = ` 
    <div>${salePrice}</div> 
    <div>${fullPrice}</div>`;
    else divPrice = `
    <div>${fullPrice}</div>`;

// Значок акции

let logoSale = ""
if (myCard[x].promotion)
logoSale = `<img src="images/${myCard[x].sale}" alt="">`



s += `
<div class="card">
    <div class="poster">
        <img src="images/${myCard[x].poster}" alt="">
        ${logoSale}
        <img src="images/${myCard[x].type}" alt="">
    </div>

<div class="title">
<div>${myCard[x].title1}</div>
<div>${myCard[x].title2}</div>
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
    <img src="images/${myCard[x].button}" alt="">
</div>

</div>
`;
}
cards.innerHTML = s;
