import React, {Component} from 'react';

class Share extends Component {
    render(){
        let url = window.location.href;
        return(
            <div className="fb-share-button" data-href={url} data-layout="button" data-size="small">
                <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} className="fb-xfbml-parse-ignore" rel="noopener noreferrer">
                    Share
                </a>
            </div>
        )
    }
}
export default Share;