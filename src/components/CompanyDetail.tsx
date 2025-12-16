import { useState } from "react";
import { useParams } from "react-router-dom";
import {
    categories,
    ecommerceFeatures,
    callLogsFeatures,
    posFeatures,
    erpFeatures,
    distributionFeatures,
} from "@/data/softwareData";
import { companyLogos } from "@/data/companyLogos";
import { CheckCircle, Shield, Users, ExternalLink, Zap, BarChart, Lock, Package, Phone, CreditCard, Cpu, Truck } from "lucide-react";

const companyMap = {
    "infinity-byte": "Infinity Byte",
    "core-tech": "Core Tech",
    "sky-links": "Sky Links",
};

const categoryStyles = {
    ecommerce: {
        bg: "bg-gradient-to-br from-orange-50 to-orange-100",
        border: "border-l-4 border-orange-500",
        iconColor: "text-orange-600",
        iconBg: "bg-orange-100",
        gradient: "from-orange-500 to-orange-600",
        image: "/assets/e-commerce.jpg",
        icon: Package,
    },
    calllogs: {
        bg: "bg-gradient-to-br from-emerald-50 to-emerald-100",
        border: "border-l-4 border-emerald-500",
        iconColor: "text-emerald-600",
        iconBg: "bg-emerald-100",
        gradient: "from-emerald-500 to-emerald-600",
        image: "/assets/callLogs.jpg",
        icon: Phone,
    },
    pos: {
        bg: "bg-gradient-to-br from-purple-50 to-purple-100",
        border: "border-l-4 border-purple-500",
        iconColor: "text-purple-600",
        iconBg: "bg-purple-100",
        gradient: "from-purple-500 to-purple-600",
        image: "/assets/pos.jpg",
        icon: CreditCard,
    },
    erp: {
        bg: "bg-gradient-to-br from-blue-50 to-blue-100",
        border: "border-l-4 border-blue-500",
        iconColor: "text-blue-600",
        iconBg: "bg-blue-100",
        gradient: "from-blue-500 to-blue-600",
        image: "/assets/erp.jpg",
        icon: Cpu,
    },
    distribution: {
        bg: "bg-gradient-to-br from-pink-50 to-pink-100",
        border: "border-l-4 border-pink-500",
        iconColor: "text-pink-600",
        iconBg: "bg-pink-100",
        gradient: "from-pink-500 to-pink-600",
        image: "/assets/distribution.jpg",
        icon: Truck,
    },
};

// 🔥 Feature resolver
const featureMap = {
    ecommerce: ecommerceFeatures,
    calllogs: callLogsFeatures,
    pos: posFeatures,
    erp: erpFeatures,
    distribution: distributionFeatures,
};

// Tab Component
const SystemTabs = ({ systems, activeSystem, onTabClick }) => {
    return (
        <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-hide">
            {systems.map((system, index) => {
                const style = categoryStyles[system.categoryId];
                const IconComponent = style.icon;
                const isActive = activeSystem === system.categoryId;
                
                return (
                    <button
                        key={index}
                        onClick={() => onTabClick(system.categoryId)}
                        className={`
                            flex items-center gap-3 px-6 py-3 rounded-xl font-medium whitespace-nowrap
                            transition-all duration-200 transform hover:scale-105
                            ${isActive 
                                ? `${style.bg} border-2 ${style.border} text-gray-900 shadow-lg` 
                                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:shadow-md'
                            }
                        `}
                    >
                        <div className={`p-2 rounded-lg ${isActive ? style.iconBg : 'bg-gray-100'}`}>
                            <IconComponent className={`h-5 w-5 ${isActive ? style.iconColor : 'text-gray-500'}`} />
                        </div>
                        <span className="font-semibold">{system.category}</span>
                        {isActive && (
                            <div className={`h-2 w-2 rounded-full ${style.iconColor}`}></div>
                        )}
                    </button>
                );
            })}
        </div>
    );
};

