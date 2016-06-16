// Copyright (c) Alvin Pivowar 2016

import ngRoute from "angular-route";
import modal from "angular-ui-bootstrap/src/modal";
import tabs from "angular-ui-bootstrap/src/tabs";

import LeftNavComponent from "../leftNav/leftNav.feature.es6";

const theApp = angular.module("app", [
    ngRoute,
    modal,
    tabs,
    LeftNavComponent.name
]);

export default theApp;