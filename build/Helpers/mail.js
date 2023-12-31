"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
var transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMPT_USER,
        pass: process.env.SMPT_PASSWORD,
    },
});
const sendMail = (mail) => {
    let mailOptions = {};
    if (mail.resume) {
        mailOptions = {
            from: process.env.SMPT_USER,
            to: mail.email,
            subject: "Sending Email.",
            text: mail.message,
            html: `Thank you for apply ${mail.firstname} ${mail.lastname}\n Mobile : ${mail.mobile}`,
            attachments: [
                {
                    filename: mail.resume.originalname,
                    contentType: "application/pdf",
                },
            ],
        };
    }
    else {
        mailOptions = {
            from: process.env.SMPT_USER,
            to: mail.email,
            subject: "Sending Email.",
            // text: mail.message,
            html: ` ${mail.message}\n Interest : ${mail.interest}`,
        };
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
        }
        else {
            console.log(info);
        }
    });
};
exports.default = sendMail;
