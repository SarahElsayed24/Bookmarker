var siteName=document.getElementById("siteName");
var siteUrl=document.getElementById("siteUrl");
var dataList=[]
if (localStorage.getItem("dataList")==null){
    var dataList=[]
}else{
    dataList=JSON.parse(localStorage.getItem("dataList"))
    displayData(dataList)
}

function addData(){
    if(validateSiteName()==true & validateSiteUrl()==true){
    var data={
        name:siteName.value,
        urlVisit:siteUrl.value
    }
  dataList.push(data);
  displayData()
  clearForm()
  localStorage.setItem("dataList",JSON.stringify(dataList))
  console.log(dataList);
}else{
    return false
}
}



function displayData(){
    var cartona=''
    for(var i=0;i<dataList.length;i++){
     cartona+=`   <tr>
     <td>${i + 1}</td>
     <td>${dataList[i].name}</td>
     <td>
        <button class="btn btn-success"><i class="fa-solid fa-eye"></i> <a class='text-decoration-none text-white' href='https://${dataList[i].urlVisit}' target="_blank">visit</a></button>
     </td>
     <td>
        <button onclick="deleteData(${i})" id="deleteBtn" class=" btn btn-danger"><i class="fa-solid fa-trash-can"></i> delete</button>
     </td>
   </tr>
`
    }
    document.getElementById("tBody").innerHTML=cartona
}

function clearForm(){
    siteName.value=''
    siteUrl.value=''
}

function deleteData(index){
dataList.splice(index,1)
displayData(dataList)
localStorage.setItem("dataList",JSON.stringify(dataList))
}

function visitUrl(index){
dataList[index].urlVisit=siteUrl.value
}

function validateSiteName(){
var regex=/^[A-Za-z0-9]{3,}$/
if(regex.test(siteName.value)==true){
    // siteName.style.border='none'
    document.getElementById("siteName").classList.add('is-valid')

    return true
}else{
    // siteName.style.border='2px solid red'
    document.getElementById("siteName").classList.replace('is-valid','is-invalid')
   /* alert(`Site Name or Url is not valid, Please follow the rules below :

Site name must contain at least 3 characters
Site URL must be a valid one`)*/
return false
}
}
function validateSiteUrl(){
    var regex=/^(www\.)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/
    if(regex.test(siteUrl.value)==true){
        document.getElementById("siteUrl").classList.add('is-valid')
        return true
    }else{
        document.getElementById("siteUrl").classList.replace('is-valid','is-invalid')
        return false
    }
}
