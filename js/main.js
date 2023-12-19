
var BookmarkName =document.getElementById("bookmarkName");
var BookMarkURL =document.getElementById("bookmarkURL");



var bookmarkContainer;
if(localStorage.getItem("mysites") != null){
  bookmarkContainer=JSON.parse(localStorage.getItem('mysites'));
  display(bookmarkContainer);
}
else{
  bookmarkContainer=[];
}


function addSite(){
  if(validsite(BookmarkName.value)&&validurl(BookMarkURL.value)){
    var site ={
      name:BookmarkName.value,
      url:BookMarkURL.value,
    }
  
  bookmarkContainer.push(site);
  localStorage.setItem("mysites",JSON.stringify(bookmarkContainer));
  clearForm();
  display(bookmarkContainer);
  
  }
 else{
  window.alert(`Site name must contain at least 3 characters
  Site URL must be a valid one`)
 }
  }

  function clearForm(){
    BookmarkName.value='';
    BookMarkURL.value='';
  }
 function display(){

  var cartoona=``;
    for(var i=0;i<bookmarkContainer.length;i++ ){
  cartoona +=`

  
     <tr>
    <td>${i+1}</td>
    <td>${bookmarkContainer[i].name}</td>
  
    <td>
    <button class="btn btn-visit"><i class="fa-solid fa-eye"></i> Visit</button>
    </td>

    <td>
    <button class="btn btn-danger" onclick="deleteSite(${i})"><i class="fa-solid fa-trash"></i> Delete</button>
    </td>
    </tr>
    
    `
   }
   document.getElementById('tableContent').innerHTML=cartoona;


 }

 function deleteSite(deleteIndex){
  bookmarkContainer.splice(deleteIndex,1)
  localStorage.setItem("mysites",JSON.stringify(bookmarkContainer));
  display(bookmarkContainer)
 }

 function validsite(name){
 var regex=/\w{3}/;
 if(regex.test(name)){
  BookmarkName.classList.replace('is-invalid','is-valid')
  
  return true;
 }
else{
  BookmarkName.classList.add('is-invalid')

  return false;
}
 }

 function validurl(url){
  var reg=/(.com)$/;
  if(reg.test(url)){
    BookMarkURL.classList.replace('is-invalid','is-valid')
   
   return true;
  }
 else{
  BookMarkURL.classList.add('is-invalid')
 
   return false;
 }
  }