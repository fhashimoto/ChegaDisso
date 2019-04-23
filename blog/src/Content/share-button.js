import React, {Component} from 'react';

class Share extends Component {
    render(){
        return(
            // Utilizando a API do Add to Any, para os botões de compartilhamento
            <div>
                <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
                    <a className="a2a_button_facebook"></a>
                    <a className="a2a_button_whatsapp"></a>
                    <a className="a2a_button_linkedin"></a>
                    <a className="a2a_button_email"></a>
                    <a className="a2a_button_twitter"></a>
                </div>
            </div>
        )
    }
}
export default Share;