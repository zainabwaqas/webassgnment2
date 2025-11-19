import Layout from "../components/layout";
import ContactForm from "../components/contactForm";
import data from "../data/siteData.json";

export default function Contact() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Let’s Connect Through Music 🎶</h2>
      <p className="mb-6">Have a question, idea, or just want to jam with us? Reach out below!</p>

      <div className="grid md:grid-cols-2 gap-6">
        <ContactForm />
        <div>
          <h3 className="font-semibold mb-2">Upcoming Events</h3>
          <ul className="space-y-3">
            {data.events.map(e => (
              <li key={e.id} className="card p-3 rounded">
                <h4 className="font-semibold">{e.title}</h4>
                <p className="text-sm">{e.date} • {e.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
