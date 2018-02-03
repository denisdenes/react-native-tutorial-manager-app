import React, { Component }              from 'react';
import { CardSection, Card, Button }     from "./common";
import EmployeeForm                      from './EmployeeForm';
import { connect }                       from 'react-redux';
import { employeeUpdate, employeesSave } from "../actions";
import _                                 from 'lodash';
import Communications                    from 'react-native-communications'

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

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
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

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
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