import Footer from "./Footer";
import Navbar from "./Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <h2>Curriculum Vitae</h2>
      <h1>Dolor, Justine R.</h1>
      <p>
        a 3rd Year student of{" "}
        <b>BS Information Technology in Lyceum of Alabang</b>. A " + age + "
        years old guy, I have many interests and hobbies. I worked on tons of
        Personal computers, fixing their internal and external problems, " +
        "Graphic Design, video making, photography, music and more. I also like
        " + "video games, cars, as well as motorcycles. I became interested in
        computer science relatively late, " + "at 16, and I started modding
        games in mobile phones and creating icons and animations. The{" "}
        <b>patience</b> " + "is probably my best quality, and I know how to find
        the informations to solve the problems I face " + "during my studies,
        usually! Just to mention, I'm an <b>IT Student</b>, and I can work both
        " + "alone or in a team.
      </p>

      <Footer />
    </div>
  );
}
