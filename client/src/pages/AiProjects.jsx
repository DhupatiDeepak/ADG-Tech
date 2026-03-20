import React from 'react';
import './AiProjects.css';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import img1 from '../assets/27.jpg';
import img2 from '../assets/28.png';
import img3 from '../assets/29.png';
import img4 from '../assets/30.png';
import img5 from '../assets/31.jpg';
import img6 from '../assets/32.png';
import img7 from '../assets/33.png';
import img8 from '../assets/34.png';
import img9 from '../assets/35.png';

const AiProjects = () => {
    // Hardcoded project data
    const projects = [
        {
            id: 1,
            title: "Generate a BOM",
            description: "This process involves extracting a complete list of components from a 3D model or assembly. It includes part names, quantities, materials, and relevant properties. BOM generation helps streamline manufacturing, procurement, and cost estimation. The output can be exported in standard formats for easy integration with ERP or PLM systems.",
            image: img1,
            link: "#"
        },
        {
            id: 2,
            title: "GLB File Viewer in PeopleCAD",
            description: "The GLB File Viewer in PeopleCAD enables real-time visualization of 3D models directly in the browser. It supports smooth interactions such as rotate, pan, zoom, and explode for detailed inspection. The viewer is optimized for lightweight performance while maintaining geometric accuracy. This allows users to review and collaborate on 3D designs without requiring native CAD software.",
            image: img2,
            link: "#"
        },
        {
            id: 3,
            title: "Step to GLB Conversion",
            description: "This workflow converts STEP CAD files into lightweight GLB format for web and real-time visualization. It preserves geometry accuracy while optimizing file size. The converted GLB models can be viewed interactively in browsers using Three.js or similar viewers. This enables fast sharing and inspection without native CAD tools.",
            image: img3,
            link: "#"
        },
        {
            id: 4,
            title: "Air Foil Wing Optimization Using CATIA",
            description: "In this process, airfoil wing geometry is modeled and optimized using CATIA’s parametric capabilities. Design parameters such as chord length, camber, and span are iteratively adjusted. The optimized wing improves aerodynamic performance while maintaining structural constraints. Results can be validated and exported for further analysis.",
            image: img4,
            link: "#"
        },
        {
            id: 5,
            title: "Air Foil Wing Optimization Using PeopleCAD",
            description: "PeopleCAD enables AI-assisted airfoil wing optimization through parameter-driven modeling. Multiple design variations are generated and evaluated automatically. Performance metrics guide the optimization toward efficient wing shapes. The final optimized model can be exported for simulation, manufacturing, or visualization.",
            image: img5,
            link: "#"
        },
        {
            id: 6,
            title: "Generation of Manifolds Using CATIA",
            description: "This involves creating complex manifold geometries using CATIA’s solid and surface modeling tools. Flow paths, junctions, and ports are designed with precise control. The model ensures smooth transitions and manufacturability. It is suitable for automotive, aerospace, and fluid system applications.",
            image: img6,
            link: "#"
        },
        {
            id: 7,
            title: "Parametric changes & STEP export",
            description: "Parametric modeling allows quick design modifications by updating key dimensions or features. Changes propagate automatically across the entire model. Once finalized, the design is exported as a STEP file. This ensures compatibility with downstream CAD, CAM, and simulation tools.",
            image: img7,
            link: "#"
        },
        {
            id: 8,
            title: "ISO tolerances & CATIA utilities: ",
            description: "ISO tolerances are applied to parts using CATIA’s drafting and annotation tools. This ensures compliance with international manufacturing standards. CATIA utilities help automate tolerance assignment and validation. The result is accurate, production-ready technical documentation.",
            image: img8,
            link: "#"

        },
        {
            id: 9,
            title: "Generation of Car wheel rim using CATIA",
            description: "A detailed car wheel rim is designed using CATIA’s advanced modeling features. Parameters such as diameter, spoke design, and offset are fully controlled. The model supports design validation and styling iterations. It can be directly used for manufacturing or visualization.",
            image: img9,
            link: "#"

        },
    ];

    return (
        <div className="section ai-projects-section">
            <div className="ai-projects-container">
                <h2 className="ai-section-title">AI Projects</h2>

                {projects.map((project) => (
                    <div key={project.id} className="ai-project-card">
                        <div className="ai-project-image-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="ai-project-image"
                                loading="lazy"
                            />
                        </div>

                        <div className="ai-project-content">
                            <h3 className="ai-project-title">{project.title}</h3>
                            <p className="ai-project-description">{project.description}</p>


                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AiProjects;
