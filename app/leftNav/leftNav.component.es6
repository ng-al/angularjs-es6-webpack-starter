// Copyright (c) Alvin Pivowar 2016

class LeftNavController {
    constructor($location, $scope, routingService) {
        this._$location = $location;
        this.activeTabIndex = null;

        routingService.getRoutingInfo().then(response => {
            this.routing = response.data;
        });

        $scope.$watch(() => $location.path(), () => {
            for (let item of this.routing) {
                if ($location.path().indexOf(item.route) !== -1) {
                    this.activeTabIndex = item.ordinal;
                    break;
                }
            }
        });
    }

    onTabClick(item) {
        this._$location.path(item.route);
    }

    static factory($location, $scope, routingService) { return new LeftNavController($location, $scope, routingService); }
}

LeftNavController.$inject = ["$location", "$scope", "routingService", LeftNavController.factory];



class LeftNav {
    static get name() { return "leftNav"; }

    constructor() {
        this.bindToController = {};
        this.controller = LeftNavController.$inject;
        this.controllerAs = "vm";
        this.replace = true;
        this.restrict = 'E';
        this.scope = false;
        this.templateUrl = require("./leftNav.html");
    }

    link(scope, elem, attrs) {
    }

    static factory() { return new LeftNav(); }
}

LeftNav.$inject = [LeftNav.factory];

export default LeftNav;