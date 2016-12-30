'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Photo from './photo';
import { getPhotos } from '../actions/index';


class ThumbnailsMap extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getPhotos();
  }

  renderGrid() {
    if (this.props.imageObject){
      return this.props.imageObject.map((photo) => {
        return (
          <Photo
            key={photo.public_id}
            photoObject={photo}
            selectPhoto={this.props.selectPhoto}
            />
        );
      });
    }else {
      return (<h2 className="no-search-results">Apologies, no matching search results</h2>);
    };
  };


  render() {
    let photos = this.renderGrid();

    return (
      <main id="photo-gallery">
        <div className="photo-thumbnail-grid">
          {photos}
        </div>
      </main>
    );
  }
};


const mapStateToProps = (state) => ({
  imageObject: state.imageObject,
  shoppingCart: state.shoppingCart
});


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getPhotos }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ThumbnailsMap);
