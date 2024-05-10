
async function sendMail(req, res) {
    const { email, message } = req.body;
    console.log(email, message);

    // Configurações do Nodemailer para enviar e-mails
    const transporter = nodemailer.createTransport({
        service: 'outlook.office365.com',
        auth: {
            user: 'marmac2022@hotmail.com',
            pass: 'Marmac7922!@'
        }
    });

    // Opções do e-mail
    const mailOptions = {
        from: email,
        to: 'marmac2022@hotmail.com',
        subject: 'Formulario Contato',
        text: `De: ${email}\n\n${message}`
    };

    // Enviar e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar e-mail:', error);
            res.status(500).send('Ocorreu um erro ao enviar o e-mail.');
        } else {
            console.log('E-mail enviado:', info.response);
            res.send('E-mail enviado com sucesso!');
        }
    });
}

module.exports = {sendMail};