import "./submit.css";

export const SubmitButton = () => {
  const handleSubmit = () => {
    alert("Pipeline Submitted!");
  };

  return (
    <div className="submit-container">
      <button
        className="submit-button"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};