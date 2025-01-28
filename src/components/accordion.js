import React, { useState } from "react";

const Accordion = ({ data, heading }) => {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <>
      <h1 style={{marginLeft:'20%'}}>{heading}</h1>
      <div style={styles.accordion}>
        {data?.map((q) => (
          <div key={q.id} style={styles.item}>
            <div
              style={{
                ...styles.question,
                backgroundColor: activeId === q.id ? "#4CAF50" : "#f1f1f1",
                color: activeId === q.id ? "#fff" : "#333",
              }}
              onClick={() => toggleAccordion(q.id)}
            >
              <span>{q.question}</span>
              <span style={styles.icon}>{activeId === q.id ? "−" : "+"}</span>
            </div>
            {activeId === q.id && (
              <div style={styles.answer}>
                <p>{q.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

const styles = {
  accordion: {
    maxWidth: "600px",
    marginLeft: "10%",
    fontFamily: "'Poppins', sans-serif",
  },
  item: {
    marginBottom: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "all 0.3s ease",
  },
  question: {
    padding: "15px 20px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "600",
    fontSize: "16px",
    transition: "all 0.3s ease",
  },
  answer: {
    padding: "15px 20px",
    backgroundColor: "#fff",
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#555",
  },
  icon: {
    fontSize: "20px",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  },
};

export default Accordion;
