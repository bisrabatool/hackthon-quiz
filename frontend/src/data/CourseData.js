import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe, FaLayerGroup, FaBookmark} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

// Course Data
export const CourseData = [
  {
    id: 1,
    icon: <SiAntdesign />,
    title: "Front-End Development",
    des: "Basics of React: components, JSX, state, props. Moreover Advanced React concepts including hooks, context API, routing.",
  },
  {
    id: 2,
    icon: <AiFillAppstore />,
    title: "Back-End Development",
    des: "Introduction to Node.js and asynchronous, JavaScriptBuilding RESTful APIs with Express.js, Authentication and authorization using JWT (JSON Web Tokens).",
  },
  {
    id: 3,
    icon: <FaLayerGroup />,
    title: "Data Management",
    des: "Introduction to NoSQL databases and MongoDB, CRUD operations with MongoDB and Mongoose. Moreover ODM Modeling data for efficient querying.",
  },
  {
    id: 4,
    icon: <SiProgress />,
    title: "Connecting the Stack",
    des: "Integrating React with Node.js and Express, consuming APIs in React and managing state across the application.",
  },
  {
    id: 5,
    icon: <FaBookmark />,
    title: "Additional Tools and Libraries",
    des: "Using Redux or React Context for state management (optional), testing frameworks for both front-end and back-end and continuous integration and deployment (CI/CD) pipelines.",
  },
  {
    id: 6,
    icon: <FaGlobe />,
    title: "Advanced Topics and Best Practices",
    des: "Deployment strategies for MERN applications,security best practices: input validation, XSS, CSRF protection and performance optimization techniques.",
  },
];