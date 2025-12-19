import SectionTitle from "../components/SectionTitle";
import { contacts } from "../data/contact";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <SectionTitle title="Hubungi Saya" />

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {contacts.map((item, index) => {
          const Wrapper = item.link ? "a" : "div";

          return (
            <Wrapper
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-white shadow-md rounded-lg p-6 w-72 text-center
                transition transform hover:-translate-y-2 hover:shadow-xl
                ${item.link ? "cursor-pointer" : ""}`}
            >
              <h3 className="font-semibold mb-2 text-lg">
                {item.label}
              </h3>
              <p className="text-gray-600">
                {item.value}
              </p>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
