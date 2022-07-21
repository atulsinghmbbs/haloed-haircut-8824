let flag1 = false;
document.getElementById("womensbtn").addEventListener("click",()=>{
    if(flag1==false){
        let div = document.getElementById("popdown1");
        div.style.display="block";
        flag1=true;

    }
    else{
        let div = document.getElementById("popdown1");
        div.style.display="none";
        flag1=false;
    }
})
