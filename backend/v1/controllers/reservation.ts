// @ts-nocheck
import nodemailer from 'nodemailer'
import { ReservationService } from '../services'
import { config } from './../configuration/config'

interface Reservation {
  oneWay: boolean
  roundTrip: boolean
  from: string
  to: string
  dateStart: string
  dateEnd: string
  adults: number
  children: number
  email: string
}

export class ReservationController {
  constructor(private reservationService = new ReservationService()) {}

  async getAll() {
    let response: any[] = []

    const reservations = await this.reservationService.getAllReservations()

    reservations.map((reserver) =>
      response.push({
        id: reserver.id,
        departureTime: `${new Date(reserver.dateStart).getHours()}:${new Date(reserver.dateStart).getMinutes()}`,
        destination: reserver.to,
        code: 'code - 01',
        door: '01',
        status: reserver.status,
      }),
    )
    return response
  }

  async create(data: Reservation) {
    const { email } = data

    if (data.oneWay && data.roundTrip) {
      throw new Error('Only one way or round trip is allowed')
    }

    if (data.oneWay && data.dateEnd) {
      throw new Error('Only dateStart way is allowed')
    }

    if (data.roundTrip && !data.dateStart && !data.dateEnd) {
      throw new Error('DateStart and DateEnd are required')
    }

    if (data.from === data.to) {
      throw new Error('From and to cannot be the same')
    }

    const validateEmail = await this.reservationService.getByEmail(email)

    if (validateEmail.length > 0) {
      const filterEmailsAviable = validateEmail.filter(
        (reservation) => reservation.status !== 'RECHAZED',
      )
      if (filterEmailsAviable.length > 0) {
        throw new Error('Email already exists')
      }
    }

    const newReservation = {
      ...data,
      status: 'WAIT',
    }

    const reservation =
      await this.reservationService.createReservation(newReservation)

    const htmlContent = `
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Confirmacion</title>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: sans-serif;
        }
        body {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: rgba(255, 255, 255, 0.868);
        }
        .wrapper {
          background-color: rgb(255, 255, 255);
          display: flex;
          width: 90%;
          height: 600px;
          margin: 500px;
          border-radius: 20px;
          box-shadow: 0px 5px 20px rgb(87, 87, 87);
          max-width: 900px;
          position: fixed;
        }
        .content {
          width: 30%;
          display: flex;
          align-items: center;
          text-align: center;
          background-color: rgba(139, 218, 255, 0.868);
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }
        .title {
          width: 100%;
          padding: 0 30px;
        }
        .form-information {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          background-color: aliceblue;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
        }
        .confirmation-form {
          padding: 10px 50px;
          text-decoration: none;
        }
        .confirmation-form h3 {
          margin: 20px 100px;
          font-size: 2.5rem;
          align-items: center;
          justify-content: center;
        }
        .icon {
          margin: 15px 20px;
        }
        .icon i {
          margin: 10px 45px;
          border-radius: 50%;
          padding: 15px;
          border: solid thin rgba(18, 125, 175, 0.868);
          text-decoration: none;
          color: rgba(18, 125, 175, 0.868);
          cursor: pointer;
        }
        .form {
          margin: 10px 0 0 0;
        }
        .form label {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          border-radius: 20px;
          padding: 0 30px;
          box-shadow: 0px 1px 3px rgb(5, 5, 5);
        }
        form label input {
          width: 100%;
          padding: 10px;
          background-color: aliceblue;
          border: none;
          outline: none;
          border-radius: 20px;
        }
        .form input[type='submit'] {
          margin: 50px;
          background-color: rgba(139, 218, 255, 0.868);
          color: rgb(32, 31, 31);
          border-radius: 30px;
          border: none;
          padding: 15px 30px;
          cursor: pointer;
          margin-top: 8px;
          margin-bottom: 10px;
          box-shadow: 0px 1px 2px rgb(5, 5, 5);
        }
        .link {
          align-items: center;
          margin: 15px 192px;
          cursor: pointer;
        }
        .link a {
          color: rgba(18, 125, 175, 0.868);
          outline: 10px;
        }
      </style>
      <body>
        <div class="wrapper">
          <div class="content">
            <div class="title">
              <h2>GUACAMAYA AIRLINES</h2>
            </div>
          </div>
          <div class="form-information">
            <div class="confirmation-form">
              <h3>FLIGHT DATA</h3>
              <p>Destino: ${data.to} </p>
              <p>Fecha: ${data.dateStart} </p>
              <p>Puerta: 01 </p>
              
              <p>Click en el siguiente enlace para confirmar:  ${config.hostAPI}/api/v1/reservations/${reservation.id}/confirm?status=CONFIRM</p>
              <p>Click en el siguiente enlace para rechazar:  ${config.hostAPI}/api/v1/reservations/${reservation.id}/confirm?status=RECHAZED</p>
          </div>
        </div>
      </body>
    </html>
    `

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.email,
        pass: config.passwordEmail,
      },
    })

    var mailOptions = {
      from: config.email,
      to: email,
      subject: 'Guacamaya Airlines - Te invitamos a conocer Venezuela',
      html: htmlContent,
    }

    transporter.sendMail(
      mailOptions,
      function (error: any, info: { response: string }) {
        if (error) {
          console.log(error)
        } else {
          console.log('Email sent: ' + info.response)
        }
      },
    )
    return reservation
  }

  async update(id: string, changes: any) {
    return await this.reservationService.updateReservation(id, changes)
  }
}
