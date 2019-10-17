import React from 'react';
import VideoService from '../../service/VideoService';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            top_videos: [],
        };

        this.updateVideos = this.updateVideos.bind(this);
    }

    componentDidMount() {
        this.updateVideos();
    }

    updateVideos() {
        VideoService.retrieveTopVideoList().then(
            response => {
                //console.log(response.data);
                console.log(response.data._embedded.videos);
                this.setState({top_videos: response.data._embedded.videos})
            }
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <b>Top Videos</b>
                    <div className="row">
                        {
                            this.state.top_videos.map(
                                video =>
                                    <div className="col">
                                        <img src={video.previewUrl}/>
                                        <span>{video.name}</span><br/>
                                        <span>{video.url}</span><br/>
                                        <span>{video.rating}</span><br/>
                                    </div>
                            )
                        }
                    </div>
                </div>
                <div className="container">
                    <b>Categories</b>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;