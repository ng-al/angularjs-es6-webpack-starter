// Copyright (c) Alvin Pivowar 2016

class RoutingItem {
    get ordinal() { return this._ordinal; }
    get label() { return this._label; }
    get route() { return this._route; }
    get templateUrl() { return this._templateUrl; }

    constructor(ordinal, label, route, templateUrl) {
        this._ordinal = ordinal;
        this._label = label;
        this._route = route;
        this._templateUrl = templateUrl;
    }
}

export default RoutingItem;