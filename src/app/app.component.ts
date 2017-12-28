import { Component } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';
import { LoginOptions } from 'ngx-facebook/dist/esm/models/login-options';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    constructor(private fb: FacebookService) {
        let initParams: InitParams = {
            appId: '1763837480599313',
            xfbml: true,
            version: 'v2.8'
        };
        fb.init(initParams);
    }

    loginWithFacebook(): void {
        let options: LoginOptions = {
            scope: "public_profile, email"
        }

        this.fb.login(options)
            .then((response: LoginResponse) => console.log(response))
            .catch((error: any) => console.error(error));

    }
}