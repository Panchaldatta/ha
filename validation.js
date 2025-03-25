const Joi =require("joi");

const bookSchema = Joi.object({
    id : Joi.number().integer().min(1).max(9999).required(),
    title : Joi.string().min(3).required(),
    author : Joi.string().min(3).required(),
    price: Joi.number().integer().required(),
    publishedYear: Joi.number().integer().min(2000).max(2025).required()
})

const validateBook = (req,res,next)=>{
    const {error} = bookSchema.validate(req.body);
    if(error){
        return res.status(400).send({message:error.details[0].message})
        }
        next();
};

module.exports = validateBook;