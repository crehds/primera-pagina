import React, { Component } from 'react';
import Search from '../components/Search.jsx';
import { connect } from 'react-redux';
import { searchAsyncEntities as searchEntities } from '../../actions/index';
// import { bindActionCreators } from 'redux';

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators({ searchEntities }, dispatch),
//   };
// }
const mapDispatchToProps = {
  searchEntities,
};

class SearchContainer extends Component {
  state ={
    value: 'Luis Fonsi',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.input.value, 'submit');
    // fetch(`http://miapi.com/buscar/${this.input.value}`).then((data) => {
    // });
    this.props.searchEntities(this.input.value);

    // this.props.actions.searchEntities(this.input.value);
  };

  setInputRef = element => (
    this.input = element
  );

  handleInputChange = event => (
    this.setState({
      //forma alternativa
      // value: this.input.value,
      value: event.target.value.replace(' ', '-'),
    })
  );

  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(SearchContainer);
