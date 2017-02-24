var FormData = require('form-data');
var form = new FormData();

//monitor files
//** behalf of  include more directories
var monitorPath = "nodejs/**/*.php";

gulp.task('client',function(){
  gulp.watch(monitorPath,function(e){
    var path = e.path;
    console.log(path);
    upload(path);
  }); 

});




function upload(filePath){
  console.log('start upload');
  form.append('my_field', 'my value');
  form.append('my_buffer', new Buffer(10));
  form.append('my_file', fs.createReadStream(filePath));
  //console.log(form);
  //
  //  //submit
  form.submit('http://10.19.161.119:8392',function(err,res){
    if(err)   
      return console.log(err);
    console.log('success');                                                                                                         
  }); 
}
