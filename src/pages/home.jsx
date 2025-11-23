import Layout from "../components/layout";
import Card from "../components/card";
import VideoPlayer from "../components/video";
import APIDataDisplay from "../components/APIdatadisplay";
import AskAI from "../components/AskAI";
import data from "../data/siteData.json";

export default function Home() 
{
  return (
    <Layout>
      <section className="hero text-center mb-8">
        <h2 className="text-3xl font-bold">Welcome to Groove Gali</h2>
        <p className="mt-2">{data.site.tagline}</p>
      </section>

      <section className="grid md:grid-cols-3 gap-4 mb-8">
        {data.homeCards.map(c => <Card key={c.id} title={c.title} desc={c.desc} />)}
      </section>

      <section className="discover mb-8 grid md:grid-cols-2 gap-6">
        <img src={data.discover.image} alt="" className="rounded shadow" />
        <div>
          <h3 className="text-xl font-semibold">{data.discover.title}</h3>
          <p>{data.discover.desc}</p>
        </div>
      </section>

      <section className="mb-8">
        <VideoPlayer url="https://www.youtube.com/embed/xYsdN_MYegM" title="Example" />
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <APIDataDisplay />
        <AskAI />
      </section>
    </Layout>
  );
}
