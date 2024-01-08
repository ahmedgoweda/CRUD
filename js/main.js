 
let ProductNameInput = document.getElementById('ProductName');
let ProductPriceInput = document.getElementById('ProductPrice');
let ProductCategoryInput = document.getElementById('ProductCategory');
let ProductDescInput = document.getElementById('ProductDesc');
let searchInput= document.getElementById('searchInput');
let addbtn=document.getElementById("addBtn");
let updatebtn=document.getElementById("updtateBtn");
let indexupdate=0;
let addProductContainer = [];
if (localStorage.getItem("product") != null)
{
    addProductContainer=JSON.parse(localStorage.getItem("product"))
    displayData();
}
function addProduct() {
    if(validationName()==true && validationPrice()==true){
        let  Product = {
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
    }
  
 
function clearform(){ 
 ProductNameInput.value="";
 ProductPriceInput.value="";
 ProductCategoryInput.value="";
ProductDescInput.value="";
}

function displayData(){

    let boxProduct="";
    for(let i=0;i<addProductContainer.length ;i++){
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
let term =searchInput.value;
    let boxProduct="";
    for(let i=0;i<addProductContainer.length ;i++){
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
 let caruntProduct=addProductContainer[index]
ProductNameInput.value=caruntProduct.name;
ProductPriceInput.value=caruntProduct.price;
ProductCategoryInput.value=caruntProduct.Category;
ProductDescInput.value=caruntProduct.Desc;
updtateBtn.classList.remove('d-none');
 addBtn.classList.add("d-none")
}


function UpdateProduct( ){
    let  Product = {
        name: ProductNameInput.getAttribute,
        price: ProductPriceInput.getAttribute,
        Category: ProductCategoryInput.getAttribute,
        Desc: ProductDescInput.getAttribute,
   
    }
   
  addProductContainer.splice(indexupdate,1,Product)
  localStorage.setItem("product",JSON.stringify(addProductContainer));
displayData();
clearform();
updtateBtn.classList.add('d-none');
 addBtn.classList.remove("d-none")
}


 let massageForUser=document.getElementById("#massageForUser");

function validationName(){
    let  text=ProductNameInput.value
    let regex=/^[A-Z][a-z]{3,8}$/;
if(regex.test(text)==true){
    ProductNameInput.classList.add("is-valid");
    ProductNameInput.classList.remove("is-invalid");
    massageForUser.classList.add("d-none")
    return true;
}
else{
ProductNameInput.classList.add("is-invalid");
ProductNameInput.classList.remove("is-valid");
massageForUser.classList.remove("d-none")
return false;
}
}

let massageForPrice=document.getElementById("#massageForPrice");
function validationPrice(){
let test=ProductPriceInput.value;
let regexPrice=/^[1-10]{5}$/;
if(regexPrice.test(test)==true){
    ProductPriceInput.classList.add("is-valid");
    ProductPriceInput.classList.remove("is-invalid");
    massageForPrice.classList.add("d-none")
    return true;
 
}  
else{
    ProductPriceInput.classList.add("is-invalid");
    ProductPriceInput.classList.remove("is-valid");
    massageForPrice.classList.remove("d-none")
    return false;
}  
}
