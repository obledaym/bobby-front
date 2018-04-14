'use strict';

/**
 * @ngdoc service
 * @name bobbyApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the bobbyApp.
 */
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;

}

var csrftoken =  getCookie('csrftoken');

angular.module('bobbyApp')
  .factory('serviceAjax', function serviceAjax($http) {
    return{
        path: function(path){
            return $http.get("http://localhost:8000/api/v1/"+path, {withCredentials:true, headers: {'Content-Type': 'application/vnd.api+json', 'Access-Control-Allow-Credentials' : '*', "X-CSRFToken": csrftoken, 'Access-Control-Allow-Origin' : '*'}});
        }
    }
});