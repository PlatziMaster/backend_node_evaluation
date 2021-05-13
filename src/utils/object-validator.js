class ValidationError extends Error {
  toJSON() {
    return { message: this.message };
  }
}

class ObjectValidator {
  constructor(config) {
    this.propsValidators = {};
    Object.keys(config).forEach((key) => {
      this.propsValidators[key] = [];
    });
    Object.entries(config).forEach(([prop, propConfig]) => {
      const { required, string, number } = propConfig;
      if (string && number)
        throw new Error(
          `Invalid config, prop '${prop}' cant be string and number at same time`
        );
      if (required) this.required(prop);
      if (string) this.string(prop);
      if (number) this.number(prop);
    });
  }

  addValidator(prop, type, validator) {
    if (this.propsValidators[prop]) {
      this.propsValidators[prop].push({ type, validator });
    } else {
      this.propsValidators[prop] = [{ type, validator }];
    }
  }

  required(prop) {
    this.addValidator(prop, "required", (obj, prop) =>
      obj.hasOwnProperty(prop)
    );
  }

  string(prop) {
    this.addValidator(
      prop,
      "string",
      (obj, prop) =>
        typeof obj[prop] === "string" || typeof obj[prop] === "undefined"
    );
  }

  number(prop) {
    this.addValidator(
      prop,
      "number",
      (obj, prop) =>
        typeof obj[prop] === "number" || typeof obj[prop] === "undefined"
    );
  }

  validate(obj) {
    const errors = [];
    const propsToValidate = Object.keys(this.propsValidators);
    Object.keys(obj).forEach((key) => {
      if (!propsToValidate.includes(key)) delete obj[key];
    });
    Object.entries(this.propsValidators).forEach(([prop, validators]) => {
      validators.forEach(({ type, validator }) => {
        if (!validator(obj, prop)) {
          errors.push(
            new ValidationError(
              `property '${prop}' failed '${type}' validation`
            )
          );
        }
      });
    });
    return {
      errors,
      obj,
    };
  }
}

module.exports = { ObjectValidator, ValidationError };
