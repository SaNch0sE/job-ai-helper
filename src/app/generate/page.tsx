"use client"

import aiGenResponseAction from "@/actions/generate/ai-response";
import { Button, Textarea } from "@nextui-org/react";
import { MouseEvent, useEffect, useState } from "react";

export default function GenerateResponse() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [clicked, setClicked] = useState(false);
  const [btnAvailable, setBtnAvailable] = useState(true);

  const onGenerate = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (query === '') return;

    setClicked(true);
  };

  useEffect(() => {
    if (!clicked) return;
    setBtnAvailable(false);

    const genResponse = async () => {
      const formData = new FormData();

      formData.set("query", query);

      const generated = await aiGenResponseAction(formData);

      setResponse(response + "\nresponse data:" + generated)

      setClicked(false);
    };

    genResponse();

    return () => { setBtnAvailable(true) };
  }, [clicked, response, query])

  return (
    <form className="m-10 flex flex-wrap md:flex-nowrap gap-4 justify-around">
      <Textarea
        isRequired
        disableAutosize
        placeholder="Write a query..."
        className="basis-2/5"
        classNames={{
          base: "max-w-s",
          input: "resize-y min-h-[500px]",
        }}
        name="query"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      ></Textarea>
      <Button
        className="basis-1/5 self-center"
        onClick={onGenerate}
        disabled={!btnAvailable}
      >Generate</Button>
      <Textarea
        disableAutosize
        isReadOnly
        className="basis-2/5"
        classNames={{
          base: "max-w-s",
          input: "resize-y min-h-[500px]",
        }}
        name="response"
        value={response}
        onChange={() => { }}
      ></Textarea>
    </form>
  );
}
