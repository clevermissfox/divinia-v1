import { useState } from "react";
import Choice from "./Choice";
import Anthropic from "@anthropic-ai/sdk";

export default function ChoiceStage({ options, onSelect }) {
  const [aiResponse, setAiResponse] = useState(null);

  // async function handleSubmit(input) {
  //   const anthropic = new Anthropic({
  //     apiKey: import.meta.env.VITE_DIVINIA_API_KEY,
  //     dangerouslyAllowBrowser: true,
  //   });
  //   try {
  //     const request = await anthropic.messages.create({
  //       model: "claude-3-5-haiku-20241022",
  //       system: "Answer as an astrologer",
  //       messages: [{ role: "user", content: input }],
  //       max_tokens: 300,
  //     });
  //     setAiResponse(request.content[0].text);
  //     console.log(request);
  //   } catch (err) {
  //     console.error(err.message);
  //     setAiResponse("Sorry there has been an error");
  //   }
  // }

  return (
    <>
      <h1 className="ta-cen">Make your choice...</h1>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e.target.input.value);
        }}
      >
        <input type="text" id="input" />
        <button type="submit">Call Claude</button>
      </form> */}
      <ul className="choices-list margin-bs-1">
        {options.map((option) => (
          <li key={option} className="choices-option">
            <Choice choice={option} onSelect={() => onSelect(option)} />
          </li>
        ))}
      </ul>
      {aiResponse && <p>{aiResponse}</p>}
    </>
  );
}
