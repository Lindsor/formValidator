<?php 
  $testType = "unit";
?>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="utf-8">
    <title>Form Validator Tests</title>
    <link rel="stylesheet" href="//code.jquery.com/qunit/qunit-1.20.0.css">

    <style>
      .error {
        outline: 1px solid red;
      }
    </style>
  </head>

  <body>
    <div id="qunit"></div>
    <div id="qunit-fixture"></div>
    <br>
    <hr>
    <br>
    <form class="js-form-validate" data-error-class="error" action="/test" method="get" target="_blank">
      <label>Not Empty<br>
        <input type="text" class="js-validate-field" data-validation="notEmpty" data-errors="notEmpty:Please Type something in." placeholder="Not Empty">
        <p class="js-validate-error"></p>
      </label>
      <br>
      <label>Email<br>
        <input type="text" id="email" class="js-validate-field" data-validation="email" data-errors="email:Please Type correct email." placeholder="Email">
        <p class="js-validate-error"></p>
      </label>
      <br>
      <label>Confirm<br>
        <input type="text" class="js-validate-field" data-validation="confirm:email" data-errors="confirm:Please confirm email." placeholder="Confirm">
        <p class="js-validate-error"></p>
      </label>
      <br>
      <label>Min Length 5<br>
        <input type="text" class="js-validate-field" data-validation="minLength:5" data-errors="minLength:Please have a minimum length of 5." placeholder="Min Length 5">
        <p class="js-validate-error"></p>
      </label>
      <br>
      <label>Max Length 5<br>
        <input type="text" class="js-validate-field" data-validation="maxLength:5" data-errors="maxLength:Please have a maximum length of 5." placeholder="Max Length 5">
        <p class="js-validate-error"></p>
      </label>
      <br>
      <label>Integer<br>
        <input type="text" class="js-validate-field" data-validation="integer" data-errors="integer:Please make sure its an integer." placeholder="Integer">
        <p class="js-validate-error"></p>
      </label>
      <br>
      <label>Float<br>
        <input type="text" class="js-validate-field" data-validation="float" data-errors="float:Please make sure its a float." placeholder="Float">
        <p class="js-validate-error"></p>
      </label>
      <br>
      <label>Number<br>
        <input type="text" class="js-validate-field" data-validation="number" data-errors="number:Please make sure its a valid number." placeholder="Number">
        <p class="js-validate-error"></p>
      </label>
      <input type="submit">
    </form>
    <script src="js/formValidator.js"></script>
    <script src="//code.jquery.com/qunit/qunit-1.20.0.js"></script>
    <script src="js/test.js"></script>
  </body>

  </html>
