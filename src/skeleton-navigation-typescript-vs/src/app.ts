import {Router, RouterConfiguration} from 'aurelia-router'
import Aureliatemplating = require("aurelia-templating");
import View = Aureliatemplating.View;

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Mikolaj Kocot Portfolio';
        config.map([
            { route: 'welcome', name: 'welcome', moduleId: 'welcome', nav: true, title: 'Start' },
            { route: ['', 'gallery'], name: 'gallery', moduleId: 'gallery', nav: true, title: 'Gallery' }
        ]);

        this.router = router;
    }

    attached() {
        var windowHeight = (<any>$(window)).height();
        var menuHeight = 95;

        (<any>$('#intro')).height(windowHeight - menuHeight);
        (<any>$('main')).height(windowHeight - menuHeight);

        (<any>$('#intro')).on('mousewheel', function () {
            (<any>$('html, body')).animate({
                scrollTop: (<any>$('#menu')).offset().top
            }, 500);
            return false;
        });

        (<any>$('#submenu')).on('mousewheel', function () {
            (<any>$('html, body')).animate({
                scrollTop: (<any>$('#intro')).offset().top
            }, 500);
            return false;
        });
    }

    activate() {
       
    }
}
