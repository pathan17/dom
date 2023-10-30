
let btn = document.getElementById("btn");
btn.addEventListener("click",function(){
  ul.innerText=''
  document.getElementById("input").value;
  if(document.getElementById("input").value==''){
    alert("put the number")
  }
  else{
    
    for(i=1; i<=10; i++){
      let li = document.createElement("li");
      li.innerText = i+" X " + input.value + " = "+ i*input.value;
      let ul = document.getElementById("ul");
      ul.appendChild(li)
      
    }
    document.getElementById("input").value=''
    
    
  }
    
  
    
})