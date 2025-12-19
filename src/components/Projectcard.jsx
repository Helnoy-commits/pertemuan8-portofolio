export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600">
          {project.desc}
        </p>
      </div>
    </div>
  );
}
