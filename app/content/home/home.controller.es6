// Copyright (c) Alvin Pivowar 2016

import HomeModalController from "./home.modal.controller.es6";

class HomeController {
    static get name() { return "homeCtrl"; }

    constructor($uibModal) {
        this._$uibModal = $uibModal;
    }

    openModal() {
        this._$uibModal.open({
            controller: HomeModalController.$inject,
            controllerAs: "vm",
            templateUrl: require("./home.modal.html")
        });
    }

    static factory($uibModal) { return new HomeController($uibModal); }
}

HomeController.$inject = ["$uibModal", HomeController.factory];

export default HomeController;