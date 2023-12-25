 
var ProductNameInput = document.getElementById('ProductName');
var ProductPriceInput = document.getElementById('ProductPrice');
var ProductCategoryInput = document.getElementById('ProductCategory');
var ProductDescInput = document.getElementById('ProductDesc');
var searchInput= document.getElementById('searchInput');
var addbtn=document.getElementById("addBtn");
var updatebtn=document.getElementById("updtateBtn");
var indexupdate=0;
var addProductContainer = [];
if (localStorage.getItem("product") != null)
{
    addProductContainer=JSON.parse(localStorage.getItem("product"))
    displayData();
}
function addProduct() {
   var  Product = {
        name: ProductNameInput.value,
        price: ProductPriceInput.value,
        Category: ProductCategoryInput.value,
        Desc: ProductDescInput.value,
    } 
    addProductContainer.push(Product);
localStorage.setItem("product",JSON.stringify(addProductContainer));
 displayData();
 clearform();

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
        <td class="bg-dark text-white"> ${addProductContainer[i].name}</td>
        <td class="bg-dark text-white"> ${addProductContainer[i].price}</td>
        <td class="bg-dark text-white"> ${addProductContainer[i].Category}</td>
        <td class="bg-dark text-white"> ${addProductContainer[i].Desc}</td>
        <td onclick="setData(${i})"; class="bg-dark"><button class="btn btn-outline-warning" >Update</button></td>
        <td onclick=deleteProduct(${i}); class="bg-dark"><button class="btn btn-outline-danger">Delete</button></td>
    </tr>`
    }
    document.getElementById('tabolBody').innerHTML=boxProduct;
}

function deleteProduct(ProductIndex){
    addProductContainer.splice(ProductIndex,1);
    localStorage.setItem("product",JSON.stringify(addProductContainer));
    displayData();
}
 
function searchBroduct(){
var term =searchInput.value;
    var boxProduct="";
    for(var i=0;i<addProductContainer.length ;i++){
        if( addProductContainer[i].name.toLowerCase().includes(term.toLowerCase())){
        boxProduct +=`
        <tr>
        <td class="bg-dark text-white"> ${addProductContainer[i].name}</td>
        <td class="bg-dark text-white"> ${addProductContainer[i].price}</td>
        <td class="bg-dark text-white"> ${addProductContainer[i].Category}</td>
        <td class="bg-dark text-white"> ${addProductContainer[i].Desc}</td>
        <td class="bg-dark"><button class="btn btn-outline-warning">Update</button></td>
        <td onclick=deleteProduct(${i}); class="bg-dark"><button class="btn btn-outline-danger">Delete</button></td>
    </tr>`
        }
    }
    console.log(boxProduct);
    document.getElementById('tabolBody').innerHTML = boxProduct;
}

function setData(index){
  indexupdate=index
 var caruntProduct=addProductContainer[index]
ProductNameInput.value=caruntProduct.name;
ProductPriceInput.value=caruntProduct.price;
ProductCategoryInput.value=caruntProduct.Category;
ProductDescInput.value=caruntProduct.Desc;
updtateBtn.classList.remove('d-none');
 addBtn.classList.add("d-none")
}


function UpdateProduct( ){
    var  Product = {
        name: ProductNameInput.value,
        price: ProductPriceInput.value,
        Category: ProductCategoryInput.value,
        Desc: ProductDescInput.value,
   
    }
   
  addProductContainer.splice(indexupdate,1,Product)
  localStorage.setItem("product",JSON.stringify(addProductContainer));
displayData();
clearform();
updtateBtn.classList.add('d-none');
 addBtn.classList.remove("d-none")
}


