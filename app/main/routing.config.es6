// Copyright (c) Alvin Pivowar 2016

class RoutingConfig {
    constructor($routeProvider, routingServiceProvider) {
        routingServiceProvider.routingInfo.forEach(item => {
            $routeProvider.when(item.route, { templateUrl: item.templateUrl });
        });

        $routeProvider.otherwise({ redirectTo: routingServiceProvider.routingInfo[0].route });
    }

    static factory($routeProvider, routingServiceProvider) { return new RoutingConfig($routeProvider, routingServiceProvider); }
}

RoutingConfig.$inject = ["$routeProvider", "routingServiceProvider", RoutingConfig.factory];

export default RoutingConfig;