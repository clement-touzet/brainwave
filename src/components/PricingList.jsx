import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex items-center gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item, index) => (
        <div
          className="relative w-[19rem] max-lg:w-full h-full p-0.5 border border-n-6 rounded-[2rem] even:bg-n-8 lg:w-auto even:bg-conic-gradient odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 hover:scale-105 transition duration-200 ease-out"
          key={item.id}
        >
          <div
            className={`bg-n-8 px-6 rounded-[2rem] ${index === 1 && "py-16"}`}
          >
            <h4 className="h4 mb-4">{item.title}</h4>
            <p className="body-2 min-h-[4rem] mb-4 text-n-1/50">
              {item.description}
            </p>
            <div className="flex items-center h-[5.5rem] mb-6">
              {item.price && (
                <>
                  <div className="h3">$</div>
                  <div className="text-[5.5rem] leading-none font-bold">
                    {item.price}
                  </div>
                </>
              )}
            </div>
            <Button
              className="w-full mb-6"
              href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
              white={!!item.price}
            >
              {item.price ? "Get started" : "Contact us"}
            </Button>
            <ul>
              {item.features.map((feature, index) => (
                <li
                  className="flex items-start py-5 border-t border-n-6"
                  key={index}
                >
                  <img src={check} alt="Check" width={24} height={24} />
                  <p className="body-2 ml-4">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
