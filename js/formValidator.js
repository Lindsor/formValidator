/**
 * The application object.
 * @type {Object}
 */
var app = app || {};

/**
 * A validator module used to validate values passed in.
 * Usefull for form validations.
 */
app.validator = app.validator || (function formTesterClosure() {
  'use strict';

  /**
   * The form validation module.
   * @type {Object}
   */
  var module = {};

  /**
   * Assign the validation constants for the object.
   */
  (function validationConstantsClosure() {
    /**
     * The constant properties.
     * @type {Object}
     */
    var propConfig = {
      writable: false,
      enumerable: true
    };

    /**
     * The constants.
     * @type {Object}
     */
    var constants = {
      NOT_EMPTY: "notempty",
      EMPTY: "empty",
      CONFIRM: "confirm",
      EMAIL: "email",
      INTEGER: "integer",
      FLOAT: "float",
      NUMBER: "number",
      MAX_LENGTH: "maxlength",
      MIN_LENGTH: "minlength",
      GREATER_THAN: "greaterthan",
      SMALLER_THAN: "smallerthan",
      DATE: "date",
      TELEPHONE: "telephone",
      PASSWORD: "password"
    };

    for (var prop in constants) {
      if (!constants.hasOwnProperty(prop)) {
        continue;
      }

      //If possible use the Object.defineProperty function to make properties write protected.
      if (Object.defineProperty) {
        propConfig.value = constants[prop];
        Object.defineProperty(module, prop, propConfig);
      } else {
        module[prop] = constants[prop];
      }
    }
  })();

  /**
   * Confirms the passed in value is empty.
   * @param  {String}  value    The confirmation value.
   * @return {Boolean}          True if the confirmation passes, false otherwise.
   */
  module.isValidEmpty = function(value) {
    return (value + '').length === 0;
  };

  /**
   * Confirms the passed in value is not empty.
   * @param  {String}  value    The confirmation value.
   * @return {Boolean}          True if the confirmation passes, false otherwise.
   */
  module.isValidNotEmpty = function(value) {
    return !module.isValidEmpty(value);
  };

  /**
   * Confirms the two passed in values are equal.
   * They are first converted to a string.
   * Then the basic euality operator is used.
   * @param  {String}  value    The confirmation value.
   * @param  {String}  original The original value to compare to.
   * @return {Boolean}          True if the confirmation passes, false otherwise.
   */
  module.isValidEqual = function(value, original) {
    return (value + '') === (original + '');
  };

  /**
   * Checks to make sure value is a valid email.
   * @param  {String}  value The value to validate.
   * @return {Boolean}       True if valid email, false otherwise.
   */
  module.isValidEmail = function(value) {
    var emailRegex = /^(?:(?:[^<>()\[\]\\.,;:\s@\"]+(?:\.[^<>()\[\]\\.,;:\s@\"]+)*)|(?:\".+\"))@(?:(\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(?:(?:[a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailRegex.test(value);
  };

  /**
   * Checks if the passed in value is a valid integer.
   * @param  {String}  value   The value to check if integer.
   * @return {Boolean}         True if valid integer, false otherwise.
   */
  module.isValidInteger = function(value) {
    var integerRegEx = /^\-?\d+$/;

    return integerRegEx.test((value + ''));
  };

  /**
   * Checks if the passed in value is a valid float.
   * @param  {String}  value   The value to check if float.
   * @return {Boolean}         True if valid float, false otherwise.
   */
  module.isValidFloat = function(value) {
    var floatRegEx = /^\-?\d*\.\d+$/;

    return floatRegEx.test((value + ''));
  };

  /**
   * Checks if the passed in value is a valid number.
   * @param  {String}  value   The value to check if number.
   * @return {Boolean}         True if valid number, false otherwise.
   */
  module.isValidNumber = function(value) {
    return module.isValidInteger(value) || module.isValidFloat(value);
  };

  /**
   * Checks to make sure the value is less then or equal to the length.
   * @param  {String}   value  The value to check for max length.
   * @param  {Numeric}  length The max length allowed.
   * @return {Boolean}         True if within max length, false otherwise.
   */
  module.isValidMaxLength = function(value, length) {
    value = value + '';
    return (value.length <= length);
  };

  /**
   * Checks to make sure the value is greater then or equal to the length.
   * @param  {String}   value  The value to check for min length.
   * @param  {Numeric}  length The min length allowed.
   * @return {Boolean}         True if within min length, false otherwise.
   */
  module.isValidMinLength = function(value, length) {
    value = value + '';
    return (value.length >= length);
  };

  return module;
})();

/**
 * Validates a form, the validation types are set in the HTML by using data-attributes.
 * To use:
 *  - Add a class of js-form-validate to the root form.
 *  - Add class of js-validate-field to the inputs you wish to validate.
 *  - The element which will hold the error message is chosen in one of two ways:
 *    - Add a data-error-element attribute with the id of the element which should display the error.
 *    - If no data-error-element is provided the next sibling element will be used if it has a class of js-validate-error.
 *  - On the validate inputs add an attribute of data-validation.
 *    This is a semi-colon separated string of validation types.
 *    Optionally a second parameter can be sent in using a colon to separate them, ex: validationType:<validationParameter>.
 *    - email: Checks its a valid email.
 *    - notEmpty: Checks its not an empty field.
 *    - confirm: Checks its equal to the input with the passed in ID, ex: confirm:inputID.
 *    - minLength: Checks the character length is more than or equal to the passed in length, ex: minLength:10.
 *    - maxLength: Checks the character length is less than or equal to the passed in length, ex: maxLength:10.
 *    - integer: Checks the value is a valid integer.
 *    - float: Checks the value is a valid float.
 *    - number: Checks the value is a valid integer or float.
 *    - NOT IMPLEMENTED YET:
 *      - greaterThan: Checks the value is greater than the passed in value, ex: greaterThan:hello
 *      - smallerThan: Checks the value is smaller than the passed in value, ex: smallerThan:10
 *      - date: Checks the value is a valid date, optionally a format can be sent, ex: date:yyyy-mm-dd.
 *      - telephone: Checks the value is a valid telephone.
 *      - password: Checks the value is a valid password.
 *      
 * This module depends on the validator module.
 * If validator is not loaded it will print an error message and do nothing.
 */
app.formValidator = app.formValidator || (function formValidatorClosure() {
  'use strict';

  /**
   * The separators to use.
   * @type {Object}
   */
  var separators = {
    types: ";",
    properties: ":"
  };

  /**
   * The classes used in the form validator.
   * @type {Object}
   */
  var classes = {
    form: "js-form-validate",
    field: "js-validate-field",
    error: "js-validate-error"
  };

  /**
   * The data attributes used in the form validator.
   * @type {Object}
   */
  var data = {
    validation: "data-validation",
    errorElement: "data-error-element",
    errors: "data-errors"
  };

  /**
   * Holds the validator object.
   */
  var validator;

  /**
   * The formValidation module.
   * @type {Object}
   */
  var module = {};

  /**
   * Attaches the event to the passed in element.
   * @param  {String}   event   The event to attach.
   * @param  {Object}   element The DOMObject to attach the event to.
   * @param  {Function} cb      The callback function to handle the event.
   */
  function _attachEvent(event, element, cb) {
    if (window.addEventListener) {
      element.addEventListener(event, cb);
    } else {
      element.attachEvent("on" + event, function(e) {
        cb.call(element, e);
      });
    }
  }

  /**
   * Handles the form submission.
   * @param  {Object} e The event object.
   */
  function _handleSubmit(e) {
    var form = this,
      inputs = form.querySelectorAll("." + classes.field),
      isValid = true;

    //Loop through inputs and make sure they are all valid.
    for (var i = 0, l = inputs.length; i < l; i++) {
      //If is valid is equal to false do not overwirte it wit the returned value from validate input.
      if (isValid) {
        isValid = _validateInput(inputs[i]);
      } else {
        _validateInput(inputs[i]);
      }
    }

    if (!isValid) {
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
    }
  }

  /**
   * Returns the error element linked to the provided input by data-attributes.
   * data-error-element = the id of the element where the error should be displayed.
   * @param  {Object} input The input element whose error element to grab.
   * @return {Object}       The error element.
   */
  function _getErrorElement(input) {
    var errorElementId = input.getAttribute(data.errorElement) || undefined,
      errorElement = document.getElementById(errorElementId) || undefined;

    //If no error element try to get the next element.
    //If it has the class js-validate-error then use it.
    if (typeof errorElement === 'undefined') {
      errorElement = input.nextElementSibling || input.nextSibling;

      //Ie8 returns a textNode as nextSibling so grab the next sibling again for ie8.
      if (errorElement.nodeType !== 1) {
        errorElement = errorElement.nextSibling;
      }

      if (errorElement.className.indexOf(classes.error) < 0) {
        return undefined;
      }
    }

    return errorElement;
  }

  /**
   * Clears the error message.
   * @param  {Object} input The input DOM object.
   */
  function _clearError(input) {
    var errorElement = _getErrorElement(input);

    //If no error element do nothing.
    if (typeof errorElement === 'undefined') {
      return false;
    }

    //Clear the error
    errorElement.innerHTML = "";
  }

  /**
   * Displays the error message based on the data getAttributes.
   * data-errors = a list of comma seperated errors and their messages.
   * @param  {Object} input The input DOM object.
   * @param  {String} the error type.
   */
  function _displayError(input, type) {
    var errorElement = _getErrorElement(input),
      errors = input.getAttribute(data.errors || '').split(separators.types),
      error,
      message;

    //If no error element do nothing.
    if (typeof errorElement === 'undefined') {
      return false;
    }

    //Loop through the errors and diaplay the 
    for (var i = 0, l = errors.length; i < l; i++) {
      error = errors[i].split(separators.properties);
      message = error[1];
      error = error[0];

      if (error.toLowerCase() === type.toLowerCase()) {
        errorElement.innerHTML = message;
        return true;
      }
    }
  }

  /**
   * Validates the passed in input.
   * @param  {Object} input  The input/checkbox/select to validate.
   * @return {Boolean}       True if validated, false otherwise.
   */
  function _validateInput(input) {
    var validations = (input.getAttribute(data.validation) || '').split(separators.types),
      inputValue = input.value,
      validation,
      type,
      val;

    //Clear the error element.
    _clearError(input);

    //Loop through validations and validate.
    for (var i = 0, l = validations.length; i < l; i++) {
      validation = validations[i];

      //Get the extra validation value if passed in.
      if (validation.indexOf(separators.properties) >= 0) {
        validation = validation.split(separators.properties);
        type = validation[0];
        val = validation[1];
      } else {
        type = validation;
        val = undefined;
      }

      //Run the correct validation, if it does not pass, display error on the correct input.
      if (!_runCorrectValidation(type, inputValue, val)) {
        _displayError(input, type);
        return false;
      }
    }
    return true;
  }

  /**
   * Decides which validation to use based on the passed in parameters.
   * First it checks for manual assignment of which validation to use,
   * if manual assignment not found then tries to guess which one to use based on the passed in type.
   * @param  {String} type            The type of validation to run.
   * @param  {String} validationValue The actual value that will be validated.
   * @param  {String} parameter       An extra parameter to send into the validation function.
   * @return {Boolean}                True if validated, false otherwise.
   */
  function _runCorrectValidation(type, validationValue, parameter) {
    var validationFunction = "isValid" + type.charAt(0).toUpperCase() + type.slice(1),
        validate = validator[validationFunction];

    //Manual validations go here, ones that dont have a isValid<type> function.
    //Validations that also need some extra logic should go here to ensure they work.
    switch (type.toLowerCase()) {
      case validator.CONFIRM:
        //If the value is not set send a console warning.
        if (typeof parameter === "undefined") {
          console.log("The 'confirm' directive needs to be passed in the id of the element to confirm with.");
        }
        return validator.isValidEqual((document.getElementById(parameter) || {}).value, validationValue);
        break;
    }

    //Try to guess the which validation function to use.
    if (typeof validate === "function") {
      return validate(validationValue, parameter);
    } else {
      console.log("Could not find a validation function for the passed in validation type of: %s.\nMake sure the validator object has a function called %s.\nOr add a custom validation method in the _runCorrectValidation function.", type, validationFunction);
    }

    return true;
  }

  /**
   * Initializes the module.
   */
  module._initialize = function() {
    var forms = document.querySelectorAll("." + classes.form);

    validator = app.validator;

    //Form validation is dependent on the valiator object.
    if (typeof validator === "undefined") {
      console.log("No validator");
      return false;
    }

    for (var i = 0, l = forms.length; i < l; i++) {
      _attachEvent("submit", forms[i], _handleSubmit);
    }
  };

  return module;
})();

app.formValidator._initialize();
