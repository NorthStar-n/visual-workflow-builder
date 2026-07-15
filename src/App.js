import "./app.css";

import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div className="app">
      <div className="app-toolbar">
        <PipelineToolbar />
      </div>

      <div className="app-workspace">
        <PipelineUI />
      </div>

      <div className="app-footer">
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;