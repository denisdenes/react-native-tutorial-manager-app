import React, { Component }                 from 'react';
import { Card, CardSection, Button } from "./common";
import { connect }                          from 'react-redux';
import { employeeUpdate, employeeCreate }   from "../actions";
import EmployeeForm                         from './EmployeeForm';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift });
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
})(EmployeeCreate);