import React from 'react';
import marl from '../img/marl.png'
import seung from '../img/seung.jpg';
import seungion from '../img/seungion.png';

function Testimonial() {
	return (
		<React.Fragment>
			<section class="flex items-center justify-center py-20 bg-gray-700 min-w-screen">
				<div class="px-16 bg-grayB-700 rounded-lg">
					<div class="container flex flex-col items-start mx-auto lg:items-center">
						<p class="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-blue-300 uppercase lg:justify-center lg:items-center">hear from other players</p>
						<h2 class="relative flex items-start justify-start w-full max-w-3xl text-5xl text-gray-200 font-bold lg:justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-100 lg:inline-block" viewBox="0 0 975.036 975.036">
							<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
							</path>
						</svg>
							See what others are saying</h2>
							<div class="block w-full h-2 max-w-lg mt-6 bg-sky-200 rounded-full"></div>

						<div class="items-center justify-center w-full mt-12 mb-4 lg:flex">
							<div class="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
								<div class="flex items-center justify-center">
								<div class="w-16 h-16 mr-4 overflow-hidden bg-gray-600 rounded-full">
										<img src={seungion} class="object-cover w-full h-full" />
									</div>
									<div class="flex flex-col items-start justify-center">
										<h4 class="font-bold text-gray-100">Ryan DeFea</h4>
										<p class="text-gray-300">CEO of Something</p>
									</div>
								</div>
								<blockquote class="mt-8 text-lg text-gray-200">“This game is absolutely unprecedented, there are moments in time where you remember where you were when something happened. This game is one of those moments.”</blockquote>
							</div>
							<div class="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
								<div class="flex items-center justify-center">
									<div class="w-16 h-16 mr-4 overflow-hidden bg-gray-600 rounded-full">
										<img src={marl} class="object-cover w-full h-full" />
									</div>
									<div class="flex flex-col items-start justify-center">
										<h4 class="font-bold text-gray-100">Seung Lee</h4>
										<p class="text-gray-300">CTO of Business</p>
									</div>
								</div>
								<blockquote class="mt-8 text-lg text-gray-200">"I'm Turtle Matt and this is my favorite game on the Citadel."</blockquote>
							</div>
							<div class="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
								<div class="flex items-center justify-center">
									<div class="w-16 h-16 mr-4 overflow-hidden bg-gray-600 rounded-full">
										<img src={seung} class="object-cover w-full h-full" />
									</div>
									<div class="flex flex-col items-start justify-center">
										<h4 class="font-bold text-gray-100">Matt Herbert</h4>
										<p class="text-gray-300">Creator of Stuff</p>
									</div>
								</div>
								<blockquote class="mt-8 text-lg text-gray-200">"At least it's not broken. Hard work does not equal success."</blockquote>
							</div>
						</div>
					</div>
				</div>
			</section>
    </React.Fragment>
  )
}

export default Testimonial;