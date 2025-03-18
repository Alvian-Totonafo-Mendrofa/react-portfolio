import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100);
  const [index, setIndex] = useState(1);
  const [activeProject, setActiveProject] = useState(null);

  const toRotate = [
    "Selamat Datang di Portfolio Saya!",
    "Saya adalah seorang tech enthusiast.",
    "Silahkan menjelajah!",
  ];

  const projects = [
    {
      id: 1,
      title: "Single Page Portfolio",
      description: "Responsive Single Page Portfolio using React+TailwindCSS",
      image: "/assets/project/Single-Page-Portfolio.png",
      repo: "https://github.com/Alvian-Totonafo-Mendrofa/react-portfolio",
    },
    // {
    //   id: 2,
    //   title: "Proyek 2",
    //   description: "Deskripsi proyek 2. Sebuah platform e-learning.",
    //   image: "/assets/profile/pas-foto.png",
    //   repo: "https://github.com/proyek2",
    // },
    // {
    //   id: 3,
    //   title: "Proyek 3",
    //   description: "Deskripsi proyek 3. Aplikasi mobile untuk pemesanan makanan.",
    //   image: "/assets/profile/pas-foto.png",
    //   repo: "https://github.com/proyek3",
    // },
    // {
    //   id: 4,
    //   title: "Proyek 4",
    //   description: "Deskripsi proyek 4. Sistem manajemen inventaris.",
    //   image: "/assets/profile/pas-foto.png",
    //   repo: "https://github.com/proyek4",
    // },
    // {
    //   id: 5,
    //   title: "Proyek 5",
    //   description: "Deskripsi proyek 5. Website portofolio kreatif.",
    //   image: "/assets/profile/pas-foto.png",
    //   repo: "https://github.com/proyek5",
    // },
    // {
    //   id: 6,
    //   title: "Proyek 6",
    //   description: "Deskripsi proyek 6. Aplikasi keuangan pribadi.",
    //   image: "/assets/profile/pas-foto.png",
    //   repo: "https://github.com/proyek6",
    // },
  ];

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setDelta(1000);
      setIsDeleting(true);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    } else {
      setDelta(100);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleProjectClick = (project) => {
    setActiveProject(project);
  };

  const closeProjectDetail = () => {
    setActiveProject(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] font-custom">
      {/* Navbar */}
      <nav className="p-4 bg-[#98A8F8] sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FAF7F0] via-[#CDFCF6] to-[#98A8F8] animate-glowing">
            Alvian Totonafo Mendrofa
          </h1>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#FAF7F0] focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
          <ul className="hidden md:flex md:space-x-8">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="block text-[#FAF7F0] hover:text-[#CDFCF6] py-2 cursor-pointer relative"
              >
                Beranda
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CDFCF6] transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="block text-[#FAF7F0] hover:text-[#CDFCF6] py-2 cursor-pointer relative"
              >
                Tentang
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CDFCF6] transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="block text-[#FAF7F0] hover:text-[#CDFCF6] py-2 cursor-pointer relative"
              >
                Proyek
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CDFCF6] transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="block text-[#FAF7F0] hover:text-[#CDFCF6] py-2 cursor-pointer relative"
              >
                Kontak
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CDFCF6] transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Overlay Menu untuk Mobile */}
      <div
        className={`${
          isMenuOpen ? "translate-y-12" : "-translate-y-full"
        } fixed top-0 left-0 w-full h-screen bg-[#98A8F8] z-40 transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="container mx-auto p-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="block text-[#FAF7F0] hover:text-[#CDFCF6] py-2 cursor-pointer"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="block text-[#FAF7F0] hover:text-[#CDFCF6] py-2 cursor-pointer"
              >
                Tentang
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="block text-[#FAF7F0] hover:text-[#CDFCF6] py-2 cursor-pointer"
              >
                Proyek
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="block text-[#FAF7F0] hover:text-[#CDFCF6] py-2 cursor-pointer"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Section: Beranda */}
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-gradient-to-br from-[#CDFCF6] to-[#98A8F8] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="absolute w-64 h-64 bg-[#BCCEF8] rounded-full opacity-20 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
        <div className="absolute w-48 h-48 bg-[#FAF7F0] rounded-full opacity-20 bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 z-0"></div>
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FAF7F0] via-[#CDFCF6] to-[#98A8F8] animate-glowing">
            <span className="border-r-2 border-[#98A8F8]">{text}</span>
          </h1>
          <p className="mt-4 text-[#FAF7F0] drop-shadow-lg">Alvian Totonafo Mendrofa Portfolio</p>
        </div>
      </section>

      {/* Section: Tentang */}
      <section
        id="about"
        className="h-screen flex items-center justify-center bg-gradient-to-tr from-[#BCCEF8] to-[#98A8F8] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="absolute w-full h-32 bg-[#CDFCF6] opacity-20 bottom-0 left-0 transform rotate-12 z-0"></div>
        <div className="absolute w-full h-32 bg-[#FAF7F0] opacity-20 top-0 right-0 transform -rotate-12 z-0"></div>
        <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-center z-10">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end p-4">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#FAF7F0]">
              <img
                src="/assets/profile/pas-foto.png"
                alt="Foto Saya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FAF7F0] via-[#CDFCF6] to-[#98A8F8] animate-glowing">
              Tentang Saya
            </h2>
            <p className="mt-4 text-[#FAF7F0] max-w-2xl drop-shadow-lg">
              Saya adalah seorang mahasiswa teknik informatika yang bersemangat dalam menciptakan solusi digital yang kreatif dan fungsional. Saat ini saya sedang menempuh jenjang pendidikan di Universitas Esa Unggul. Saya memiliki pengalaman dalam berbagai teknologi seperti Mengelola berbagai web development framework seperti Laravel, React dan Cross-Platform seperti Flutter, manajemen Basis Data dan disertai kemampuan SQL, serta menganalisis data baik dengan Python atau R.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Proyek */}
      <section
        id="projects"
        className="h-screen flex items-center justify-center bg-gradient-to-bl from-[#98A8F8] to-[#CDFCF6] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="absolute w-64 h-64 bg-[#BCCEF8] opacity-20 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 rotate-45 z-0"></div>
        <div className="absolute w-48 h-48 bg-[#FAF7F0] opacity-20 bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 rotate-45 z-0"></div>
        <div className="text-center px-4 z-10 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FAF7F0] via-[#CDFCF6] to-[#98A8F8] animate-glowing">
            Proyek Saya
          </h2>
          <div className="mt-8 w-full max-w-4xl mx-auto">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              grabCursor={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              centeredSlides={true}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div
                    className="bg-[#CDFCF6] p-6 rounded-lg shadow-lg mx-auto max-w-sm cursor-pointer"
                    onClick={() => handleProjectClick(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 className="text-xl font-bold text-[#98A8F8] mt-4">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-[#BCCEF8]">{project.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Modal Detail Proyek */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#CDFCF6] p-6 rounded-lg shadow-lg max-w-md mx-auto relative transform transition-transform duration-300 ease-in-out scale-95 hover:scale-100">
            <button
              onClick={closeProjectDetail}
              className="absolute top-2 right-2 text-[#98A8F8] hover:text-[#BCCEF8]"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold text-[#98A8F8] mt-4">
              {activeProject.title}
            </h3>
            <p className="mt-2 text-[#BCCEF8]">{activeProject.description}</p>
            <a
              href={activeProject.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-[#98A8F8] text-[#FAF7F0] px-4 py-2 rounded hover:bg-[#BCCEF8] transition-colors duration-300"
            >
              Lihat Repo GitHub
            </a>
          </div>
        </div>
      )}

      {/* Section: Kontak */}
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-gradient-to-tl from-[#CDFCF6] to-[#BCCEF8] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="absolute w-64 h-64 bg-[#98A8F8] opacity-20 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 rotate-12 z-0"></div>
        <div className="absolute w-48 h-48 bg-[#FAF7F0] opacity-20 bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 rotate-12 z-0"></div>
        <div className="text-center px-4 z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FAF7F0] via-[#CDFCF6] to-[#98A8F8] animate-glowing">
            Hubungi Saya
          </h2>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://wa.me/6281384756479"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#98A8F8] hover:text-[#CDFCF6] transition-colors duration-300"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.52 3.48A11.994 11.994 0 0012 0C5.373 0 0 5.373 0 12a11.963 11.963 0 001.574 6.02L.041 23.959l5.965-1.524A11.962 11.962 0 0012 24c6.627 0 12-5.373 12-12a11.993 11.993 0 00-3.48-8.52zM12 22a9.942 9.942 0 01-5.253-1.467l-.375-.237-3.538.905.941-3.442-.245-.382A9.95 9.95 0 012 12c0-5.523 4.477-10 10-10 2.662 0 5.165 1.037 7.071 2.929A9.953 9.953 0 0122 12c0 5.523-4.477 10-10 10zm5.303-7.275c-.292-.146-1.733-.855-2.003-.951-.27-.097-.467-.146-.662.146-.195.293-.758.951-.93 1.146-.171.195-.342.219-.633.073-.292-.146-1.233-.455-2.348-1.452-.867-.771-1.452-1.726-1.626-2.02-.171-.293-.018-.45.13-.596.134-.134.292-.35.439-.525.044-.05.078-.096.11-.137.073-.098.122-.171.171-.268.049-.098.024-.194-.012-.27-.036-.073-.662-1.597-.906-2.185-.24-.572-.484-.49-.662-.499-.171-.007-.365-.009-.559-.009-.195 0-.515.073-.785.366-.27.293-1.034 1.01-1.034 2.463 0 1.454 1.06 2.857 1.208 3.05.146.195 2.086 3.185 5.059 4.392.707.293 1.263.469 1.694.599.713.227 1.361.195 1.872.118.57-.086 1.733-.709 1.977-1.395.244-.684.244-1.27.171-1.395-.073-.122-.268-.195-.56-.342z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/alvian-totonafo-mendrofa-6a0372352"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#98A8F8] hover:text-[#CDFCF6] transition-colors duration-300"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
            <a
              href="mailto:alviantotonafom21@gmail.com"
              className="text-[#98A8F8] hover:text-[#CDFCF6] transition-colors duration-300"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 12.713l-10-8.4V20h20V4.313l-10 8.4zM12 10.6l10-8.4H2l10 8.4zM0 4v16h24V4l-12 10L0 4z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
