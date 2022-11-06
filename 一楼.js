function username() {
    var flag = false;
    var timerId = null;
       var arr = ['成都小吃', '手工水饺', '臊子面', '江湖烫', '馋嘴饼', '盖浇饭', '精品套餐', '老干妈炒饭', '精选套餐', '木桶饭', '山西风味饼', '麻辣香锅', '营养套餐', '倔强面', '臻食汇早餐', '好粥道', '梅三餐'];


    div[1].onclick = function() {

        if (flag) {
            clearInterval(timerId);
            div[1].innerHTML = '不满意?那继续吧'
            flag = false;
        } else {
            timerId = setInterval(function() {
                var re = Math.floor(Math.random() * arr.length);
                console.log(re);
                div[0].innerHTML = arr[re];
            }, 60);
            div[1].innerHTML = '开始'
            flag = true;
        }
    }
}

function myF() {
    const btn = document.getElementById('btn');
    const p = document.getElementById('p');
    btn.onclick = function() {
        if (p.style.display == 'block') {
            p.style.display = 'none'
        } else {
            p.style.display = 'block'
        }
    }
}
