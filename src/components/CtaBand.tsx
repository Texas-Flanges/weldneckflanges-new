export const QUOTE_URL = "https://texasflange.com/contact-us/?ref=weldneckflanges";

export default function CtaBand() {
  return (
    <section className="bg-[#B45309] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-display font-bold mb-4 text-white">Request a Quote on Weld Neck Flanges</h2>
        <p className="text-xl text-white/90 mb-3 max-w-2xl mx-auto">
          Send the size, pressure class, facing, bore or schedule, and material grade.
        </p>
        <p className="text-lg text-white/90 mb-8">
          Phone: <a href="tel:+1-281-484-8325" className="text-white underline">281-484-8325</a>
        </p>
        <a
          href={QUOTE_URL}
          className="inline-block bg-white text-[#B45309] px-8 py-3 rounded font-bold hover:bg-gray-100 transition"
        >
          Request a Quote
        </a>
      </div>
    </section>
  );
}
