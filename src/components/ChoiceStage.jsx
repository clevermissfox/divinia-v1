import { useEffect, useState } from "react";
import Choice from "./Choice";
import Anthropic from "@anthropic-ai/sdk";

export default function ChoiceStage({ options, onSelect }) {
  if (!options) {
    return <p>No options available</p>;
  }
  // const [aiResponse, setAiResponse] = useState(null);

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
  const choicesToRender = Array.isArray(options)
    ? options
    : options.nextOptions || [];
  return (
    <>
      <h1 className="ta-cen body-weight ls-1">Make your choice...</h1>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e.target.input.value);
        }}
      >
        <input type="text" id="input" />
        <button type="submit">Call Claude</button>
      </form> */}
      <ul className="choices-list margin-bs-1 row gap-1 fw-wrap">
        {choicesToRender.map((option) => (
          <li key={option.id} className="choices-option card flex-1">
            <Choice
              choice={option.scene}
              description={option.description}
              onSelect={() => onSelect(option.scene)}
            />
          </li>
        ))}
      </ul>
      {/* {aiResponse && <p>{aiResponse}</p>} */}
    </>
  );
}
