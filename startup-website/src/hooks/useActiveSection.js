import { useState, useEffect, useRef } from 'react';

export function useActiveSection(nav) {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // 30% of the section should be visible
    );

    const sections = nav.map((item) => document.querySelector(`#${item}`));

    sections.forEach((section) => {
      if (section) {
        observer.current.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.current.unobserve(section);
        }
      });
    };
  }, [nav]);

  return activeSection;
}
