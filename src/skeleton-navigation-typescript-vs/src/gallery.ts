import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@autoinject
export class Users {
  heading = 'Trip Gallery';
  users = [];

  constructor(private http: HttpClient) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });
  }

    reverseUsers() {
        this.users.reverse();
    }

    activate() {
        
        //$(function () {

        //    var isotopeContainer = $('.gallery-grid');
        //    var grid = isotopeContainer.isotope({
        //        // options...
        //        resizable: false,
        //        itemSelector: '.grid-item',
        //        layoutMode: 'packery',
        //        packery: {
        //            gutter: 1,
        //            columnWidth: '.grid-item'
        //        },
        //        percentPosition: true
        //    });

        //    grid.imagesLoaded().progress(function () {
        //        grid.isotope('layout');
        //    });
        //});

        return this.http.fetch('users')
            .then(response => response.json())
            .then(users => this.users = users);
    }
}
