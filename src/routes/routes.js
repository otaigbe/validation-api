import express from "express";
import { ValidateController } from "../controllers/validate";
import { NotFoundError } from "../handlers/CustomError";
import { ValidationSchema } from "../middleware/ValidationSchema";
import { Validate } from "../middleware/Validate";
const router = express.Router();

router.post("/validate-rule", Validate.checkBody, Validate.validateSchema(ValidationSchema.validationRuleSchema), Validate.checkFieldPattern, ValidateController.validate);
router.get("/", (req, res)=> {
	return res.status(200).json({
		"message": "My Rule-Validation API",
		"status": "success",
		"data": {
		  "name": "Okhueleigbe Otaigbe",
		  "github": "@otaigbe",
		  "email": "otaigbe.okhueleigbe@gmail.com",
		  "mobile": "08068436812"
		}
	  })
});

router.get("/*", function (req, res) {
	throw new NotFoundError("Service requested not found");
});

router.post("/*", function (req, res) {
	throw new NotFoundError("Service requested not found");
});

export default router;
