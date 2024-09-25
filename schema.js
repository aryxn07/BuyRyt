const Joi = require('joi');
module.exports.courseSchema = Joi.object({
    course: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().allow("", null),
        price: Joi.number().required().min(0),
        author: Joi.string().required(),
        rating: Joi.number().required().min(1),
        language: Joi.string().required(),       
        
    }).required()
});