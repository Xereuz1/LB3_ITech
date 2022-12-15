let arr;
let arr2;
let choosed=null;
function choosemove(param){
    if(choosed != null)
    {
        arr[choosed].style.border = "0px";
        choosed = null;
    }
    arr = document.getElementsByClassName("image");
    arr[param].style.border = "2px solid blue";
    choosed = param;
}
function moveup(){
    // console.log();
    let tmp = arr[choosed].src;
    arr[choosed].src = arr[choosed-1].src;
    arr[choosed-1].src = tmp;
    arr[choosed].style.border = "0px";
    choosed = null;
}
function movedown(){
    let tmp = arr[choosed].src;
    arr[choosed].src = arr[choosed+1].src;
    arr[choosed+1].src = tmp;
    arr[choosed].style.border = "0px";
    choosed = null;
}
function setResolImg(){
    arr2 = document.getElementsByClassName("form");
    arr[choosed].style.width = arr2[0].value+"px";
    arr[choosed].style.height = arr2[1].value+"px";
    arr[choosed].style.border = arr2[2].value+"px solid red";
    arr[choosed].title = arr2[3].value+"";
}