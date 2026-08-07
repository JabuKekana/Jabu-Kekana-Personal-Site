export default function TimelineDot({ isLast }) {
  return (
    <div>
      <span className="qualification__rounder"></span>
      {!isLast ? <span className="qualification__line"></span> : null}
    </div>
  );
}
