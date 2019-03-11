import "./../scss/main.scss";
import { Background } from "./partials/background";
import { Db } from "./partials/database";
import { Scroll } from "./events/scroll";
import { Position } from "./events/position";
import { map } from "./partials/map";

//Database - set content
let config = {
  apiKey: "AIzaSyC39JnnA7Pd3-DfwH2n4zFe2H7NMV1UyhM",
  authDomain: "bsd-mk.firebaseapp.com",
  databaseURL: "https://bsd-mk.firebaseio.com",
  projectId: "bsd-mk",
  storageBucket: "bsd-mk.appspot.com",
  messagingSenderId: "699729683196"
};

firebase.initializeApp(config);

new Db();

//header background
new Background();

//navbar behavior

let bar = document.querySelector(".top_bar");
let module1 = document.querySelector("#module1");
let start = document.querySelector("#start");
let module3 = document.querySelector("#module3");
let about = document.querySelector("#about");
let module4 = document.querySelector("#module4");
let contact = document.querySelector("#contact");
let moveup = document.querySelector(".moveup");
let header = document.querySelector("header");
new Scroll(bar);
new Position(module1, start);
new Position(module3, about);
new Position(module4, contact);
new Position(header, moveup);
