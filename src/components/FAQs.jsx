import React, { useState } from "react";

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer: "Lorem ipsum dolor sit amet consectetur. Additional details here.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer: "Lorem ipsum dolor sit amet consectetur. More details about this question.",
    },
  ];

  return (
    <div
      className=" xs:my-[60px] 
                    md:my-[60px] md:mx-[42px]
                    xl2:my-[80px] xl2:mx-[152px] 
                    xl3:my-[80px] xl3:mx-[297px]"
    >
      <h2
        className="text-[27px] font-semibold text-center leading-[33px] text-primary font-poppins  
                       xs:px-[20px] 
                       md:px-[148px] "
      >
        Frequently asked questions
      </h2>
      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-[7px] bg-[#FAF8FF] text-[20px] xs:m-[20px] p-[16px]"
          >
            <div className="flex justify-between" onClick={() => toggleFAQ(index)}>
              <p className={`font-medium cursor-pointer ${openIndex === index ? 'text-primary' : 'text-black'}`}>
                {faq.question}
              </p>
              <span className={`font-bold cursor-pointer ${openIndex === index ? 'text-primary' : 'text-black'}`}>
                {openIndex === index ? "—" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-[8px] text-[##6F6C90] text-[18px] leading-[30px]">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
