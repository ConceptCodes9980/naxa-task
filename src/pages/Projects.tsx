import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProjects } from "../redux/projects/ProjectsReducer";
import HorizontalCard from "../components/HorizontalCard";
import VerticalCard from "../components/VerticalCards";

const filters = [
  {
    key: "keyhighlights",
    label: "Key Highlights",
  },
  {
    key: "webgisanddatavisulization",
    label: "Web GIS And Data Visualization",
  },
  {
    key: "training&capacitybuilding",
    label: "Training & Capacity Building",
  },
  {
    key: "surveyingandgismapping",
    label: "Surveying And GIS Mapping",
  },
  {
    key: "disasterriskresilience",
    label: "Disaster Risk Resilience",
  },
  {
    key: "software&applicationdevelopment",
    label: "Software & Application Development",
  },
  {
    key: "innovationinlandreformandmanagement",
    label: "Innovation In Land Reform And Management",
  },
  {
    key: "opendatainitiatives",
    label: "Open Data Initiatives",
  },
  {
    key: "e-governance",
    label: "E-Governance",
  },
  {
    key: "frontiertechnologies",
    label: "Frontier Technologies",
  },
];

const Projects = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: any) => state.projects);
  const { id } = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (id === "keyhighlights") {
      const fd = data.filter((item: any) => item?.is_key_highlight);
      setProjects(fd);
    } else {
      const currentFilter = filters.find((filter) => filter.key === id);
      const filteredData = data.filter((item: any) =>
        item?.category_title?.some((title: any) =>
          title?.toLowerCase().includes(currentFilter?.label.toLowerCase())
        )
      );
      setProjects(filteredData);
    }
  }, [data, id]);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);
  return (
    <div className="px-10 py-20 max-w-[1280px] mx-auto">
      {/* Tab sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 border px-5 py-4 shadow-sm">
        {filters?.map((item, index) => (
          <div key={index}>
            <Link
              to={`/projects/${item?.key}`}
              className={`font-semibold  p-2 block transition-color duration-700 ${
                id === item?.key
                  ? "bg-yellow-400 text-blue-600"
                  : "text-gray-500"
              }  hover:bg-yellow-400 hover:text-blue-600`}
            >
              {item?.label}
            </Link>
          </div>
        ))}
      </div>
      {/* project section */}
      {loading ? (
        <div>loading....</div>
      ) : id === "keyhighlights" ? (
        <VerticalCard projects={projects} />
      ) : (
        <HorizontalCard projects={projects} />
      )}
    </div>
  );
};

export default Projects;
