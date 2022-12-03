var div = document.createElement('div');

var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("placeholder","search product_type ")
input.setAttribute("id","product_type")
console.log(div)
 div.append(input)
 document.body.append(div)

var button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary")
button.innerHTML="search"
button.addEventListener("click",foo)
 div.append(button)
 document.body.append(div)



  async function foo () {
 let product_type =document.getElementById("product_type").value
    console.log(product_type)
    let result = await fetch (
      `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`
      
    )  
    let res1 =await result.json()


    console.log(res1)

    var card=document.getElementById('card')
    card.innerHTML=
    
    `<div class="card" style="width: 10rem;  >
        <img  class="product-image"  style="width:10rem" src=${res1[0].api_featured_image} alt=${res1[0].name}>
        <div class="card-body">
          
          <p class="product-brand">brand :${res1[0].brand}</p>
          <p class="card-text">price :${res1[0].price}</p>
          <p class="card-text">name :${res1[0].name}</p>
          <p class="card-text">description :${res1[0].description}</p>
          <a href=${res1[0].product_link} class="btn btn-primary" target=_blank>BUY</a>
        </div>
      </div>`

      var card1=document.getElementById('card1')
    card1.innerHTML=
    
   ` <div class="card" style="width: 10rem;justify-content: center; ">
        <img  class="product-image"  style="width:10rem"src=${res1[1].api_featured_image} alt=${res1[1].name}>
        <div class="card-body">
          
          <p class="product-brand">brand :${res1[1].brand}</p>
          <p class="card-text">price :${res1[1].price}</p>
          <p class="card-text">name :${res1[1].name}</p>
          <p class="card-text">description :${res1[1].description}</p>
          <a href=${res1[1].product_link} class="btn btn-primary" target=_blank>BUY</a>
        </div>
      </div>`

      var card2=document.getElementById('card2')
    card2.innerHTML=
    `<div class="card" style="width: 10rem; ">
    <img  class="product-image"  style="width:10rem"src=${res1[2].api_featured_image} alt=${res1[2].name}>
    <div class="card-body">
      
      <p class="product-brand">brand :${res1[2].brand}</p>
      <p class="card-text">price :${res1[2].price}</p>
      <p class="card-text">name :${res1[2].name}</p>
      <p class="card-text">description :${res1[2].description}</p>
      <a href=${res1[2].product_link} class="btn btn-primary" target=_blank>BUY</a>
    </div>
  </div>`

      var card3=document.getElementById('card3')
    card3.innerHTML=
    
    `<div class="card" style="width: 10rem; ">
        <img  class="product-image"  style="width:10rem"src=${res1[3].api_featured_image} alt=${res1[3].name}>
        <div class="card-body">
          
          <p class="product-brand">brand :${res1[3].brand}</p>
          <p class="card-text">price :${res1[3].price}</p>
          <p class="card-text">name :${res1[3].name}</p>
          <p class="card-text">description :${res1[3].description}</p>
          <a href=${res1[3].product_link} class="btn btn-primary" target=_blank>BUY</a>
        </div>
      </div>`

      var card4=document.getElementById('card4')
    card4.innerHTML=
    
    `<div class="card" style="width: 10rem; ">
    <img  class="product-image"  style="width:10rem"src=${res1[4].api_featured_image} alt=${res1[4].name}>
    <div class="card-body">
      
      <p class="product-brand">brand :${res1[4].brand}</p>
      <p class="card-text">price :${res1[4].price}</p>
      <p class="card-text">name :${res1[4].name}</p>
      <p class="card-text">description :${res1[4].description}</p>
      <a href=${res1[4].product_link} class="btn btn-primary" target=_blank>BUY</a>
    </div>
  </div>`

      var card5=document.getElementById('card5')
    card5.innerHTML=
    `<div class="card" style="width: 10rem; ">
    <img  class="product-image"  style="width:10rem"src=${res1[5].api_featured_image} alt=${res1[5].name}>
    <div class="card-body">
      
      <p class="product-brand">brand :${res1[5].brand}</p>
      <p class="card-text">price :${res1[5].price}</p>
      <p class="card-text">name :${res1[5].name}</p>
      <p class="card-text">description :${res1[5].description}</p>
      <a href=${res1[5].product_link} class="btn btn-primary" target=_blank>BUY</a>
    </div>
  </div>`


  
  var card6=document.getElementById('card6')
  card6.innerHTML=
  `<div class="card" style="width: 10rem; ">
  <img  class="product-image"  style="width:10rem"src=${res1[6].api_featured_image} alt=${res1[6].name}>
  <div class="card-body">
    
    <p class="product-brand">brand :${res1[6].brand}</p>
    <p class="card-text">price :${res1[6].price}</p>
    <p class="card-text">name :${res1[6].name}</p>
    <p class="card-text">description :${res1[6].description}</p>
    <a href=${res1[6].product_link} class="btn btn-primary" target=_blank>BUY</a>
  </div>
</div>`




var card7=document.getElementById('card7')
card7.innerHTML=
`<div class="card" style="width: 10rem;">
<img  class="product-image"  style="width:10rem"src=${res1[7].api_featured_image} alt=${res1[7].name}>
<div class="card-body">
  
  <p class="product-brand">brand :${res1[7].brand}</p>
  <p class="card-text">price :${res1[7].price}</p>
  <p class="card-text">name :${res1[7].name}</p>
  <p class="card-text">description :${res1[7].description}</p>
  <a href=${res1[7].product_link} class="btn btn-primary" target=_blank>BUY</a>
</div>
</div>`



var card8=document.getElementById('card8')
card8.innerHTML=
`<div class="card" style="width: 10rem;">
<img  class="product-image"  style="width:10rem"src=${res1[8].api_featured_image} alt=${res1[8].name}>
<div class="card-body">
  
  <p class="product-brand">brand :${res1[8].brand}</p>
  <p class="card-text">price :${res1[8].price}</p>
  <p class="card-text">name :${res1[8].name}</p>
  <p class="card-text">description :${res1[8].description}</p>
  <a href=${res1[8].product_link} class="btn btn-primary" target=_blank>BUY</a>
</div>
</div>`



var card9=document.getElementById('card9')
card9.innerHTML=
`<div class="card" style="width: 10rem; ">
<img  class="product-image"  style="width:10rem"src=${res1[9].api_featured_image} alt=${res1[9].name}>
<div class="card-body">
  
  <p class="product-brand">brand :${res1[9].brand}</p>
  <p class="card-text">price :${res1[9].price}</p>
  <p class="card-text">name :${res1[9].name}</p>
  <p class="card-text">description :${res1[9].description}</p>
  <a href=${res1[9].product_link} class="btn btn-primary" target=_blank>BUY</a>
</div>
</div>`



var card10=document.getElementById('card10')
card10.innerHTML=
`<div class="card" style="width: 10rem; ">
<img  class="product-image"  style="width:10rem"src=${res1[10].api_featured_image} alt=${res1[10].name}>
<div class="card-body">
  
  <p class="product-brand">brand :${res1[10].brand}</p>
  <p class="card-text">price :${res1[10].price}</p>
  <p class="card-text">name :${res1[10].name}</p>
  <p class="card-text">description :${res1[10].description}</p>
  <a href=${res1[10].product_link} class="btn btn-primary" target=_blank>BUY</a>
</div>
</div>`



var card11=document.getElementById('card11')
card11.innerHTML=
`<div class="card" style="width: 10rem; ">
<img  class="product-image"  style="width:10rem"src=${res1[11].api_featured_image} alt=${res1[11].name}>
<div class="card-body">
  
  <p class="product-brand">brand :${res1[11].brand}</p>
  <p class="card-text">price :${res1[11].price}</p>
  <p class="card-text">name :${res1[11].name}</p>
  <p class="card-text">description :${res1[11].description}</p>
  <a href=${res1[11].product_link} class="btn btn-primary" target=_blank>BUY</a>
</div>
</div>`



var card12=document.getElementById('card12')
card12.innerHTML=
`<div class="card" style="width: 10rem; ">
<img  class="product-image"  style="width:10rem"src=${res1[12].api_featured_image} alt=${res1[12].name}>
<div class="card-body">
  
  <p class="product-brand">brand :${res1[12].brand}</p>
  <p class="card-text">price :${res1[12].price}</p>
  <p class="card-text">name :${res1[12].name}</p>
  <p class="card-text">description :${res1[12].description}</p>
  <a href=${res1[12].product_link} class="btn btn-primary" target=_blank>BUY</a>
</div>
</div>`



var card13=document.getElementById('card13')
card13.innerHTML=
`<div class="card" style="width: 10rem; ">
<img  class="product-image"  style="width:10rem"src=${res1[13].api_featured_image} alt=${res1[13].name}>
<div class="card-body">
  
  <p class="product-brand">brand :${res1[13].brand}</p>
  <p class="card-text">price :${res1[13].price}</p>
  <p class="card-text">name :${res1[13].name}</p>
  <p class="card-text">description :${res1[13].description}</p>
  <a href=${res1[13].product_link} class="btn btn-primary" target=_blank>BUY</a>
</div>
</div>`



var card14=document.getElementById('card14')
card14.innerHTML=
`<div class="card" style="width: 10rem; ">
<img  class="product-image"  style="width:10rem"src=${res1[14].api_featured_image} alt=${res1[14].name}>
<div class="card-body">
  
  <p class="product-brand">brand :${res1[14].brand}</p>
  <p class="card-text">price :${res1[14].price}</p>
  <p class="card-text">name :${res1[14].name}</p>
  <p class="card-text">description :${res1[14].description}</p>
  <a href=${res1[14].product_link} class="btn btn-primary" target=_blank>BUY</a>
</div>
</div>`



var card15=document.getElementById('card15')
card15.innerHTML=
`<div class="card" style="width: 10rem; ">
<img  class="product-image"  style="width:10rem"src=${res1[15].api_featured_image} alt=${res1[15].name}>
<div class="card-body">
  
  <p class="product-brand">brand :${res1[15].brand}</p>
  <p class="card-text">price :${res1[15].price}</p>
  <p class="card-text">name :${res1[15].name}</p>
  <p class="card-text">description :${res1[15].description}</p>
  <a href=${res1[15].product_link} class="btn btn-primary" target=_blank>BUY</a>
</div>
</div>`



var card16=document.getElementById('card16')
card16.innerHTML=
`<div class="card" style="width: 10rem;">
<img  class="product-image"  style="width:10rem"src=${res1[16].api_featured_image} alt=${res1[16].name}>
<div class="card-body">
  
  <p class="product-brand">brand :${res1[16].brand}</p>
  <p class="card-text">price :${res1[16].price}</p>
  <p class="card-text">name :${res1[16].name}</p>
  <p class="card-text">description :${res1[16].description}</p>
  <a href=${res1[16].product_link} class="btn btn-primary" target=_blank>BUY</a>
</div>
</div>`



var card17=document.getElementById('card17')
card17.innerHTML=
`<div class="card" style="width: 10rem; ">
<img  class="product-image"  style="width:10rem"src=${res1[17].api_featured_image} alt=${res1[17].name}>
<div class="card-body">
  
  <p class="product-brand">brand :${res1[17].brand}</p>
  <p class="card-text">price :${res1[17].price}</p>
  <p class="card-text">name :${res1[17].name}</p>
  <p class="card-text">description :${res1[17].description}</p>
  <a href=${res1[17].product_link} class="btn btn-primary" target=_blank>BUY</a>
</div>
</div>`



var card18=document.getElementById('card18')
card18.innerHTML=
`<div class="card" style="width: 10rem; ">
<img  class="product-image"  style="width:10rem"src=${res1[18].api_featured_image} alt=${res1[18].name}>
<div class="card-body">
  
  <p class="product-brand">brand :${res1[18].brand}</p>
  <p class="card-text">price :${res1[18].price}</p>
  <p class="card-text">name :${res1[18].name}</p>
  <p class="card-text">description :${res1[18].description}</p>
  <a href=${res1[18].product_link} class="btn btn-primary" target=_blank>BUY</a>
</div>
</div>`



var card19=document.getElementById('card19')
card19.innerHTML=
`<div class="card" style="width: 10rem;">
<img  class="product-image"  style="width:10rem"src=${res1[19].api_featured_image} alt=${res1[19].name}>
<div class="card-body">
  
  <p class="product-brand">brand :${res1[19].brand}</p>
  <p class="card-text">price :${res1[19].price}</p>
  <p class="card-text">name :${res1[19].name}</p>
  <p class="card-text">description :${res1[19].description}</p>
  <a href=${res1[19].product_link} class="btn btn-primary" target=_blank>BUY</a>
</div>
</div>`



var card20=document.getElementById('card20')
card20.innerHTML=
`<div class="card" style="width: 10rem; ">
<img  class="product-image"  style="width:10rem"src=${res1[20].api_featured_image} alt=${res1[20].name}>
<div class="card-body">
  
  <p class="product-brand">brand :${res1[20].brand}</p>
  <p class="card-text">price :${res1[20].price}</p>
  <p class="card-text">name :${res1[20].name}</p>
  <p class="card-text">description :${res1[20].description}</p>
  <a href=${res1[20].product_link} class="btn btn-primary" target=_blank>BUY</a>
</div>
</div>`
















}