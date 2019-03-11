class Db {
  constructor() {
    this.path = "BSD/PL";
    this.flag = document.querySelector(".flag");
    // this.language = 'PL';
    this.setText();
    this.setLanguage();
  }

  connect() {
    const db = firebase.firestore();
    const docRef = db.doc(this.path);
    return docRef;
  }

  getText() {
    return this.connect(this.path)
      .get()
      .then(e => {
        let data = e.data();
        // console.log(updats);
        return data;
      });
  }

  setFlag() {
    if (this.path === "BSD/PL") {
      this.flag.style.backgroundImage =
        'url("pic/iconfinder_Flag_of_United_Kingdom_96354.png")';
    } else {
      this.flag.style.backgroundImage =
        'url("pic/iconfinder_Flag_of_Poland_96372.png")';
    }
  }

  setText() {
    this.getText().then(e => {
      for (let i in e) {
        document.querySelector(`#${i}`).innerHTML = e[i];
      }
    });
    this.setFlag();
  }

  setLanguage() {
    this.flag.addEventListener("click", () => {
      if (this.path === "BSD/PL") {
        this.path = "BSD/EN";
        this.setText();
      } else {
        this.path = "BSD/PL";
        this.setText();
      }
    });
  }
}

export { Db };
