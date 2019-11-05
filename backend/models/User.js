

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let User = new Schema(
    {
        FirstName: {
            type: String
        },
        LastName: {
            type: String
        },
        Username: {
            type: String
        },
        Password: {
            type: String
        },
        Token: {
            type: String
        }
    },
    {
        collection: "User"
    }
);

module.exports = mongoose.model("User", User);
