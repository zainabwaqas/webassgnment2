import Layout from "../components/layout";
import data from "../data/siteData.json";

export default function History() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">History of Rock Bands</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {data.history.map(h => (
          <div key={h.id} className="card p-4">
            <img src={h.img} alt={h.title} className="w-full h-48 object-cover rounded" />
            <h4 className="font-semibold mt-2">{h.title}</h4>
            <p>{h.desc}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
