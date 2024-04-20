import { ReservationService, ResendService } from '../services'

export class ReservationController {
  constructor(
    private reservationService = new ReservationService(),
    private emailService = new ResendService(),
  ) {}

  async create(data: any) {
    const { email } = data

    const newReservation = {
      ...data,
      dateStart: new Date(data.dateStart * 1000).toISOString(),
      dateEnd: new Date(data.dateEnd * 1000).toISOString(),
    }

    const reservation =
      await this.reservationService.createReservation(newReservation)
    await this.emailService.sendEmail(
      email,
      'Guacamaya Airlines - Felicidades haz reservado exitosamente un vuelo',
      `
      <!doctype html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <title>Confirmación de Reserva</title>
          <style>
            body {
              font-family: sans-serif;
              margin: 0;
              padding: 0;
            }
      
            .container {
              width: 600px;
              margin: 0 auto;
              padding: 20px;
              border: 1px solid #ccc;
            }
      
            h1 {
              text-align: center;
              margin-bottom: 20px;
            }
      
            p {
              margin-bottom: 10px;
            }
      
            .button {
              background-color: #007bff;
              color: white;
              padding: 10px 20px;
              border: none;
              cursor: pointer;
              text-decoration: none;
            }
      
            .button:hover {
              background-color: #0056b3;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>¡Gracias por su reserva!</h1>
      
            <p>Estimado(a) [Nombre del cliente],</p>
      
            <p>
              Le confirmamos su reserva para [Nombre del servicio] el [Fecha de la
              reserva] a las [Hora de la reserva].
            </p>
      
            <p>Detalles de la reserva:</p>
            <ul>
              <li>Nombre del cliente: [Nombre del cliente]</li>
              <li>Servicio reservado: [Nombre del servicio]</li>
              <li>Fecha de la reserva: [Fecha de la reserva]</li>
              <li>Hora de la reserva: [Hora de la reserva]</li>
            </ul>
      
            <p>
              Para confirmar su reserva, por favor haga clic en el siguiente botón:
            </p>
      
            <a href="[Enlace para confirmar la reserva]" class="button"
              >Confirmar reserva</a
            >
      
            <p>
              Si no confirma su reserva en 24 horas, se cancelará automáticamente.
            </p>
      
            <p>Agradecemos su preferencia.</p>
      
            <p>Atentamente,</p>
            <p>[Nombre de la empresa]</p>
          </div>
        </body>
      </html>
      
      `,
    )
    return reservation
  }

  async update(id: string, changes: any) {
    return await this.reservationService.updateReservation(id, changes)
  }
}
