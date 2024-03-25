import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  // TODO: Implement the gsap.to() method
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 3,
    });
    gsap.to("#blue-box2", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 3,
      ease: "bounce.out",
    });
    gsap.to("#blue-box3", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 3,
      ease: "elastic",
    });
    gsap.from("#green-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
    });
    gsap.to("#red-box", {
      x: 350,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 my-10 bg-blue-500 rounded-lg" />
        <div
          id="blue-box2"
          className="w-20 h-20 my-10 bg-blue-500 rounded-lg"
        />
        <div
          id="blue-box3"
          className="w-20 h-20 my-10 bg-blue-500 rounded-lg"
        />
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
