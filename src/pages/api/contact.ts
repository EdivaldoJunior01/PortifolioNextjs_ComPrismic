import nodemailer from 'nodemailer';
import sendgridTransport from 'nodemailer-sendgrid-transport';
import { NextApiRequest, NextApiResponse } from 'next';

const email = process.env.MAILADRESS;

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRI_API_KEY
    }
  })
);

export default async (req: NextApiRequest, res: NextApiResponse) => {


  try {
    const { senderMail, name, content } = req.body;
    if (!senderMail.trim() || !name.trim() || !content.trim()) {//verificar se vem alguma var vazia
      return res.status(403).send('');
    }
    const message = {
      from: email,
      to: email,
      subject: `Nova mensagem de contato - ${name}`,
      html: `<p><b>Email:</b> ${senderMail}<br/> <b>Mensagem:</b> ${content}</p>`,
      replyTo: senderMail
    };
    transporter.sendMail(message);

    return res.send('');
  } catch (err) {
    return res.json({
      error: true,
      message: err.message
    });
  }
}

