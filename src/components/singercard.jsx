export default function SingerCard({ singer }) {
  return (
    <div className="card p-4 rounded-xl flex flex-col items-center text-center">
      <img src={singer.img} alt={singer.name} className="w-40 h-40 object-cover rounded-full mb-3" />
      <h4 className="font-bold">{singer.name}</h4>
      <p className="text-sm">{singer.desc}</p>
    </div>
  );
}
