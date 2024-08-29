export const EmailTemplate = ({nombre, email, mensaje}) => (
  <div>
    <h1>Correo de: {nombre}!</h1>
    <h3>Email: {email}</h3>
    <p>{mensaje}</p>
  </div>
);
