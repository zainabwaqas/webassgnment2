import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Saving...");
    try {
      await addDoc(collection(db, "contacts"), { ...form, createdAt: new Date() });
      setStatus("Saved — thank you!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Error saving: " + err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-xl">
      <input required placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full p-2 rounded border" />
      <input required type="email" placeholder="Your email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full p-2 rounded border" />
      <textarea required rows="5" placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="w-full p-2 rounded border" />
      <button type="submit" className="px-4 py-2 bg-indigo-600 rounded">Send Message</button>
      <p>{status}</p>
    </form>
  );
}
