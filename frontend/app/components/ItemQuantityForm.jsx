'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addToShoppingCart } from '../actions/index';

class ItemQuantityForm extends Component {
  constructor(props) {
    super(props);
    this.renderSizes = this.renderSizes.bind(this);
    this.changeItemQuantity = this.changeItemQuantity.bind(this);
    this.enableInput = this.enableInput.bind(this);
    this.disableInput = this.disableInput.bind(this);
    this.onPhotoSubmit = this.onPhotoSubmit.bind(this);

    this.state = {
        '5x7': 0,
        '8x10': 0,
        '18x24': 0
    };
  }

  changeItemQuantity(evt) {
    let num =  evt.target.value;
    let size = `${evt.target.dataset.size}`;

    this.setState({
      [size]: num
    })
  }

  enableInput(evt) {
    evt.target.removeAttribute('disabled');
  }

  disableInput(evt) {
    if (!(evt.target.value > 0)) {
      evt.target.setAttribute('disabled', true);
    }
  }

  renderSizes(sizesArr) {
    return sizesArr.map((obj, index, list) =>
      <li
        key={ `ItemSize_${index}` }
        className="size">

        <label
          htmlFor={ `size-${obj.size}` }>
          { obj.dimensions }
        </label>

        <input
          id={ `size-${obj.size}` }
          type="number"
          min={ 0 }
          max={ Number.MAX_SAFE_INTEGER }
          defaultValue={ 0 }
          data-size={ obj.dimensions.replace(/\s/g, '') }
          onChange={ this.changeItemQuantity }
          onMouseOver={ this.enableInput }
          onMouseLeave={ this.disableInput }
          disabled />

        <output
          htmlFor={ `size-${obj.size}` } >
          { `$${(index * 5) + 10}` }
        </output>

      </li>
    );
  }

  onPhotoSubmit(event) {
    event.preventDefault();
    this.props.addToShoppingCart(this.props.photo, this.state);
  }

  render() {
    const SIZES = [
      {
        size: 'small',
        dimensions: '5 x 7'
      },
      {
        size: 'Standard',
        dimensions: '8 x 10'
      },
      {
        size: 'Large',
        dimensions: '18 x 24'
      }
    ];

    return (
      <form className="quantity-form">
        <ul className="sizes-list">
          { this.renderSizes(SIZES) }
        </ul>

        <input
          type="submit"
          value="Submit"
          onClick={() => this.onPhotoSubmit()}
        />
      </form>
    );
  }
};

let mapDispatchToProps = (dispatch) => bindActionCreators({
  addToShoppingCart
}, dispatch);

export default connect(null, mapDispatchToProps)(ItemQuantityForm);