const CompanyDetails = () => {
    const { companySlug } = useParams();
    const companyName = companyMap[companySlug];
    const [activeTab, setActiveTab] = useState(null);

    // Get all systems for this company
    const allSystems = categories.flatMap((cat) =>
        cat.software
            .filter((s) => s.company === companyName)
            .map((s) => ({
                ...s,
                categoryId: cat.id,
                category: cat.title,
                description: cat.description,
            }))
    );

    // Set first system as active by default
    const defaultSystem = allSystems[0]?.categoryId;
    const activeSystemId = activeTab || defaultSystem;
    
    // Get the active system data
    const activeSystem = allSystems.find(s => s.categoryId === activeSystemId);
    const style = activeSystem ? categoryStyles[activeSystem.categoryId] : categoryStyles.ecommerce;
    const features = activeSystem ? featureMap[activeSystem.categoryId] : ecommerceFeatures;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* ===== HERO ===== */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="p-4 rounded-2xl shadow-xl">
                                <img 
                                    src={companyLogos[companyName]} 
                                    className="h-24 w-24 object-contain"
                                    alt={`${companyName} Logo`}
                                />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {companyName}
                                </h1>
                                <p className="text-gray-300 text-lg">
                                    Enterprise-grade digital solutions portfolio
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-gray-400 text-sm font-medium mb-2">
                                Total Systems
                            </div>
                            <div className="text-3xl font-bold text-white">
                                {allSystems.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== SYSTEM TABS ===== */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Available Systems</h2>
                    <SystemTabs 
                        systems={allSystems}
                        activeSystem={activeSystemId}
                        onTabClick={setActiveTab}
                    />
                </div>

                {/* ===== ACTIVE SYSTEM CARD ===== */}
                {activeSystem && (
                    <div
                        className={`${style.bg} rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl`}
                    >
                        <div className={`h-1 w-full bg-gradient-to-r ${style.gradient}`} />
                        
                        <div className="p-8">
                            {/* Header */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl ${style.iconBg}`}>
                                        <Zap className={`h-6 w-6 ${style.iconColor}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            {activeSystem.category}
                                        </h3>
                                        <p className="text-gray-600 mt-1">
                                            {activeSystem.description}
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href={activeSystem.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                                >
                                    <span>Live Demo</span>
                                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>

                            {/* Content */}
                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* LEFT CONTENT - Features */}
                                <div className="lg:col-span-2 space-y-8">
                                    {/* Core Features */}
                                    <div className="bg-white rounded-xl p-6 shadow-md">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-blue-50 rounded-lg">
                                                <Users className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900">
                                                Core Business Features
                                            </h4>
                                        </div>
                                        <p className="text-gray-600 mb-4">
                                            Essential features designed for daily business operations and user productivity
                                        </p>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {features.core.map((f, idx) => (
                                                <li key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Admin Features */}
                                    <div className="bg-white rounded-xl p-6 shadow-md">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-purple-50 rounded-lg">
                                                <Shield className="h-5 w-5 text-purple-600" />
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900">
                                                Administration & Security
                                            </h4>
                                        </div>
                                        <p className="text-gray-600 mb-4">
                                            Advanced management tools for system control, security, and monitoring
                                        </p>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {features.admin.map((f, idx) => (
                                                <li key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                                    <Lock className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* RIGHT COLUMN - Image & Highlights */}
                                <div className="space-y-6">
                                    {/* System Image */}
                                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                                        <img
                                            src={style.image}
                                            alt={activeSystem.category}
                                            className="w-full h-52 object-cover transform hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    </div>

                                    {/* Quick Stats */}
                                    <div className="bg-white rounded-xl p-6 shadow-md">
                                        <div className="flex items-center gap-3 mb-4">
                                            <BarChart className="h-5 w-5 text-gray-700" />
                                            <h5 className="font-semibold text-gray-900">
                                                System Overview
                                            </h5>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                                <span className="text-gray-600">Total Features</span>
                                                <span className="font-semibold text-gray-900">
                                                    {features.core.length + features.admin.length}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                                <span className="text-gray-600">Core Features</span>
                                                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                                                    {features.core.length}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                                <span className="text-gray-600">Admin Features</span>
                                                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                                                    {features.admin.length}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center py-2">
                                                <span className="text-gray-600">Access Level</span>
                                                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full">
                                                    Enterprise
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Accountants Note */}
                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-blue-100 rounded-lg">
                                                <CreditCard className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <h5 className="font-bold text-gray-900 text-lg">
                                                Payment Integration
                                            </h5>
                                        </div>
                                        <p className="text-gray-700 text-sm">
                                            All listed systems receive complete development with secure payment 
                                            gateway integration, ensuring reliable and seamless financial transactions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Show message if no systems found */}
                {allSystems.length === 0 && (
                    <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                        <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-6">
                            <Package className="h-8 w-8 text-gray-500 mx-auto" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No Systems Available</h3>
                        <p className="text-gray-600">
                            This company doesn't have any software systems listed yet.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CompanyDetails;