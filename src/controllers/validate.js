import { ResponseHandler } from "../handlers/ResponseHandler";

const flattenObject = (obj, prefix = '') =>
Object.keys(obj).reduce((acc, k) => {
  const pre = prefix.length ? prefix + '.' : '';
  if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
  else acc[pre + k] = obj[k];
  return acc;
}, {});

const validationResponseSchema = (bool, field, field_value, condition, condition_value) => {
  return  {
     validation: {
    error: bool,
    field: field,
    field_value: field_value,
    condition: condition,
    condition_value: condition_value
  }
};
}

const comparisonMap = {
  gte: function(field_value, condition_value) {
    return field_value >= condition_value
  },
  gt : function(field_value, condition_value) {
    return field_value > condition_value
  },
  neq: function(field_value, condition_value) {
    return field_value !== condition_value
  },
  eq : function(field_value, condition_value) {
    return field_value === condition_value
  },
  contains: function(data, condition_value) {
    return data.includes(condition_value)
  }
};

export class ValidateController {
  
  static validate(req, res) {
    const { rule, data } = req.body;
    const { field, condition, condition_value} = rule;
    if (Array.isArray(data) === true){
      if (!data.includes(field)) {
        return ResponseHandler.response("error", 400, `field ${field} is missing from data.`, res, null);
      } else {
        const field_value = data.find(element => element === field );
        const comparisonFunction = comparisonMap[condition];
        const bool = comparisonFunction(field_value, condition_value);
        if (bool) {
          const valid = validationResponseSchema(!bool, field, field_value, condition, condition_value);
          return ResponseHandler.response("success", 200, `field ${field} is successfully validated.`, res, valid);
        } else {
          const valid = validationResponseSchema(!bool, field, field_value, condition, condition_value);
          return ResponseHandler.response("error", 400, `field ${field} failed validation.`, res, valid);
        }
        
      }
    }
    if (typeof data === 'string') {
      // if (data !== field){
      //   return ResponseHandler.response("error", 400, `field ${field} is missing from data.`, res, null);
      // } else {
        const comparisonFunction = comparisonMap[condition];
        const bool = comparisonFunction(data[field], condition_value);
        if (bool) {
          const valid = this.buildValidationResponseSchema(!bool, field, data[field], condition, condition_value);
          return ResponseHandler.response("success", 200, `field ${field} is successfully validated.`, res, valid);
        } else {
          const valid = validationResponseSchema(!bool, field, data[field], condition, condition_value);
          return ResponseHandler.response("error", 400, `field ${field} failed validation.`, res, valid);
        }
        
      // }
    }
    if (typeof data === 'object') {
      const flattenedObject = flattenObject(data);
      if (!flattenedObject.hasOwnProperty(field)) {
        return ResponseHandler.response("error", 400, `field ${field} is missing from data.`, res, null);
      } else {
        const comparisonFunction = comparisonMap[condition];
        const bool = comparisonFunction(flattenedObject[field], condition_value);
        if (bool) {
          const valid = validationResponseSchema(!bool, field, flattenedObject[field], condition, condition_value);
          return ResponseHandler.response("success", 200, `field ${field} is successfully validated.`, res, valid);
        } else {
          const valid = validationResponseSchema(!bool, field, flattenedObject[field], condition, condition_value);
          return ResponseHandler.response("error", 400, `field ${field} failed validation.`, res, valid);
        }
        
      }
    }
    
  }

}