import React, { Component } from 'react';
import HomeLayout from '../components/Home-layout.jsx';
import Categories from '../../categories/components/Categories.jsx';
import Related from '../components/Related.jsx';
import ModalContainer from '../../widgets/containers/Modal.jsx';
import Modal from '../../widgets/components/Modal.jsx';
import HandleError from '../../errors/containers/Handle-error.jsx';
import VideoPlayer from '../../player/containers/Video-player.jsx';
import { connect } from 'react-redux';
import { List as list } from 'immutable';
import { openModal, closeModal } from '../../actions/index';
// import { bindActionCreators } from 'redux';

function mapStateToProps(state, props) {
  const categories = state.get('data').get('categories').map((categoryId) => (
    state.get('data').get('entities').get('categories').get(categoryId)
  ));
  let searchResults = list();
  const search = state.get('data').get('search');
  if (search) {
    const mediaList = state.get('data').get('entities').get('media');

    searchResults = mediaList.filter((item) => (
      item.get('author').toLowerCase().includes(search.toLowerCase())
    )).toList();
  }

  return {
    // categories: categories,

    //Forma sugar
    categories,
    search: searchResults,
    modal: state.get('modal'),
    isLoading: state.get('isLoading').get('active'),
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     // actions: bindActionCreators(acciones, dispatch)
//     actions: bindActionCreators(actions, dispatch),
//   };
// }

const mapDispatchToProps = {
  openModal,
  closeModal,
};

class Home extends Component {
  state = {
    modalVisible: false,
  };
  handleOpenModal = (id) => {
    // this.setState({
    //   modalVisible: true,
    //   media,
    // });
    // this.props.actions.openModal(id);
    this.props.openModal(id);
  };

  handleCloseModal = (event) => {
    // this.setState({
    //   modalVisible: false,
    // });
    // this.props.actions.closeModal();
    this.props.closeModal();
  };

  render () {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            search={this.props.search}
            isLoading={this.props.isLoading}
          />
          {
            this.props.modal.get('visibility') &&
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  autoplay
                  id={this.props.modal.get('mediaId')}
                />
                {/*src={this.state.media.src}
                title={this.state.media.title}*/}
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
