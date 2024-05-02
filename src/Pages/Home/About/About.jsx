import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative -mt-9'>
        <img src={person} className="w-9/12 h-80 rounded-lg shadow-2xl" />
        <img src={parts} className="w-1/2 absolute border-8 border-white right-1 top-2/3 rounded-lg shadow-2xl" />
        </div>
        
        <div className='lg:w-1/2 space-y-5 px-4'>
          <h2 className='text-2xl text-[#FF3811] font-bold'>About US</h2>
          <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
          <p className="text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
          <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believabl</p>
          <button className="px-5 py-2 text-white font-medium bg-[#FF3811]">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;