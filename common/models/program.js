'use strict';

module.exports = function(Program) {
    Program.sendEmail = (message, subject, emailAddresses, cb) => {
        console.log(emailAddresses);
        Program.app.models.Email.send({
            to: emailAddresses,
            from: "JJJJ",
            subject: subject,
            text: message,
            html: message
        }, function (err, mail){
            console.log("correo enviado");
            if (err) return err;
        });
        cb(null, 'message sent: ' + message);
    };

    Program.remoteMethod('sendEmail',{
        http: {
            path: '/sendEmail',
            verb: 'get'
        },
        description: [
            "Api to send email messages."
        ],
        accepts: [
            {
               arg: 'message',
               type: 'string',
               required: true 
            },
            {
                arg: 'subject',
                type: 'string',
                required: true 
            },
            {
                arg: 'emailAddresses',
                type: 'string',
                required: true 
            }
        ],
        returns: { arg: 'response', type: 'string' }
    });

};
