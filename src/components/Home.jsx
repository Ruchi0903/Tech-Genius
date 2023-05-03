import React from "react";
import vg from "../assests/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Tech Genius</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everyday. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            sint harum nesciunt rerum esse pariatur quaerat nihil voluptates
            accusamus quis. Ullam repellat debitis accusamus voluptas optio
            tenetur voluptate itaque molestias! Tempora assumenda perferendis
            sint optio sunt, quos eum reprehenderit quaerat! Laborum
            exercitationem asperiores, quae aut, nobis, sit perspiciatis commodi
            laudantium non labore libero cupiditate blanditiis ab nostrum
            voluptas dolor fuga!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>


            <div
              style={{
                animationDelay: "0.3s"
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s"
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s"
              }}
            >
              <AiFillYoutube />
              <p>YouTube</p>
            </div>

            <div
              style={{
                animationDelay: "1s"
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>


          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
