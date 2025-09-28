import express from 'express'
import EmployeeRouter from './routes/employeeRouter.js'

const app = express()
const port = 5000

app.use("/employee", EmployeeRouter)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});