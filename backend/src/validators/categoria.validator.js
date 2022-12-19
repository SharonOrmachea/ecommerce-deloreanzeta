import {body} from "express-validator";
import {validateResult} from "../middlewares/validate.helper.js";

export const validateCategoria = [
    body("nombre")
        .exists()
        .withMessage("El campo nombre no fue ingresado")
        .not()
        .isEmpty()
        .withMessage("El nombre de la categoria no puede estar vacio")
        .isString()
        .withMessage('La categoria debe ser una cadena de caracteres')
        .isLength({ min: 4 })
        .withMessage('El nombre de la categoria debe componerse de al menos 4 caracteres')
        .custom((value, {req}) => {
            if(value.trim() == 0)
                throw new Error("El nombre no puede componerse unicamente de espacios");
            return true;
            }
        )
    ,
    (req, res, next) => {
        validateResult(req, res, next)
    }
]
