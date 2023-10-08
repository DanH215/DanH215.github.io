// npm i --save mailslurp-client
// import { MailSlurp } from 'mailslurp-client';
const mailslurp = new MailSlurp({ apiKey: "0521169837df75db0cff841b5ad4f11749723afce309ff2ebb1c3d00769f8d77" });
const inbox = await mailslurp.inboxController.createInboxWithDefaults();

function sendEmail() 
{
    Email.send({
        Host : "mailslurp.mx",
        Username : "bKTznWHiGgBp65FoouLJjeBFsoV39IRG",
        Password : "OlYMGX5fo1QpOO9WX1hLBYrYMu9rpihR",
        To : 'dh215@hotmail.co.uk',
        From : "dh215@hotmail.co.uk",
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(message => alert(message));
}