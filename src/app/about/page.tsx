import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Weld Neck Flanges',
  description: 'Learn about Weldneckflanges.com - your premier source for high-quality weld neck flanges and piping components.',
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container-wide">
          <h1 className="text-4xl font-bold">About Us</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Welcome to Weldneckflanges.com</h2>
          <p className="text-lg mb-4">
            At Weldneckflanges.com, we are passionate about providing top-quality piping flanges to meet the diverse needs
            of industries worldwide. Our dedication to excellence and commitment to our customers sets us apart as a trusted
            leader in the field of piping flange solutions.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Who We Are</h2>
          <p className="text-lg mb-4">
            Weldneckflanges.com is your premier source for high-quality weld neck flanges and other piping components.
            With years of experience in the industry, we have built a reputation for delivering superior products and
            exceptional customer service. Our team of experts is dedicated to ensuring that you receive the best flange
            solutions tailored to your specific requirements.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Our Mission</h2>
          <p className="text-lg mb-4">
            Our mission is simple: to supply the highest quality piping flanges that meet and exceed industry standards.
            We aim to provide reliable, durable, and cost-effective solutions that contribute to the success of your projects.
            Whether you are in the oil and gas, petrochemical, power generation, or any other sector, we are here to support
            your needs with precision and reliability.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Quality Assurance</h2>
          <p className="text-lg mb-4">
            Quality is at the core of everything we do. We adhere to stringent quality control measures to ensure that
            every product we deliver meets the highest standards. Our flanges are manufactured using premium materials
            and cutting-edge technology, ensuring optimal performance and longevity. We are committed to continuous
            improvement and innovation, staying ahead of industry trends to offer you the best possible products.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Our Products</h2>
          <p className="text-lg mb-4">We specialize in a wide range of piping flanges, including:</p>
          <ul className="space-y-2 text-lg mb-8">
            <li className="flex gap-3"><span className="text-blue-600 font-bold">&#10003;</span> Weld Neck Flanges</li>
            <li className="flex gap-3"><span className="text-blue-600 font-bold">&#10003;</span> Slip-On Flanges</li>
            <li className="flex gap-3"><span className="text-blue-600 font-bold">&#10003;</span> Blind Flanges</li>
            <li className="flex gap-3"><span className="text-blue-600 font-bold">&#10003;</span> Socket Weld Flanges</li>
            <li className="flex gap-3"><span className="text-blue-600 font-bold">&#10003;</span> Threaded Flanges</li>
            <li className="flex gap-3"><span className="text-blue-600 font-bold">&#10003;</span> Lap Joint Flanges</li>
            <li className="flex gap-3"><span className="text-blue-600 font-bold">&#10003;</span> Custom Flanges</li>
          </ul>
          <p className="text-lg mb-4">
            Each product is designed and manufactured to meet specific industry requirements, ensuring compatibility
            and performance in various applications.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Why Choose Us?</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold">&#10003;</span>
              <span><strong>Expertise:</strong> Our knowledgeable team brings extensive experience and technical expertise.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold">&#10003;</span>
              <span><strong>Quality:</strong> We prioritize quality in every product, ensuring reliability and durability.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold">&#10003;</span>
              <span><strong>Customer Service:</strong> Exceptional service from consultation to delivery and beyond.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold">&#10003;</span>
              <span><strong>Innovation:</strong> We stay at the forefront of industry developments.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold">&#10003;</span>
              <span><strong>Global Reach:</strong> Serving customers worldwide across diverse markets and industries.</span>
            </li>
          </ul>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-lg mb-2">Email: <a href="mailto:sales@texasflange.com" className="text-blue-600 hover:text-blue-800">sales@texasflange.com</a></p>
            <p className="text-lg mb-2">Phone: <a href="tel:+1-281-484-8325" className="text-blue-600 hover:text-blue-800">281-484-8325</a></p>
            <p className="text-lg">Address: P.O. Box 2889 Pearland, TX 77588</p>
          </div>
        </div>
      </section>
    </div>
  );
}
