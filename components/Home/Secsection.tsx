import tw from "tailwind-styled-components";

export default function Secsection() {
  return (
    <SecondSection>
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2 py-5">
        <h1 className="text-3xl text-center font-bold text-port-white text-shadow ">
          Pengalaman di Bidang ICT
        </h1>
        <p className="text-center text-port-white mt-4 text-shadow">
          Saya telah memiliki pengalaman dalam beberapa pekerjaan. Pekerjaan yang saya lakukan
          berhubungan dengan bidang yang saya miliki seperti menjadi staff IT pada suatu institusi
          pemerintahan dan juga sebagai pengajar di salah satu perguruan tinggi swasta. Selain dosen
          pada perguruan tinggi saya juga dipercaya sebagai direktur pada direktorat ICT.
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
              Organize your bookmarks however you like. Our simple drag-and-drop interface gives you
              complete control over how you manage your favourite sites.
            </p>
            <button
              type="button"
              className="btn btn-purple hover:bg-bookmark-white hover:text-black"
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    </SecondSection>
  );
}

const SecondSection = tw.div`bg-port-dark py-10 `;
