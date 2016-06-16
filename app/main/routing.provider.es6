// Copyright (c) Alvin Pivowar 2016

import theApp from "./main.module.es6";
import RoutingItem from "./routingItem.model.es6";
import {injectForES6} from "../common.es6";


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
    /*@ngInject*/
    constructor($q) {
        this._$q = $q;
    }

    getRoutingInfo() {
        return this._$q((accept, reject) => {
            accept({ data: routingInfo });
        });
    }
}


class RoutingProvider {
    /*@ngInject*/
    constructor() {
        this.routingInfo = routingInfo;
    }

    get $get() { return injectForES6(RoutingService); }
}

theApp.provider("routingService", injectForES6(RoutingProvider));
export default RoutingProvider;