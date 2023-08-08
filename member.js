function skillsMember () {
  return {
    restrict: 'E',
    templateUrl: 'views/directives/skills-member.html',
    controller: ['$scope', '$rootScope', '$timeout', '$window', '$location', '$anchorScroll', '$state', '$stateParams', '$filter', 'dataService', 'appService', function ($scope, $rootScope, $timeout, $window, $location, $anchorScroll, $state, $stateParams, $filter, dataService, appService) {
      $scope.data = {};
      $scope.data.member = $scope.member;
      $scope.data.skills = $scope.skills;
      $scope.data.skillsList = [];
      $scope.data.skillsList = $scope.data.skills.split(',');
      $scope.data.skillsList = $filter('orderBy')($scope.data.skillsList);
      $scope.data.skillsList = $filter('unique')($scope.data.skillsList);
      $scope.data.skillsList = $scope.data.skillsList.filter(function (el) {
        return el != null && el != '';
      });
      $scope.data.skillsList = $scope.data.skillsList.filter(function (el) {
        return el != null && el != '';
      });
      $scope.data.skillsList = $scope.data.skillsList.filter(function (el) {
        return el != null && el != '';
      });
      $scope.data.skillsList = $scope.data.skillsList.filter(function (el) {
        return el != null && el != '';
      });
      $scope.data.skillsList = $scope.data.skillsList.filter(function (el) {
        return el != null && el != '';
      });
      $scope.data.skillsList = $scope.data.skillsList.filter(function (el) {
        return el != null && el != '';
      });
    }]
  };
}