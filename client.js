var FormData = require('form-data');
var fs = require('fs');                                                                                                             



var form = new FormData();
function upload(filePath){
  form.append('my_field', 'my value');
  form.append('my_buffer', new Buffer(10));
  form.append('my_file', fs.createReadStream(filePath));
  //console.log(form);

  //submit
  form.submit('http://10.19.161.119:8392',function(err,res){
    //console.log(res);
  }); 
}
