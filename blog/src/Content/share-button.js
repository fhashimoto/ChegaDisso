import React, {Component} from 'react';

class Share extends Component {
    render(){
        let url = window.location.href;
        return(
            // Utilizando a API do Add to Any, para os botões de compartilhamento
            <div className="share">
                <a className="facebook" target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} rel="noopener noreferrer">
                    <img src="https://i.imgur.com/SgHnbfV.png" alt="compartilhe no facebook"></img>
                </a>
                <a className="linkedin" target="_blank" href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} rel="noopener noreferrer">
                    <img src="https://i.imgur.com/kX3EGMw.png" alt="compartilhe no linkedin"></img>
                </a>
                <a className="twitter" target="_blank" href={`https://twitter.com/share?ref_src=${url}`} rel="noopener noreferrer">
                    <img src="https://i.imgur.com/dcDvS3s.png" alt="compartilhe no twitter"></img>
                </a>
                <a className="whatsapp" target="_blank" href={`https://api.whatsapp.com/send?phone=whatsappphonenumber&text=${url}`} rel="noopener noreferrer">
                    <img src="https://i.imgur.com/zAjSZC3.png" alt="compartilhe no whatsapp"></img>
                </a>
            </div>
        )
    }
}
export default Share;