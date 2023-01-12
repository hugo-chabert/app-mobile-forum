const joi = require('joi');

let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
let nameRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/i;
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/im;
const userValidation = (body) => {
    const UserShema =
    joi.object({
        username : joi.string().min(3).max(40).trim().regex(nameRegex).required(),
        firstname : joi.string().min(3).max(40).trim().regex(nameRegex).required(),
        lastname : joi.string().min(3).max(40).trim().regex(nameRegex).required(),
        email : joi.string().min(3).max(40).trim().regex(emailRegex).required(),
        password : joi.string().min(3).max(40).trim().regex(passwordRegex).required(),
        profile_picture : joi.string().min(3).max(40).trim().required(),
        favorite_anime : joi.string().min(3).max(40).trim().required()
    })
    return UserShema.validate(body);
}

module.exports = userValidation;