import React, { Component } from 'react';
import Media from '../components/Media.jsx';
import { connect } from 'react-redux';
import { openModal } from '../../actions/index';
// import { bindActionCreators } from 'redux';

function mapStateToProps(state, props) {
  return {
    data: state.get('data').get('entities').get('media').get(props.id),
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators({ openModal }, dispatch),
//   };
// }

const mapDispatchToProps = {
  openModal,
};

class MediaContainer extends Component {
  openModal = (id) => {
    this.props.openModal(id);
  };

  render() {
    // console.log({ ...this.props.data.toJS() });
    return <Media
              category = {this.props.data.get('category')}
              author   = {this.props.data.get('author')}
              cover    = {this.props.data.get('cover')}
              id       = {this.props.data.get('id')}
              src      = {this.props.data.get('src')}
              title    = {this.props.data.get('title')}
              type     = {this.props.data.get('type')}
              openModal = {this.openModal}
           />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer);
