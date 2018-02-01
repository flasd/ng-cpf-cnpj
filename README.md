# ng-cpf-cnpj

AngularJS directive to validate CPF/CNPJ numbers, using [cpf_cnpj.js](https://github.com/fnando/cpf_cnpj.js).

## How to install

```npm install ng-cpf-cnpj --save```

And add to your index.html

```html
<script src="node_modules/cpf_cnpj/build/cpf.js"></script>
<script src="node_modules/cpf_cnpj/build/cnpj.js"></script>
<script src="node_modules/ng-cpf-cnpj/dist/index.min.js"></script>
```
And inject it to your angular.module

```angular.module('myApp', ['ngCpfCnpj']); ```

## How to use

Just add ```ng-cpf``` or ```ng-cnpj``` to any ```<input/>```. You can also use ```ui-mask```, from [ui-utils](https://github.com/angular-ui/ui-utils), to restrict the format:

```html
<form name="myForm">

  <input name="cpf" ng-model="cpf" ng-cpf />
  myForm.cpf.$valid: {{ myForm.cpf.$valid }}

  <input name="cnpj" ng-model="cnpj" ng-cnpj />
  myForm.cnpj.$valid: {{ myForm.cnpj.$valid }}

</form>
```