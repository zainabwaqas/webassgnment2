import Layout from "../components/layout";
import data from "../data/siteData.json";

export default function Trending() 
{
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Trending in Pakistan</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {data.trending.map(t => (
          <div key={t.id} className="card p-4">
            <div className="relative">
              <img src={t.img} alt={t.title} className="w-full h-48 object-cover rounded" />
              <span className="absolute top-2 left-2 bg-green-500 text-white px-2 rounded text-xs">{t.badge}</span>
            </div>
            <h4 className="font-semibold mt-3">{t.title}</h4>
            <p>{t.desc}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
