// alert("欢迎来到二楼!")

function username() {
    var flag = false;
    var timerId = null;
   var arr = ['炸串', '口水鸡', '小拌同学', '上汤上面', '滋补羊肉烩面', '肉夹馍（自选水饺）', '渔粉', '石锅饭', '寿司', '热干面', '天下好面', '瓦香鸡', '金龙福麻辣烫',
        '烤冷面', '臻香鸭腿饭', '兰州拉面', '黄焖鸡', '老街炒汇', '酱爆鸡', '小笼包（盖浇饭）', '乔记米线', '肉蟹煲',
    ];

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
