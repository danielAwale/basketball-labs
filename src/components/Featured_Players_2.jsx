import React, { useState, useEffect } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./styles/featured_players_2.css";

const Featured_Players_2 = () => {

  const [statsData, setStatsData] = useState([]);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const getWindowSize = function () {
    return { width: window.innerWidth, height: window.innerHeight }
  }

  // Updates windowSize whenever the screen size is adjusted.
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/filter')
      .then(response => response.json())
      .then(data => setStatsData(data))
      .catch(error => console.log(error.message))
  }, []);

  // console.log(statsData);
  // console.log(window.screen.width);
  console.log(windowSize);

  const tiles = statsData.map(player => {
    return (
      <div tabindex="0" className="focus:outline-none">
        <div className="mx-auto container py-8">
          <div className="flex flex-wrap items-center lg:justify-between justify-center">
            <div tabindex="0" className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8 entire-player-tile">
              <div>
                <img src={player.picture} tabindex="0" className="focus:outline-none w-full h-44 player-photo" />
              </div>
              <div className="bg-slate-800 player-description-box">
                <div className="flex items-center justify-between px-4 pt-4">
                  <a href="/watchlist">
                    <svg xmlns="http://www.w3.org/2000/svg" method="POST" action="/watchlist" tabindex="0" className="focus:outline-none " width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="white" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </a>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 tabindex="0" className="focus:outline-none text-lg font-semibold text-white">{player.first_name} {player.last_name}</h2>
                    <p tabindex="0" className="focus:outline-none text-xs text-slate-400 pl-5">{player.team_name}</p>
                  </div>

                  <p tabindex="0" className="focus:outline-none text-xs text-slate-400 mt-2 featured-stat-info"><br />Points: {player.points}<br /><br />Assists: {player.assists}<br /><br />Rebounds: {player.rebounds}</p>

                  <div className="flex mt-4">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  });

  // console.log(tiles[0]);


  return (
    <>
      <div className='featured-title'>Featured Players of the Week!</div>
      <div className="container mx-auto">
        <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider className="lg:block hidden" naturalSlideWidth={405} currentSlide={0} isIntrinsicHeight={true} totalSlides={9.55} visibleSlides={windowSize.width / 450} step={1} infinite={true}>
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack role="button" aria-label="slide backward" className="button-back absolute z-30 left-0 ml-8 cursor-pointer" id="prev">
                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1L1 7L7 13" stroke="rgb(166, 166, 166)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                    <Slide index={0}>
                      {tiles[0]}
                    </Slide>

                    <Slide index={1}>
                      {tiles[1]}
                    </Slide>

                    <Slide index={2}>
                      {tiles[2]}
                    </Slide>

                    <Slide index={3}>
                      {tiles[3]}
                    </Slide>

                    <Slide index={4}>
                      {tiles[4]}
                    </Slide>

                    <Slide index={5}>
                      {tiles[5]}
                    </Slide>

                    <Slide index={6}>
                      {tiles[6]}
                    </Slide>

                    <Slide index={7}>
                      {tiles[7]}
                    </Slide>

                    <Slide index={8}>
                      {tiles[8]}
                    </Slide>

                    <Slide index={9}>
                      {tiles[9]}
                    </Slide>

                  </div>
                </Slider>
              </div>
              <ButtonNext role="button" aria-label="slide forward" className="button-forward absolute z-30 right-0 mr-8" id="next">
                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L1 13" stroke="rgb(166, 166, 166)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>

          {/* Carousel for tablet and medium size devices */}
          <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={405} currentSlide={0} isIntrinsicHeight={true} totalSlides={10} visibleSlides={windowSize.width / 450} step={1} infinite={true}>
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack role="button" aria-label="slide backward" className="button-back absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1L1 7L7 13" stroke="rgb(166, 166, 166)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                    <Slide index={0}>
                      {tiles[0]}
                    </Slide>

                    <Slide index={1}>
                      {tiles[1]}
                    </Slide>

                    <Slide index={2}>
                      {tiles[2]}
                    </Slide>

                    <Slide index={3}>
                      {tiles[3]}
                    </Slide>

                    <Slide index={4}>
                      {tiles[4]}
                    </Slide>

                    <Slide index={5}>
                      {tiles[5]}
                    </Slide>

                    <Slide index={6}>
                      {tiles[6]}
                    </Slide>

                    <Slide index={7}>
                      {tiles[7]}
                    </Slide>

                    <Slide index={8}>
                      {tiles[8]}
                    </Slide>

                    <Slide index={9}>
                      {tiles[9]}
                    </Slide>

                  </div>
                </Slider>
              </div>
              <ButtonNext role="button" aria-label="slide forward" className="button-forward absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L1 13" stroke="rgb(166, 166, 166)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>

          {/* Carousel for mobile and Small size Devices */}
          <CarouselProvider className="block md:hidden " naturalSlideWidth={405} currentSlide={0} isIntrinsicHeight={true} totalSlides={10} visibleSlides={windowSize.width / 450} step={1} infinite={true}>
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack role="button" aria-label="slide backward" className="button-back absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1L1 7L7 13" stroke="rgb(166, 166, 166)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                    <Slide index={0}>
                      {tiles[0]}
                    </Slide>

                    <Slide index={1}>
                      {tiles[1]}
                    </Slide>

                    <Slide index={2}>
                      {tiles[2]}
                    </Slide>

                    <Slide index={3}>
                      {tiles[3]}
                    </Slide>

                    <Slide index={4}>
                      {tiles[4]}
                    </Slide>

                    <Slide index={5}>
                      {tiles[5]}
                    </Slide>

                    <Slide index={6}>
                      {tiles[6]}
                    </Slide>

                    <Slide index={7}>
                      {tiles[7]}
                    </Slide>

                    <Slide index={8}>
                      {tiles[8]}
                    </Slide>

                    <Slide index={9}>
                      {tiles[9]}
                    </Slide>

                  </div>
                </Slider>
              </div>
              <ButtonNext role="button" aria-label="slide forward" className="button-forward absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L1 13" stroke="rgb(166, 166, 166)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </>
  );
}

export default Featured_Players_2;