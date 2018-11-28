//Recordar este componente exporta
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
  state = {
    // author: 'Leonidas Esteban',
    ...this.props,
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     author: props.author,
  //   };
  //
  //   // this.handleClick = this.handleClick.bind(this);
  // }

  handleClick = (event) => {
    //   console.log(this.props.image);
    //   this.setState({
    //     author: 'Ricardo Celis',
    //   });
    this.props.openModal(this.props.id);
  };

  render() {
    const { title, author, image, cover } = this.state;
    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red',
      },
    };
    return (
      <div
        className="Media"
        onClick={this.handleClick}
      >
        {/* En jsx a los string como className se les llama propiedades no atributos, dentro de jsx*/}
        <div className="Media-cover">
          <img className="Media-image"
            src={cover}
            alt=""
            width={240}
            height= {160}
          />
        </div>
        <h3 className="Media-title">{title}</h3>
        <p className="Media-author">{author}</p>
      </div>
    );
  }
}

Media.propTypes = {
  cover: PropTypes.string,

  // Términos para refereirse a otros datos
  // number, object, func, array.

  // Para validar que un dato es requerido
  title: PropTypes.string.isRequired,
  author: PropTypes.string,

  //Con el método .oneOf establecemos que es lo que se espera. Ejemplo o es video o audio
  type: PropTypes.oneOf(['video', 'audio']),
};

export default Media;
