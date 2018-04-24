import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { PedidoPage } from '../pages/pedido/pedido';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { HistorialPage } from '../pages/historial/historial';
import { PreguntasPage } from '../pages/preguntas/preguntas';
import { PagoPage } from '../pages/pago/pago'; 
 
import { SubCategoriasPage } from '../pages/sub-categorias/sub-categorias';
import { ProductoPage } from '../pages/producto/producto';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PedidoPage,
    AyudaPage,
    HistorialPage,
    PreguntasPage,
    PagoPage,
    SubCategoriasPage,
    ProductoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PedidoPage,
    AyudaPage,
    HistorialPage,
    PreguntasPage,
    PagoPage,
    SubCategoriasPage,
    ProductoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
