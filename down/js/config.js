var num={
    getLocal(name) {
        return JSON.parse(localStorage.getItem(name))
    },
    setLocal(name, val) {
        localStorage.setItem(name, JSON.stringify(val))
    },
},downloadCount=parseInt(num.getLocal('downloadCount'))||68773,scoreCount=parseInt(num.getLocal('scoreCount'))||5643;
downloadCount=downloadCount+Math.floor(Math.random()*(1 - 50) + 50)
scoreCount=scoreCount+Math.floor(Math.random()*(1 - 50) + 50)

var loadCurrentApp={
    appId: 43,
    appName: "大博集团",//网址名称
    appLogoPath: "./img/dabojituan_logo.png",//appLogo
    appBannerPath: "./img/dabojituan_banner.png",//头部背景
    appInformation: "推荐用户下载手机APP，防劫持、防跳转！娱乐无忧，随时随地畅享游戏乐趣。全面支持：存取款、游戏下注、优惠申请、在线客服...",//描述
    appEffectList: [
        "./img/500xc_effect_1.png",
        "./img/500xc_effect_2.png",
        "./img/500xc_effect_3.png",
        "./img/500xc_effect_4.png",
        "./img/500xc_effect_5.png"
    ],//尾部輪播
    appVersion: "v1.20",//版本
    isAppVersionJs: false,//是否有极速版app
    appScore: 4.9,//評分star
    scoreCount,//评分人数
    appAndroidPath: "https://myappdownhk.oss-cn-hongkong.aliyuncs.com/500DEV/dabojituan.dev.ys.apk", //Android下載地址
    jsAppAndroidPath: "https://myappdownhk.oss-cn-hongkong.aliyuncs.com/500DEV/dabojituan.dev.js.apk", //极速Android下載地址
    helpHref: "https://a16.chatsets.com/chat/chatClient/chatbox.jsp?companyID=",//客服
    appHomeUrl: "http://dev.boyin168.com/",//官网地址
    codeUrl: "https://www.dabojituan.com/down/",//二维码链接 *链接为图片时 仅支持填入 gif|jpg|jpeg|png|GIF|JPG|PNG 等格式
    qrCodeLogo: "./img/dabojituan_logo.png",//二维码logo
    appDownloadPath: "itms-services://?action=download-manifest&url=https://www.dabojituan.com/down/iosys/manifest.plist",//ios下載地址
    jsAppDownloadPath: "itms-services://?action=download-manifest&url=https://www.dabojituan.com/down/ios/manifest.plist",//极速ios下載地址
    downloadCount,//下载数量
    mobileprovision: 'https://www.dabojituan.com/down/dabojituan.mobileprovision'//信任证书
}


num.setLocal('downloadCount',loadCurrentApp.downloadCount)
num.setLocal('scoreCount',loadCurrentApp.scoreCount)
function getAppDownload(e) {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端


    if (isAndroid == true) {
        return {
            url:e.appAndroidPath,
            jsUrl:e.jsAppAndroidPath,
        }
    } else if (isiOS == true) {
        return {
            url:e.appDownloadPath,
            jsUrl:e.jsAppDownloadPath,
        }
    }else {
        return {
            url:e.appAndroidPath,
            jsUrl:e.jsAppAndroidPath,
        }
    }
}
