<?php 
  $testType = "unit";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Form Validator Tests</title>
    <!-- <link rel="stylesheet" href="//code.jquery.com/qunit/qunit-1.20.0.css"> -->
</head>
<body>
    <!-- <div id="qunit"></div>
    <div id="qunit-fixture"></div> -->

    <form class="js-form-validate" action="/test" method="get">
      <input type="string" class="js-validate-field" data-validation="notEmpty" data-errors="notEmpty:Please Type something in." placeholder="Not Empty">
      <p class="js-validate-error"></p>
      <input type="submit">
    </form>
    
    <script src="js/formValidator.js"></script>
    <!-- <script src="//code.jquery.com/qunit/qunit-1.20.0.js"></script>
    <script src="js/test.js"></script> -->
</body>
</html>