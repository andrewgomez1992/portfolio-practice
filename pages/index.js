/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import avatar from "./assets/avatar.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Drews Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-bold">developedbye</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Drew Gomez
            </h2>
            <h3 className="text-2xl py-2">Developer and Designer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Freelancer providing services for programming and design needs.
              Join me down below and lets join forces.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillGithub />
            <AiFillLinkedin />
            <AiOutlineMail />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/stylist-young-boy-5692599-4743368.png"
              alt=""
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">{`<About me />`}</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              {`Since the beginning of my journey, I've loved becoming
              a developer, I'm looking for my first job as a`}
              <span className="text-teal-500">
                {" "}
                Software Engineer/Web Developer.
              </span>
              <p>
                I look forward to showcasing my skills and contributing to
                <span className="text-teal-500">
                  {" "}
                  making the world a better place.
                </span>
              </p>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
