# audrey-tables

> Seed for [audrey-two](https://www.npmjs.com/package/audrey-two) VCCLI (View-Control-->Command-Line-Interface) ^v2.0.0


## What this seed does?

Include into your audrey-two-view a table with one or more different colors. 

## Specifications

Audrey-two version 2.0.0 change the way of control your CLI-views. The tags. Now taggies replaced by custom audrey-seeds. This seeds can be included or not in your projects.

This node-module redefine the older audrey-two taggy "#". Now you can use it again with audrey version 2.0.0

## Install

Example
```
$ npm install --save audrey-two
  npm install --save audrey-tables
```
## Usage

Example

```js
/*
 * build an object with two arrays. 
 * ---------------------------------
 * The data-array must be an array of arrays. Each array for each row.
 * Each indexed element of the array for each column 
 * --------------------------------------------------
 * The align-array it's for the alignment display. 
 * Each element for each column
 */

var object={data:[
        [
            chalk.red.bold('character- name'), chalk.blue.bold("age")
           , chalk.green.bold('actor- name')
        ],
        [
            chalk.red.bold('---------------'), chalk.blue.bold("---")
           , chalk.green.bold("-----------")
        ],
        [
            chalk.white.bold('Audrey-two voice'), chalk.white.underline('45'),
            chalk.cyan('Levi Stubbs')
        ],
         [
            chalk.white.bold('Audrey'), chalk.white.underline('21'),
            chalk.cyan('Ellen Greene')
        ],
        [
            chalk.white.bold('Seymour Krelborn'), chalk.white.underline('25'),
            chalk.cyan('Rick Moranis')
        ],align:["l","r","l"]};


var myTerminalDisplay={
	body:["##myTable"],//tell audrey where you want to display it
	myTable: object, //assign the table data to audrey-view
	colors:{warning: "yellow", 
		 	error: chalk.red.bold,//you can use chalk
			success: "green", }//tell audrey wich color use
};

var audrey2= require('audrey-two');
var audrey= audrey2('nameOfView', myTerminalDisplay);//pass the view to audrey

audrey.seed(["audrey-tables-##"]);//tell audrey that there is a new seed
audrey.encore();//run audrey to display view
```
You will see something like this

![](https://raw.githubusercontent.com/llucbrell/audrey-tables/master/captura.png)

### Alignment types:

* `'l'` - left
* `'r'` - right
* `'c'` - center
* `'.'` - decimal

## Dependecies

This audrey-seed make use of...

* [text-table](https://www.npmjs.com/package/text-table) module for a correct table display.
 
* [string-length](https://www.npmjs.com/package/string-length) module for the color display.

People and plants really appreciate your great code!
