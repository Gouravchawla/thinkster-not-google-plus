(function () {
  'use strict';

  angular
      .module('thinkster', [
          'thinkster.config',
          'thinkster.routes',
          'thinkster.authentication',
          'thinkster.layout',
          'thinkster.posts',
          'thinkster.utils'
      ])
      .run(run);

  angular
      .module('thinkster.config', []);

  angular
      .module('thinkster.routes', ['ngRoute']);

  run.$inject = ['$http'];

  /**
   * @name run
   * @desc Update xsrf into $http header to align with Django's default
   */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }
})();