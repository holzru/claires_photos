'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OrderFormModal from './OrderFormModal';
import { toggleModal } from '../actions/index';
import Logo from '../../static/images/logo_lv7v7x.png';


class Header extends Component {
  constructor(props) {
    super(props);
    this.renderModal = this.renderModal.bind(this);
    this.displayCartCount = this.displayCartCount.bind(this);
    this.changeModalState = this.changeModalState.bind(this);
    this.state = {
      isModalOpen: false
    };
  }

  renderModal(event) {
    this.changeModalState();
  }

  changeModalState() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  displayCartCount() {
    return Object.keys(this.props.cart).length;
  }

  render() {
    return(
      <header>
        <img
          src={ Logo }
          alt="Site logo home, Galleria Scola"
          role="logo"
          id="logo"/>

        <div className="shopping-cart">
          <img
            src="https://cdn4.iconfinder.com/data/icons/greicons-2/1052/CARRITO-512.png"
            alt="Shopping cart glyph icon (Gray)."
            id="shopping-cart-icon"
            onClick={ this.renderModal } />
          <i id='shopping-cart-total'>
            { this.displayCartCount() }
          </i>
        </div>

        <OrderFormModal
          isOpen={this.state.isModalOpen}
          changeModalState={this.changeModalState}
          />

      </header>
    );
  }
};

let mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart
});

export default connect(mapStateToProps)(Header);
