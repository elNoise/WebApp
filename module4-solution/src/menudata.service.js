(function(){

angular.module('data')
.service('MenuDataService',MenuDataService)
.constant("ApiMenus", " https://davids-restaurant.herokuapp.com/")


MenuDataService.$inject=["$https","ApiMenus"]
function MenuDataService($http,ApiBasePath){

    var service = this
    //List of Menus
    var items= []

    service.getAllCategories = function(){
        var response = $http({
            method: "GET",
            url: (ApiCategories + "categories.json")
        }).then(function success(result) {
            console.log("Yes")
            return result.data;
        }, function error(response) {
            console.log("No")
            throw new Error('Fail to fetch details!');
        });
    };

    service.getItemsForCategory = function(categoryShortName){
        var response = $http({
            method: "GET",
            url: (ApiCategories + "menu_items.json"),
            params: {
                category: categoryShortName
            }

        }).then(function success(result) {
            return result.data;
        }, function error(response) {
            throw new Error('Fail to fetch details!');
        });    }

}
})();