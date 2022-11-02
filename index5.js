/* conexão*/
let express = require('express');

let app = express();

app.listen(3001, function(req, resp){
    console.log("Conexão on!");
})

/*teste comum de apresentação de página*/