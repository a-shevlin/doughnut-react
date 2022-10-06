import React from 'react';

function Purchase() {
	return (
    <React.Fragment>
      <section class="box-border py-8 leading-7 text-gray-900 bg-gray-700 border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24">
				<div class="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
					<div class="flex flex-col items-center leading-7 text-center">
						<h2 class="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-gray-200 border-solid sm:text-4xl md:text-5xl">
							Pricing Options
						</h2>
					</div>
					<div class="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4 border-gray-300 border-gray-600 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3">
						<div class="box-border px-4 py-8 mb-6 text-center bg-grayB-700 border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
							<h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-gray-200 border-0 border-solid sm:text-3xl md:text-4xl">
								Supporter
							</h3>
							<p class="mt-3 leading-7 text-gray-300 border-0 border-solid">
								Thank you for choosing to support my game and endeavors.
							</p>
							<div class="flex items-center justify-center mt-6 leading-7 text-gray-200 border-0 border-solid sm:mt-8">
								<p class="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
									&cent;1
								</p>
								<p class="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
									per user <span class="block">per month</span>
								</p>
							</div>

							<button class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-300 no-underline bg-transparent border border-b-2 border-blue-300 rounded-md cursor-pointer hover:bg-blue-300 hover:border-blue-300 hover:text-gray-100 sm:text-base sm:mt-8 md:text-lg">
								Select Plan
							</button>
						</div>
						<div class="box-border px-4 py-8 mb-6 text-center bg-grayB-600 border border-grayB-500 border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
							<h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-gray-200 border-0 border-solid sm:text-3xl md:text-4xl">
								Super Supporter
							</h3>
							<p class="mt-3 leading-7 text-gray-300 border-0 border-solid">
								Wow this is so cool of you to pick this one! Almost like a super hero.
							</p>
							<div class="flex items-center justify-center mt-6 leading-7 text-gray-200 border-0 border-solid sm:mt-8">
								<p class="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
									&cent;3
								</p>
								<p class="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
									per user <span class="block">per month</span>
								</p>
							</div>
							<button class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-gray-100 no-underline bg-blue-300 border-2 border-b-4 border-blue-300 rounded-md cursor-pointer hover:border-blue-300 hover:bg-transparent hover:text-gray-200 sm:text-base sm:mt-8 md:text-lg">
								Select Plan
							</button>
						</div>
							<div class="box-border px-4 py-8 text-center bg-grayB-700 border-solid sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
								<h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-gray-200 border-0 border-solid sm:text-3xl md:text-4xl">
									Extreme Supporter
								</h3>
								<p class="mt-3 leading-7 text-gray-300 border-0 border-solid">
									This is an extreme risk and I appreciate you being willing to take it.
								</p>
								<div class="flex items-center justify-center mt-6 leading-7 text-gray-200 border-0 border-solid sm:mt-8">
									<p class="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
										&cent;5
									</p>
									<p class="box-border my-0 ml-4 mr-0 text-xs text-center border-0 border-gray-200">
										per user <span class="block">per month</span>
									</p>
								</div>
								<button class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-300 no-underline bg-transparent border border-b-2 border-blue-300 rounded-md cursor-pointer hover:bg-blue-300 hover:border-blue-300 hover:text-gray-100 sm:text-base sm:mt-8 md:text-lg">
									Select Plan
								</button>
							</div>
					</div>
				</div>
      </section>

    </React.Fragment>
  )
}

export default Purchase;