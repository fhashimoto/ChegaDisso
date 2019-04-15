import React, {Component} from "react";

import $ from 'jquery';
import Firebase from "firebase";
import config from "./config";

class App extends Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      developers: []
    };
  }

  componentDidMount() {
    console.log("DidMount");
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("DidUpdate");
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    console.log("writeUserData");
    Firebase.database()
      .ref("/")
      .set(this.state);
    console.log("DATA SAVED");
  };

  getUserData = () => {
    console.log("getUserData");
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  }; 

  handleSubmit = event => {
    console.log("handleSubmit");
    event.preventDefault();
    let nome = this.refs.nome.value;
    let email = this.refs.email.value;
    let tipo = $('input[name=tipo]:checked',"#tipo").val();
    let data = new Date();
    console.log(data);
    let uid = this.refs.uid.value;

    if (uid && nome && email) {
      const { developers } = this.state;
      const devIndex = developers.findIndex(data => {
        return data.uid === uid;
      });
      developers[devIndex].nome = nome;
      developers[devIndex].email = email;
      this.setState({ developers });
    } else if (nome && email) {
      const uid = new Date().getTime().toString();
      const { developers } = this.state;
      developers.push({ uid, nome, email });
      this.setState({ developers });
    }

    this.refs.nome.value = "";
    this.refs.email.value = "";
    this.refs.uid.value = "";
    // Implementar a limpeza do campo de radio
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>Chega Disso</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <input type="hidden" ref="uid" />
                  <div className="form-group col-md-6">
                    <label>Nome</label>
                    <input
                      type="text"
                      ref="nome"
                      className="form-control"
                      placeholder="Nome"
                    />
                  </div>
                
                  <div className="form-group col-md-6">
                    <div id="tipo">
                      <div className="form-check-inline">
                        <input className="form-check-input" type="radio" name="tipo" value="B2B"/>
                        <label className="form-check-label">Pessoal</label>
                      </div>
                      <div className="form-check-inline">
                        <input className="form-check-input" type="radio" name="tipo" value="B2C"/>
                        <label className="form-check-label">Comercial</label>
                      </div>
                    </div>
                    <label>E-mail</label>
                    <input
                      type="email"
                      ref="email"
                      className="form-control"
                      placeholder="E-mail"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Inscreva-se
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
