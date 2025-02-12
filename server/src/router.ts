import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

// Define parfum-related routes
import parfumActions from "./modules/parfum/parfumActions";

router.get("/api/parfum", parfumActions.browse);
router.get("/api/parfum/:id", parfumActions.read);
router.post("/api/parfum/create", parfumActions.add);
router.delete("/api/parfum/delete/:id", parfumActions.deleteParfum);

/* ************************************************************************* */

export default router;
