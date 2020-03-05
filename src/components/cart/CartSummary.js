import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { connect } from "react-redux";

class CartSummary extends Component {
  render() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer
  };
}
export default connect(mapStateToProps)(CartSummary);
