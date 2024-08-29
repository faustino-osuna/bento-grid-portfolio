import { EmailTemplate } from '@/app/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND);

export async function POST(request) {
  try {
    const res = await request.json()
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_EMAIL,
      to: process.env.EMAIL,
      subject: `Correo de ${res.nombre}`,
      react: EmailTemplate({nombre: res.nombre, email: res.email, mensaje: res.mensaje}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
