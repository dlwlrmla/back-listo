const { Router } = require("express");
const {
  getUsuario,
  postUsuario,
  putUsuario,
  deleteUsuario,
} = require("../controllers/users.controllers");

const router = Router();

router.get("/", getUsuario);

router.put("/:id", putUsuario);
router.post("/", postUsuario);

router.delete("/", deleteUsuario);

module.exports = router;
