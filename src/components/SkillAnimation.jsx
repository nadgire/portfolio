import React, { useState, useEffect } from "react";

// Skills array
const fullStackSkills = [
  'Web Developer', 'Frontend Developer', 'Web Designer', 'Backend Developer', 'API Developer', 'Fullstack Developer'
];

const SkillAnimation = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [skillIndex, setSkillIndex] = useState(0);  // Track the current skill
  const typingSpeed = 120; // Time between each character typing
  const deletingSpeed = 30; // Time between each character deletion
  const pauseDuration = 1000; // Pause time before deleting

  useEffect(() => {
    let timer;

    const currentSkill = fullStackSkills[skillIndex]; // Get current skill

    if (!isDeleting && index < currentSkill.length) {
      timer = setTimeout(() => {
        setDisplayedText(displayedText + currentSkill[index]);
        setIndex(index + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      timer = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
        setIndex(index - 1);
      }, deletingSpeed);
    } else if (index === currentSkill.length) {
      setIsDeleting(true);
      timer = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
        setIndex(index - 1);
      }, pauseDuration);
    } else if (index === 0 && isDeleting) {
      setIsDeleting(false);
      setSkillIndex((prevIndex) => (prevIndex + 1) % fullStackSkills.length); // Move to next skill
    }

    return () => clearTimeout(timer);
  }, [index, displayedText, isDeleting, skillIndex]);

  return (
    <div className="">
      <span className="text-xl md:text-2xl lg:text-3xl font-bold">{displayedText}</span>
    </div>
  );
};

export default SkillAnimation;
