import Layout from "../components/layout";
import SingerCard from "../components/singercard";
import data from "../data/siteData.json";
import { useState } from "react";

export default function Singers() {
  const [query, setQuery] = useState("");
  const singers = data.singers.filter(s => s.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Local Singers & Bands</h2>

      <div className="mb-6 max-w-md">
        <input placeholder="Search singers/bands..." value={query} onChange={e=>setQuery(e.target.value)}
          className="w-full p-2 rounded border bg-white/5" />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {singers.map(s => <SingerCard key={s.id} singer={s} />)}
      </div>

      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Local Bands</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {data.bands.map(b => (
            <div key={b.id} className="card p-4 rounded">
              <img src={b.img} alt={b.name} className="w-full h-40 object-cover rounded" />
              <h4 className="font-bold mt-2">{b.name}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
