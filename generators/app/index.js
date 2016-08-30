var path = require('path');
var chalk = require('chalk');
var util = require('util');

var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var path = require('path');


var Reactpackage = yeoman.generators.Base.extend({
  info:function(){
    this.log(chalk.yellow(
      'I am going to build your app!'
    ));
  },
  generateBasic:function(){
      this.directory('src', 'src');
      this.directory('data', 'data');
      this.copy('package.json','package.json');
      this.copy('index.html','index.html');
      this.copy('webpack.config.js','webpack.config.js');
    // this.copy('js/app.js','js/app.js');
    // this.copy('js/hello.js','js/hello.js');
    // this.copy('css/main.css','css/main.css');
  },
  generateClient:function(){
    this.sourceRoot(path.join(__dirname,'templates'));
    this.destinationPath('./');
  },
  install: function() {
      this.installDependencies({
        skipInstall: this.options['skip-install']
      });
  },
  end:function(){
    this.log(yosay(
      'Your app has been created successfully!'
    ));
  }
});

module.exports = Reactpackage;
