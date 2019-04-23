import React, {Component} from 'react';

class Share extends Component {
    render(){
        let url = window.location.href;
        return(
            // Utilizando a API do Add to Any, para os botões de compartilhamento
            <div className="share">
                <a className="facebook" target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
                    <img src="https://i.imgur.com/SgHnbfV.png"></img>
                </a>
                <a className="linkedin" target="_blank" href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}>
                    <img src="https://i.imgur.com/kX3EGMw.png"></img>
                </a>
                <a className="twitter" target="_blank" href={`https://twitter.com/share?ref_src=${url}`}>
                    <img src="https://i.imgur.com/dcDvS3s.png"></img>
                </a>
                <a className="whatsapp" target="_blank" href={`https://api.whatsapp.com/send?phone=whatsappphonenumber&text=${url}`}>
                    <img src="https://i.imgur.com/zAjSZC3.png"></img>
                </a>
            </div>
        )
    }
}
export default Share;