export default function Concert(){
    return <>
    {/* Navbar */}
    <div className="max-w-2xl mx-auto">
    
    <nav className="border-gray-200">
    <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="/" className="flex">
        <img  className="h-10 mr-3" width="51" height="70" viewBox="0 0 51 70" fill="none" src="public/images/mythical_favicon.png"></img>

        {/* <svg className="h-10 mr-3" width="51" height="70" viewBox="0 0 51 70" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z" fill="#76A9FA"></path><path d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z" fill="#A4CAFE"></path><path d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z" fill="#1C64F2"></path></g><defs><clipPath id="clip0"><rect width="51" height="70" fill="white"></rect></clipPath></defs></svg> */}
            <span className="self-center text-lg font-semibold whitespace-nowrap">MythicalPlace</span>
        </a>
        <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
        <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
            <a href="/" className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Home</a>
            </li>
            <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">Rooms & Suites <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                {/* Dropdown menu  */}
                <div id="dropdownNavbar" className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                    <ul className="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="/bronze" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Bronze</a>
                    </li>
                    <li>
                        <a href="/silver" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Silver</a>
                    </li>
                    <li>
                        <a href="/gold" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Gold</a>
                    </li>
                    </ul>
                    {/* <div className="py-1">
                    <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
                    </div> */}
                </div>
            </li>
            <li>
            <a href="/exp" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Experiences</a>
            </li>
            <li>
            <a href="/dining" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Dining</a>
            </li>
            <li>
            <a href="/events" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Events</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</div>
<script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
<br/>
<br/>
        {/* Concert Package */}
<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Concert Packages</h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Choose the perfect package for your ultimate concert experience.</p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
           {/* Regular Package  */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Regular</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Basic concert package.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$100</span>
                  <span className="text-gray-500 dark:text-gray-400">/ticket</span>
              </div>
                {/* List   */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      <span>General Admission</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <span>Standing Area</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <span>Concert Merchandise</span>
                  </li>
              </ul>
              <a href="#" className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
          </div>
            {/* VIP Package */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">VIP</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Enhanced concert experience.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$250</span>
                  <span className="text-gray-500 dark:text-gray-400">/ticket</span>
              </div>
                {/* List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      <span>VIP Lounge Access</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <span>Exclusive Seating Area</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <span>Complimentary Drinks</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <span>Meet & Greet with Artists</span>
                  </li>
              </ul>
              <a href="#" className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
          </div>
            {/* VVIP Package  */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">VVIP</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Ultimate concert luxury.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$500</span>
                  <span className="text-gray-500 dark:text-gray-400">/ticket</span>
              </div>
                {/* List   */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      <span>VVIP Lounge Access</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <span>Front Row Seating</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <span>Personal Butler Service</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <span>Exclusive After-Party Access</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <span>Private Transportation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <span>Custom Merchandise</span>
                  </li>
              </ul>
              <a href="#" className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
          </div>
      </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-[#0a0a0a] dark:bg-gray-100">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <a href="/" className="flex items-center">
                    <img src="public/images/mythical-logo-circle.png" className="h-8 me-3" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-[#fafafa]">Mystical Place</span>
                </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-[#fafafa]">Where to find us</h2>
                    <ul className="text-[#fafafa] dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="" className="hover:underline">Lake Victoria</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">Migori-Muhuru Rd, Migori,</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">Kenya</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-[#fafafa]">Contact us</h2>
                    <ul className="text-[#fafafa] dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="#" className="hover:underline ">+254 (0) 789 835554</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">mythicalplace@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-[#fafafa]">Information</h2>
                    <ul className="text-[#fafafa] dark:text-gray-400 font-medium space-y-2">
                        <li className="mb-1">
                            <a href="/" className="hover:underline">Home</a>
                        </li>
                        <li>
                            <a href="/packages" className="hover:underline">Rooms & Suites</a>
                        </li>
                        <li>
                            <a href="/exp" className="hover:underline">Experiences</a>
                        </li>
                        <li>
                            <a href="/dining" className="hover:underline">Dining</a>
                        </li>
                        <li>
                            <a href="/events" className="hover:underline">Events</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-[#fafafa] sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Mythical Place™</a>. All Rights Reserved.</span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                    <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                    <span className="sr-only">Discord community</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                        <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                    </svg>
                    <span className="sr-only">Twitter page</span>
                </a>
            </div>
        </div>
    </div>
</footer>
    
    </>
}