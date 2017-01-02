'use strict';
import React, { Component } from 'react';
import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleModal, submitOrder } from '../actions/index';
import ProductOrderItem from '../components/ProductOrderItem';
import SubmitOrder from '../components/SubmitOrder';

class OrderFormModal extends Component {
  constructor(props) {
    super(props);
    this.closeOrderFormModal = this.closeOrderFormModal.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
  }

  closeOrderFormModal(event) {
    event.preventDefault();
    this.props.isOpen = false;
  }

  renderProducts(cart) {
    return Object.values(cart).map((photo, index, list) =>
      <ProductOrderItem
        key={ `ProductOrder_${index}` }
        photo={ photo }
        itemNum={ index + 1 } />
    );
  }

  render() {
    let greeting = <h2>The photo goes here</h2>

    //if-else statement that will add the submitOrder in if shoppingCartClick is passed in as true
    let submit = <div></div>
    if(this.props.shoppingCartClick) {
      submit = (
        <SubmitOrder
          sub={this.props.submitOrder}
          order={this.props.orderQuantities }
        />
      );
    };

    return (
      <Modal
        isOpen={ this.props.isOpen }
        contentLabel=''>

        <h3>Your Order Summary</h3>

        <div
          id="close-modal-btn"
          onClick={this.props.changeModalState}
          >
          X
        </div>

        <ul id="orders-list">
          { this.renderProducts(this.props.shoppingCart) }
          {submit}
        </ul>

      </Modal>
    )
  }
};

let mapStateToProps = (state) => ({
  orderQuantities: state.orderQuantity,
  shoppingCart: state.shoppingCart
});

let mapDispatchToProps = (dispatch) => bindActionCreators({
  submitOrder
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OrderFormModal);
