// Copyright (c) Alvin Pivowar 2016

import "./leftNav.less";

import module from "./leftNav.module.es6";
import component from "./leftNav.component.es6";

module.directive(component.name, component.$inject);

export default module;