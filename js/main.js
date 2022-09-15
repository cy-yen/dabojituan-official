// 第二种方式
function urlredirect() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  if (
    sUserAgent.match(
      /(ipod|iphone os|midp|ucweb|android|windows ce|windows mobile)/i
    )
  ) {
    // PC跳转移动端
    var thisUrl = window.location.href;
    window.location.href =
      thisUrl.substr(0, thisUrl.lastIndexOf("/") + 1) + "wap/index.html";
  }
}
urlredirect();

$(function () {
  //固定顶部
  $(document).scroll(function () {
    var top = $(document).scrollTop();
    if (top < 10) $("#j-jeader").removeClass("fixed");
    else if (top > 10) $("#j-jeader").addClass("fixed");
  });

  //返回顶部
  if ($("meta[name=toTop]").attr("content") == "true") {
    $("<div id='toTop' class='backtop'></div>").appendTo("body");
    if ($(this).scrollTop() == 0) {
      $("#toTop").hide();
    }
    $(window).scroll(function (event) {
      /* Act on the event */
      if ($(this).scrollTop() == 0) {
        $("#toTop").hide();
      }
      if ($(this).scrollTop() != 0) {
        $("#toTop").show();
      }
    });
    $("#toTop").click(function (event) {
      /* Act on the event */
      $("html,body").animate(
        {
          scrollTop: "0px",
        },
        666
      );
    });
  }

  // 案例
  //
  $("#j-slider-default-2").unslider({
    animation: "horizontal",
    autoplay: true, //默认true 可删
    arrows: true, //默认true 可删
    nav: false, //默认true 可删
    delay: 10000, //默认3000 可删
  });

  var domain = location.href;
  domain = domain.replace("https://", "");
  domain = domain.replace("http://", "");
  if (domain.indexOf("www.") == 0) {
    domain = domain.replace("www.", "");
  }
  domain = domain.substring(0, domain.indexOf("/"));

  // var contact = $$Contact.getContact(domain);
  // var modalContactString = "";
  // if (contact) {
  //   var template =
  //     '<ul class="ul-item">\
  //     <li><a href="skype:<%=skype%>?chat"><i class="icon-skype"></i><span>Skype：<%=skype%></span></a></li>\
  //     <li><a href="http://t.me/<%=telegram%>" target="_blank"><i class="icon-tele"></i><span>Telegram：@<%=telegram%></span></a></li>\
  //     <li><a href="https://api.whatsapp.com/send?phone=<%=whatsapp%>" target="_blank"><i class="icon-wa"></i><span>Whatsapp：+<%=whatsapp%></span></a></li>\
  //     <li><a href="tencent://message/?uin=<%=qq%>&Site=<%=domain%>&Menu=yes"><i class="icon-qq"></i><span>QQ：<%=qq%></span></a></li>\
  //     </ul>';
  //   modalContactString = _.template(template, contact);
  //   $("#contactInfo").append(_.template($("#contactTemplate").text(), contact));
  // }
  $("#btnModal").on("click", function () {
    layer.open({
      type: 1,
      title: false,
      area: ["460px", "500px"],
      shade: 0,
      closeBtn: 1,
      shadeClose: true,
      skin: "popInfo",
      content:
        '<div class="inner"><div class="hd"><i></i><h3>温馨提示</h3></div>\
      <div class="bd">' +
        modalContactString +
        '\
      <div class="des"><b>备注：</b>为防止骗子利用<span class="fc-red">Skype</span>账号冒充ROBO行骗，以上是官方联系方式，其他一切均为假冒，请各位客户注意！建议同时加我们联系方式时相互验证防止上当受骗！</div>\
      </div></div>',
    });
  });
});
