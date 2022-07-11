const express = require("express");
const path = require("path");
const hbs= require('hbs');


const app = express();
//Define path for express config
const publicDirectoryPath = path.join(__dirname, "../public/");
//initially we have to name the folder view but we can customize using following code
const viewPath = path.join(__dirname, "../templates/views")  //To customize path of view in hbs
const partialsPath=path.join(__dirname, "../templates/partials")

//Setup handlerbar engine and views location
app.set("view engine", "hbs"); // This is only needed to setup handlebars
app.set('views',viewPath)
hbs.registerPartials(partialsPath)


//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Happy Patel",
    footer:"Weather"
  });
});

app.get("/help", (req, res) => {
    res.render("help",{
      title: "Help",
      name: "Happy Patel",
      footer:"help"

    });
  });

  app.get("/about", (req, res) => {
    res.render("about",{
      title: "About",
      name: "Happy Patel",
      footer:"about"

    });
  });
  app.get('/about/*',(req,res)=>{ 
    res.render("error",{
      title: "About",

    })   
  })
  app.get('/help/*',(req,res)=>{    
    res.render("error",{
      title: "help",

    })   
  })

  app.get('/products',(req,res)=>{
    if(!req.query.search){
     return res.send({
        Error:'You must provide the Search term'
      })
    }
    console.log(req.query);
    res.send({
      products:[]
    })
  })

//This is the wild card if the URL is not defined it will print the msg
  app.get('*',(req,res)=>{    
    res.send('404: Page Not Found Error ')
  })

// app.get('/json',(req,res)=>{
//     const data={
//         id:1,
//         name:'Iphone 13',
//         model:'First Model'
//     }
//     res.json(data)
// })

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
