---
title: "Web Accessibility"
author: "Xang Hang"
description: "An essay about Web Accessibility"
published: "2024-4-5"
tags: ["Web Accessibility"]
---

### Web Accessibility


Web accessibility is a website designed to work for everyone and not the website be hindered by the lack of hardware, location, language, software, or physical ability to access the website. In essence, this means that a blind person should be able to tell what is on the website without being able to see it. Website accessibility is not limited to just the blind, but to everyone who has any kind of disability.

There are various ways to make a website accessible to everyone, and that is to add an identifying feature to objects on the webpage. Such as putting a name to an image so that if the image does not load, at least the name of the image appears and lets those who are accessing the website know what should be there. 

To have text in place of a picture not loading, you would use the alt element with a description of what should have loaded. Or in the case of a blind person, their speech application would inform them what the picture is.

To add an alt element to an image code, you would do the following:

```js
<img src="../images/venmo.jpg" alt="venmo QR code" width="100%"
```

Notice how the image source points to a directory where the image is located and the width states how big the image should be, but the alt has a description of the image. This does not just apply to images, but can be used everywhere on the webpage, such as using alt text to describe a link, or a header, or what color the page is on the webpage. 

## Aria

Aria stands for Accessible Rich Internet Applications and is used to bridge the gap between accessibility issues that HTML cannot handle natively. Of course, Aria is short for WAI-Aria or Web Accessibility Initiative – Accessible Rich Internet Applications and was created by the World Wide Web Consortium (W3C)^3^. Aria is not required but is strongly recommended since 2014 for websites. 
Aria has three main components that are used: Roles, States, and Properties. 

Roles are used to define they type of UI element and cannot be changed once defined. Within the roles type, there are two sub roles: abstract and document structure roles. The abstract roles are utilized by browsers and should not be used anywhere else. It runs in the background of the browser and should not be adjusted as it helps with the reading of new roles. 

Document structure roles are used in the code and are not interactive. They provide descriptions for sections of webpages.
Document Structure Roles Example:

```js
<div
  role="alertdialog"
</div>
```

In the code above, the aria role is set to alertdialog. It defines what the element does on the page. The alertdialog role is used to notify users much like the alert in HTML.


Document Structure Property Example:

```js
<div  role="alertdialog” aria-describedy =”more-info”>More Information</div>
<div id=”more-info”>Here is more information</div>
</div>
```

In the code above the aria property attribute describes the element that the aria property is set to. In the next line the id attribute is set to the same property as the aria attribute above. Specifically, the aria-describedy property attribute describes what the information the id attribute is set to.

```js
<div id="fName">First Name *</div>
<div
  role="textbox"
  aria-labelledby="fName"
  aria-required="true"
  id="firstName"></div>
```

The above attribute aria-required is used when a textbox or input is required prior to moving on from the page. Setting the attribute to true means that the textbox must be filled out before proceeding. If the aria attribute is set to false, then the information is not required to move on from the page.

```js
<div id="fName">First Name *</div>
<div
  role="textbox"
  aria-hidden="true"
</div>
```

The above attribute of aria-hidden is used to remove an entire element from the accessibility API as it will be hidden. The aria-hidden attribute should not be added when the HTML hidden attribute is already present in the code as they both do the same thing.

```js
<button aria-label="Close" onclick="box.close()">
```

The above attribute aria-label is used when a string value labels an interactive element. An interactive element is something like a button with a label of “close”. The aria-label attribute should only be used for interactive elements in the DOM. The aria-labelledby is used for attributes that are not an interactive element in the DOM.

Web accessibility is very important in the world wide web as it allows everyone, regardless of disability of hardware limitations, to have equal access to webpages and the internet.

# Bibliography:
1.	https://www.w3.org/WAI/fundamentals/accessibility-intro/
2.	https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
3.	https://www.lullabot.com/articles/what-heck-aria-beginners-guide-aria-accessibility
4.	https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
5.	https://web.dev/learn/accessibility/aria-html
