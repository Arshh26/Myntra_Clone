let itemsContainerElement = document.querySelector(".items-container");

let item = {
  item_image: 'images/Myntra_item1.jpg',
  rating: {
    stars: 4.5,
    noOfReviews: 1400,
  },
  company_Name: 'Napchief',
  item_name: 'Clothing Set',
  current_price : 1499,
  original_price: 2999,
  discount_percentage: 50,

  }

itemsContainerElement.innerHTML = `
<div class="item-container">
    <img class="item-image" src="${item.item_image}" alt="item image">
     <div class="rating">${item.rating.stars}⭐ | ${item.rating.noOfReviews} </div>
        <div class="company-name">${item.company_Name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
           <span class="current-price">Rs ${item.current_price}</span>
           <span class="original-price">Rs ${item.original_price}</span>
           <span class="discount">(${item.discount_percentage}% OFF)</span>
     </div>
 <button class="btn-add-bag">Add to Bag</button>
</div>`;
