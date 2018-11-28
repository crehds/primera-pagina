import React from 'react';
import MediaContainer from '../containers/Media-container.jsx';
import './playlist.css';

// import Play from '../../icons/components/play.jsx';
// import Pause from '../../icons/components/pause.jsx';
// import Volume from '../../icons/components/volume.jsx';
// import FullScreen from '../../icons/components/fullscreen.jsx';

// Componente Funcional es una función
// Dentro de los parámetros de la función, esta recibe props
// por si se desea imprimir alguna propiedad
function Playlist(props) {
  // const playlist = props.data.categories[0].playlist;
  // console.log(props.data);
  return (
    <div className="Playlist">
    {/*Esta parte solo fue para practicar*/}
    {/*  <Play
        size={100}
        color="red"
      />
      <Pause
        size={100}
        color="rgb(89, 184, 205)"
      />
      <Volume
        size={100}
        color="rgba(219, 179, 57, 0.81)"
      />
      <FullScreen
        size={100}
        color="green"
      />
      <hr></hr>*/}
      {
        props.playlist.map((mediaId) => (
          <MediaContainer
            {...mediaId}
            key={mediaId}
            id={mediaId}
            openModal={props.handleOpenModal}
          />)
        )
      }
    </div>
  );
}

//Forma de componente puro
// class Playlist extends Component {
//   render() {
//     const playlist = this.props.data.categories[0].playlist;
//     console.log(this.props.data);
//     return (
//       <div className="Playlist">
//         {
//           playlist.map((item) => <Media {...item} key={item.id} />)
//         }
//       </div>
//     );
//   }
// }

export default Playlist;
