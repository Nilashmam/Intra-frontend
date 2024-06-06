import React, { useState } from 'react';
import { LANGUAGE_VERSIONS } from './languages';

const LanguageSelector = ({ language, onSelect }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const languages = Object.entries(LANGUAGE_VERSIONS);

    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        setSelectedLanguage(selectedLanguage);
        onSelect(selectedLanguage);
    };

    return (
        <div style={{padding : '10px'}}>
            <label htmlFor="language-select">Choose a language: </label>
            <select id="language-select" value={selectedLanguage} onChange={handleChange}>
                {languages.map(([language, version]) => (
                    <option key={language} value={language}>
                        {language.charAt(0).toUpperCase() + language.slice(1)} (version {version})
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;
