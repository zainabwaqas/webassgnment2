export default function InstrumentCard({ instrument }) {
  return (
    <div className="card p-4 rounded-xl">
      <img src={instrument.img} alt={instrument.name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-3">{instrument.name}</h3>
      <p className="text-sm">{instrument.desc}</p>
    </div>
  );
}
