import React, { Component }              from 'react';
import { CardSection, Card, Button }     from "./common";
import EmployeeForm                      from './EmployeeForm';
import { connect }                       from 'react-redux';
import { employeeUpdate, employeesSave } from "../actions";
import _                                 from 'lodash';

class EmployeeEdit extends Component {
  componentWillMount() {
    // iterate over every property of that object, and
    // update the reducer with every property
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    })
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeesSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  render() {
    return (
      <Card>
        <EmployeeForm/>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeesSave })(EmployeeEdit);