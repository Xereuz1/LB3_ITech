let arr;
let arr2;
let choosed=null;
function choosemove(param){
    if(choosed != null)
    {
        arr[choosed].style.opacity = "1";
        choosed = null;
    }
     arr = document.getElementsByClassName("image");
     arr[param].style.opacity = "0.5";
     choosed = param;
}
function moveup(){
    // console.log();
    let tmp = arr[choosed].src;
    let tmp1 = arr[choosed].style.width;
    let tmp2 =  arr[choosed].style.height;
    let tmp3 =  arr[choosed].title;
    let tmp4 =  arr[choosed].style.border;
    arr[choosed].src = arr[choosed-1].src;
    arr[choosed].style.width =  arr[choosed-1].style.width;
    arr[choosed].style.height =  arr[choosed-1].style.height;
    arr[choosed].title = arr[choosed-1].title;
    arr[choosed].style.border= arr[choosed-1].style.border;
    arr[choosed-1].src = tmp;
    arr[choosed-1].style.width = tmp1;
    arr[choosed-1].style.height = tmp2;
    arr[choosed-1].title = tmp3;
    arr[choosed-1].style.border = tmp4;
    arr[choosed].style.opacity = "1";
    choosed = null;
}
function movedown(){
    let tmp = arr[choosed].src;
    let tmp1 = arr[choosed].style.width;
    let tmp2 =  arr[choosed].style.height;
    let tmp3 =  arr[choosed].title;
    let tmp4 =  arr[choosed].style.border;
    arr[choosed].src = arr[choosed+1].src;
    arr[choosed].style.width =  arr[choosed+1].style.width;
    arr[choosed].style.height =  arr[choosed+1].style.height;
    arr[choosed].title = arr[choosed+1].title;
    arr[choosed].style.border= arr[choosed+1].style.border;
    arr[choosed+1].src = tmp;
    arr[choosed+1].style.width = tmp1;
    arr[choosed+1].style.height = tmp2;
    arr[choosed+1].title = tmp3;
    arr[choosed+1].style.border = tmp4;
    arr[choosed].style.opacity = "1";
    choosed = null;
}
function setResolImg(){
    arr2 = document.getElementsByClassName("form");
    arr[choosed].style.width = arr2[0].value+"px";
    arr[choosed].style.height = arr2[1].value+"px";
    arr[choosed].style.border = arr2[2].value+"px solid red";
    arr[choosed].title = arr2[3].value+"";
    arr[choosed].style.opacity = "1";
}