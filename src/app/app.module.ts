import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { FoldersComponent } from './components/folders/folders.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    FoldersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue:{
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("850144694434-u6ki0mia76d1kdvsa93cmgodk2ejil77.apps.googleusercontent.com")
        }

      ]
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
