
import About from "./Components/about";
import Nav from "./Components/Navbar/Nav";
import Skill from "./Components/skill";
import Projects from "./Components/projects";
import Contact from "./Components/contact";
import Footer from "./Components/footer";

export default function Home() {
  return (
    <>
   <Nav /> 
   <div className="flex flex-col justify-center items-center p-8 text-center ">
  <div className="text-3xl text-black mb-4">
    Hi,  <span className="font-bold"> I{`'`}m Khansa Khan</span> <br />
    I{`'`}m a passionate Full Stack Developer
  </div>
  <p className="text-gray-700 max-w-xl">
    With a strong foundation in both front-end and back-end technologies, I specialize in creating dynamic, scalable applications.
  </p>
</div>

<About/>
<Skill/>
<Projects/>

<Contact/>
<Footer/>
   </>
  );

}
