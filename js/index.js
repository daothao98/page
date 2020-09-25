document.addEventListener("DOMContentLoaded",function(){
    var doimau = document.getElementById('heart'),
        nut = document.querySelector('.toggle'),
        hienthi = document.querySelector('.menu'),
        thongbao1 = document.querySelector('.search'),
        thongbao2 = document.getElementById('btn');

    doimau.onclick = function() {
        doimau.classList.toggle('red_heart');
    }
    nut.onclick = function (){
        hienthi.classList.toggle('active');
        if (hienthi.style.maxHeight){
            hienthi.style.maxHeight = null;
        } else {
            hienthi.style.maxHeight = hienthi.scrollHeight + "px";
        } 
    }
    thongbao1.onclick = function(){
        alert('Đây là thông báo số 1');
    }
    thongbao2.onclick = function (){
        alert("Đây là thông báo số 2!");
    }    
},false)
