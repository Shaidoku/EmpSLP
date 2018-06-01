import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { LoginPage } from './login';

// callbackManager = CallbackManager.Factory.create();
//
//
//     loginButton = (LoginButton) findViewById(R.id.login_button);
//     loginButton.setReadPermissions("email");
//     // If using in a fragment
//     loginButton.setFragment(this);
//
//     // Callback registration
//     loginButton.registerCallback(callbackManager, new FacebookCallback<LoginResult>() {
//         @Override
//         public void onSuccess(LoginResult loginResult) {
//             // App code
//         }
//
//         @Override
//         public void onCancel() {
//             // App code
//         }
//
//         @Override
//         public void onError(FacebookException exception) {
//             // App code
//         }
//     });
//
//
//     callbackManager = CallbackManager.Factory.create();
//
//     LoginManager.getInstance().registerCallback(callbackManager,
//             new FacebookCallback<LoginResult>() {
//                 @Override
//                 public void onSuccess(LoginResult loginResult) {
//                     // App code
//                 }
//
//                 @Override
//                 public void onCancel() {
//                      // App code
//                 }
//
//                 @Override
//                 public void onError(FacebookException exception) {
//                      // App code
//                 }
//     });

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    TranslateModule.forChild()
  ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule { }
