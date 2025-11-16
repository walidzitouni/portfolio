type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Walid Zitouni — Cyber Security Red Teamer",
    fullName: "Walid Zitouni",
    email: "walid@cyber-ag.com",
  },
  hero: {
    name: "Walid Zitouni",
    p: ["Cyber Security Red Teamer &", "Penetration Testing Specialist"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a highly skilled Cyber Security Red Teamer specializing in penetration testing, 
      vulnerability assessment, and offensive security operations. With extensive experience in 
      identifying and exploiting security weaknesses, I help organizations strengthen their defenses 
      through realistic attack simulations. My expertise spans network penetration testing, web application 
      security, social engineering, and exploit development. I'm passionate about staying ahead of emerging 
      threats and continuously advancing my skills to protect against sophisticated cyber attacks.`,
    },
    experience: {
      p: "My Journey in Cyber Security",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "Client Feedback",
      h2: "Testimonials.",
    },
    works: {
      p: "Security Engagements",
      h2: "Projects.",
      content: `The following projects showcase my expertise in cyber security through real-world 
    penetration testing engagements and security assessments. Each project demonstrates my ability 
    to identify vulnerabilities, exploit weaknesses, and provide comprehensive remediation guidance. 
    It reflects my proficiency with various security tools, attack methodologies, and defense strategies.`,
    },
  },
};
