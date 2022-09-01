(function (window,_) {
    var contactArr = []
    contactArr.push({
        domain: "robo18.com",
        skype: "robobetcc@gmail.com",
        qq: "1951222999",
        telegram: "robogaming001",
        whatsapp: "639667017888"
    });
    contactArr.push({
        domain: "robobet.cc",
        skype: "robobetcc@gmail.com",
        qq: "1835999777",
        telegram: "robogaming002",
        whatsapp: "639653999555"
    });

    window.$$Contact = {
        getContact: function (domain) {
            var result = _.where(contactArr, {domain: domain});
            if (result.length > 0) {
                return result[0];
            }
            return null;
        }
    }
})(window,_)
