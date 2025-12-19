import foto from "../assets/foto-profil.jpg";

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center gap-8 mb-16"
    >
      <img
        src={foto}
        alt="Helen Noya"
        className="w-56 h-56 object-cover rounded-full shadow-md"
      />
      <div>
        <h2 className="text-2xl font-semibold mb-3">
          Halo, saya Helen Noya 
        </h2>
        <p className="leading-relaxed text-justify">
          Saya mahasiswa Sistem Informasi di Universitas Ahmad Dahlan.
          Saat ini saya sedang belajar membuat website menggunakan HTML,
          CSS, dan JavaScript. Saya tertarik pada desain dan teknologi
          serta ingin berkembang di bidang web development dan UI design.
        </p>
      </div>
    </section>
  );
}
