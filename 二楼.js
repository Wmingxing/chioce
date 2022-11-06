// alert("欢迎来到二楼!")

function username() {
    var flag = false;
    var timerId = null;
    var arr = ['刘志远', '万策', '李博文', '曹建莹', '张佳祺', '赵瑞瑞', '陈全虎', '胡金朋', '耿建丽', '王如雪', '王振涛', '刘放', '张亚迪', '朱翔煜', '王奥', '薛澳飞', '刘志玮', '胡高洋', '周畅', '赵英杰', '徐亚美', '郑勇超', '闻吉祥', '王阿雨', '陈德帅', '申林益', '赵艳哲', ' 肖梦飞', '鲍尔欣', '代星澳', '汪青', '谢森成', '雷吕能', '丁康宁', '杨泽文', '王永杰', '侯振强', '马建成', '朱保森', '王皓圆', '孙秀婷', '靳丹丹', '李聪', '纪妍', '苏文璇'];

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