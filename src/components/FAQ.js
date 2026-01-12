import { useState } from "react";

const faqs = [
  {
    q: "How do I register for a course?",
    a: "Select a module and click on the register button to submit your interest."
  },
  {
    q: "Is registration confirmation immediate?",
    a: "Yes, a confirmation message is displayed after successful submission."
  },
  {
    q: "Can I change my selected course?",
    a: "You may submit the registration form again with a different course."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container">
      <h1>Frequently Asked Questions</h1>

      {faqs.map((item, index) => (
        <div key={index} className="faq-item">
          <h3 onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {item.q}
          </h3>
          {openIndex === index && <p>{item.a}</p>}
        </div>
      ))}
    </div>
  );
}
