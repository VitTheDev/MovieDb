import React, { Component } from 'react';

export class VideoPlayer extends Component {
  render() {
    return (
      <div className="container">
        <iframe
          title={this.props.match.params.id}
          style={{ width: '100%', height: '600px', border: 'none' }}
          src={`https://www.youtube.com/embed/${this.props.match.params.id}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default VideoPlayer;
