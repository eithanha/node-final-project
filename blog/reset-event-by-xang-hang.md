---
title: "Reset Event"
author: "Xang Hang"
description: "An essay about Reset Events"
published: "2024-4-5"
tags: ["Reset Event"]
---

You can make use of the reset event in JavaScript to allow you to reset a form in a webpage.
1. **reset**

The reset event is used in JavaScript.

Here are the articles I used to help me figure out how to use the reset event.

1. <a href="https://www.javatpoint.com/javascript-reset" target="_blank">https://www.javatpoint.com/javascript-reset</a>
1. <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset_event" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset_event</a>
1. <a href="https://www.tutorialspoint.com/How-to-reset-or-clear-a-form-using-JavaScript" target="_blank">https://www.tutorialspoint.com/How-to-reset-or-clear-a-form-using-JavaScript</a>

Here is a starter code to use for the reset event.

In this code, we will able able to reset the form by pressing the reset button at the bottom to clear out the form.

To make the button resettable, you can set the button event "onclick" to a function. 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
       
    </script>
</head>
<body>
    <form id="formId">
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
    <button type="reset" onclick="resetForm()" id="reset">Reset Form</button>
</body>
</html>

```



Then in the script body, you initilize the "onclick" fuction, then use the quearySelector to grab the form ID and set it to "form". 
```js
    <script>
      function resetForm() {
            const form = document.querySelector("#formId");
        } 
    </script>

```

On the next line within the function we can call "form" and use the reset event to clear the form of any entered information.

```js
    <script>
      function resetForm() {
            const form = document.querySelector("#formId");
            form.reset();
        } 
    </script>

```
Now once you put everything all together it should look like this.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function resetForm() {
            const form = document.querySelector("#formId");
            form.reset();
        }
    </script>
</head>
<body>
    <form id="formId">
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
    <button type="reset" onclick="resetForm()" id="reset">Reset Form</button>
</body>
</html>
```
When you run the code, it should let you hit the reset button at the bottom of the form to clear out the entered information.