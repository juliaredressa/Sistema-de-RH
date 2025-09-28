import express from 'express'
import EmployeeController from '../controller/employeeController.js'

const router = express.Router()
const controler = new EmployeeController()

//router.get("/register", controler)

export default router;