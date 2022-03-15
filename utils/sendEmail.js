const nodemailer = require("nodemailer");

const password = process.env.PASS;
const user = process.env.USER;

const zohopassword = process.env.ZOHO_PASS;
const zohouser = process.env.ZOHO_USER;

const sendEmail = async(name,email, subject, text) =>{
    try{
        const transporter = nodemailer.createTransport({
            
            // ethereal Code Working
            // host: 'smtp.ethereal.email',
            // port: 587,
            // auth: {
            // user: 'theo.huels71@ethereal.email',
            // pass: 'FUrC5VRb86PAVNjm6K'
            // },
            // tls: {
            //     rejectUnauthorized: false
            // }

            // Gmail Code Working
            // service: 'Gmail',
            // host: 'smtp.gmail.com',
            // port: 465,
            // secure: true,
            // auth: {
            //     user: user,
            //     pass: password,
            // },
            // tls: {
            //     ciphers: "SSLv3",
            //     rejectUnauthorized: false
            // }

            // // Zoho Code work
            host: 'smtp.zoho.com',
            port: 465,
            secure: true, // use SSL
            auth: {
            user: zohouser,
            pass: zohopassword,
            },
            tls: {
                    ciphers: "SSLv3",
                    rejectUnauthorized: false,
            }

        });

        await transporter.sendMail({
            from: user,
            to: email,
            subject: subject,
            text: text,
            html: `<h2>Hello ${name}</h1>
                    <br/>
                    <h3>Your account password token is</h3>
                    <h3><a href=${text}>Click here to Reset Password</a>'</h3>
                    <h4>'This token is valid only within two minutes.</h4>'

                    'Thanks,Team. '` // the tick should come here
        });
        console.log("Email sent successfully");
    }
    catch (error) {
        console.log(error, "email not sent");
    }
}

module.exports = sendEmail