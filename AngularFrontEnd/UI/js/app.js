var app = angular.module('testchat', ['ngMaterial', 'LocalStorageModule', 'btford.socket-io']);

app.service('SocketService', ['socketFactory', function SocketService(socketFactory) {
    return socketFactory({
        ioSocket: io.connect('ws://edisga-socketserver.azurewebsites.net/')
    });
}]);

app.controller('homeController', function($scope, localStorageService, SocketService) {

    $scope.array = [];
    $scope.message = {};
    SocketService.emit('room', { roomId: "temp" });

    $scope.add = function() {
        SocketService.emit('toBackEnd', {roomId:'temp', data: $scope.message, date: new Date() })
        $scope.array.push({ data: $scope.message, date: new Date() })
    }

    SocketService.on('message', function(msg) {
        $scope.array.push(msg)
    });

})