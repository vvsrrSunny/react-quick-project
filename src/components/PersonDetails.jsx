
import { Component } from "react"
import Text from "./Text";

class PersonDetails extends Component {
 render() {
    return (
        <div className="flex flex-col text-center pb-5">
        <Text
          className="text-red-600"
          name="Persons name"
          value={this.props.data[0].name}
        ></Text>
        <Text
          name="data of birth"
          value={this.props.data[0].dateOfBirth}
        ></Text>
        <Text name="Weight" value={this.props.data[0].weight}></Text>
        <Text name="Height" value={this.props.data[0].height}></Text>
      </div>
    );
 } 
}

export default PersonDetails