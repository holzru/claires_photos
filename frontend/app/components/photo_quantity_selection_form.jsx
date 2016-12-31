'use strict';
import React, { Component } from 'react';
import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleModal, submitOrder } from '../actions/index';

class OrderFormModal extends Component {
  constructor(props) {
    super(props);
    this.closeOrderFormModal = this.closeOrderFormModal.bind(this);
    this.renderPhoto = this.renderPhoto.bind(this);
  }

  closeOrderFormModal(event) {
    event.preventDefault();
    this.props.isOpen = false;
  }

  renderPhoto(photo) {
    return(
      <h2>hi</h2>
    );
  }

  render() {

    return (
      <Modal
        isOpen={this.props.isOpen}
        contentLabel=''
      >

        <h3>This is your photo</h3>
        //This is the X to close the modal, yo
        <div id="close-modal-btn" onClick={this.props.changeModalState}>X</div>
        //This renders the clicked photo
        {this.renderPhoto()}

      </Modal>
    );
  }

};

let mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart
});

let mapDispatchToProps = (dispatch) => bindActionCreators({
  submitOrder
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OrderFormModal);
