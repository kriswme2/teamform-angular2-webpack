import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {TechsModule} from './techs';

import {MainComponent} from './main';

import { AngularFireModule } from 'angularfire2';

// firebase config
export const firebaseConfig = {
  apiKey: "AIzaSyCUsi1foXfC8nQRKIfiQt1wrDIc2u4VxoY",
  authDomain: "teamform-d9873.firebaseapp.com",
  databaseURL: "https://teamform-d9873.firebaseio.com",
  storageBucket: "teamform-d9873.appspot.com",
  messagingSenderId: "1088721163692"
};

@NgModule({
  imports: [
    BrowserModule,
    routing,
    TechsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    RootComponent,
    MainComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
