/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react'
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  // Pesquisar e procurar entender o useEffect
  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista Total 
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegar o Featured
      let originals = list.filter(i => i.slug === 'originals'); // retornar um array
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      console.log(chosen);
    }

    loadAll();
  }, [])

  return (
    <div className="page">

     {featuredData && 
      <FeatureMovie item={featuredData} />
     }

     <section className="lists">
      {movieList.map((item, key) => (
        <MovieRow key={key} title={item.title} items={item.items} />
      ))}
     </section>
    </div>
  );
}

