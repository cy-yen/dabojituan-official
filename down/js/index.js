window.onload = function () {
    // 点击查看引导显示滑动层
    $('.look').click(function () {
        $('.install').show();
    })
    // 初始化better-scroll
    let swiperInstall = new BScroll('.wrapper', {
        // bounce: false,
    })
    // 点击X号关闭滑动层
    $('.close').click(function () {
        $('.install').hide()
    })
    // 点击黑色蒙层关闭滑动层
    $('.install').click(function () {
        $('.install').hide()
        return false;
    })
    // 阻止点击滑动层关闭mask
    $('#swiperInstall').click(function (event) {
        event.preventDefault();
        return false;
    })

    // 点击下一步隐藏IOS弹窗
    $('.closeMask').click(function () {
        $('#license_step_img1').hide();
        createDomAndClick(loadCurrentApp.mobileprovision);
        setTimeout(function () {
            $('#license_step_img2').show();
        }, 4000);
    })

    // 底部滑动幻灯片实例化
    function newSwiper(swiperList) {
        var swiperListLen = swiperList.length;
        if (swiperListLen) {
            var html = '<div class="swiper-wrapper">';
            for (var i = 0; i < swiperListLen; i++) {
                html += '<img src="' + swiperList[i] + '" class="swiper-slide">';
            }
            html += '</div>';
            $('#swiperImg').html(html);

            var swiperImg = new Swiper('#swiperImg', {
                loop: true, // 循环模式选项
                autoplay: {
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                slidesPerView: 'auto',
                spaceBetween: 20,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            })
        }
    }

    // 判断是否是IOS121_4
    function isAfterIos121_4() {
        var nu = navigator.userAgent.toLowerCase();
        var iosVersion = nu.match(/cpu iphone os (.*?) like mac os/);
        if (iosVersion && iosVersion.length > 1) {
            iosVersion = iosVersion[1].replace('_', '').replace('_', '.');
            return iosVersion && Number(iosVersion) > 121.4
        }
        return false
    }

    // 判断是否是安卓设备
    function isAndroid() {
        let u = navigator.userAgent;
        return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    }

    function isSafari() {
        return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    }

    // 判断是否是IOS设备
    function isIos() {
        let u = navigator.userAgent;
        return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    }

    // 创建a标签
    function createDomAndClick(href) {
        var a = document.createElement('a');
        a.setAttribute('href', href);
        a.setAttribute('target', '_self');
        a.setAttribute('id', 'startTelMedicine');
        // 防止反复添加
        if (document.getElementById('startTelMedicine')) {
            document.body.removeChild(document.getElementById('startTelMedicine'));
        }
        document.body.appendChild(a);
        a.click();
    }

    // 安装中的文字进度
    function loading(callback, timeout,js) {
        var index = 0;
        var loadingState = ['.', '..', '...'];
        var intervalId = setInterval(function () {
            if (index > 2) {
                index = 0;
            }
            let css=js?'#js_download_btn':'#download_btn'
            $(css).text('正在安装,请耐心等待' + loadingState[index]);

            index++
        }, 500);

        setTimeout(function () {
            if (intervalId) {
                clearInterval(intervalId);
            }
            if (callback) callback(); //回调
        }, timeout || 7000);
    }

    // ios12.1.4之前的下载按钮点击事件处理
    function onBeforeIos1214DownloadBtnClick(downLoadPath,js) {
      //  if (!isAndroid() && !isSafari()) {
      //      alert('请使用苹果自带浏览器Safari打开本页');
      //      return false;
       // }
        createDomAndClick(downLoadPath);
        loading(function () {
            let css=js?'#js_download_btn':'#download_btn'
            $(css).html('安装完成后,请返回桌面查看').css('background', 'linear-gradient(to right,#f1402f,#fe953a)');
        }, 7000,js);
    }

    // ios12.1.4之后的下载按钮点击事件处理
    function onAfterIos1214DownloadBtnClick(downLoadPath,js) {
       // if (!isSafari()) {
       //     alert('请使用苹果自带浏览器Safari打开本页');
        //    return false;
       // }
        loading(function () {
            let css=js?'#js_download_btn':'#download_btn'
            $(css).html('安装完成后,请返回桌面查看').css('background', 'linear-gradient(to right,#f1402f,#fe953a)');
        }, 10000,js);

        // 延迟2秒显示证书遮罩层
        setTimeout(() => {
            $('.ios_mask').show();
        }, 2000)

        // 延迟3秒显示证书安装箭头指示
        setTimeout(function () {
            $('#license_step_img1').show();
        }, 3000);
        createDomAndClick(downLoadPath);
    }

    function textFlashing() {
        var colors = ['red', 'blue']
        var index = 0
        setInterval(function () {
            if (index > colors.length) {
                index = 0
            }
            $('.closeMask').css('color', colors[index]);
            index++;
        }, 400)
    }

    var appPath=getAppDownload(loadCurrentApp)
   {
       var data = loadCurrentApp
       document.title = data.appName;
       $('#app_banner').attr('src', data.appBannerPath);
       $('#app_logo').attr('src', data.appLogoPath);
       $('#app_name').html(data.appName);
       $('#download_count').html(Number(data.downloadCount ).toFixed(0));
       $('#app_version').html(data.appVersion);
       $('#app_information').html(data.appInformation);
        $('#grade').html(Number(data.appScore).toFixed(1));
       $('#grade_person_count').html(data.scoreCount + '人评分');
       $('#app_home').click(function () {
           window.open(data.appHomeUrl);
       });
       // 绑定在线客服点击事件
       $('#online_service').click(function () {
           window.open(data.helpHref);
       });
       //是否有极速版
       if(!data.isAppVersionJs){
           var jsApp=document.querySelector('.jsApp'),gw=document.querySelector('.gw')
           jsApp.style.display='none'
           gw.style.width='100%'
       }
       $('.cha').click(function () {
           $('.ios_mask').hide();
       })

       //实例化幻灯片
       newSwiper(data.appEffectList);
       // 如过当前是ios12.1.4预先给下载按钮绑定href链接以及控制安装引导的教程显示
       if (isAfterIos121_4()) {
           $('#download_btn').attr(appPath.url);
           $('#js_download_btn').attr(appPath.jsUrl);
           $('#iosafter').show();
           $('#iosbefore').hide();
       }
       // 处理下载app按钮的点击事件
       $('#download_btn').click(function () {
           isAfterIos121_4() ? onAfterIos1214DownloadBtnClick(appPath.url) : onBeforeIos1214DownloadBtnClick(appPath.url);
       });

       $('#js_download_btn').click(function () {
           isAfterIos121_4() ? onAfterIos1214DownloadBtnClick(appPath.jsUrl,'js') : onBeforeIos1214DownloadBtnClick(appPath.jsUrl,'js');
       });

       if(/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(data.codeUrl)){
           var img='<img src="'+data.codeUrl+'"/>'
           document.querySelector('.container').innerHTML=img
           return false
       }

       $("#container").qrcode(
           {
               render : "canvas",    //设置渲染方式，有table和canvas，使用canvas方式渲染性能相对来说比较好
               // text : window.location.origin+'/app/index.html',//二维码内容    //扫描二维码后显示的内容,可以直接填一个网址，扫描二维码后自动跳向该链接
               text :data.codeUrl,//二维码内容    //扫描二维码后显示的内容,可以直接填一个网址，扫描二维码后自动跳向该链接
               width : "150",            // //二维码的宽度
               height : "150",              //二维码的高度
               background : "#ffffff",       //二维码的后景色
               foreground : "#000000",        //二维码的前景色
               src:data.qrCodeLogo,            //二维码中间的图片
           }
       );
   }
    textFlashing();
}
