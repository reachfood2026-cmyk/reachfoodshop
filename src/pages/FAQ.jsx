import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
  const { t, isRTL } = useLanguage();
  const [openQuestions, setOpenQuestions] = useState(new Set([0])); // First question open by default

  const toggleQuestion = (index) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(index)) {
      newOpenQuestions.delete(index);
    } else {
      newOpenQuestions.add(index);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const faqSections = [
    {
      title: t('faq.generalTitle'),
      questions: [
        { q: t('faq.q1'), a: t('faq.a1') },
        { q: t('faq.q2'), a: t('faq.a2') },
        { q: t('faq.q3'), a: t('faq.a3') },
        { q: t('faq.q4'), a: t('faq.a4') },
      ],
    },
    {
      title: t('faq.productTitle'),
      questions: [
        { q: t('faq.q5'), a: t('faq.a5') },
        { q: t('faq.q6'), a: t('faq.a6') },
        { q: t('faq.q7'), a: t('faq.a7') },
      ],
    },
    {
      title: t('faq.orderingTitle'),
      questions: [
        { q: t('faq.q9'), a: t('faq.a9') },
        { q: t('faq.q10'), a: t('faq.a10') },
        { q: t('faq.q11'), a: t('faq.a11') },
        { q: t('faq.q12'), a: t('faq.a12') },
      ],
    },
    {
      title: t('faq.sustainabilityTitle'),
      questions: [
        { q: t('faq.q13'), a: t('faq.a13') },
        { q: t('faq.q14'), a: t('faq.a14') },
        { q: t('faq.q15'), a: t('faq.a15') },
      ],
    },
  ];

  let questionIndex = 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cream" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-teal text-white py-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {t('faq.title')}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              {/* Section Title */}
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-heading mb-6 flex items-center gap-3">
                <span className="w-12 h-1 bg-primary rounded-full" />
                {section.title}
              </h2>

              {/* Questions */}
              <div className="space-y-4">
                {section.questions.map((item) => {
                  const currentIndex = questionIndex++;
                  const isOpen = openQuestions.has(currentIndex);

                  return (
                    <div
                      key={currentIndex}
                      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                      {/* Question Button */}
                      <button
                        onClick={() => toggleQuestion(currentIndex)}
                        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-cream/30 transition-colors"
                      >
                        <span className="font-semibold text-heading text-lg flex-1">
                          {item.q}
                        </span>
                        <span
                          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-primary transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </button>

                      {/* Answer */}
                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          isOpen
                            ? 'max-h-96 opacity-100'
                            : 'max-h-0 opacity-0 overflow-hidden'
                        }`}
                      >
                        <div className="px-6 pb-5 text-heading-light leading-relaxed">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-cream to-cream-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-heading mb-4">
              {t('faq.stillHaveQuestions')}
            </h2>
            <p className="text-lg text-heading-light mb-8 max-w-2xl mx-auto">
              {t('faq.contactSupport')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                {t('faq.contactUs')}
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                {t('faq.browseProducts')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
