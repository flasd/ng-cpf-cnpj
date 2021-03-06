# ng-cpf-cnpj

AngularJS directive to validate CPF/CNPJ numbers, using [cpf_cnpj.js](https://github.com/fnando/cpf_cnpj.js).

[![Build Status](https://travis-ci.org/flasd/ng-cpf-cnpj.svg?branch=master)](https://travis-ci.org/flasd/ng-cpf-cnpj) 
[![npm version](https://badge.fury.io/js/ng-cpf-cnpj.svg)](https://www.npmjs.com/package/ng-cpf-cnpj) 

### Instalation

```npm install ng-cpf-cnpj cpf_cnpj --save```

And add to your index.html

```html
<script src="node_modules/cpf_cnpj/build/cpf_cnpj.min.js"></script>
<script src="node_modules/ng-cpf-cnpj/dist/index.min.js"></script>
```
And inject it to your angular.module

```angular.module('myApp', ['ngCpfCnpj']); ```

### Usage

Just add ```ng-cpf``` or ```ng-cnpj``` to any ```<input/>```. 

```html
<form name="myForm">

  <input name="cpf" ng-model="cpf" ng-cpf />
  myForm.cpf.$valid: {{ myForm.cpf.$valid }}

  <input name="cnpj" ng-model="cnpj" ng-cnpj />
  myForm.cnpj.$valid: {{ myForm.cnpj.$valid }}

</form>
```

You can also use ```ui-mask```, from [ui-utils](https://github.com/angular-ui/ui-utils), to restrict the format:

```html
<form name="myForm">
 
  <input name="cpf" ng-model="cpf" ng-cpf ui-mask="999.999.999-99" />
  myForm.cpf.$valid: {{ myForm.cpf.$valid }}
 
  <input name="cnpj" ng-model="cnpj" ng-cnpj ui-mask="99.999.999/9999-99" />
  myForm.cnpj.$valid: {{ myForm.cnpj.$valid }}
 
</form>
```

### Copyright and License

Copyright (c) 2017 [Marcel de Oliveira Coelho](https://github.com/flasd) under the [MIT license](https://github.com/flasd/ng-cpf-cnpj/blob/master/LICENSE). Go Crazy. :rocket: