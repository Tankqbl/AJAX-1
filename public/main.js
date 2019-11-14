

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // 创建 html标签
                const div = document.createElement("div");
                // 填写html 内容
                div.innerHTML = request.response;
                // 插到BODY里面
                document.body.appendChild(div);
            } else {
                alert("加载 3.html失败");
            }
        }
    }
    request.send()
}
let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 & request.status <= 300) {
                const array = JSON.parse(request.response)
                //把符合json语法的字符串变成对应的类型数据结构
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xx.appendChild(li)
                });
            }
        }
    }
    n += 1
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 & request.status <= 300) {
                const object = JSON.parse(request.response)
                //把符合json语法的字符串变成对应的类型数据结构
                console.log(object)
            }
        }

    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                const dom = request.responseXML
                //xml元素在AJAX里面是可以直接被找到引用的
                const text = dom.getElementsByTagName('warning')[0].textContent
                //getElementsByTagName后面是直接得到数组，所以要标记第几项,textcontent是把里面内容变成文本
                console.log(text.trim())
            }
        }
    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js"); // readyState = 1
    request.onreadystatechange = () => {
        console.log(request.readyState);
        // 代表了下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // status在200-300，代表成功加载，此时创建script标签
                const script = document.createElement("script");
                // 填写 script 内容
                script.innerHTML = request.response;
                // 插到BODY里面
                document.body.appendChild(script);
            } else {
                alert("加载 2.js失败");
            }
        }
    };
    request.send(); // readyState = 2
};


getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/style.css"); // readyState = 1
    request.onreadystatechange = () => {
        console.log(request.readyState);
        // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // 创建 style 标签
                const style = document.createElement("style");
                // 填写 style 内容
                style.innerHTML = request.response;
                // 插到头里面
                document.head.appendChild(style);
            } else {
                alert("加载 CSS 失败");
            }
        }
    };
    request.send(); // readyState = 2
};