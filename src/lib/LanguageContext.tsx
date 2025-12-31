"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "am";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "About",
        "nav.ministries": "Ministries",
        "nav.events": "Events",
        "nav.sermons": "Sermons",
        "nav.contact": "Contact",
        "nav.join": "Join Us",

        // Hero
        "hero.welcome": "Welcome to",
        "hero.title": "Anchor For Generations",
        "hero.subtitle": "Holistic Ministry",
        "hero.description": "Rooted in faith, anchored in hope. Building spiritual foundations that last for generations through the transformative power of God's Word.",
        "hero.cta.join": "Join Our Community",
        "hero.cta.watch": "Watch Sermon",
        "hero.scroll": "Scroll",
        "hero.verse": "We have this hope as an anchor for the soul, firm and secure.",
        "hero.verse.ref": "Hebrews 6:19",

        // General sections
        "section.about.label": "Who We Are",
        "section.ministries.label": "Our Ministries",
        "section.events.label": "Join Us At",
        "section.sermons.label": "Watch & Listen",
        "section.blog.label": "Insights & Articles",
        "section.contact.label": "Get In Touch",

        // About Section
        "about.mission.title": "Our Mission",
        "about.mission.desc": "To anchor generations in the transformative power of God's Word, fostering spiritual growth and holistic community development.",
        "about.vision.title": "Our Vision",
        "about.vision.desc": "A globally connected community of believers, firmly anchored in faith, leading lives of purpose and impact.",
        "about.values.title": "Our Core Values",
        "about.values.v1": "Faith-Driven",
        "about.values.v2": "Community-Focused",
        "about.values.v3": "Integrity-Led",

        // Ministries
        "ministries.title": "Empowering Every Generation",
        "ministries.youth": "Youth Ministry",
        "ministries.youth.desc": "Equipping the next generation with spiritual tools for a life of purpose.",
        "ministries.worship": "Worship Arts",
        "ministries.worship.desc": "Expressing our devotion through creative arts and powerful worship.",
        "ministries.outreach": "Global Outreach",
        "ministries.outreach.desc": "Spreading hope and practical support to communities worldwide.",
    },
    am: {
        // Navigation
        "nav.home": "መነሻ",
        "nav.about": "ስለ እኛ",
        "nav.ministries": "አገልግሎቶች",
        "nav.events": "ኩነቶች",
        "nav.sermons": "ስብከቶች",
        "nav.contact": "እውቂያ",
        "nav.join": "ተቀላቀሉን",

        // Hero
        "hero.welcome": "እንኳን ወደ",
        "hero.title": "የትውልድ መልህቅ",
        "hero.subtitle": "ሁለንተናዊ አገልግሎት",
        "hero.description": "በእምነት ስር የሰደደ፣ በተስፋ የጸና። በልዑል እግዚአብሔር ቃል ለተተኪው ትውልድ የሚሆን መንፈሳዊ መሰረት እንገነባለን።",
        "hero.cta.join": "ቤተሰባችን ይሁኑ",
        "hero.cta.watch": "ስብከት ይመልከቱ",
        "hero.scroll": "ወደ ታች ይውረዱ",
        "hero.verse": "ይህም ተስፋ እንደ ነፍስ መልህቅ አለን እርሱም የታመነና የጸና ነው።",
        "hero.verse.ref": "ዕብራውያን 6:19",

        // General sections
        "section.about.label": "እኛ ማን ነን",
        "section.ministries.label": "አገልግሎቶቻችን",
        "section.events.label": "አብረውን ይሁኑ",
        "section.sermons.label": "ይዩ እና ያድምጡ",
        "section.blog.label": "ጽሁፎች እና መጣጥፎች",
        "section.contact.label": "ያግኙን",

        // About Section
        "about.mission.title": "ተልእኳችን",
        "about.mission.desc": "ትውልድን በእግዚአብሔር ቃል ለውጥ ውስጥ በመመስረት፣ መንፈሳዊ እድገትን እና ሁለንተናዊ የማህበረሰብ ልማትን ማምጣት።",
        "about.vision.title": "ራእያችን",
        "about.vision.desc": "በእምነት የጸና፣ ዓላማ ያለው እና ተጽዕኖ ፈጣሪ የሆነ ዓለም አቀፍ አማኝ ማህበረሰብ ማየት።",
        "about.values.title": "መሰረታዊ እሴቶቻችን",
        "about.values.v1": "በእምነት የምንመራ",
        "about.values.v2": "ማህበረሰብን ማእከል ያደረግን",
        "about.values.v3": "በቅንነት የምንሰራ",

        // Ministries
        "ministries.title": "ትውልድን ማብቃት",
        "ministries.youth": "የወጣቶች አገልግሎት",
        "ministries.youth.desc": "የሚቀጥለውን ትውልድ ለዓላማ ያለው ሕይወት በመንፈሳዊ መሣሪያዎች ማስታጠቅ።",
        "ministries.worship": "የአምልኮ ጥበባት",
        "ministries.worship.desc": "ፍቅራችንን በፈጠራ ጥበባት እና በኃይለኛ አምልኮ መግለጽ።",
        "ministries.outreach": "ዓለም አቀፍ ተደራሽነት",
        "ministries.outreach.desc": "ተስፋን እና ተግባራዊ ድጋፍን በዓለም ዙሪያ ላሉ ማህበረሰቦች ማዳረስ።",
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    // Load language preference from localStorage
    useEffect(() => {
        const savedLang = localStorage.getItem("preferredLanguage") as Language;
        if (savedLang && (savedLang === "en" || savedLang === "am")) {
            setLanguage(savedLang);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("preferredLanguage", lang);
    };

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            <div dir={language === "am" ? "ltr" : "ltr"}> {/* Amharic is LTR too */}
                {children}
            </div>
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
