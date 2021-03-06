import React, { Component } from "react";
import { render } from "react-dom";
import MonacoEditor from "react-monaco-editor";

import "./CodeEditor.css";

class CodeEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: "// Enter a key to get a toy problem.",
      funcInput: "",
      funcOutPut: "",
      defaultResults: "",
      toyKey: "",
      funcCall: ""
    };
  }

  populateEditor() {
    const { toyKey } = this.state;
    switch (toyKey) {
      // Wires - Military Alphabet Keys
      case "Alpha":
        this.setState({
          code: "// Alpha",
          funcCall: ""
        });
        break;

      case "Bravo":
        this.setState({
          code: "// Bravo",
          funcCall: ""
        });
        break;

      case "Charlie":
        this.setState({
          code: "// Charlie",
          funcCall: ""
        });
        break;

      case "Delta":
        this.setState({
          code: "// Delta",
          funcCall: ""
        });
        break;

      case "Echo":
        this.setState({
          code: "// Echo",
          funcCall: ""
        });
        break;

      case "Foxtrot":
        this.setState({
          // eslint-disable-next-line
          code:
            "// Finish the function so it will return the concatenation\n// of 2 strings with a space between. \n\nfunction concat(str1, str2) {\n\t// Your Code Here \n}",
          funcCall: 'concat("Cut The", "Red Wire")'
        });
        break;

      case "Golf":
        this.setState({
          code: "// Golf",
          funcCall: ""
        });
        break;

      case "Hotel":
        this.setState({
          code: "// Hotel",
          funcCall: ""
        });
        break;

      case "India":
        this.setState({
          code: "// India",
          funcCall: ""
        });
        break;

      case "Juliett":
        this.setState({
          code: "// Juliett",
          funcCall: ""
        });
        break;

      case "Kilo":
        this.setState({
          code: "// Kilo",
          funcCall: ""
        });
        break;

      case "Lima":
        this.setState({
          code: "// Lima",
          funcCall: ""
        });
        break;

      case "Mike":
        this.setState({
          code: "// Mike",
          funcCall: ""
        });
        break;

      case "November":
        this.setState({
          code: "// November",
          funcCall: ""
        });
        break;

      case "Oscar":
        this.setState({
          code: "// Oscar",
          funcCall: ""
        });
        break;

      //////////////////////////////////////////////////////////////////////////////////////

      // Keypad - Food Related Keys
      case "Apple":
        this.setState({
          // eslint-disable-next-line
          code:
            '// Inside the transport function return correct response\n// according to the following criteria. \n\t//If age is from 3 to 7 "tricycle". \n\t//If age is from 8 to 15 "bicycle". \n\t//If age is 16 or greater return "car"\n\nfunction transport(age) {\n\t// Your Code Here \n}',
          funcCall: "transport(30)"
        });
        break;

      case "Butter Knife":
        this.setState({
          code: "// Butter Knife",
          funcCall: ""
        });
        break;

      case "Coke":
        this.setState({
          // eslint-disable-next-line
          code:
            "// Inside the fib function find and return the fibonacci\n// number at the passed in num\n\nfunction fib(num) {\n\t// Your Code Here \n}",
          funcCall: "fib(27)"
        });
        break;

      case "Dish":
        this.setState({
          code: "// Dish",
          funcCall: ""
        });
        break;

      case "Egg":
        this.setState({
          code: "// Egg",
          funcCall: ""
        });
        break;

      case "Fork":
        this.setState({
          code: "// Fork",
          funcCall: ""
        });
        break;

      case "Gazpacho":
        this.setState({
          code: "// Gazpacho",
          funcCall: ""
        });
        break;

      //////////////////////////////////////////////////////////////////////////////////////

      // Buttons - Tech Related Keys
      case "Angular":
        this.setState({
          code: "// Angular",
          funcCall: ""
        });
        break;

      case "Bcrypt":
        this.setState({
          // eslint-disable-next-line
          code:
            "// Finish the function to make it multiply 2 numbers\n// together and return the product. \n\nfunction multi(num1, num2) {\n\t// Your Code Here \n}",
          funcCall: "multi(2, 3)"
        });
        break;

      case "Component":
        this.setState({
          code: "// Component",
          funcCall: ""
        });
        break;

      case "Ducks":
        this.setState({
          code: "// Ducks",
          funcCall: ""
        });
        break;

      case "Express":
        this.setState({
          code: "// Express",
          funcCall: ""
        });
        break;

      case "Function":
        this.setState({
          code: "// Function",
          funcCall: ""
        });
        break;

      case "Git":
        this.setState({
          code: "// Git",
          funcCall: ""
        });
        break;

      case "Hosted":
        this.setState({
          code: "// Hosted",
          funcCall: ""
        });
        break;

      case "Index":
        this.setState({
          code: "// Index",
          funcCall: ""
        });
        break;

      case "Javascript":
        this.setState({
          code: "// Javascript",
          funcCall: ""
        });
        break;

      //////////////////////////////////////////////////////////////////////////////////////

      // Defaults and Easter Eggs
      case "Key":
        this.setState({
          code:
            "// Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet",
          funcCall: "yeet()"
        });
        break;

      default:
        this.setState({
          code: "// Enter a key to get a toy problem."
        });
        break;
    }
  }

  async keyHandler(value) {
    await this.setState({
      toyKey: value
    });
    this.populateEditor(value);
  }

  inputHandler = newValue => {
    this.setState({
      code: newValue,
      funcInput: newValue,
      checkCode: false
    });
  };

  runCode = async () => {
    try {
      await this.setState({
        // eslint-disable-next-line
        funcOutPut: eval(`${this.state.funcInput} ${this.state.funcCall}`)
      });
      this.codeChecker();
    } catch (error) {
      await this.setState({
        funcOutPut: "Function not valid"
      });
      this.codeChecker();
    }
  };

  codeChecker() {
    const { funcOutPut } = this.state;
    switch (funcOutPut) {
      // Wires-4
      // Correct
      case "Cut The Red Wire":
        this.setState({
          defaultResults: "Cut The Red Wire"
        });
        break;

      // Wrong
      case "Cut TheRed Wire":
        this.setState({
          defaultResults: "Cut The Blue Wire"
        });
        break;

      //////////////////////////////////////////////////////////////////////////////////////

      // Keypad 555F7
      // Correct
      case 196418:
        this.setState({
          defaultResults: "4, 4, 1, 2, 1"
        });
        break;

      // Wrong
      case 121393:
        this.setState({
          defaultResults: "4, 4, 2, 3, 1"
        });
        break;

      // Wrong
      case 317811:
        this.setState({
          defaultResults: "4, 4, 2, 4, 1"
        });
        break;

      //////////////////////////////////////////////////////////////////////////////////////

      // Keypad 445A1
      // Correct
      case "car":
        this.setState({
          defaultResults: "1, 3, 1, 2, 4"
        });
        break;

      // Wrong
      case "tricycle":
        this.setState({
          defaultResults: "1, 3, 2, 4, 1"
        });
        break;

      // Wrong
      case "bicycle":
        this.setState({
          defaultResults: "4, 4, 4, 4, 3"
        });
        break;

      //////////////////////////////////////////////////////////////////////////////////////

      // Red Button, Black, Yellow, and Diagonal
      // Correct
      case 6:
        this.setState({
          defaultResults: "Rapidly click 3 times"
        });
        break;

      // Wrong
      case 5:
        this.setState({
          defaultResults: "Click it once"
        });
        break;

      // Default for broken functions
      case "Function not valid":
        this.setState({
          defaultResults: "Function not valid"
        });
        break;

      default:
        this.setState({
          defaultResults: "( Check Your Code )"
        });
        break;
    }
  }

  editorDidMount(editor, monaco) {
    editor.focus();
  }

  onChange = newValue => {
    this.inputHandler(newValue);
  };

  render() {
    const { code, toyKey, defaultResults } = this.state;
    const options = {
      theme: "vs-dark",
      selectOnLineNumbers: true,
      autoClosingBrackets: "EditorAutoClosingStrategy",
      automaticLayout: true,
      wordWrap: "on",
      wrappingIndent: "same",
      minimap: {
        enabled: false
      }
    };

    return (
      <div className="editorWrapper">
        <div className="keyInputContainer">
          <input
            className="keyInput"
            placeholder="Key"
            onChange={e => this.keyHandler(e.target.value)}
            value={toyKey}
          />
        </div>
        <MonacoEditor
          height="70%"
          language="javascript"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
        <div className="results">
          <button className="submitCode" onClick={() => this.runCode()}>
            {" "}
            Submit{" "}
          </button>
          <h1> {defaultResults} </h1>
        </div>
      </div>
    );
  }
}

render(<CodeEditor />, document.getElementById("root"));

export default CodeEditor;
