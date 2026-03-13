import { useState } from "react";

export default function Input() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>That's right </h1>;
  }

  function submitForm(answer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (answer.toLowerCase() === "dhaka") {
          resolve();
        } else {
          reject(new Error("Good guess but a wrong answer. Try again!"));
        }
      }, 3000);
    });
  }

  const handleTextChange = (e) => {
    setError(null);
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err.message);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>City quiz</h2>
          <p>What city is located on two continents?</p>

          <textarea
            value={answer}
            onChange={handleTextChange}
            disabled={status === "submitting"}
          ></textarea>
          <br />
          <button disabled={answer === "" || status === "submitting"}>
            Submit
          </button>
          {status === "submitting" && <p>Loading...</p>}
          {error && <p className="text-red-800">{error}</p>}
        </form>
      </div>
    </>
  );
}
