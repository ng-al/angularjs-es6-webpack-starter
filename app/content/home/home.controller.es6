// Copyright (c) Alvin Pivowar 2016

import theApp from "../../main/main.module.es6";
import HomeModalController from "./home.modal.controller.es6";

class HomeController {
    /*@ngInject*/
    constructor($uibModal) {
        this._$uibModal = $uibModal;
    }

    openModal() {
        this._$uibModal.open({
            controller: injectForES6(HomeModalController),
            controllerAs: "vm",
            templateUrl: require("./home.modal.html")
        });
    }
}

theApp.controller("homeCtrl", injectForES6(HomeController));
export default HomeController;