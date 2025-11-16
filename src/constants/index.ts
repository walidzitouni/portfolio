import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Penetration Testing",
    icon: web,
  },
  {
    title: "Vulnerability Assessment",
    icon: mobile,
  },
  {
    title: "Network Security",
    icon: backend,
  },
  {
    title: "Social Engineering",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Kali Linux",
    icon: html,
  },
  {
    name: "Python",
    icon: css,
  },
  {
    name: "Metasploit",
    icon: javascript,
  },
  {
    name: "Burp Suite",
    icon: typescript,
  },
  {
    name: "Wireshark",
    icon: reactjs,
  },
  {
    name: "Nmap",
    icon: redux,
  },
  {
    name: "SQL Injection",
    icon: tailwind,
  },
  {
    name: "OWASP",
    icon: nodejs,
  },
  {
    name: "Bash Scripting",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Splunk",
    icon: figma,
  },
  {
    name: "Cobalt Strike",
    icon: threejs,
  },
];

const experiences: TExperience[] = [
  {
    title: "Junior Penetration Tester",
    companyName: "SecureNet Solutions",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2019 - April 2020",
    points: [
      "Conducted vulnerability assessments and penetration tests on web applications and network infrastructure.",
      "Performed reconnaissance and enumeration using tools like Nmap, Burp Suite, and Metasploit.",
      "Documented security findings and provided detailed remediation recommendations to clients.",
      "Assisted in developing custom exploit scripts and automated security testing frameworks.",
    ],
  },
  {
    title: "Security Analyst",
    companyName: "CyberShield Corp",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2020 - March 2022",
    points: [
      "Monitored security incidents and conducted threat hunting operations using SIEM tools.",
      "Performed security assessments on cloud infrastructure and containerized applications.",
      "Developed and implemented security policies and incident response procedures.",
      "Collaborated with development teams to integrate security best practices into the SDLC.",
    ],
  },
  {
    title: "Red Team Operator",
    companyName: "Offensive Security Labs",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2022 - December 2023",
    points: [
      "Led red team operations simulating advanced persistent threats (APT) against enterprise networks.",
      "Executed social engineering campaigns including phishing and vishing attacks.",
      "Developed custom malware and evasion techniques to bypass security controls.",
      "Provided executive-level security briefings and comprehensive assessment reports.",
    ],
  },
  {
    title: "Senior Red Teamer",
    companyName: "Cyber-AG",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "January 2024 - Present",
    points: [
      "Leading advanced penetration testing engagements for Fortune 500 companies.",
      "Specializing in Active Directory exploitation, privilege escalation, and lateral movement.",
      "Mentoring junior security professionals and conducting security awareness training.",
      "Researching zero-day vulnerabilities and developing proof-of-concept exploits.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Walid's red team assessment identified critical vulnerabilities we never knew existed. His thorough approach and detailed reporting helped us significantly improve our security posture.",
    name: "Sarah Mitchell",
    designation: "CISO",
    company: "FinTech Global",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Walid was an eye-opening experience. His penetration testing skills are exceptional, and he provided actionable insights that transformed our security strategy.",
    name: "Michael Chen",
    designation: "VP of Security",
    company: "TechCore Industries",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Walid's expertise in offensive security is unmatched. His ability to think like an attacker helped us strengthen our defenses against real-world threats. Highly recommended!",
    name: "Jessica Roberts",
    designation: "Security Director",
    company: "CyberDefense Corp",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Enterprise Network Penetration Test",
    description:
      "Comprehensive red team engagement against a Fortune 500 company's network infrastructure. Achieved domain admin access through Active Directory exploitation, lateral movement, and privilege escalation techniques.",
    tags: [
      {
        name: "pentesting",
        color: "blue-text-gradient",
      },
      {
        name: "activedirectory",
        color: "green-text-gradient",
      },
      {
        name: "redteam",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Web Application Security Assessment",
    description:
      "Full-stack security audit of an e-commerce platform. Identified and exploited SQL injection, XSS, and authentication bypass vulnerabilities. Provided comprehensive remediation guidance and secure coding recommendations.",
    tags: [
      {
        name: "websec",
        color: "blue-text-gradient",
      },
      {
        name: "owasp",
        color: "green-text-gradient",
      },
      {
        name: "burpsuite",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Social Engineering Campaign",
    description:
      "Simulated advanced phishing and vishing attacks to assess organizational security awareness. Achieved 65% success rate, leading to comprehensive security training program and policy improvements.",
    tags: [
      {
        name: "socialeng",
        color: "blue-text-gradient",
      },
      {
        name: "phishing",
        color: "green-text-gradient",
      },
      {
        name: "awareness",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
