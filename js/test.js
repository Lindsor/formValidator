(function testClosure(q) {
  'use strict';

  //Test the global config variables.
  q.test("Global Configs", function isValidEmptyClosure(assert) {
    var validator = app.validator;

    Object.keys(validator).forEach(function(key) {
      var original = validator[key];

      //If not a string do nothing.
      if (typeof original !== 'string') {
        return;
      }

      try {
        validator[key] = "test";
      } catch (e) {}

      assert.equal(validator[key], original, "Tested: " + key + ".");
    });
  });

  //Test the isValidEmpty function.
  q.test("isValidEmpty", function isValidEmptyClosure(assert) {
    assert.equal(app.validator.isValidEmpty(""), true, "Passing in: ' '.");
    assert.equal(app.validator.isValidEmpty(" "), false, "Passing in: <space>.");
    assert.equal(app.validator.isValidEmpty("a"), false, "Passing in: 'a'.");
    assert.equal(app.validator.isValidEmpty("1"), false, "Passing in: '1'.");
    assert.equal(app.validator.isValidEmpty(1), false, "Passing in: 1.");
    assert.equal(app.validator.isValidEmpty(undefined), false, "Passing in: undefined.");
    assert.equal(app.validator.isValidEmpty(null), false, "Passing in: null.");
    assert.equal(app.validator.isValidEmpty(Infinity), false, "Passing in: Infinity.");
    assert.equal(app.validator.isValidEmpty(NaN), false, "Passing in: NaN.");
    assert.equal(app.validator.isValidEmpty(true), false, "Passing in: true.");
    assert.equal(app.validator.isValidEmpty(false), false, "Passing in: false.");
  });

  //Test the isValidNotEmpty function.
  q.test("isValidNotEmpty", function isValidNotEmptyClosure(assert) {
    assert.equal(app.validator.isValidNotEmpty(""), false, "Passing in: ' '.");
    assert.equal(app.validator.isValidNotEmpty(" "), true, "Passing in: <space>.");
    assert.equal(app.validator.isValidNotEmpty("a"), true, "Passing in: 'a'.");
    assert.equal(app.validator.isValidNotEmpty("1"), true, "Passing in: '1'.");
    assert.equal(app.validator.isValidNotEmpty(1), true, "Passing in: 1.");
    assert.equal(app.validator.isValidNotEmpty(undefined), true, "Passing in: undefined.");
    assert.equal(app.validator.isValidNotEmpty(null), true, "Passing in: null.");
    assert.equal(app.validator.isValidNotEmpty(Infinity), true, "Passing in: Infinity.");
    assert.equal(app.validator.isValidNotEmpty(NaN), true, "Passing in: NaN.");
    assert.equal(app.validator.isValidNotEmpty(true), true, "Passing in: true.");
    assert.equal(app.validator.isValidNotEmpty(false), true, "Passing in: false.");
  });

  //Test the isValidEqual function.
  q.test("isValidEqual", function isValidEqualClosure(assert) {
    assert.equal(app.validator.isValidEqual("", ""), true, "Passing in: ' ', ' '.");
    assert.equal(app.validator.isValidEqual(" ", " "), true, "Passing in: <space>, <space>.");
    assert.equal(app.validator.isValidEqual(" ", ""), false, "Passing in: <space>, ' '.");
    assert.equal(app.validator.isValidEqual("a", "a"), true, "Passing in: 'a', 'a'.");
    assert.equal(app.validator.isValidEqual("1", 1), true, "Passing in: '1', 1.");
    assert.equal(app.validator.isValidEqual(1, 1), true, "Passing in: 1, 1.");
    assert.equal(app.validator.isValidEqual(undefined, undefined), true, "Passing in: undefined, undefined.");
    assert.equal(app.validator.isValidEqual(null, null), true, "Passing in: null, null.");
    assert.equal(app.validator.isValidEqual(Infinity, Infinity), true, "Passing in: Infinity, Infinity.");
    assert.equal(app.validator.isValidEqual(NaN, NaN), true, "Passing in: NaN, NaN.");
    assert.equal(app.validator.isValidEqual(true, true), true, "Passing in: true, true.");
    assert.equal(app.validator.isValidEqual(false, false), true, "Passing in: false, false.");
    assert.equal(app.validator.isValidEqual(true, false), false, "Passing in: true, false.");
  });

  //Test the isValidEmail function.
  q.test("isValidEmail", function isValidEmailClosure(assert) {
    assert.equal(app.validator.isValidEmail(""), false, "Passing in: ' '.");
    assert.equal(app.validator.isValidEmail(" "), false, "Passing in: <space>.");
    assert.equal(app.validator.isValidEmail("a"), false, "Passing in: 'a'.");
    assert.equal(app.validator.isValidEmail("1"), false, "Passing in: '1'.");
    assert.equal(app.validator.isValidEmail(1), false, "Passing in: 1.");
    assert.equal(app.validator.isValidEmail(undefined), false, "Passing in: undefined.");
    assert.equal(app.validator.isValidEmail(null), false, "Passing in: null.");
    assert.equal(app.validator.isValidEmail(Infinity), false, "Passing in: Infinity.");
    assert.equal(app.validator.isValidEmail(NaN), false, "Passing in: NaN.");
    assert.equal(app.validator.isValidEmail(true), false, "Passing in: true.");
    assert.equal(app.validator.isValidEmail(false), false, "Passing in: false.");
    assert.equal(app.validator.isValidEmail("tester.test@q.com"), true, "Passing in: 'tester.test@q.com'.");
  });

  //Test the isValidInteger function.
  q.test("isValidInteger", function isValidIntegerClosure(assert) {
    assert.equal(app.validator.isValidInteger(""), false, "Passing in: ' '.");
    assert.equal(app.validator.isValidInteger(" "), false, "Passing in: <space>.");
    assert.equal(app.validator.isValidInteger("a"), false, "Passing in: 'a'.");
    assert.equal(app.validator.isValidInteger("-1"), true, "Passing in: '-1'.");
    assert.equal(app.validator.isValidInteger("1"), true, "Passing in: '1'.");
    assert.equal(app.validator.isValidInteger(1), true, "Passing in: 1.");
    assert.equal(app.validator.isValidInteger(-1), true, "Passing in: -1.");
    assert.equal(app.validator.isValidInteger(1.1), false, "Passing in: 1.1.");
    assert.equal(app.validator.isValidInteger(-1.1), false, "Passing in: -1.1.");
    assert.equal(app.validator.isValidInteger(.1), false, "Passing in: .1.");
    assert.equal(app.validator.isValidInteger('.1'), false, "Passing in: '.1'.");
    assert.equal(app.validator.isValidInteger('1.1'), false, "Passing in: '1.1'.");
    assert.equal(app.validator.isValidInteger('-1.1'), false, "Passing in: '-1.1'.");
    assert.equal(app.validator.isValidInteger(undefined), false, "Passing in: undefined.");
    assert.equal(app.validator.isValidInteger(null), false, "Passing in: null.");
    assert.equal(app.validator.isValidInteger(Infinity), false, "Passing in: Infinity.");
    assert.equal(app.validator.isValidInteger(NaN), false, "Passing in: NaN.");
    assert.equal(app.validator.isValidInteger(true), false, "Passing in: true.");
    assert.equal(app.validator.isValidInteger(false), false, "Passing in: false.");
    assert.equal(app.validator.isValidInteger("tester.test@q.com"), false, "Passing in: 'tester.test@q.com'.");
  });

  //Test the isValidFloat function.
  q.test("isValidFloat", function isValidFloatClosure(assert) {
    assert.equal(app.validator.isValidFloat(""), false, "Passing in: ' '.");
    assert.equal(app.validator.isValidFloat(" "), false, "Passing in: <space>.");
    assert.equal(app.validator.isValidFloat("a"), false, "Passing in: 'a'.");
    assert.equal(app.validator.isValidFloat("1"), false, "Passing in: '1'.");
    assert.equal(app.validator.isValidFloat("-1"), false, "Passing in: '-1'.");
    assert.equal(app.validator.isValidFloat(1), false, "Passing in: 1.");
    assert.equal(app.validator.isValidFloat(-1), false, "Passing in: -1.");
    assert.equal(app.validator.isValidFloat(1.1), true, "Passing in: 1.1.");
    assert.equal(app.validator.isValidFloat(.1), true, "Passing in: .1.");
    assert.equal(app.validator.isValidFloat(-1.1), true, "Passing in: -1.1.");
    assert.equal(app.validator.isValidFloat('-1.1'), true, "Passing in: '-1.1'.");
    assert.equal(app.validator.isValidFloat('.1'), true, "Passing in: '.1'.");
    assert.equal(app.validator.isValidFloat('1.1'), true, "Passing in: '1.1'.");
    assert.equal(app.validator.isValidFloat(undefined), false, "Passing in: undefined.");
    assert.equal(app.validator.isValidFloat(null), false, "Passing in: null.");
    assert.equal(app.validator.isValidFloat(Infinity), false, "Passing in: Infinity.");
    assert.equal(app.validator.isValidFloat(NaN), false, "Passing in: NaN.");
    assert.equal(app.validator.isValidFloat(true), false, "Passing in: true.");
    assert.equal(app.validator.isValidFloat(false), false, "Passing in: false.");
    assert.equal(app.validator.isValidFloat("tester.test@q.com"), false, "Passing in: 'tester.test@q.com'.");
  });

  //Test the isValidNumber function.
  q.test("isValidNumber", function isValidNumberClosure(assert) {
    assert.equal(app.validator.isValidNumber(""), false, "Passing in: ' '.");
    assert.equal(app.validator.isValidNumber(" "), false, "Passing in: <space>.");
    assert.equal(app.validator.isValidNumber("a"), false, "Passing in: 'a'.");
    assert.equal(app.validator.isValidNumber("1"), true, "Passing in: '1'.");
    assert.equal(app.validator.isValidNumber("-1"), true, "Passing in: '-1'.");
    assert.equal(app.validator.isValidNumber(1), true, "Passing in: 1.");
    assert.equal(app.validator.isValidNumber(-1), true, "Passing in: -1.");
    assert.equal(app.validator.isValidNumber(1.1), true, "Passing in: 1.1.");
    assert.equal(app.validator.isValidNumber(.1), true, "Passing in: .1.");
    assert.equal(app.validator.isValidNumber(-.1), true, "Passing in: -.1.");
    assert.equal(app.validator.isValidNumber(-1.1), true, "Passing in: -1.1.");
    assert.equal(app.validator.isValidNumber('-1.1'), true, "Passing in: '-1.1'.");
    assert.equal(app.validator.isValidNumber('.1'), true, "Passing in: '.1'.");
    assert.equal(app.validator.isValidNumber('-.1'), true, "Passing in: '-.1'.");
    assert.equal(app.validator.isValidNumber('1.1'), true, "Passing in: '1.1'.");
    assert.equal(app.validator.isValidNumber(undefined), false, "Passing in: undefined.");
    assert.equal(app.validator.isValidNumber(null), false, "Passing in: null.");
    assert.equal(app.validator.isValidNumber(Infinity), false, "Passing in: Infinity.");
    assert.equal(app.validator.isValidNumber(NaN), false, "Passing in: NaN.");
    assert.equal(app.validator.isValidNumber(true), false, "Passing in: true.");
    assert.equal(app.validator.isValidNumber(false), false, "Passing in: false.");
    assert.equal(app.validator.isValidNumber("tester.test@q.com"), false, "Passing in: 'tester.test@q.com'.");
  });

  //Test the isValidMaxLength function.
  q.test("isValidMaxLength", function isValidMaxLengthClosure(assert) {
    assert.equal(app.validator.isValidMaxLength("", 10), true, "Passing in: ' ', 10.");
    assert.equal(app.validator.isValidMaxLength(" ", 10), true, "Passing in: <space>, 10.");
    assert.equal(app.validator.isValidMaxLength("a", 10), true, "Passing in: 'a', 10.");
    assert.equal(app.validator.isValidMaxLength("1", 10), true, "Passing in: '1', 10.");
    assert.equal(app.validator.isValidMaxLength("-1", 10), true, "Passing in: '-1', 10.");
    assert.equal(app.validator.isValidMaxLength(1, 10), true, "Passing in: 1, 10.");
    assert.equal(app.validator.isValidMaxLength(-1, 10), true, "Passing in: -1, 10.");
    assert.equal(app.validator.isValidMaxLength(1.1, 10), true, "Passing in: 1.1, 10.");
    assert.equal(app.validator.isValidMaxLength(.1, 10), true, "Passing in: .1, 10.");
    assert.equal(app.validator.isValidMaxLength(-.1, 10), true, "Passing in: -.1, 10.");
    assert.equal(app.validator.isValidMaxLength(-1.1, 10), true, "Passing in: -1.1, 10.");
    assert.equal(app.validator.isValidMaxLength('-1.1', 10), true, "Passing in: '-1.1', 10.");
    assert.equal(app.validator.isValidMaxLength('.1', 10), true, "Passing in: '.1', 10.");
    assert.equal(app.validator.isValidMaxLength('-.1', 10), true, "Passing in: '-.1', 10.");
    assert.equal(app.validator.isValidMaxLength('1.1', 10), true, "Passing in: '1.1', 10.");
    assert.equal(app.validator.isValidMaxLength(undefined, 10), true, "Passing in: undefined, 10.");
    assert.equal(app.validator.isValidMaxLength(null, 10), true, "Passing in: null, 10.");
    assert.equal(app.validator.isValidMaxLength(Infinity, 10), true, "Passing in: Infinity, 10.");
    assert.equal(app.validator.isValidMaxLength(NaN, 10), true, "Passing in: NaN, 10.");
    assert.equal(app.validator.isValidMaxLength(true, 10), true, "Passing in: true, 10.");
    assert.equal(app.validator.isValidMaxLength(false, 10), true, "Passing in: false, 10.");
    assert.equal(app.validator.isValidMaxLength("tester.test@q.com", 30), true, "Passing in: 'tester.test@q.com', 30.");
    assert.equal(app.validator.isValidMaxLength("", 0), true, "Passing in: ' ', 10.");
    assert.equal(app.validator.isValidMaxLength(" ", 0), false, "Passing in: <space>, 10.");
    assert.equal(app.validator.isValidMaxLength("a", 0), false, "Passing in: 'a', 10.");
    assert.equal(app.validator.isValidMaxLength("1", 0), false, "Passing in: '1', 10.");
    assert.equal(app.validator.isValidMaxLength("-1", 0), false, "Passing in: '-1', 10.");
    assert.equal(app.validator.isValidMaxLength(1, 0), false, "Passing in: 1, 10.");
    assert.equal(app.validator.isValidMaxLength(-1, 0), false, "Passing in: -1, 10.");
    assert.equal(app.validator.isValidMaxLength(1.1, 0), false, "Passing in: 1.1, 10.");
    assert.equal(app.validator.isValidMaxLength(.1, 0), false, "Passing in: .1, 10.");
    assert.equal(app.validator.isValidMaxLength(-.1, 0), false, "Passing in: -.1, 10.");
    assert.equal(app.validator.isValidMaxLength(-1.1, 0), false, "Passing in: -1.1, 10.");
    assert.equal(app.validator.isValidMaxLength('-1.1', 0), false, "Passing in: '-1.1', 10.");
    assert.equal(app.validator.isValidMaxLength('.1', 0), false, "Passing in: '.1', 10.");
    assert.equal(app.validator.isValidMaxLength('-.1', 0), false, "Passing in: '-.1', 10.");
    assert.equal(app.validator.isValidMaxLength('1.1', 0), false, "Passing in: '1.1', 10.");
    assert.equal(app.validator.isValidMaxLength(undefined, 0), false, "Passing in: undefined, 10.");
    assert.equal(app.validator.isValidMaxLength(null, 0), false, "Passing in: null, 10.");
    assert.equal(app.validator.isValidMaxLength(Infinity, 0), false, "Passing in: Infinity, 10.");
    assert.equal(app.validator.isValidMaxLength(NaN, 0), false, "Passing in: NaN, 10.");
    assert.equal(app.validator.isValidMaxLength(true, 0), false, "Passing in: true, 10.");
    assert.equal(app.validator.isValidMaxLength(false, 0), false, "Passing in: false, 10.");
    assert.equal(app.validator.isValidMaxLength("tester.test@q.com", 0), false, "Passing in: 'tester.test@q.com', 30.");
  });

  //Test the isValidMinLength function.
  q.test("isValidMinLength", function isValidMinLengthClosure(assert) {
    assert.equal(app.validator.isValidMinLength("", 10), false, "Passing in: ' ', 10.");
    assert.equal(app.validator.isValidMinLength(" ", 10), false, "Passing in: <space>, 10.");
    assert.equal(app.validator.isValidMinLength("a", 10), false, "Passing in: 'a', 10.");
    assert.equal(app.validator.isValidMinLength("1", 10), false, "Passing in: '1', 10.");
    assert.equal(app.validator.isValidMinLength("-1", 10), false, "Passing in: '-1', 10.");
    assert.equal(app.validator.isValidMinLength(1, 10), false, "Passing in: 1, 10.");
    assert.equal(app.validator.isValidMinLength(-1, 10), false, "Passing in: -1, 10.");
    assert.equal(app.validator.isValidMinLength(1.1, 10), false, "Passing in: 1.1, 10.");
    assert.equal(app.validator.isValidMinLength(.1, 10), false, "Passing in: .1, 10.");
    assert.equal(app.validator.isValidMinLength(-.1, 10), false, "Passing in: -.1, 10.");
    assert.equal(app.validator.isValidMinLength(-1.1, 10), false, "Passing in: -1.1, 10.");
    assert.equal(app.validator.isValidMinLength('-1.1', 10), false, "Passing in: '-1.1', 10.");
    assert.equal(app.validator.isValidMinLength('.1', 10), false, "Passing in: '.1', 10.");
    assert.equal(app.validator.isValidMinLength('-.1', 10), false, "Passing in: '-.1', 10.");
    assert.equal(app.validator.isValidMinLength('1.1', 10), false, "Passing in: '1.1', 10.");
    assert.equal(app.validator.isValidMinLength(undefined, 10), false, "Passing in: undefined, 10.");
    assert.equal(app.validator.isValidMinLength(null, 10), false, "Passing in: null, 10.");
    assert.equal(app.validator.isValidMinLength(Infinity, 10), false, "Passing in: Infinity, 10.");
    assert.equal(app.validator.isValidMinLength(NaN, 10), false, "Passing in: NaN, 10.");
    assert.equal(app.validator.isValidMinLength(true, 10), false, "Passing in: true, 10.");
    assert.equal(app.validator.isValidMinLength(false, 10), false, "Passing in: false, 10.");
    assert.equal(app.validator.isValidMinLength("tester.test@q.com", 30), false, "Passing in: 'tester.test@q.com', 30.");
    assert.equal(app.validator.isValidMinLength("", 0), true, "Passing in: ' ', 0.");
    assert.equal(app.validator.isValidMinLength(" ", 0), true, "Passing in: <space>, 0.");
    assert.equal(app.validator.isValidMinLength("a", 0), true, "Passing in: 'a', 0.");
    assert.equal(app.validator.isValidMinLength("1", 0), true, "Passing in: '1', 0.");
    assert.equal(app.validator.isValidMinLength("-1", 0), true, "Passing in: '-1', 0.");
    assert.equal(app.validator.isValidMinLength(1, 0), true, "Passing in: 1, 0.");
    assert.equal(app.validator.isValidMinLength(-1, 0), true, "Passing in: -1, 0.");
    assert.equal(app.validator.isValidMinLength(1.1, 0), true, "Passing in: 1.1, 0.");
    assert.equal(app.validator.isValidMinLength(.1, 0), true, "Passing in: .1, 0.");
    assert.equal(app.validator.isValidMinLength(-.1, 0), true, "Passing in: -.1, 0.");
    assert.equal(app.validator.isValidMinLength(-1.1, 0), true, "Passing in: -1.1, 0.");
    assert.equal(app.validator.isValidMinLength('-1.1', 0), true, "Passing in: '-1.1', 0.");
    assert.equal(app.validator.isValidMinLength('.1', 0), true, "Passing in: '.1', 0.");
    assert.equal(app.validator.isValidMinLength('-.1', 0), true, "Passing in: '-.1', 0.");
    assert.equal(app.validator.isValidMinLength('1.1', 0), true, "Passing in: '1.1', 0.");
    assert.equal(app.validator.isValidMinLength(undefined, 0), true, "Passing in: undefined, 0.");
    assert.equal(app.validator.isValidMinLength(null, 0), true, "Passing in: null, 0.");
    assert.equal(app.validator.isValidMinLength(Infinity, 0), true, "Passing in: Infinity, 0.");
    assert.equal(app.validator.isValidMinLength(NaN, 0), true, "Passing in: NaN, 0.");
    assert.equal(app.validator.isValidMinLength(true, 0), true, "Passing in: true, 0.");
    assert.equal(app.validator.isValidMinLength(false, 0), true, "Passing in: false, 0.");
    assert.equal(app.validator.isValidMinLength("tester.test@q.com", 0), true, "Passing in: 'tester.test@q.com', 0.");
  });
})(QUnit);
