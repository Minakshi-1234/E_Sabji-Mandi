import express from "express";
import ExpressFormidable from "express-formidable";
import { requireSignIn,isAdmin } from "../middleware/authMiddleware.js";
import { createProductController, getProductController, getSingleProductController,productPhotoController,deleteProductController,updateProductController, productFiltersController, productCountController, productListController, searchProductController, realtedProductController, productCategoryController, braintreeTokenController, brainTreePaymentController } from "../controllers/productController.js";

const router = express.Router();
//routes
//create product
router.post(
     "/create-product",
     requireSignIn,
     isAdmin,
     ExpressFormidable(),
     createProductController
   );

//update product

router.put(
     "/update-product/:pid",
     requireSignIn,
     isAdmin,
     ExpressFormidable(),
     updateProductController
   );
   //get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);


//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;