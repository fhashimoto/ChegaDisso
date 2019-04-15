import React, {Component} from "react";

import $ from 'jquery';
import Firebase from "firebase";
import config from "./config";
import './App.css';

class Header extends Component {
  render(){
    return(
      <header>
        <nav>
          <div className="cabecalho container">
            <div id="titulo">chega disso</div>
            <div id="categoria">Categorias</div>
            <div id="contato">Contato</div>
          </div>
        </nav>
      </header>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      inscritos: []
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

  formatoData(d, h){
    return (
      d.getFullYear()+'-'+('00'+(d.getMonth()+1)).slice(-2)+'-'+('00'+d.getDate()).slice(-2)+' '+('00'+(d.getHours()+h)).slice(-2)+':'+('00'+d.getMinutes()).slice(-2)+':'+('00'+d.getSeconds()).slice(-2)
    )
  }

  handleSubmit = event => {
    event.preventDefault();
    let nome = this.refs.nome.value;
    let email = this.refs.email.value;
    let tipo = $('input[name=tipo]:checked',"#tipo").val();
    let ipapi = null;
    $.ajax({
      url: 'https://ipapi.co/json/',
      type: 'get',
      async: false,
      success: function(dados){
        ipapi = dados;
      }
    });
    let fuso = ipapi.utc_offset;
    let ip = ipapi.ip;
    // Cálculo da diferença de fuso com o fuso de brasília
    var diffHora = ((parseInt(fuso)/100)+3);
    let data = this.formatoData(new Date(), diffHora);
    
    let uid = this.refs.uid.value;

    if (uid && nome && email && tipo) {
      const { inscritos } = this.state;
      // para encontrar alguma inscricao antiga
      const insIndex = inscritos.findIndex(data => {
        return data.uid === uid;
      });
      inscritos[insIndex].nome = nome;
      inscritos[insIndex].email = email;
      inscritos[insIndex].tipo = tipo;
      inscritos[insIndex].data = data;
      inscritos[insIndex].ip = ip;
      this.setState({ inscritos });
    } //Caso for inscrição nova, segue
      else if (nome && email && tipo) {
      const uid = new Date().getTime().toString();
      const { inscritos } = this.state;
      inscritos.push({ uid, nome, email, tipo, data, ip });
      this.setState({ inscritos });
    }
    // aplicar regra no db.rules, para arrumar a ordem

    this.refs.nome.value = "";
    this.refs.email.value = "";
    this.refs.uid.value = "";
    // Implementar a limpeza do campo de radio
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Header/>
          {/* Header */}
              <form onSubmit={this.handleSubmit} className="subscribe">
                
                  <input type="hidden" ref="uid" />
                  <div>
                    <input
                      type="text"
                      ref="nome"
                      placeholder="Nome*"
                      className="campoform"
                    />
                  </div>
                  
                  <input
                    type="email"
                    ref="email"
                    placeholder="E-mail*"
                    className="campoform"
                  />
                  <div id="tipo">
                    <div>
                      <input type="radio" name="tipo" value="B2B"/>
                      <label>Pessoal</label>
                    </div>
                    <div>
                      <input type="radio" name="tipo" value="B2C"/>
                      <label>Comercial</label>
                    </div>
                  </div>
                <button type="submit">
                  Inscreva-se
                </button>
              </form>
            </div>
      
      </React.Fragment>
    );
  }
}

export default App;
