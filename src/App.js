/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react'
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';
import Header from "./components/Header";

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = false;

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
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, [])

  // Adicionando um evento de monitoramento da página 
  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      }else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className="page">
      <Header black={blackHeader} />

     {featuredData && 
      <FeatureMovie item={featuredData} />
     }

     <section className="lists">
      {movieList.map((item, key) => (
        <MovieRow key={key} title={item.title} items={item.items} />
      ))}
     </section>


     <footer>
       Feito com <span role="img" aria-label="coração">💖</span> pela B7Web <br />
       Direitos de imagem para Netflix <br />
       Dados pegos do site Themoviedb.org
     </footer>

     {/* Fazendo o loading */}

     {movieList.length <= 0 &&
       <div className="loading">
         <img src="https://www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/netflix-loading.gif" alt="Carregando" />
       </div>
      }
    </div>
  );
}

