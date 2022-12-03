var Contactus = require('../module/contactus');

let contactus = {};


class ContactusData {

    async SaveContactus(data, cb) {
        let reguser = {};
        reguser.Name = data.rname;
        reguser.Email = data.remail;
        reguser.Message = data.rmessage;

        console.log("check", data);



        let contactusModel = new Contactus(reguser);
        await contactusModel.save((err, contactus) => {
            if (err) {
                console.log(err);
                return cb({ Status: "err", Msg: "Error while Saving Data", data: {} });

            } else {
                return cb({ Status: "suc", Msg: "Detail Saved", data: contactus });
            }
        });
    }
}

module.exports = ContactusData;