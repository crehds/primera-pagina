import React from 'react';
import Category from './Category.jsx';
import './categories.css';
import Search from '../../widgets/containers/Search-container.jsx';
import Media from '../../playlist/components/Media.jsx';

function Categories(props) {
  return (
    <div className="Categories">
      <Search/>
      {
        props.isLoading &&
        <p>Buscando el video...</p>
      }
      {
        props.search.map((item) => (
          <Media
            title  = {item.get('title')}
            author = {item.get('author')}
            type   = {item.get('type')}
            cover  = {item.get('cover')}
            src    = {item.get('src')}
            id     = {item.get('id')}
            key    = {item.get('id')}
            openModal={props.handleOpenModal}
          />
        ))
      }
      {
        props.categories.map((item) => (
          <Category
            description = {item.get('description')}
            title       = {item.get('title')}
            playlist    = {item.get('playlist')}
            id          = {item.get('id')}
            key         = {item.get('id')}

            handleOpenModal={props.handleOpenModal}
          />)
        )
      }
    </div>
  );
}

export default Categories;
