import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

import proyek1 from "../assets/proyek1.jpg";
import proyek2 from "../assets/proyek2.jpg";
import proyek3 from "../assets/proyek3.jpg";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      slug: "sistem-akademik",
      title: "Sistem Akademik",
      desc: "Website sederhana untuk mengelola data mahasiswa.",
      detail:
        "Proyek ini dibuat untuk membantu pengelolaan data akademik seperti mahasiswa, mata kuliah, dan nilai secara sederhana.",
      image: proyek1,
    },
    {
      slug: "aplikasi-keuangan",
      title: "Aplikasi Keuangan",
      desc: "Aplikasi pencatatan pemasukan dan pengeluaran.",
      detail:
        "Aplikasi ini membantu pengguna mencatat pemasukan dan pengeluaran harian untuk mengatur keuangan pribadi.",
      image: proyek2,
    },
    {
      slug: "portfolio-website",
      title: "Portfolio Website",
      desc: "Website pribadi untuk menampilkan karya.",
      detail:
        "Website portfolio ini dibuat untuk menampilkan profil, keahlian, dan proyek secara profesional dan responsif.",
      image: proyek3,
    },
  ];

  return (
    <section className="bg-gray-50 px-10 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          Project Saya
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
            <div className="bg-white p-8 rounded-3xl max-w-4xl w-full relative shadow-xl">
              <button
                className="absolute top-4 right-4 text-gray-600 text-2xl font-bold"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <h3 className="text-3xl font-bold mb-6">
                {selectedProject.title}
              </h3>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover mb-6 rounded-xl"
              />

              <p className="text-gray-700 text-lg">
                {selectedProject.detail}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
