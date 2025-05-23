const port = 8080; // We'll run the server on port 8080

// IMPORTS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// MIDDLEWARE
app.use(express.static('public'));
app.set('view engine', 'ejs')

// allow the app to receive data from form submits
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
if (process.env.NODE_ENV === 'production') {
    if (req.headers['x-forwarded-proto'] !== 'https')
      // the statement for performing our redirection
      return res.redirect('https://' + req.headers.host + req.url);
    else
      return next();
}else{
    return next();
}
});

// ROUTES
app.get('/', (req, res) => {
  res.render('home', {
      title: "My Home Page"
  });
});


app.get('/contact-me', (req, res) => {
  res.render('contact', {
      title: "Contact Me"
  });
});



// app.post('/contact-me', (req, res) => {
//   res.send("<h1>TODO: Handle contact-me form posts</h1>" + JSON.stringify(req.body));
// });

app.post('/contact-me', (req, res) => {

  // import the helper functions that we need
  const {isValidContactFormSubmit, sendEmailNotification} = require("./modules/contact-helpers");

  // Destructure the req.body object into variables
  const {firstName, lastName, email, comments} = req.body;

  // Validate the variables
  if(isValidContactFormSubmit(firstName, lastName, email, comments)){
    // Everything is valid, so send an email to YOUR email address with the data entered into the form
    const message = `From: ${firstName} ${lastName}\n
                    Email: ${email}\n
                    Message: ${comments}`;

    sendEmailNotification(message, (err, info) => {
      if(err){
        console.log(err);
        res.status(500).send("There was an error sending the email");
      }else{
        // Render a template that confirms the contact form info was recieved:
        res.render("default-layout", {
          title: "Contact Confirmation",
          content: "<h2>Thank you for contacting me!</h2><p>I'll get back to you ASAP.</p>"
        })
      }
    })
  }else{
    res.status(400).send("Invalid request - data is not valid")
  }

});

const {getBlogList, convertMarkdown} = require("./modules/markdown-helpers")
const pathToBlogFolder = __dirname + '/blog/';
const blogList = getBlogList(pathToBlogFolder);

app.get('/blog', (req, res)=>{
  res.render('blog-list', {
    title: "Blog",
    posts: blogList
  });
});

app.get("/blog/:post", (req, res) => {
  try{
    const pathToFile = pathToBlogFolder + req.params.post + ".md";
    console.log("Markdown file: " + pathToFile);
    const obj = convertMarkdown(pathToFile);
    res.render('default-layout', {
        title: obj.data.title,
        content: obj.html
    });
  }catch(e){
    console.log(e);
    res.status(404).redirect("/404");
  }
});




app.get("/404", (req, res) => {
  res.status(404);
  res.render('default-layout', {
      title: "Page Not Found",
      content: "<h1>Sorry!</h1><h3>We can't find the page you're requesting.</h3>"
  });
});





app.all('*', (req, res) => {
  res.status(404).redirect("/404");
});

// START THE SERVER
const server = app.listen(port, () => {
   console.log("Waiting for requests on port %s", port);
});