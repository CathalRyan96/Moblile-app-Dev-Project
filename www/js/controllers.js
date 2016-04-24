angular.module('starter.controllers', [])

.controller('listCtrl', function($scope) {})

.controller('addTaskCtrl', function($scope) {
    //function to add items to the existing list
$scope.AddItem = function (data) {
  $scope.toDoListItems.push({
    task: data.newItem,
    status: 'not done'
  });
  data.newItem = '';
  $scope.closeModal();
};
})
