---
title: "Reset Event"
author: "Xang Hang"
description: "An essay about Reset Events"
published: "2024-4-5"
tags: ["Reset Event"]
---
<div style="text-align: left; padding: 50px;" markdown="1"> 

### Reset Events In JavaScript

<br>


&nbsp;&nbsp;You can make use of the reset event in JavaScript to allow you to reset a form in a webpage.

<br>


&nbsp;&nbsp;The reset event is used in JavaScript to clear out forms.

<br>

&nbsp;&nbsp;Here is a starter code to use for the reset event.

&nbsp;&nbsp;In this code, we will able able to reset the form by pressing the reset button at the bottom to clear out the form.

&nbsp;&nbsp;To make the button resettable, you can set the button event to a JavaScript function. 

<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        //JavaScript Code Goes Here
    </script>
</head>
<body>
    <form id = formId>
        <label>First Name</label>
        <br>
        <input type="text" id="txtFirstName" name="firstName" />
        <br>
        <label>Middle Initial</label>
        <br>
        <input type="text" id="txtMiddleInitial" name="middleInitial" />
        <br>
        <label>Last Name</label>
        <br>
        <input type="text" id="txtLastName" name="lastName" />
        <br>
    </form>
    <button type="button" id="submit">Submit</button>
    <button type="reset" id="reset">Reset Form</button>
</body>
</html>

```
<br>

&nbsp;&nbsp;Then in the script body, add the windows.addEventListener method to load the script after the whole page is loaded. Within the windows.addEventListener method, instantiate an element, in this case it will be named 'resets'. Next use the document.querySelector on 'resets' and use it to grab id 'reset' in the DOM.  
```js
    <script>
      const resets = document.querySelector("#reset");
    </script>

```
<br>

&nbsp;&nbsp;On the next line below 'const resets = document.querySelector("#reset");', create a function named resetFrom. Within the function instantiate another element 'form' and use the document.querySelector on the 'formId' in the DOM.

<br>

```js
    <script>
      function resetFrom(){
           const form = document.querySelector("#formId");
           form.reset();
        }
        resets.addEventListener("click", resetFrom);
    </script>

```
<br>

&nbsp;&nbsp;Now once you put everything all together it should look like this.

<br>

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
    window.addEventListener("load", ()=>{
       const resets = document.querySelector("#reset");
        function resetFrom(){
           const form = document.querySelector("#formId");
           form.reset();
        }
        resets.addEventListener("click", resetFrom);

    });
        
    </script>
</head>
<body>
    <form id = formId>
        <label>First Name</label>
        <br>
        <input type="text" id="txtFirstName" name="firstName" />
        <br>
        <label>Middle Initial</label>
        <br>
        <input type="text" id="txtMiddleInitial" name="middleInitial" />
        <br>
        <label>Last Name</label>
        <br>
        <input type="text" id="txtLastName" name="lastName" />
        <br>
    </form>
    <button type="button" id="submit">Submit</button>
    <button type="reset" id="reset">Reset Form</button>
</body>
</html>
```
<br>
&nbsp;&nbsp;When you run the code, it should let you hit the reset button at the bottom of the form to clear out the entered information.

<br>
<br>

# Bibliography:

1. <a href="https://www.javatpoint.com/javascript-reset" target="_blank">https://www.javatpoint.com/javascript-reset</a>
1. <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset_event" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset_event</a>
1. <a href="https://www.tutorialspoint.com/How-to-reset-or-clear-a-form-using-JavaScript" target="_blank">https://www.tutorialspoint.com/How-to-reset-or-clear-a-form-using-JavaScript</a>


</div>