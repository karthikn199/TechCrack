import React, { useState } from "react";
import Accordion from "./components/accordion";
import CSSData from "./moc-data/cssData";
import gitData from "./moc-data/git";
import HTMLData from "./moc-data/HTMLData";
import JavaScriptData from "./moc-data/javaScriptData";
import MySQLData from "./moc-data/mySQL";
import reactData from "./moc-data/reactData";
import SpringBootData from "./moc-data/springBootData";

// Sidebar Component
const Sidebar = ({ topics, onTopicSelect }) => {
  const [activeTopic, setActiveTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setActiveTopic(topic.id);
    if (onTopicSelect) onTopicSelect(topic);
  };

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.heading}>Potta Praveen</h2>
      <ul style={styles.list}>
        {topics?.map((topic) => (
          <li
            key={topic.id}
            style={{
              ...styles.listItem,
              backgroundColor: activeTopic === topic.id ? "#4CAF50" : "#f9f9f9",
              color: activeTopic === topic.id ? "#fff" : "#333",
            }}
            onClick={() => handleTopicClick(topic)}
          >
            {topic.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styles for Sidebar
const styles = {
  sidebar: {
    width: "250px",
    height: "100vh",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    flexDirection: "column",
    position: "fixed", // Fixed position
    top: 0,
    left: 0,
    overflowY: "auto", // Scrollable content
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    // textAlign: "center",
    color: "#333",
    background: "linear-gradient(90deg, #4CAF50, #81C784)", // Gradient background
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  list: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  listItem: {
    padding: "12px 16px",
    marginBottom: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "16px",
    fontWeight: "500",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      backgroundColor: "#4CAF50",
      color: "#fff",
      transform: "translateX(5px)",
    },
  },
};

// Main App
const App = () => {
  const topics = [
    {
      id: 1,
      name: "HTML",
      component: <Accordion data={HTMLData} heading={"HTML Interview Q&A"} />,
    },
    {
      id: 2,
      name: "CSS",
      component: <Accordion data={CSSData} heading={"CSS Interview Q&A"} />,
    },
    {
      id: 3,
      name: "JavaScript",
      component: (
        <Accordion data={JavaScriptData} heading={"JavaScript Interview Q&A"} />
      ),
    },
    {
      id: 4,
      name: "React",
      component: <Accordion data={reactData} heading={"React Interview Q&A"} />,
    },
    {
      id: 5,
      name: "Git",
      component: <Accordion data={gitData} heading={"git Interview Q&A"} />,
    },
    {
      id: 6,
      name: "SpringBoot",
      component: (
        <Accordion data={SpringBootData} heading={"SpringBoot Interview Q&A"} />
      ),
    },
    {
      id: 7,
      name: "MySql",
      component: <Accordion data={MySQLData} heading={"MYSQL Interview Q&A"} />,
    },
  ];

  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar topics={topics} onTopicSelect={handleTopicSelect} />
      <div style={{ flex: 1, padding: "20px", marginLeft: "270px" }}>
        {selectedTopic?.component}
      </div>
    </div>
  );
};

export default App;
