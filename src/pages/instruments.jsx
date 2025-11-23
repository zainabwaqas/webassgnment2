import Layout from "../components/layout";
import InstrumentCard from "../components/instrumentcard";
import data from "../data/siteData.json";

export default function Instruments() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Traditional & Popular Instruments</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {data.instruments.map(i => <InstrumentCard key={i.id} instrument={i} />)}
      </div>
    </Layout>
  );
}
