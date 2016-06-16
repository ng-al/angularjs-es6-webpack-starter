// Copyright (c) Alvin Pivowar 2016

import module from "./leftNav.module.es6";
import {injectForES6} from "../common.es6";


class LeftNavController {
    /*@ngInject*/
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
}


class LeftNav {
    /*@ngInject*/
    constructor() {
        this.bindToController = {};
        this.controller = injectForES6(LeftNavController);
        this.controllerAs = "vm";
        this.replace = true;
        this.restrict = 'E';
        this.scope = false;
        this.templateUrl = require("./leftNav.html");
    }

    link(scope, elem, attrs) {
    }
}

module.directive("leftNav", injectForES6(LeftNav));
export default LeftNav;