import React, {Component} from 'react';

class Share extends Component {
    render(){
        let url = window.location.href;
        return(
            <div>
                <div className="fb-share-button" data-href={url} data-layout="button" data-size="small">
                    <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} className="fb-xfbml-parse-ignore" rel="noopener noreferrer">
                        Share
                    </a>
                </div>
                <a href={`https://twitter.com/share?ref_src=${url}`} className="twitter-share-button" data-show-count="false">
                    Tweet
                </a>
                <div className="a2a_kit a2a_default_style">
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} className="a2a_button_linkedin_share"></a>
                </div>
                <div className="a2a_kit a2a_kit_size_20 a2a_default_style">
                    <a className="a2a_button_whatsapp"></a>
                </div>
            </div>
        )
    }
}
export default Share;