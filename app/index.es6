// Copyright (c) Alvin Pivowar 2016

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import "angular";

import theApp from "./main/main.es6";
angular.bootstrap(document.body, [theApp.name]);