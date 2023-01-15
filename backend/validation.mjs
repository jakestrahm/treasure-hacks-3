import joi from "joi";

const AccountCreateSchema = joi.object({
    email: joi.string()
        .email({minDomainSegments: 2,tlds: { allow: ["com", "net"] }})
        .required(),

    password: joi.string()
        .min(8)
        .max(255)
        .required(),

    phoneNumber: joi.string().
        pattern(/^[0-9]+$/)
})

const ItemCreateSchema = joi.object({
    name: joi.string()
        .required(),
    
    //categories: List[string]
    
    description: joi.string(),

    dueBy: joi.number()
        .integer()
        .required(),
})

export { AccountCreateSchema, ItemCreateSchema } 