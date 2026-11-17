import data from "@/data/related-resources.json";

type RelatedLink = {
  url: string;
  label: string;
  note: string;
};

export default function RelatedResources() {
  const heading = data.heading;
  const links = data.links as RelatedLink[];

  if (links.length === 0) return null;

  return (
    <section aria-labelledby="related-resources" className="bg-cream py-20 px-4">
      <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
        <h2 id="related-resources" className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-6">
          {heading}
        </h2>
        <ul className="space-y-3">
          {links.map((item) => (
            <li key={item.url}>
              <a href={item.url} className="text-[#B45309] underline">{item.label}</a>
              {" — "}
              {item.note}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
