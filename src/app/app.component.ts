import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Location} from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'my-leng';
    language = '';
    private defaultLocale = 'en';

    constructor(private translate: TranslateService,
                public location: Location) {

        const path = this.location.path().split('/');
        const locale = path[1] || this.defaultLocale;

        console.log("routes", path);
        this.language = locale;
        translate.setDefaultLang(locale);
        translate.use(locale);
    }
}
