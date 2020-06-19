import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { SignupPage } from "../signup/signup";
import * as firebase from "firebase";
import { LoaderProvider } from "../../providers/loader/loader";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html",
})
export class LoginPage {
  private account: any = {
    email: "",
    password: "",
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loader: LoaderProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  async login() {
    this.loader.show();
    await firebase
      .auth()
      .signInWithEmailAndPassword(this.account.email, this.account.password)
      .then((result) => {
        console.log("LoginPage -> login -> result", result);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(
          "SignupPage -> signup -> errorCode",
          errorCode,
          errorMessage
        );
      });
    this.loader.hide();
  }
  signup() {
    this.navCtrl.push(SignupPage);
  }
}
