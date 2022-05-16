import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { BackendModule } from './core/backend/backend.module';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './core/backend/config/app-config.interface';
import { firstValueFrom } from 'rxjs';

function initializeApp(http: HttpClient) {
  return () => firstValueFrom(http.get<AppConfig>('/assets/config.json'))
    .then((config) => {
      console.log('We loaded app config: ', config);
    });
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    BackendModule.forRoot(environment.backendConfig)
  ],
  providers: [{
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: initializeApp,
    deps: [HttpClient]
  }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
