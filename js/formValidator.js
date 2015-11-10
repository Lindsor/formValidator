/**
 * The application object.
 * @type {Object}
 */
var app = app || {};

/**
 * The validator object.
 * @type {Object}
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
    var emailRegex = /^(?:(?:[^<>()[\]\\.,;:\s@\"]+(?:\.[^<>()[\]\\.,;:\s@\"]+)*)|(?:\".+\"))@(?:(\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(?:(?:[a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
 * The form validator object.
 */
app.formValidator = app.formValidator || (function formValidatorClosure() {
  
})();