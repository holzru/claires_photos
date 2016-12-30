'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeItemQuantity } from '../actions/index';


class ItemQuantityForm extends Component {
  constructor(props) {
    super(props);
    this.renderSizes = this.renderSizes.bind(this);
    this.changeItemQuantity = this.changeItemQuantity.bind(this);
    this.enableInput = this.enableInput.bind(this);
    this.disableInput = this.disableInput.bind(this);
  }

  changeItemQuantity(evt) {
    const ID = this.props.photoID;
    let num =  evt.target.value;
    let size = evt.target.dataset;

    this.props.changeItemQuantity({
      photoID: ID,
      quantity: {
        [size]: num
      }
    });
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

  render() {
    const SIZES = [
      {
        size: 'small',
        dimensions: '4 x 6'
      }, {
        size: 'medium',
        dimensions: '5 x 7'
      }, {
        size: 'large',
        dimensions: '8 x 10'
      }
    ];

    return (
      <form className="quantity-form">
        <ul className="sizes-list">
          { this.renderSizes(SIZES) }
        </ul>
      </form>
    );
  }
};

let mapDispatchToProps = (dispatch) => bindActionCreators({
  changeItemQuantity
}, dispatch);

export default connect(null, mapDispatchToProps)(ItemQuantityForm);
