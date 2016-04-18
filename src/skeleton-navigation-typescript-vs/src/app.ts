import {Router, RouterConfiguration} from 'aurelia-router'

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

    activate() {
        var windowHeight = $(window).height();
        var menuHeight = 100;

        $('#intro').height(windowHeight - menuHeight);
        console.log('ab');
    }
}
