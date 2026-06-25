import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { gymData } from "../data/gymData";

const Trainers = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-bebas text-6xl md:text-7xl text-light mb-4 tracking-wide">
            MEET THE <span className="text-primary">ELITE</span>
          </h1>
          <p className="text-muted font-inter max-w-2xl mx-auto text-sm">
            No cheerleaders. Only serious coaches dedicated to your absolute
            progress.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {gymData.trainers.map((trainer, i) => (
            <div key={i} className="group h-[450px] [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="h-full w-full object-cover border border-border grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                    <h3 className="font-bebas text-4xl text-light tracking-wide">
                      {trainer.name}
                    </h3>
                    <p className="text-primary font-inter uppercase text-xs font-bold tracking-widest">
                      {trainer.specialty}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 h-full w-full bg-surface border border-primary px-8 py-12 flex flex-col justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <h3 className="font-bebas text-3xl text-light mb-2 tracking-wide">
                    {trainer.name}
                  </h3>
                  <p className="text-muted mb-4 font-inter text-sm border-b border-border pb-4">
                    Experience: {trainer.exp}
                  </p>
                  <p className="text-light font-inter text-sm leading-relaxed flex-grow">
                    {trainer.bio}
                  </p>

                  <div className="flex justify-center gap-4 mt-6">
                    <a
                      href="#"
                      className="w-10 h-10 bg-surface2 rounded-full flex items-center justify-center hover:bg-primary transition-colors border border-border text-light"
                    >
                      <FaInstagram size={16} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-surface2 rounded-full flex items-center justify-center hover:bg-primary transition-colors border border-border text-light"
                    >
                      <FaTwitter size={16} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-surface2 rounded-full flex items-center justify-center hover:bg-primary transition-colors border border-border text-light"
                    >
                      <FaLinkedin size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
