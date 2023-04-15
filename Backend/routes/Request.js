const router = require("express").Router();
const conn = require("../db/dbConnection");
const { body, validationResult } = require("express-validator");
const util = require("util"); // helper
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const admin = require("../middleware/admin");

router.post(
    "/create/:appid/:userid", async (req, res) => {
        try {
            const appointmentId = req.params.appid;
            const userId = req.params.userid;
            const query = util.promisify(conn.query).bind(conn);
            const requset = {
                appointment_id: appointmentId,
                traveler_id: userId
            }
            await query("insert into appointment_requests set ? ", requset);
            res.status(200).json({
                msg: "created successfully !",
            });
        }
        catch (err) {
            res.status(500).json(err);
        }
    })

router.put(
    "/accept/:id",
    admin,
    async (req, res) => {
        try {
            const query = util.promisify(conn.query).bind(conn);
            // UPDATE appointment_requests SET status=pending
            await query("UPDATE appointment_requests SET status=  'accepted' where id = ?", req.params.id);
            res.status(200).json({
                msg: "created successfully !",
            });
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
)

router.put(
    "/decline/:id",
    admin,
    async (req, res) => {
        try {
            const query = util.promisify(conn.query).bind(conn);
            // UPDATE appointment_requests SET status=pending
            await query("UPDATE appointment_requests SET status=  'declined' where id = ?", req.params.id);
            res.status(200).json({
                msg: "created successfully !",
            });
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
)



module.exports = router;