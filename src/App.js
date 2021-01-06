import katex from "katex";
import "katex/dist/katex.min.css";
// import MathQuill from "./math-quill-loader";
import React, { createRef, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import mathquill4quill from "mathquill4quill";
import "mathquill4quill/mathquill4quill.css";
import "react-quill/dist/quill.snow.css";

function App() {
    const reactQuill = createRef();

    useEffect(() => {
        const enableMathQuillFormulaAuthoring = mathquill4quill({
            Quill,
            katex,
            // MathQuill,
        });
        enableMathQuillFormulaAuthoring(reactQuill.current.editor);
    });

    const printToConsole = () => {
        console.log(reactQuill.current.state.value);
    };

    return (
        <div className="App">
            <ReactQuill
                theme="snow"
                ref={reactQuill}
                modules={{
                    formula: true,
                    toolbar: [["formula"]],
                }}
            />
            <button onClick={printToConsole}>Submit</button>
        </div>
    );
}

export default App;
