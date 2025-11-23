export default function VideoPlayer({ url, title }) {
  return (
    <div className="w-full aspect-video rounded overflow-hidden shadow-lg">
      <iframe
        title={title || "Video"}
        src={url}
        className="w-full h-full"
        allowFullScreen
      />
    </div>
  );
}
