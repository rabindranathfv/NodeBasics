## Multiply node app

This application is for basic stuff related to nodeJs like import using require, params into a npm package
use yargs, colors


```
npm install
``` 

Here exist 2 application

firts one

```
node app list --base <value> --limit <value>
``` 

or

```
node app create --base <value> --limit <value>
``` 

limit it is optional but base is mandatory

second one is about Todo app

create Todo
```
node appTodo create --description <value> --completed <value>
``` 

list Todo
```
node appTodo list
``` 

update todo
```
node appTodo update --description <value> --completed <( true or false)>
``` 

delete todo
```
node appTodo delete --description <value> --completed <value>
``` 
alias -d for description and -c for completed
