import 'dotenv/config.js'
import '../../config/database.js'
import User from '../User.js'

const users = [
    {
      name: "luis1",
      email: "luis1@gmail.com",
      address: "Dirección 1",
      phone: 1234567890,
      password: "1234",
      online: false
    },
    {
      name: "luis2",
      email: "luis2@gmail.com",
      address: "Dirección 2",
      phone: 1234567891,
      password: "1234",
      online: false
    },
    {
      name: "luis3",
      email: "luis3@gmail.com",
      address: "Dirección 3",
      phone: 1234567892,
      password: "1234",
      online: false
    },
    {
      name: "luis4",
      email: "luis4@gmail.com",
      address: "Dirección 4",
      phone: 1234567893,
      password: "1234",
      online: false
    },
    {
      name: "luis5",
      email: "luis5@gmail.com",
      address: "Dirección 5",
      phone: 1234567894,
      password: "1234",
      online: false
    },
    {
      name: "luis6",
      email: "luis6@gmail.com",
      address: "Dirección 6",
      phone: 1234567895,
      password: "1234",
      online: false
    },
    {
      name: "luis7",
      email: "luis7@gmail.com",
      address: "Dirección 7",
      phone: 1234567896,
      password: "1234",
      online: false
    },
    {
      name: "luis8",
      email: "luis8@gmail.com",
      address: "Dirección 8",
      phone: 1234567897,
      password: "1234",
      online: false
    },
    {
      name: "luis9",
      email: "luis9@gmail.com",
      address: "Dirección 9",
      phone: 1234567898,
      password: "1234",
      online: false
    },
    {
      name: "luis10",
      email: "luis10@gmail.com",
      address: "Dirección 10",
      phone: 1234567899,
      password: "1234",
      online: false
    }
  ];









User.insertMany(users)