/* register the modules the application depends upon here*/
angular.module('portal_collections', []);
angular.module('faq_collections', []);
angular.module('home_collections', []);

var app = angular.module('portalApp', ['portal_collections']);
var faq_app = angular.module('faq_app', ['faq_collections']);
var home_app = angular.module('home_app', ['home_collections']);

faq_app.directive('ngConfirmClick', [
    function(){
        return {
            link: function (scope, element, attr) {
                var msg = attr.ngConfirmClick || "Are you sure?";
                var clickAction = attr.confirmedClick;
                element.bind('click',function (event) {
                    if ( window.confirm(msg) ) {
                        scope.$eval(clickAction)
                    }
                });
            }
        };
    }]);
