export default function Source({ source }) {
  return (
    <div className="sources">
      <div className="source_item">
        <a href={source}>{source}</a>
      </div>
    </div>
  );
}
