const joi = require('joi');

const userValidation = (body) => {
    const UserShema =
    joi.object({
        username : joi.string().min(3).max(40).trim().required(),
        firstname : joi.string().min(3).max(40).trim().required(),
        lastname : joi.string().min(3).max(40).trim().required(),
        email : joi.string().min(3).max(40).trim().required(),
        password : joi.string().min(3).max(40).trim().required(),
        profile_picture : joi.string().min(3).max(40).trim().required(),
        favorite_anime : joi.string().min(3).max(40).trim().required()
    })
    return UserShema.validate(body);
}

module.exports = userValidation;