import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import * as firebase from "firebase";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  logout() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        console.log("logout successfully");
      })
      .catch(function (error) {
        // An error happened.
        console.log("HomePage -> logout -> error", error);
      });
  }
}
