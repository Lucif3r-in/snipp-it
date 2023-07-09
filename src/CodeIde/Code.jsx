import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-funky.css";

const Code = () => {
  return (
    <div className="codeBox">
      <Editor
        value="const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<h1>Hello, world!</h1>);"
        highlight={(code) => highlight(code, languages.js)}
        tabSize={2}
        padding={12}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14,
        }}
      />
    </div>
  );
};

export default Code;
