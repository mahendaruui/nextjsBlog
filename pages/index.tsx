import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout pageTitle="Home Page">
        <section className="mt-14">
          <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
            <div className="flex flex-1 flex-col items-center lg:items-start ">
              <h2 className="text-port-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 ">
                Mahendar Dwi Payana
              </h2>
              <p className="text-gray-600 text-lg text-center lg:text-left mb-6 z-20">
                Seorang dosen di Universitas Ubudiyah Indonesia, mengajar pada Fakultas Sains dan
                teknologi di Program Studi Informatika. Selain mengajar saya juga seorang pengembang
                aplikasi berbasis web (Web Developer). Di Universitas Ubudiyah Indonesia saya juga
                berpengalaman sebagai Direktur di Diretorat Cyber Development Center dan pengambang
                berbagai aplikasi yang terdapat di sana.
              </p>
              <div className="flex justify-center flex-wrap gap-6">
                <button
                  type="button"
                  className="btn btn-purple hover:bg-port-white hover:text-black"
                >
                  Instagram
                </button>
                <button
                  type="button"
                  className="btn btn-white hover:bg-port-purple hover:text-white"
                >
                  GitHub
                </button>
              </div>
            </div>
            <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-30">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded-full"
                src="./imgs/mahend_biru-removebg-preview.png"
                alt="myfoto"
              />
            </div>
          </div>
          <div className="hidden md:block overflow-hidden bg-port-purple rounded-l-full absolute h-80 w-3/4 top-35 right-0 lg:-bottom-28 lg:-right-36 z-10"></div>
        </section>
        <section className="bg-port-white py-20 mt-20 lg:mt-60">
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 className="text-3xl text-center text-port-blue">Features</h1>
            <p className="text-center text-port-grey mt-4">
              Our aim is to make it quick and easy for you to access your favourite websites. Your
              bookmarks sync between your devices so you can access them on the go.
            </p>
          </div>
          <div className="relative mt-20 lg:mt-24">
            <div
              className="
            container
            flex flex-col
            lg:flex-row
            items-center
            justify-center
            gap-x-24
          "
            >
              <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                <img
                  className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                  src="./imgs/illustration-features-tab-1.png"
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col items-center lg:items-start">
                <h1 className="text-3xl text-bookmark-blue">Bookmark in one click</h1>
                <p
                  className="
                text-bookmark-grey
                my-4
                text-center
                lg:text-left
                sm:w-3/4
                lg:w-full
              "
                >
                  Organize your bookmarks however you like. Our simple drag-and-drop interface gives
                  you complete control over how you manage your favourite sites.
                </p>
                <button
                  type="button"
                  className="btn btn-purple hover:bg-bookmark-white hover:text-black"
                >
                  More Info
                </button>
              </div>
            </div>
            <div className="hidden lg:block overflow-hidden bg-port-purple rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36"></div>
          </div>
          <div className="relative mt-20 lg:mt-52">
            <div
              className="
            container
            flex flex-col
            lg:flex-row-reverse
            items-center
            justify-center
            gap-x-24
          "
            >
              <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                <img
                  className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                  src="./imgs/illustration-features-tab-2.png"
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col items-center lg:items-start">
                <h1 className="text-3xl text-port-blue">Intelligent search</h1>
                <p className="text-port-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                  Our powerful search feature will help you find saved sites in no time at all. No
                  need to crawl through all of your bookmarks.
                </p>
                <button
                  type="button"
                  className="btn btn-purple hover:bg-port-white hover:text-black"
                >
                  More Info
                </button>
              </div>
            </div>
            <div className="hidden lg:block overflow-hidden bg-port-purple rounded-l-full absolute h-80 w-2/4 -bottom-24 -right-36"></div>
          </div>
          <div className="relative mt-20 lg:mt-52">
            <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
              <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                <img
                  className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                  src="./imgs/illustration-features-tab-3.png"
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col items-center lg:items-start">
                <h1 className="text-3xl text-port-blue">Share your bookmarks</h1>
                <p className="text-port-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                  Easily share your bookmarks and collections with others. Create a shareable link
                  that you can send at the click of a button.
                </p>
                <button
                  type="button"
                  className="btn btn-purple hover:bg-port-white hover:text-black"
                >
                  More Info
                </button>
              </div>
            </div>
            <div className="hidden lg:block overflow-hidden bg-port-purple rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36"></div>
          </div>
        </section>
        <section className="py-20 mt-20">
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 className="text-3xl text-center text-port-blue">Download the extension</h1>
            <p className="text-center text-port-grey mt-4">
              We’ve got more browsers in the pipeline. Please do let us know if you’ve got a
              favourite you’d like us to prioritize.
            </p>
          </div>
          <div
            className="
          container
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-16
          max-w-screen-lg
          mt-16
        "
          >
            <div className="flex flex-col rounded-md shadow-md lg:mb-16">
              <div className="p-6 flex flex-col items-center">
                <img src="./imgs/logo-chrome.svg" alt="" />
                <h3 className="mt-5 mb-2 text-port-blue text-lg">Add to Chrome</h3>
                <p className="mb-2 text-port-grey font-light">Minimum version 62</p>
              </div>
              <hr className="border-b border-port-white" />
              <div className="flex p-6">
                <button
                  type="button"
                  className="
                flex-1
                btn btn-purple
                hover:bg-port-white hover:text-black
              "
                >
                  Add & Install Extension
                </button>
              </div>
            </div>
            <div className="flex flex-col rounded-md shadow-md lg:my-8">
              <div className="p-6 flex flex-col items-center">
                <img src="./imgs/logo-firefox.svg" alt="" />
                <h3 className="mt-5 mb-2 text-port-blue text-lg">Add to Firefox</h3>
                <p className="mb-2 text-port-grey font-light">Minimum version 62</p>
              </div>
              <hr className="border-b border-port-white" />
              <div className="flex p-6">
                <button
                  type="button"
                  className="
                flex-1
                btn btn-purple
                hover:bg-port-white hover:text-black
              "
                >
                  Add & Install Extension
                </button>
              </div>
            </div>
            <div className="flex flex-col rounded-md shadow-md lg:mt-16">
              <div className="p-6 flex flex-col items-center">
                <img src="./imgs/logo-opera.svg" alt="" />
                <h3 className="mt-5 mb-2 text-port-blue text-lg">Add to Opera</h3>
                <p className="mb-2 text-port-grey font-light">Minimum version 62</p>
              </div>
              <hr className="border-b border-port-white" />
              <div className="flex p-6">
                <button
                  type="button"
                  className="
                flex-1
                btn btn-purple
                hover:bg-port-white hover:text-black
              "
                >
                  Add & Install Extension
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-bookmark-white py-20">
          <div className="container">
            <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
              <h1 className="text-3xl text-center text-port-blue">Frequently Asked Questions</h1>
              <p className="text-center text-port-grey mt-4">
                Here are some of our FAQs. If you have any other questions you’d like answered
                please feel free to email us.
              </p>
            </div>
            <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
              <div className="flex items-center border-b py-4">
                <span className="flex-1">What is a port?</span>
                <i className="text-port-purple fas fa-chevron-down"></i>
              </div>
              <div className="flex items-center border-b py-4">
                <span className="flex-1">How can I request a new browser?</span>
                <i className="text-port-purple fas fa-chevron-down"></i>
              </div>
              <div className="flex items-center border-b py-4">
                <span className="flex-1">Is there a mobile app?</span>
                <i className="text-port-purple fas fa-chevron-down"></i>
              </div>
              <div className="flex items-center border-b py-4">
                <span className="flex-1">What about other Chromium browsers?</span>
                <i className="text-port-purple fas fa-chevron-down"></i>
              </div>
              <button
                type="button"
                className="
              mt-12
              flex
              self-center
              btn btn-purple
              hover:bg-port-white hover:text-black
            "
              >
                More Info
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default Home;
