import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { experienceData } from "../data/experienceData";
import { calculateDuration, formatDate } from "../utils/dateUtils";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ExperienceDetail = ({ handleNightMode, nightMode }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const experience = experienceData.find((item) => item.id === id);

    if (!experience) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Experience Not Found</h2>
                    <button onClick={() => navigate('/')} className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Return Home</button>
                </div>
            </div>
        );
    }

    const { title, company, startDate, endDate, location, locationType, detailedDescription, icon: Icon } = experience;
    const duration = calculateDuration(startDate, endDate);

    return (
        <>
            <Navbar handleNightMode={handleNightMode} nightMode={nightMode} />
            <SEO
                title={`${title} at ${company}`}
                description={`Explore Hammad Meer's experience as a ${title} at ${company}. ${detailedDescription.substring(0, 150)}...`}
                keywords={`Hammad Meer, ${title}, ${company}, ${location}, Software Engineer Experience`}
                url={`https://hammadmeer.netlify.app/experience/${id}`}
            />

            <div className="min-h-screen bg-slate-50 dark:bg-gray-900 py-16 px-4 text-slate-900 dark:text-gray-100 transition-colors duration-300">
                <div className="max-w-4xl mx-auto pt-16">
                    <Link to="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition font-medium">
                        <FaArrowLeft className="mr-2" /> Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-gray-700"
                    >
                        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 border-b border-slate-100 dark:border-gray-700 pb-8">
                            <div className={`p-5 rounded-full bg-${experience.color || 'blue'}-50 dark:bg-${experience.color || 'blue'}-600/20 shadow-sm`}>
                                {/* Render icon properly whether it's a component or an element function */}
                                <div className={`text-5xl text-${experience.color || 'blue'}-600 dark:text-${experience.color || 'blue'}-400`}>
                                    <Icon />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">{title}</h1>
                                <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold tracking-wide">{company}</h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-slate-600 dark:text-gray-300 bg-slate-50 dark:bg-gray-700/50 p-6 rounded-xl">
                            <div>
                                <span className="block text-slate-400 dark:text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Dates</span>
                                <span className="font-semibold text-lg text-slate-800 dark:text-gray-100">
                                    {formatDate(startDate)} - {formatDate(endDate)}
                                </span>
                                <span className="ml-2 text-sm text-slate-500 dark:text-gray-400 font-medium">({duration})</span>
                            </div>
                            <div>
                                <span className="block text-slate-400 dark:text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Location</span>
                                <span className="font-semibold text-lg text-slate-800 dark:text-gray-100">{location} · <span className="italic font-normal text-slate-500 dark:text-gray-400">{locationType}</span></span>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white border-l-4 border-blue-500 pl-4">Role Description</h3>
                            <div className="whitespace-pre-line text-slate-600 dark:text-gray-300 leading-8 text-lg">
                                {detailedDescription}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ExperienceDetail;
