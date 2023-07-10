import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import PropTypes from "prop-types";

const Code = ({ code, setCode }) => {
  return (
    <div className="p-6">
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => Prism.highlight(code, Prism.languages.js)}
        padding={6}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
    </div>
  );
};
Code.propTypes = {
  code: PropTypes.string.isRequired,
  setCode: PropTypes.func.isRequired,
};
export default Code;
