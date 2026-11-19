export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="wm-heading">
      <p className="wm-eyebrow">{eyebrow}</p>
      <h2 className="wm-h2">{title}</h2>
    </div>
  );
}
