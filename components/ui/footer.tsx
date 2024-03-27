import Link from 'next/link'
import DarkLogo from './darkLogo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4 lg:max-w-xs">
            <div className="mb-2">
              {/* Logo */}
              <Link href="/" className="block text-blue-600 transition duration-150 ease-in-out" aria-label="Cruip">
                <DarkLogo />
                {/* <svg className="w-10 h-10 fill-current" viewBox="0 0 100 95" xmlns="http://www.w3.org/2000/svg">
                  <g d-rs="1" transform="matrix(0,1,-1,0,96.8564,-2.9118)">
                    <path d="M68.7 7c1.44-.16 2.17.38 2.1 1.64-.28 5.07 2.81 7.84 6.71 10.18 4.19 2.52 8.73 4.47 12.45 7.75 4 3.47 5.88 7.93 6.61 13 .07.48.22 1.09-.41 1.28s-1-.41-1.42-.8a61.32 61.32 0 0 0-9.35-8.19C72.05 23.07 57.64 20 42 23.31c-.62.13-1.46.63-1.84-.06s.52-1.29 1-1.79a51.63 51.63 0 0 1 27-14.41c.25-.05.49-.05.54-.05zM33.33 66.38a39.52 39.52 0 0 1-16.14-5.92 60.65 60.65 0 0 1-11.69-10C4.14 49 3.75 48.11 6 47c3.47-1.8 4.46-5.17 4.61-8.81.22-5-.29-9.94.47-14.9.84-5.5 3.17-10.08 7.71-13.42.52-.37 1-1.1 1.72-.66s.26 1.2.09 1.81A66.45 66.45 0 0 0 18 24.39c-.61 8.85 1.42 17.11 4.72 25.17a58.87 58.87 0 0 0 10.61 16.82zM76.83 66.43c.54 5.69-1.22 11.09-2.72 16.52-.46 1.68-1.11 2.62-3.11 1.28-3.65-2.43-7.34-1.26-10.81.63-4 2.17-7.78 4.76-11.94 6.65a18.77 18.77 0 0 1-15.67.16c-.62-.26-1.67-.36-1.5-1.35.14-.74 1.06-.7 1.68-.84a53.77 53.77 0 0 0 20-9A54.11 54.11 0 0 0 73 52.57c.19-.61.15-1.58.89-1.63 1-.06.94 1 1.12 1.66a40.25 40.25 0 0 1 1.82 13.83z" fill="#2F67FF" />
                    <path d="M29.41 86.58c-1.5.09-1.94-.75-1.85-1.88.36-4.46-2.23-7.12-5.63-9.23-2.53-1.57-5.16-3-7.76-4.47-6.25-3.56-11-8.24-12.12-15.76-.1-.71-.62-1.63.12-2.09.93-.58 1.5.42 2 1a51.77 51.77 0 0 0 21.62 14.2c9.91 3.37 20 4.67 30.35 2.17.55-.13 1.22-.47 1.64.07s-.15 1.06-.53 1.45c-7.59 7.83-16.9 12.41-27.51 14.52a1.58 1.58 0 0 1-.33.02zM24.31 43.12c-1.95-3.73-2.33-7.23-2.64-10.66a48.29 48.29 0 0 1 2.67-21.82c.66-1.81 1.34-2.34 3.21-1.17 4.11 2.6 8 1 11.69-1.2a102 102 0 0 1 11.55-6.35c5.64-2.45 11.11-2 16.75 1.25-21.65 5.3-35.86 18.6-43.23 39.95zM65.52 27.58c.68-.58 1.42-.27 2.12-.09C77.7 30 86 35.5 92.84 43.17c1.17 1.29 1.64 2.32-.43 3.42-4 2.15-4.84 6.13-5 10.22-.16 3.9 0 7.81-.06 11.71-.13 6.08-2.43 11.13-7.35 14.83-.61.46-1.2 1.52-2.07.87-.68-.5 0-1.4.17-2.08a55 55 0 0 0-2.34-38.25A47.84 47.84 0 0 0 66.34 29c-.34-.36-.96-.69-.82-1.42z" fill="#36B82A" />
                    <path d="M77.46 14.66a4.5 4.5 0 0 1-4.56-4.57 4.8 4.8 0 0 1 4.68-4.54 4.55 4.55 0 0 1 4.34 4.79 4.24 4.24 0 0 1-4.46 4.32z" fill="#2F67FF" />
                    <path d="M4.37 36.72a4.51 4.51 0 1 1 0 9A4.32 4.32 0 0 1 0 41.31a4.2 4.2 0 0 1 4.37-4.59zM72.36 89a4.52 4.52 0 1 1-9 0 4.21 4.21 0 0 1 4.34-4.4 4.39 4.39 0 0 1 4.66 4.4z" fill="#2F67FF" />
                    <path d="M32.12 8.91a4.17 4.17 0 0 1-4.59-4.12A4.62 4.62 0 0 1 31.89 0a4.57 4.57 0 0 1 4.6 4.54 4.17 4.17 0 0 1-4.37 4.37zM95.38 56.78a4.59 4.59 0 0 1-4.52-4.35 4.68 4.68 0 0 1 4.65-4.54 4.5 4.5 0 0 1 4.27 4.61 4.06 4.06 0 0 1-4.4 4.28zM22.21 79.1a4.65 4.65 0 0 1 4.7 4.16 5.18 5.18 0 0 1-4.53 4.79A4.62 4.62 0 0 1 18 83.56a4.1 4.1 0 0 1 4.21-4.46z" fill="#36B82A" />
                  </g>
                </svg> */}
              </Link>
            </div>
            <div className="text-lg font-bold text-slate-800">Unify. Amplify. Captivate.</div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">How it works</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a href="/" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Overview</a>
              </li>
              <li>
                <a href="404" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Pricing</a>
              </li>
              {/* <li>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Service Areas</a>
              </li> */}
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">Resources</h6>
            <ul className="text-sm font-medium space-y-2">
              {/* <li>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Customer Stories</a>
              </li> */}
              {/* <li>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Knowledge Base</a>
              </li> */}
              <li>
                <a href="mailto:contact@kinectmessaging.com" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">Products</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a href="features" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Features</a>
              </li>
              {/* <li>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Secure Identity</a>
              </li> */}
              {/* <li>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Legal Help</a>
              </li> */}
              {/* <li>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">First Capital</a>
              </li> */}
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">Company</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a href="about" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">About Us</a>
              </li>
              {/* <li>
                <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Careers</a>
              </li> */}
              <li>
                <a href="404" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Terms of Use</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-6 md:py-8 border-t border-slate-200">

          {/* Social links */}
          <ul className="flex space-x-6 mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="mailto:contact@kinectmessaging.com" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="5 5 40 40" xmlns="http://www.w3.org/2000/svg">
                  {/* <path d="m6.329 1 4.369 5.594L15.75 1h3.068L12.12 8.414 20 18.5h-6.172l-4.833-6.116L3.464 18.5H.395l7.169-7.928L0 1h6.329Zm-.925 1.684H3.583l11.093 14.04h1.7L5.404 2.684Z" /> */}
                  <path className="cls-1" d="M6.47,10.71a2,2,0,0,0-2,2h0V35.32a2,2,0,0,0,2,2H41.53a2,2,0,0,0,2-2h0V12.68a2,2,0,0,0-2-2H6.47Zm33.21,3.82L24,26.07,8.32,14.53" />
                </svg>
              </a>
            </li>
            <li>
              <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="https://www.linkedin.com/company/kinect-messaging/" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="-1 -1 27 27" xmlns="http://www.w3.org/2000/svg">
                  {/* <path d="M20 10.025C20 4.491 15.52 0 10 0S0 4.491 0 10.025c0 4.852 3.44 8.892 8 9.825v-6.817H6v-3.008h2V7.52a3.508 3.508 0 0 1 3.5-3.509H14v3.008h-2c-.55 0-1 .45-1 1.002v2.005h3v3.008h-3V20c5.05-.501 9-4.772 9-9.975Z" /> */}
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </li>
            <li>
              <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="https://github.com/Kinect-Messaging" aria-label="Github">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.041 0C4.52 0 0 4.612 0 10.25c0 4.526 2.845 8.37 6.862 9.737.502.085.669-.257.669-.513v-1.708c-2.761.598-3.347-1.367-3.347-1.367-.419-1.196-1.088-1.537-1.088-1.537-1.004-.598 0-.598 0-.598 1.004.085 1.506 1.025 1.506 1.025.92 1.537 2.343 1.11 2.929.854.084-.683.335-1.11.67-1.367-2.26-.256-4.603-1.11-4.603-5.039 0-1.11.419-2.05 1.004-2.733 0-.342-.418-1.367.168-2.733 0 0 .836-.257 2.76 1.025.838-.257 1.674-.342 2.511-.342.837 0 1.674.085 2.51.342 1.925-1.367 2.762-1.025 2.762-1.025.586 1.452.167 2.477.084 2.733.669.683 1.004 1.623 1.004 2.733 0 3.93-2.343 4.783-4.603 5.04.335.341.67.939.67 1.879v2.818c0 .256.167.598.67.513 4.016-1.367 6.86-5.21 6.86-9.737C20.084 4.612 15.565 0 10.042 0Z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-slate-500 mr-4">© Kinect Messaging. All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}
