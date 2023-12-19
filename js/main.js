
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
displayData();
}
 
function clearform(){ 
 ProductNameInput.value="";
 ProductPriceInput.value="";
 ProductCategoryInput.value="";
ProductDescInput.value="";
}

function displayData(){
    var boxProduct="";
    for(var i=0;i<addProductContainer.length ;i++){
        boxProduct +=`<tr>
        <td> ${addProductContainer[i].name}</td>
        <td> ${addProductContainer[i].price}</td>
        <td> ${addProductContainer[i].Category}</td>
        <td> ${addProductContainer[i].Desc}</td>
    </tr>`
    }
    document.getElementById('tabolBody').innerHTML=boxProduct;
}
 