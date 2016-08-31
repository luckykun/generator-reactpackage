var path = require('path');
var chalk = require('chalk');
var util = require('util');

var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var path = require('path');


var Reactpackage = yeoman.Base.extend({
    info: function() {
        this.log(chalk.green(
            'I am going to build your app!'
        ));
    },
    generateBasic: function() {
        this.directory('src', 'src');
        this.directory('data', 'data');
        this.copy('package.json', 'package.json');
        this.copy('index.html', 'index.html');
        this.copy('README.md', 'README.md');
        this.copy('webpack.config.js', 'webpack.config.js');
    },
    generateClient: function() {
        this.sourceRoot(path.join(__dirname, 'templates'));
        this.destinationPath('./');
    },
    install: function() {
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    },
    end: function() {
        this.log(yosay(
            'Your app has been created successfully!'
        ));
    }
});

module.exports = Reactpackage;





// prompting: function() {
//     var done = this.async();
//     this.log(
//         chalk.green('I am going to build your app!')
//     );
//     var prompts = [
//         {
//             type: 'input',
//             name: 'name',
//             message: 'name of app:',
//             default: 'tempate'
//         },
//         {
//             type: 'input',
//             name: 'description',
//             message: 'description:',
//             default: 'app description'
//         },
//         {
//             type: 'input',
//             name: 'license',
//             message: 'license:',
//             default: 'MIT'
//         },
//         {
//             type: 'input',
//             name: 'author',
//             message: 'author:',
//             default: ''
//         }
//     ];
//     this.prompt(prompts, function (props) {
//         this.appName = props.name;
//         this.description = props.description;
//         this.author = props.author;
//         this.license = props.license;
//         done();  //进入下一个生命周期阶段
//     }.bind(this));
// }
