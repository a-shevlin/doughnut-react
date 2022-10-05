import React from 'react';
import gear from '../img/gear-gray.png'
import mk from '../img/m-k.png'

function AlphaPanel() {
  return (
    <React.Fragment>
      <section class="w-full bg-gray-700 pt-7 pb-7 md:pt-20 md:pb-24">
          <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

              {/* <!-- Image --> */}
              <div class="w-full md:w-1/2">
              <div class="w-3/4 h-auto m-auto overflow-hidden rounded-md  sm:rounded-xl">
                  <img class="drop-shadow" src={gear} />
                </div>
              </div>

              {/* <!-- Content --> */}
              <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                  <h2 class="m-0 text-gray-200 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                      Alpha V 1.0
                  </h2>
                  <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                      
                  </p>
                  <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
                      <li class="box-border relative py-1 pl-0 text-left text-gray-300 border-solid">
                          <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-400 rounded-full"><span class="text-sm font-bold">✓</span></span> Generates doughnuts on click!
                      </li>
                      <li class="box-border relative py-1 pl-0 text-left text-gray-300 border-solid">
                          <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-400 rounded-full"><span class="text-sm font-bold">✓</span></span> Auto generate from bought buildings
                      </li>
                      <li class="box-border relative py-1 pl-0 text-left text-gray-300 border-solid">
                          <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-400 rounded-full"><span class="text-sm font-bold">✓</span></span> Increase clicks on building upgrade
                      </li>
                  </ul>
              </div>
              {/* <!-- End  Content --> */}
          </div>
          <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-white border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

              {/* <!-- Content --> */}
              <div class="box-border w-full text-gray-200 border-solid md:w-1/2 md:pl-6 xl:pl-32">
                  <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                      Artwork
                  </h2>
                  <p class="pt-4 pb-8 m-0 leading-7 text-gray-300 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                      All drawn using MS Paint
                  </p>
                  <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
                      <li class="box-border relative py-1 pl-0 text-left text-gray-300 border-solid">
                          <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-400 rounded-full"><span class="text-sm font-bold">✓</span></span> Button Icons
                      </li>
                      <li class="box-border relative py-1 pl-0 text-left text-gray-300 border-solid">
                          <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-400 rounded-full"><span class="text-sm font-bold">✓</span></span> Wall and Ground Textures
                      </li>
                      <li class="box-border relative py-1 pl-0 text-left text-gray-300 border-solid">
                          <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-400 rounded-full"><span class="text-sm font-bold">✓</span></span> Work In Progress Counter and Leaderboard
                      </li>
                  </ul>
              </div>
              {/* <!-- End  Content --> */}

              {/* <!-- Image --> */}
              <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                  <img src={mk} class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32 drop-shadow" />
              </div>
          </div>
      </section>

    </React.Fragment>
  )
}

export default AlphaPanel;