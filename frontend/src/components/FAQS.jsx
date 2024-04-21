import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";


function Faqs() {
    // eslint-disable-next-line no-unused-vars
    const [t, i18n] = useTranslation("global");

  return (
    <div className="max-w-6xl mx-auto py-8">
       <div className="flex">

      <h2 className="text-3xl font-semibold mb-4">{t(`faq.frequentQuestions`)}</h2>
      <QuestionMarkCircleIcon className="w-10 h-10 "></QuestionMarkCircleIcon>
       </div>

      <div className="divide-y divide-gray-300">
        {
          [0, 1, 2, 3, 4].map((faq, index) => {
            let i = index + 1
            return (
              <div key={index} className="py-4">
                <h3 className="text-xl font-medium mb-2">{t(`faq.faq${i}.q`)}</h3>
                <p className="text-gray-700">{t(`faq.faq${i}.a`)}</p>
              </div>

            )
          })
        }
      </div>
    </div>
  );
}

export default Faqs;

