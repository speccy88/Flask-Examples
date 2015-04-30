//// Copyright (c) Microsoft Corporation. All rights reserved

(function () {
    var module = angular.module("AngularWinJSApp", ["winjs"]);
    module.controller("AngularWinJSAppController", function ($scope, $http) {
        $scope.rating = 1;
        $scope.maxRating = 5;
        $scope.test = function () {
            alert("Rating: "+$scope.rating+" - "+"Hour: "+$scope.time.getHours());
        };
        
        $scope.items1 = fruits
        
        $http.get("/api/data")
            .success(function(data) {$scope.items2 = data;});

    });  
})();

fruits = [
{ title: "Marvelous Mint", text: "Gelato", picture: "/images/fruits/60Mint.png" },
{ title: "Succulent Strawberry", text: "Sorbet", picture: "/images/fruits/60Strawberry.png" },
{ title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
{ title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
{ title: "Creamy Orange", text: "Sorbet", picture: "/images/fruits/60Orange.png" },
{ title: "Very Vanilla", text: "Ice Cream", picture: "/images/fruits/60Vanilla.png" },
{ title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
{ title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
{ title: "Marvelous Mint", text: "Gelato", picture: "/images/fruits/60Mint.png" },
{ title: "Succulent Strawberry", text: "Sorbet", picture: "/images/fruits/60Strawberry.png" },
{ title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
{ title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
{ title: "Creamy Orange", text: "Sorbet", picture: "/images/fruits/60Orange.png" },
{ title: "Very Vanilla", text: "Ice Cream", picture: "/images/fruits/60Vanilla.png" },
{ title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
{ title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
{ title: "Marvelous Mint", text: "Gelato", picture: "/images/fruits/60Mint.png" },
{ title: "Succulent Strawberry", text: "Sorbet", picture: "/images/fruits/60Strawberry.png" },
{ title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
{ title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
{ title: "Creamy Orange", text: "Sorbet", picture: "/images/fruits/60Orange.png" },
{ title: "Very Vanilla", text: "Ice Cream", picture: "/images/fruits/60Vanilla.png" },
{ title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
{ title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
{ title: "Marvelous Mint", text: "Gelato", picture: "/images/fruits/60Mint.png" },
{ title: "Succulent Strawberry", text: "Sorbet", picture: "/images/fruits/60Strawberry.png" },
{ title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
{ title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
{ title: "Creamy Orange", text: "Sorbet", picture: "/images/fruits/60Orange.png" },
{ title: "Very Vanilla", text: "Ice Cream", picture: "/images/fruits/60Vanilla.png" },
{ title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
{ title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" }
];