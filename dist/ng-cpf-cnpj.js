(function (window, angular) {
    // Register the angular module
    angular.module('ngCpfCnpj', []);

    /**
     *
     * @param {Function} validator Validator to be applied
     * @param {string} validatorName ...
     * @param {Angular.controller} controller Controller to apply the validators to.
     */
    function applyValidator(validator, validatorName, controller) {
        if (controller.$validators) {
            // We are on angular >= 1.3 < 2
            // eslint-disable-next-line no-param-reassign
            controller.$validators[validatorName] = function (modelValue, viewValue) {
                var value = modelValue || viewValue;
                return validator.isValid(value) || !value;
            };

            return;
        }

        // We are on angular <= 1.2
        controller.$parsers.unshift(function (viewValue) {
            var value = viewValue.replace(/\D/g, '');
            var isValid = validator.isValid(value) || !value;

            controller.$setValidity(validatorName, isValid);
            return isValid ? viewValue : undefined;
        });
    }

    /**
     *
     * @param {string} name Directive Name
     * @param {Function} validator ...
     * @param {string} validatorName ...
     */
    function addDirective(name, validator, validatorName) {
        var module = angular.module('ngCpfCnpj');

        module.directive(name, function () {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function link(scope, element, attrs, controller) {
                    applyValidator(validator, validatorName, controller);
                }
            };
        });
    }

    if (window.CPF) {
        addDirective('ngCpf', window.CPF, 'cpf');
    }

    if (window.CNPJ) {
        addDirective('ngCnpj', window.CNPJ, 'cnpj');
    }
})(this, this.angular);
