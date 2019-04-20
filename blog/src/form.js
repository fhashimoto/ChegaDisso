import React, {Component} from 'react';

import $ from 'jquery';
import Firebase from "firebase";
import config from "./config";

class Form extends Component {
    constructor(props) {
      super(props);
      if (!Firebase.apps.length) {
        Firebase.initializeApp(config);
    }
      this.state = {
        inscritos: []
      };
    }
    
    componentDidMount() {
      this.getUserData();
    }
  
    componentDidUpdate(prevProps, prevState) {
      // Verificar o acrécimos de dados
      if (prevState !== this.state) {
        this.writeUserData()
      }
    }
  
    writeUserData = () => {
      Firebase.database()
        .ref("/")
        .set(this.state);
    };
  
    getUserData = () => {
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
  
    resetCampo(){
      this.refs.nome.value = "";
      this.refs.email.value = "";
      this.refs.uid.value = "";
    }
  
    salvandoJson(uid, nome, email, tipo, data, ip){
      // para encontrar alguma inscricao antiga
      if (uid && nome && email && tipo) {
        const { inscritos } = this.state;
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
    }
  
    handleSubmit = event => {
      event.preventDefault();
      let tipo = 0,
          nome = 0,
          email = 0;
        nome = this.refs.nome.value;
        //Talvez implementar uma validação por RegEx do e-mail
        email = this.refs.email.value;
        tipo = $('input[name=tipo]:checked',"#tipo").val();
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
      console.log(uid);
  
      //chamada de função para salvar o JSON que será enviado para a DB
      this.salvandoJson(uid, nome, email, tipo, data, ip);
      // aplicar regra no db.rules, para arrumar a ordem
      this.resetCampo();
      if(tipo=='B2B' || tipo=='B2C'){
        if(nome!=0 && email!=0){
          window.location = '/obrigado';
        }
      }else{
        alert('Favor escolher o tipo de e-mail');
      }
      if (nome==0){
        alert('Favor adicionar um nome');
      }
      if (email==0){
        alert('Favor adicionar um e-mail');
      }
      // Implementar a limpeza do campo de radio
    };
    render(){
      return(
        <form onSubmit={this.handleSubmit} className="subscribe">
          <input type="hidden" ref="uid" />
          <input
            type="text"
            ref="nome"
            placeholder="Nome*"
            className="campoform"
          />
          <input
            type="email"
            ref="email"
            placeholder="E-mail*"
            className="campoform"
          />
          <div id="tipo">
            <div className="campo">
              <input type="radio" name="tipo" value="B2B"/>
                <label>Pessoal</label>
            </div>
            <div className="campo">
              <input type="radio" name="tipo" value="B2C"/>
              <label>Comercial</label>
            </div>
          </div>
          {/* <Link to="/obrigado"> */}
            <button type="submit" className="botao">
              Inscreva-se
            </button>
          {/* </Link> */}
        </form>
      )
    }
}

export default Form;