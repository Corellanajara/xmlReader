const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 4634
const xml2js = require('xml2js');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/', function(request, response){
  console.log(request.body);
  response.send(request.body);
});
app.post('/convertXml',function(req,response){
  var xml = req.body.xml;
	console.log(xml);
  xml2js.parseString(xml, (err, result) => {
    if(err) {
        console.log(err);
        response.send({error:true}); 
    }    
    const json = JSON.stringify(result, null, 4);  
    response.send(json);     
  });
})
app.listen(port);

