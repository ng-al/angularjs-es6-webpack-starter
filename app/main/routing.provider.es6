// Copyright (c) Alvin Pivowar 2016

import RoutingItem from "./routingItem.model.es6";

let index = 0;
const routingInfo = [
    new RoutingItem(index++, "Home", "/home", require("../content/home/home.html")),
    new RoutingItem(index++, "Start Up", "/startup", require("../content/startupTopic.html")),
    new RoutingItem(index++, "Main", "/main", require("../content/mainTopic.html")),
    new RoutingItem(index++, "Left Nav", "/leftNav", require("../content/leftNavTopic.html")),
    new RoutingItem(index++, "Models", "/models", require("../content/modelsTopic.html")),
    new RoutingItem(index++, "Recipes", "/recipes", require("../content/recipesTopic.html"))
];

class RoutingService {
    constructor($q) {
        this._$q = $q;
    }

    getRoutingInfo() {
        return this._$q((accept, reject) => {
            accept({ data: routingInfo });
        });
    }

    static factory($q) { return new RoutingService($q); }
}

RoutingService.$inject = ["$q", RoutingService.factory];


class RoutingProvider {
    static get name() { return "routingService"; }

    constructor() {
        this.routingInfo = routingInfo;
    }

    get $get() { return RoutingService.$inject; }

    static factory() { return new RoutingProvider(); }
}

RoutingProvider.$inject = [RoutingProvider.factory];

export default RoutingProvider;