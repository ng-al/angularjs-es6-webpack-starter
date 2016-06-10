// Copyright (c) Alvin Pivowar 2016

import "./main.less";

import ngRoute from "angular-route";
import modal from "angular-ui-bootstrap/src/modal";
import tabs from "angular-ui-bootstrap/src/tabs";

import RoutingConfig from "./routing.config.es6";
import RoutingProvider from "./routing.provider.es6";
import LeftNavComponent from "../leftNav/leftNav.feature.es6";
import HomeController from "../content/home/home.controller.es6";

const theApp = angular.module("app", [
    ngRoute,
    modal,
    tabs,
    LeftNavComponent.name
]);

theApp.config(RoutingConfig.$inject);
theApp.provider(RoutingProvider.name, RoutingProvider.$inject);
theApp.controller(HomeController.name, HomeController.$inject);

export default theApp;
