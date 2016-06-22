// Copyright (c) Alvin Pivowar 2016

import theApp from "./main.module.es6";

class RoutingConfig {
    /*@ngInject*/
    constructor($routeProvider, routingServiceProvider) {
        routingServiceProvider.routingInfo.forEach(item => {
            $routeProvider.when(item.route, { templateUrl: item.templateUrl });
        });

        $routeProvider.otherwise({ redirectTo: routingServiceProvider.routingInfo[0].route });
    }
}

theApp.config(injectForES6(RoutingConfig));
export default RoutingConfig;