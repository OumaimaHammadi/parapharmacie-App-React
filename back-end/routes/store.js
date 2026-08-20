import express  from "express";
import {store} from '../controllers/storeController.js'
import{getSingleProduct} from '../controllers/productController.js'

const router =express.Router()


router.get('/',store)
router.get('/getSingleProduct/:id',getSingleProduct)
export default router;