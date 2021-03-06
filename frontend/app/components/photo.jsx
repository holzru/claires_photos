'use strict';
import React, { Component } from 'react';
import ReactToolTip from 'react-tooltip';
import CheckboxGlyph from '../constants/svg/CheckboxGlyph_SVG';
import OrderFormModal from './OrderFormModal';


const URL_BASE = 'https://res.cloudinary.com/clairephotography/image/upload/';

const thumbResize = (imgPath) => `${URL_BASE}h_200/${imgPath}`;
export default class Photo extends Component {
  constructor(props) {
    super(props);
    this.onPhotoClick = this.onPhotoClick.bind(this);
    this.renderPhoto = this.renderPhoto.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.changeModalState = this.changeModalState.bind(this);
    this.state = { className: 'photo', isModalOpen: false };
  }

  renderModal() {
    this.changeModalState();
  }

  changeModalState() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  onPhotoClick() {
    const { className } = this.state;
    const { selectPhoto, photoObject } = this.props;
    this.renderModal();
    selectPhoto(photoObject);
    if (className.includes('active')) {
      this.setState({ className: 'photo'});
    } else {
      this.setState({ className: 'photo photo-active'});
    }
  }

  renderPhoto() {
    const { className } = this.state;
    const { public_id } = this.props.photoObject;

    let srcUrl = thumbResize(public_id);

    const img = (
      <img
        className='photo-img'
        onClick={this.onPhotoClick}
        src={srcUrl}
      />
    );
    const checkbox = (
      <div
        className="checkbox"
        role="checkbox"
      >
        <CheckboxGlyph className='checkbox-glyph'/>
      </div>
    );
    const modal = (
      <OrderFormModal
        isOpen={this.state.isModalOpen}
        changeModalState={this.changeModalState}
      />
    );


    if (className.includes('active')) {
      return (
        <div className={className}>
          {checkbox}
          {img}
          {modal}
        </div>
      );
    } else {
      return (
        <div className={className}>
          {img}
          {modal}
        </div>);
    }
  }

  render() {
    return this.renderPhoto();
  }
}
