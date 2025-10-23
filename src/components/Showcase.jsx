import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Showcase = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      timeline
        .to(".mask img", {
          transform: "scale(1.1)",
        })
        .to(".content", { opacity: 1, y: 0, ease: "power1.in" });
    }
  }, [isTablet]);
  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" loop muted autoPlay playsInline />

        <div className="mask">
          <img src="/mask-logo.svg" alt="mask" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>

            <div className="space-y-5 mt-7 pe-10">
              <p>
                Introducing
                <span className="text-white">
                  N4, the next generation of Apple silicon
                </span>
                .N4 powers
              </p>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                nemo nam aut harum quas error mollitia, laboriosam numquam illum
                illo dicta explicabo totam reprehenderit omnis culpa fugiat
                dolorem vitae eveniet consectetur repellat molestiae quam
                nesciunt odio. Cupiditate ipsum, minima, maxime aliquam eligendi
                ea quia tempore, soluta unde ratione quae culpa? Corrupti ipsa
                quod pariatur soluta quae nostrum, nemo commodi repudiandae odio
                ab dolores fuga libero debitis eius totam earum officia id sit
                facere iste voluptatum sunt similique adipisci animi. Mollitia
                adipisci soluta consectetur accusamus sapiente ex deleniti autem
                cum veritatis, maiores optio vitae ut velit enim pariatur?
                Praesentium, quasi reprehenderit.
              </p>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur laborum voluptates assumenda voluptatem, et provident
                architecto excepturi ut. Quae, veniam eos. Facere, mollitia.
                Voluptate odit explicabo optio culpa blanditiis. Iusto qui
                impedit quod doloribus, praesentium dolore ipsum. Suscipit porro
                natus assumenda est? Facilis earum asperiores omnis, eos aperiam
                odit? Iure ex voluptatum quidem magnam dolore non, maxime
                asperiores rem porro ipsum consequuntur architecto laborum
                laudantium esse expedita inventore quo deserunt autem quisquam
                similique sint a explicabo? Atque mollitia voluptatibus modi vel
                dignissimos deleniti at deserunt culpa quae, tenetur alias
                repellat praesentium impedit voluptas autem, aspernatur nulla
                vitae pariatur non totam.
              </p>

              <p className="text-primary">
                Learn more about Apple Intelligence
              </p>
            </div>
          </div>

          <div className="max-w-3xs">
            <div className="space-y-2">
              <p>Up to</p>
              <h3>4x faster</h3>
              <p>Pro rendering performance</p>
              <p>than M2</p>
            </div>

            <div className="space-y-2">
              <p>Up to</p>
              <h3>1.5x faster</h3>
              <p>CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
