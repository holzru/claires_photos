'use strict';
import React, { Component } from 'react';
import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ItemQuantityForm from './ItemQuantityForm';
import { toggleModal, addToShoppingCart, changeItemQuantity } from '../actions/index';

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
      <div>
        <h2>hi</h2>
        <img src={photo.url}/>
        <ItemQuantityForm />
      </div>
    );
  }

  render() {
    let {photo} = this.props;
    return (
      <Modal
        isOpen={this.props.isOpen}
        contentLabel=''
      >
        <h3>This is your photo</h3>
        <div id="close-modal-btn" onClick={this.props.changeModalState}>X</div>

        {this.renderPhoto(photo)}
        <button
          onClick={(photo) => this.props.addToShoppingCart(photo)}
        >
          Add to Shopping Cart
        </button>
      </Modal>
    );
  }

};

let mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart
});

let mapDispatchToProps = (dispatch) => bindActionCreators({
  addToShoppingCart
}, dispatch);

export default connect(null, mapDispatchToProps)(OrderFormModal);
