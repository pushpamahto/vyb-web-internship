import React, { useState } from 'react';

export const Faq = () => {
  const [openItems, setOpenItems] = useState(Array(5).fill(false));
  const toggleContent = (index) => {
    const newOpenItems = openItems.map((isOpen, i) => (i === index ? !isOpen : isOpen));
    setOpenItems(newOpenItems);
  };

  return (
    <section className="main-faq my-5">
      <div className="main-parent">
        <h3 className="text-[18px] lg:text-[27px] font-bold text-[#003c3c] text-center">
          Start Vybing with us!
        </h3>
        <p className="text-[18px] text-[#003c3c] text-center px-5 my-4">
          Quick answers to questions you may have. Can’t find what you're looking for? Check out our full documentation.
        </p>
      </div>

      {/* FAQ Items */}
      {[
        {
          question: "How does the VYB Store work?",
          answer: "VYB Store is an influencer marketplace. You can monetize your travel itinerary, merchandise, digital content, and fashion brand. And much more yet to come."
        },
        {
          question: "How do I get started with the VYB Store?",
          answer: "Getting started with VYB Store is super easy! Simply sign up for an account, create your store, and start sharing your store link in your Instagram bio with the audience."
        },
        {
          question: "What does “Zero Cost” mean?",
          answer: "Zero cost means vybing with us is completely free. You don’t have to pay a single rupee to build your store and monetize your audience."
        },
        {
          question: "How do I track my earnings on VYB Store?",
          answer: "We provide you with detailed analytics to track your earnings and performance. You can see how many purchases your links have generated, as well as your total earnings."
        },
        {
          question: "What kind of products can I sell on VYB Store?",
          answer: "You can sell a variety of products on VYB Store, including physical merchandise, digital downloads, and even services like travel itineraries and plenty more."
        }
      ].map((item, index) => (
        <div key={index} className='mx-4 md:mx-0'>
          <div className="faq max-w-[700px] mx-auto bg-[#e5f0f1] p-2 px-4 rounded-2xl mt-3">
          <div className="main-slider cursor-pointer flex justify-between items-center py-2" onClick={() => toggleContent(index)}>
            <div className="contentToggle text-[18px] text-[#003c3c] font-bold">
              {item.question}
            </div>
            <div className="plus text-[20px] text-[#003c3c]">
              {openItems[index] ? '-' : '+'}
            </div>
          </div>
          {openItems[index] && (
            <p className="text-[18px] text-[#003c3c] border-t-2 border-black mt-2 showcontent">
              {item.answer}
            </p>
          )}
        </div>
        </div>
      ))}
    </section>
  );
};
