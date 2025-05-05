import bgImage from "../../assets/code_together_2.jpg";

const TakeStep = () => {
  return (
    <div
      className="container-custom py-8  h-[12rem] top-margin relative before:absolute before:w-full before:h-full before:bg-deepNavy/65 before:left-0 before:top-0 before:z-10 bg-cover bg-center bg-fixed flex flex-col gap-3 justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
      aria-hidden="true"
    >
      <p className="capitalize text-white-lite relative z-10 text-center font-bold text-xl min-[600px]:text-2xl min-[1000px]:text-4xl"> 
        Take the bold step today
      </p>

      <a 
        href="#enroll" 
        className="bg-prim z-10 font-medium text-white-lite rounded-md py-[0.7rem] my-[0.7rem] px-[2rem] hover:brightness-95 text-base duration-300"
      >
        Apply Now
      </a>
    </div>
  );
};

export default TakeStep;