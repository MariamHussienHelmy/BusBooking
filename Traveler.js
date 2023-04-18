// Core node modules
const fs = require("fs"); // file system

// Express Import
const router = require("express").Router();
const { body, validationResult } = require("express-validator");

// File modules
const conn = require("../db/dbConnection");
const authorized = require("../middleware/authorize");
const admin = require("../middleware/admin");
const upload = require("../middleware/uploadImages");
const util = require("util"); // helper

router.post(
  "/create",
  admin,
  body("name")
    .isString()
    .withMessage("please enter a valid name")
    .isLength({ min: 10, max: 20 })
    .withMessage("name should be between (10-20) character"),
  body("email")
    .isEmail()
    .withMessage("please enter a valid email")
    .isLength({ min: 5 }),
  body("phone")
    .isMobilePhone()
    .withMessage("please enter a valid number")
    .isLength({ min: 5 }),
  body("password")
    .isLength({ min: 8, max: 12 })
    .withMessage("password should be between (8-12) character"),
  async (req, res, next) => {
    try {
      // 1- VALIDATION REQUEST [manual, express validation]
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // 3- PREPARE travelers OBJECT
      const traveler = {
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        phone: req.body.phone,
        token: crypto.randomBytes(16).toString("hex"), // JSON WEB TOKEN, CRYPTO -> RANDOM ENCRYPTION STANDARD
      };

      // 4 - INSERT travelers INTO DB
      const query = util.promisify(conn.query).bind(conn);
      await query("insert into users set ? ", traveler);
      res.status(200).json({
        msg: "created successfully !",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

// UPDATE Appointment [ADMIN]
router.put(
  "/:id", // params
  admin,
  body("name")
    .isString()
    .withMessage("please enter a valid name")
    .isLength({ min: 10, max: 20 })
    .withMessage("name should be between (10-20) character"),
  body("email")
    .isEmail()
    .withMessage("please enter a valid email")
    .isLength({ min: 5 }),
  body("phone")
    .isMobilePhone()
    .withMessage("please enter a valid number")
    .isLength({ min: 5 }),

  async (req, res) => {
    try {
      // 1- VALIDATION REQUEST [manual, express validation]
      const query = util.promisify(conn.query).bind(conn);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // 2- CHECK IF traveler EXISTS OR NOT
      const traveler = await query("select * from users where id = ?", [
        req.params.id,
      ]);
      if (!traveler[0]) {
        res.status(404).json({ ms: "traveler not found !" });
        return;
      }

      // 3- PREPARE MOVIE OBJECT
      const travelerObj = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
      };

      // 4- UPDATE MOVIE
      await query("update users set ? where id = ?", [
        travelerObj,
        traveler[0].id,
      ]);

      res.status(200).json({
        msg: "traveler updated successfully",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

// DELETE APPOINTMENT [ADMIN]
router.delete(
  "/:id", // params
  admin,
  async (req, res) => {
    try {
      // 1- VALIDATION REQUEST [manual, express validation]
      const query = util.promisify(conn.query).bind(conn);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      // 2- CHECK IF Appointment EXISTS OR NOT
      const traveler = await query("select * from users where id = ?", [
        req.params.id,
      ]);
      if (!traveler[0]) {
        res.status(404).json({ ms: "traveler not found !" });
        return;
      }

      await query("delete from users where id = ?", [traveler[0].id]);
      res.status(200).json({
        msg: "Traveler deleted successfully",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

// LIST & SEARCH [ADMIN, USER]
// router.get("", async (req, res) => {
//     const query = util.promisify(conn.query).bind(conn);
//     let search = "";
//     if (req.query.search) {
//         // QUERY PARAMS
//         search = `where name LIKE '%${req.query.search}%' or description LIKE '%${req.query.search}%'`;
//     }
//     const movies = await query(`select * from movies ${search}`);
//     movies.map((movie) => {
//         movie.image_url = "http://" + req.hostname + ":4000/" + movie.image_url;
//     });
//     res.status(200).json(movies);
// });

// SHOW traveler [ADMIN, USER]
router.get("/getone/:id", async (req, res) => {
  const query = util.promisify(conn.query).bind(conn);
  const traveler = await query("select * from users where id = ?", [
    req.params.id,
  ]);
  if (!traveler[0]) {
    res.status(404).json({ ms: "traveler not found !" });
  }
  res.status(200).json(traveler[0]);
});

//SHOW ALL
router.get("/all", async (req, res) => {
  const query = util.promisify(conn.query).bind(conn);
  const traveler = await query("select * from users where type = 'traveler' ");
  if (!traveler[0]) {
    res.status(404).json({ ms: "traveler not found !" });
  }
  res.status(200).json(traveler);
});

module.exports = router;
