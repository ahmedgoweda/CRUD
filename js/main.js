
var ProductNameInput = document.getElementById('ProductName');
var ProductPriceInput = document.getElementById('ProductPrice');
var ProductCategoryInput = document.getElementById('ProductCategory');
var ProductDescInput = document.getElementById('ProductDesc');

var addProductContainer = [];

function addProduct() {
   var  Product = {
        name: ProductNameInput.value,
        price: ProductPriceInput.value,
        Category: ProductCategoryInput.value,
        Desc: ProductDescInput.value,
    } 
    addProductContainer.push(Product);

clearform();
console.log(addProductContainer);
}
 
function clearform(){
 ProductNameInput.value="";
 ProductPriceInput.value="";
 ProductCategoryInput.value="";
ProductDescInput.value="";
}

