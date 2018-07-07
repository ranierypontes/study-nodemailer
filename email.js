var nodemailer = require("nodemailer");

// Configurando o email host...
var transporter = nodemailer.createTransport({
    // Servidor do email que vai enviar a msg
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, // se a porta for 465 == true, qualquer == false
    auth: {
        user: 'emailhost',
        pass: 'password...'
    }
});

// Configura a mensagem...
var msg = {
    from: 'emailhost',
    to: 'emailreceiver',
    subject: 'Esse é o meu primeiro email usando Nodemailer!',
    text: "Oi, tudo bem? Testando primeira mensagem usando Nodemailer :)",
    html: "<div style='width: 100vh; height: auto; margin-right: auto; margin-left: auto;'>" +
            "<h1 style='text-align: center; font-weight: bold; text-transform: uppercase; padding: 20px 0; font-size: 24px; color: #7649b2;'>Testando mensagem html no email...</h1>" +
            "<p style='font-size: 18px; text-align: left; padding: 10px 0; color: #565656;'>Isto é um parágrafo html :)</p>" +
            "<p style='font-size: 18px; text-align: left; color: #565656;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non felis rutrum, maximus nulla eu, congue sem. Fusce mollis pretium sapien, dignissim egestas tellus placerat eu. Phasellus ullamcorper, ligula sit amet feugiat viverra, tellus neque placerat leo, at placerat purus nulla vel velit. Aenean eu velit metus. In ut iaculis purus, sit amet pellentesque est. Donec et lectus turpis. Sed dignissim fermentum dignissim. Nam et venenatis ante.</p>" +
          "</div>",
    attachments: [
        {
            filename: 'boleto.txt',
            path: './boleto.txt',
        }
    ]

}

// Enviando a mensagem...
transporter.sendMail(msg, (error, info) => {
    if(error) {
        return console.log(error);
    }
    console.log("Mensagem enviada com sucesso!");
});