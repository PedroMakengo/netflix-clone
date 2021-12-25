/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import './style.css';

// import NavigateBeforeIcon from '@material-ui/icons/NavigateBeforeIcon';
// import NavigateNextIcon from '@material-ui/icons/NavigateNextIcon';

const MovieRow = ({title, items}) => {

  const [scrollX, setScrollX] = useState(0)

  const handleLeftArrow = () => {
    let x = scrollX + Math.random(window.innerWidth / 2);
    if(x > 0) {
      x = 0;
    }
    setScrollX(x);
  }
  const handleRightArrow = () => {
    let x = scrollX - Math.random(window.innerWidth / 2);

    // Largura dos meus items
    let listW = items.results.length * 150;

    if((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x)
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--left" onClick={handleLeftArrow}>
        {/* <NavigateBeforeIcon style={{fontSize: 50}} /> */}
      </div>
      <div className="moviewRow--right" onClick={handleRightArrow}>
        {/* <NavigateNextIcon style={{fontSize: 50}} /> */}
      </div>
      <div className="movieRow--listarea">
        <div className="movieRow--list" 
          style={{marginLeft: scrollX, width: items.results.length * 150}}>
          {items.results.length > 0 && items.results.map((item, key) => (
            <div key={key} className="movieRow--item" >
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} 
                alt={item.original_title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieRow;