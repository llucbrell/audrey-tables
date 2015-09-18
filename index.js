module.exports= function(){
var data;	
var bul;
var terminal;


var stringL= require('string-length');
var table= require('text-table');

return{
	   grow: function(data, customObject){ 
		terminal= customObject;
        printTable(data, customObject);},
harvestData: function(){ return data;}
}


function checkColors(name){
  var colors=Object.getOwnPropertyNames(terminal.colors);
  bul=false; // boolean to control if its defined the property

  for(var i=0; i<colors.length; i++){//iterate over prop names

    if(colors[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){//if its finded the statement of the tag
    terminal.colors[name]=terminal.colors.default;
    } 
}


function checkProperties(name){
var properties= Object.getOwnPropertyNames(terminal);
  bul=false; // boolean to control if its defined the property

  for(var i=0; i<properties.length; i++){//iterate over prop names
    if(properties[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){//if its finded the statement of the tag
    throw new Error('Not defined '+name);
    }  
}
function printTable(simName, customObject){

var name= simName.slice(2); //delete simbol of the name 

checkProperties(name);

var opts = {
        stringLength: function(tbl) { return stringL(tbl); }
        };
if(terminal[name].align) opts.align= terminal[name].align;        
var tbl = table(terminal[name].data, opts);    

 console.log();
 console.log(tbl);
}

};