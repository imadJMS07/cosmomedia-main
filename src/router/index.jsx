import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import Layout from "@/layout/Layout";
const Home = lazy(() => import("@/pages/home/Index"));
const About = lazy(() => import("@/pages/about/Index"));
const Contact = lazy(() => import("@/pages/contact/Contact"));
const Projects = lazy(() => import("@/pages/projects/Projects"));
const ProjectDetail = lazy(() => import("@/pages/projects/ProjectDetails"));
const Blogs = lazy(() => import("@/pages/blogs/Index"));
const BlogDetail = lazy(() => import("@/pages/blogs/[id]"));
const Services = lazy(() => import("@/pages/services/Index"));
const ServiceDetail = lazy(() => import("@/pages/services/ServiceDetail"));

const ErrorPage = lazy(() => import("@/pages/error"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        children: [
          {
            index: true,
            element: <Services />,
          },
          {
            path: ":id",
            element: <ServiceDetail />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "projects",
        children: [
          {
            index: true,
            element: <Projects />,
          },
          {
            path: ":name",
            element: <ProjectDetail />,
          },
        ],
      },
      {
        path: "blogs",
        children: [
          {
            index: true,
            element: <Blogs />,
          },
          {
            path: ":id",
            element: <BlogDetail />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
