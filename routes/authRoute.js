import express from "express";
 import {registerController,loginController,forgotPasswordController,testController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from "../controllers/authController.js"
import { isAdmin,requireSignIn} from "../middleware/authMiddleware.js"

 //router object
 const router =express.Router()

 //routing
 //register || method post

 router.post ('/register',registerController)

 //login api

router.post('/login',loginController)
 //Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//testroutes
router.get('/test',requireSignIn,isAdmin, testController)

//protected route auth
 router.get("/user-auth",requireSignIn, (req,res)=>{
     res.status(200).send({ok:true});
 });

//protected Admin route auth
router.get("/admin-auth",requireSignIn,isAdmin, (req, res) => {
     res.status(200).send({ ok: true });
   });


   
 //update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

 export default router;