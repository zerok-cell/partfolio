"use server";

import "./main.scss";
import Welcome from "@/components/welcome/Welcome";
import Header from "@/components/Header/Header";
import MyStack from "@/components/MyStack/MyStack";
import MyProjects from "@/components/MyProjects/MyProjects";
import Contact from "@/components/Contact/Contact";

function Home() {
 return (
  <>
   <header>
    <Header />
   </header>
   <main>
    <Welcome />
    <MyStack />
    <MyProjects />
   </main>
   <footer>
    <Contact />
   </footer>

  </>
 );
}

export default Home;