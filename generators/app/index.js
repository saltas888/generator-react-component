
const yeoman = require('yeoman-generator');
const _ = require('lodash');
const yosay = require('yosay');
const fs = require('fs');
const path = require('path');

module.exports = yeoman.Base.extend({
  prompting: function() {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your component name',
      default: 'ReactComponent'
    }]).then(function(answers) {
      this.props = answers;
      this.props.nameUp = this._capitalizeFirstLetter(this._toCamelCase(this.props.name));
      this.props.className = _.kebabCase(this.props.name);
    }.bind(this));
  },
  writing: function() {
    this._copyFiles('index.js', this._prefix('index.js'));
    this._copyFiles('name.test.js', this._prefix(this.props.name+'.test.js'));
    this._copyFiles('name.stories.js', this._prefix(this.props.name+'.stories.js'));
    this._copyFiles('name.scss', this._prefix(this.props.name+'.scss'));
  },
  end: function() {
    var outputMsg = `\n\nYour react component ${this.props.name} has been created.`;
    this.log(yosay(outputMsg));
  },
  _prefix: function(file) {
    return this.props.name + '/' + file;
  },
  _copyFiles: function(from, to) {
    this.props.nameUp = this._capitalizeFirstLetter(this._toCamelCase(this.props.name));
    this.props.className = _.kebabCase(this.props.name);
    this.fs.copyTpl(this.templatePath(from), this.destinationPath(to), this.props);
  },
  _toCamelCase: function(str) {
    return str
    .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
    .replace(/\s/g, '')
    .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
  },
  _capitalizeFirstLetter: function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
});
