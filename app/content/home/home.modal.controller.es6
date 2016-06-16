// Copyright (c) Alvin Pivowar 2016

class HomeModalController {
    /*@ngInject*/
    constructor($uibModalInstance, $window) {
        this._$uibModalInstance = $uibModalInstance;
        this._$window = $window;
    }

    buildEmailBody() {
        const today = new Date();

        let message = `
        Date: ${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}
        From: ${this.email}

        Dear Angular Al,

        ${this.comments.replace(/\r?\n|\r/g, " ")}

        ${this.firstName} ${this.lastName}`;

        return encodeURI(message);
    }

    cancel() { this._$uibModalInstance.dismiss("cancel"); }

    ok() { this._$uibModalInstance.close("ok"); }

    submit(isValid) {
        if (!isValid) return;

        this._$window.open(`mailto:alvin@ng-al.com?I%20Like%20It!&body=${this.buildEmailBody()}`, "_self");
        this.ok();
    }
}

export default HomeModalController;