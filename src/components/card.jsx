export default function Card({ title, desc, children, className = "" }) {
  return (
    <article className={`card ${className} p-6 rounded-xl`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{desc}</p>
      {children}
    </article>
  );
}
