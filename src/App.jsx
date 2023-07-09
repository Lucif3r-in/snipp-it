import Code from "./CodeIde/Code";
import Navbar from "./shared/Navbar";
import Footer from "./shared/footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="code">
        <Code />
      </div>
      <Footer />
    </div>
  );
}

export default App;
