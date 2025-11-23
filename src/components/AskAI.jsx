import { useState } from "react";

export default function AskAI() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setReply("");

    // === Example HuggingFace fetch (user must set API key in env):
    try {
      const resp = await fetch("/.netlify/functions/askai", { // you can proxy to serverless that uses HF key
        method: "POST",
        body: JSON.stringify({ prompt })
      });
      const json = await resp.json();
      setReply(json.answer || "No answer - wire your model endpoint");
    } catch (err) {
      setReply("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4 bg-white/10 rounded space-y-3">
      <h4 className="font-semibold">Ask AI</h4>
      <form onSubmit={submit} className="flex gap-2">
        <input className="flex-1 p-2 rounded" value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="Ask about Pakistani music, instruments, bands..." />
        <button className="px-3 rounded bg-indigo-600">{loading ? "…" : "Ask"}</button>
      </form>
      <div className="mt-2 p-2 bg-black/30 rounded">{reply}</div>
    </div>
  );
}
