
import Image from "next/image";
import Navbar from "../components/Navbar.js"
import Main from "../components/Main.js"
import Stack from "../components/Stack.js"
import AnimatedBackground from "@/components/AnimatedBackground.js";
import TabContainer from "../components/TabContainer.js"
import ListContent from "../components/ListContent.js"
import ConnectWidget from "../components/ConnectWidget.js"
import "../styles/page.css"
export default function Home() {
  const experiences = [
    { id: "work", label: "Work Experience", component: <ListContent file="/data/experience.json" /> },
    { id: "school", label: "Education", component: <ListContent file="data/education.json" /> },
  ];
  // { id: "projects", label: "Projects", component: <ListContent file="data/projects.json" /> }
  // <div className="connectContainer">
  //       <ConnectWidget></ConnectWidget>
  //     </div>
  return (
    <div className="allcont">
      <Navbar></Navbar>
      <Main></Main>
      <div className="content">
        <Stack fileName="/data/stack.json" />
        <TabContainer tabContents={experiences}></TabContainer>
      </div>
      
      
      <AnimatedBackground>

      </AnimatedBackground>
    </div>
  );
}
