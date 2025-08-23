let bagItemObjects;
onLoad();

function onLoad() {
  loadBagItemsObjects();
  displayBagItems();
}

function loadBagItemsObjects() {
   console.log(bagItems);
   bagItemObjects = bagItems.map(itemId => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
   });
   console.log(bagItemObjects);

}

function displayBagItems() {
  // console.log(bagItems);


  let containerElement = document.querySelector('.bag-items-container');
  let innerHTML = '';
  bagItemObjects.forEach(bagItem => {
    innerHTML += generateItemHTML(bagItem);
  });
  containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
  bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
   loadBagItemsObjects();
   displayBagIcon();
   displayBagItems();

}
//   containerElement.innerHTML = ` <div class="bag-item-container">
//             <div class="item-left-part">
//               <img class="bag-item-img" src="images/Myntra_item9.jpg">
//             </div>
//             <div class="item-right-part">
//               <div class="company">House of chickankari</div>
//               <div class="item-name">Hand Block Printed Kurta</div>
//               <div class="price-container">
//                 <span class="current-price">Rs 1882</span>
//                 <span class="original-price">Rs 2689</span>
//                 <span class="discount-percentage">(30% OFF)</span>
//               </div>
//               <div class="return-period">
//                 <span class="return-period-days">14 days</span> return available
//               </div>
//               <div class="delivery-details">
//                 Delivery by
//                 <span class="delivery-details-days">23 Aug 2025</span>
//               </div>
//             </div>

//             <div class="remove-from-cart">X</div>
//           </div>`


function generateItemHTML(items) {
  return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="${items.item_image}">
    </div>
    <div class="item-right-part">
      <div class="company">${items.company_Name}</div>
      <div class="item-name">${items.item_name}</div>
      <div class="price-container">
        <span class="current-price">RS${items.current_price}</span>
        <span class="original-price">RS${items.original_price}</span>
        <span class="discount-percentage">(${items.discount_percentage}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${items.return_period}days</span> return available
      </div>
      <div class="delivery-details">Delivery by
        <span class="delivery-details-days">${items.delivery_date}</span>
      </div>
    </div>
    <div class="remove-from-cart" onclick="removeFromBag(${items.id})">X</div>
    </div>`;
}