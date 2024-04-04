---
title: "Vue"
author: "Xang Hang"
description: "An essay about Vue"
published: "2024-4-5"
tags: ["Vue"]
---

### Vue

Vue, pronounced as view, is a JavaScript framework focused on building user interfaces. Vue is built on top of existing languages: HTML, CSS, and JavaScript.  In essence, Vue is a JavaScript library for building web applications for user interfaces.

In Vue, under the hood, it has a refined reactivity system along with declarative rendering. 

A reactive system is a powerful tool for building modern, scalable, and resilient software applications. Reactive systems are designed to be more resilient, responsive, and elastic. This means that it is easier to develop and scale up projects. 

Declarative rendering in Vue is when it renders data to the DOM using straightforward template syntax. It uses double curly braces as placeholders to interpolate data from the DOM.

You can install Vue from vuejs.org directly onto your computer. 

In VSCode you will need to install Node.js and then use the following command to install Vue in VSCode: “npm create vue@latest” this will prompt you to install create-vue. 


![create-vue](https://code.visualstudio.com/assets/docs/nodejs/vuejs/create-vue.png)

This command will create the scaffolding for your Vue project.

![create-vue-install](https://code.visualstudio.com/assets/docs/nodejs/vuejs/vue-app-scaffolding.png)


Once it has been created, you can navigate to your Vue project folder and issue another command in the terminal: “npm install” to install the Vue dependencies.

```
cd <project-name>
npm install
```

In VSCode, Vue does not come with syntax highlighting so an extension will need to be installed. VSCode recommends installing the Volar extension for syntax highlighting. Volar also provides IntelliSense, snippets, and formatting along with syntax highlighting for Vue.



Additional suggested extension to install would be Volar for TypeScript. This is a TypeScript plugin to recognize .vue files. 

Below are some code samples of how to write Vue.

In the code below, the double braces are place holders in the DOM and the code that will be injected into there will come from outside of the body and will be in the script where the code will be placed. 

```js
<html> 
<head> 
	<script src= "https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"> 
  	new Vue({
      el: ‘#intro’,
      data: { 
        name: ‘Fantasy’
      }
    </script> 
  </head> 
  <body> 
    <div id='Intro'> 
      <h3> 
      Welcome to the world of {{name}} 
      </h3> 
    </div> 
  </body> `
</html>
```


In the code below it is coding a counting application. The script tag is importing the Vue.js library from the content delivery network, or CDN for short. The div tag has an id of counter with the h1 right below it with the same name as the property data. The counter variable is initialized to zero inside the Vue instance, and there are two methods defined in the code: increment and decrement. There are two buttons that are assigned to the functions and when they are pressed, depending on the button, the counter goes up or down. 

```js
<html>
<head>
    <title>Counter</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
</head>
<body>
    <div id="counter">
        <h1>Counter: {{ counter }}</h1>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
    <script>
        new Vue({
            el: '#appCounter',
            data: {
                counter: 0
            },
            methods: {
                increment: function() {
                    this.counter++;
                },
                decrement: function() {
                    this.counter--;
                }
            }
        });
    </script>
</body>
</html>
```

In the code below the code functions the same as the hide element. If we change the showDiv element to false then the div with the same name will be hidden when the code is ran. In this example you can add an onlick element to a button to be able to toggle between hiding the div with showDiv element or showing the div with showDiv element.


```js
<div id="appShow">
  <div v-show="showDiv">This is div tag that can be hidden</div>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  newVue({
    data() {
      return {
        showDiv: true
      }
    }
  })
  app.mount('#app')
</script>
```


Overall, Vue is like an add on to HTML, CSS, and JavaScript as it works with the prior languages, but has its own syntax and functionality added as it is instantiated within the script element. 

Bibliography 

1. https://vuejs.org/guide/introduction#:~:text=What%20is%20Vue%3F-,%E2%80%8B,be%20they%20simple%20or%20complex.
2. https://code.visualstudio.com/docs/nodejs/vuejs-tutorial
3. https://marketplace.visualstudio.com/items?itemName=Vue.volar
4. https://www.geeksforgeeks.org/vue-js-declarative-rendering/
