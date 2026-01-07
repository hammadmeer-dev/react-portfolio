import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { experienceData } from "../data/experienceData";
import { calculateDuration } from "../utils/dateUtils";

const TimelineEntry = ({ data, isLeft, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const Icon = data.icon;
  const duration = calculateDuration(data.startDate, data.endDate);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={`flex w-full ${isLeft ? "justify-start" : "justify-end"} my-8`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: isLeft ? -50 : 50 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="w-full md:w-5/12"
      >
        <Link to={`/experience/${data.id}`} className="block">
          {/* Card: White background in light mode with subtle border and shadow for pop. Dark mode stays generic gray/dark. */}
          <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-102 border border-slate-100 dark:border-gray-700 relative overflow-hidden group`}>

            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="flex items-center mb-4 relative z-10">
              <div className={`p-3 rounded-full mr-4 bg-${data.color || 'blue'}-50 dark:bg-${data.color || 'blue'}-600/20 shadow-sm`}>
                <Icon className={`text-${data.color || 'blue'}-600 dark:text-${data.color || 'blue'}-400 text-2xl`} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100">{data.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wide">{data.company}</p>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm text-slate-500 dark:text-gray-400 mb-4 border-b border-slate-100 dark:border-gray-700 pb-2 relative z-10">
              <span className="font-medium">{data.startDate} - {data.endDate}</span>
              <span className="bg-slate-100 dark:bg-gray-700 text-slate-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">{duration}</span>
            </div>

            <p className="text-slate-600 dark:text-gray-300 line-clamp-3 leading-relaxed relative z-10">{data.shortDescription}</p>

            <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 relative z-10">
              Read more <span className="ml-1 text-lg">→</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

const Experiance = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (lineRef.current) {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        lineRef.current.style.background = `linear-gradient(to bottom, #3B82F6 ${scrollPercentage}%, #E5E7EB ${scrollPercentage}%)`;
        // Note: The gradient logic for light mode might need adjustment if using CSS variables, but hardcoded hex is fine for now; 
        // ideally checking dark mode class for the second color (gray-200 vs gray-700).
        // Since JS doesn't easily know tailwind state without checking classList, we can check document.documentElement.classList.contains('dark')

        const isDark = document.documentElement.classList.contains('dark');
        const secondaryColor = isDark ? '#374151' : '#E5E7EB'; // gray-700 vs gray-200
        lineRef.current.style.background = `linear-gradient(to bottom, #3B82F6 ${scrollPercentage}%, ${secondaryColor} ${scrollPercentage}%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="experience" className="min-h-screen bg-slate-50 dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-slate-900 dark:text-gray-100 mb-16">Professional Timeline</h1>
        <div className="relative">
          <div ref={lineRef} className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 dark:bg-gray-700 transition-all duration-300" />
          {experienceData.map((item, index) => (
            <TimelineEntry
              key={item.id}
              data={item}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiance;