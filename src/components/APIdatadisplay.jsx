import { useEffect, useState } from "react";
import axios from "axios";

export default function APIDataDisplay() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let mounted = true;
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(res => { if (mounted) setPosts(res.data); })
      .catch(e => { if (mounted) setErr(e.message); })
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, []);

  if (loading) return <p>Loading API data…</p>;
  if (err) return <p className="text-red-400">Error: {err}</p>;

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">From JSONPlaceholder</h3>
      <ul className="space-y-2">
        {posts.map(p => <li key={p.id} className="p-3 bg-white/10 rounded">{p.title}</li>)}
      </ul>
    </div>
  );
}
