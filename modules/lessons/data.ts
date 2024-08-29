import { StaticImageData } from "next/image";
import freeImage from "@/assets/free.jpg";
import meetImage from "@/assets/meet.jpg";
export interface Lesson {
  title: string;
  videoUrl: string;
  description: string;
  supportFile?: string; 
}
export interface Course {
  code: string;
  name: string;
  description: string;
  story: string; 
  benefits: string; 
  duration: number; 
  price: number,
  image: StaticImageData,
  additionalDetails: string; 
  learningObjectives: string[]; 
  instructor: {
    name: string;
    bio: string;
  };
  lessons: Lesson[];
}

export const courses: Course[] = [
  {
    code: '124',
    name: 'Curs Extensii Gene',
    description: 'Acest curs complet și avansat despre extensiile de gene îți va oferi toate cunoștințele necesare pentru a deveni un expert în domeniu. Îți vom arăta tehnicile esențiale pentru aplicarea extensiilor de gene, inclusiv selecția corectă a produselor, tehnici de aplicare precise, și întreținerea extensiilor pentru rezultate optime. Fiecare lecție este concepută pentru a îți oferi abilități practice și teoretice esențiale pentru a excela în această profesie.',
    story: 'Această călătorie începe cu dorința de a oferi fiecărei persoane șansa de a avea gene superbe și naturale. Cursul a fost creat de experți în domeniu, cu ani de experiență în aplicarea extensiilor de gene. Am combinat tehnicile tradiționale cu cele mai noi inovații pentru a oferi un curs cu adevărat excepțional.',
    benefits: 'Veți învăța tehnici avansate de aplicare a extensiilor de gene, inclusiv selecția și utilizarea produselor de cea mai bună calitate. Acest curs va contribui la dezvoltarea profesională, oferind abilități esențiale pentru a deveni un specialist în extensiile de gene.',
    duration: 20, 
    price: 200,
    image: freeImage,
    additionalDetails: 'Cursul include materiale de studiu, sesiuni practice și suport continuu pentru studenți. De asemenea, veți avea acces la resurse online și la o comunitate de profesioniști din domeniu.',
    learningObjectives: [
      'Tehnici de aplicare a extensiilor de gene',
      'Selecția și utilizarea produselor de calitate',
      'Îngrijirea și întreținerea extensiilor de gene',
      'Gestionarea relațiilor cu clienții'
    ],
    instructor: {
      name: 'Ana Popescu',
      bio: 'Ana Popescu este o expertă în frumusețe cu peste 10 ani de experiență în aplicarea extensiilor de gene. A lucrat cu cele mai mari branduri din industria de frumusețe și a instruit numeroși profesioniști în domeniu.'
    },
    lessons: Array.from({ length: 10 }, (_, index) => ({
      title: `Lesson ${index + 1}`,
      videoUrl: `https://example.com/video-${index + 1}.mp4`,
      description: `În această lecție, vom explora aspectele esențiale ale tehnicii de aplicare a extensiilor de gene.`,
      supportFile: `https://example.com/support-${index + 1}.pdf`,
    })),
  },
  {
    code: '125',
    name: 'Curs Extensii Gene (Întâlnește Artistul)',
    description: 'Acest curs exclusiv îți oferă oportunitatea de a învăța direct de la cei mai renumiți artiști în domeniul extensiilor de gene. Pe lângă tehnicile avansate de aplicare și întreținere a extensiilor, vei avea ocazia să participi la sesiuni interactive unde vei putea adresa întrebări și primi feedback personalizat. În cadrul acestui curs, vei explora și cele mai noi tendințe și tehnici de la cei mai influenți experți din industrie, garantând astfel că vei fi la curent cu cele mai recente inovații și standarde de calitate.',
    story: 'Acest curs a fost creat pentru a aduce în fața participanților cunoștințele și experiența celor mai buni artiști din domeniu. Vei avea acces la lecții exclusive și sesiuni interactive care îți vor oferi o perspectivă valoroasă asupra tehnicilor avansate și tendințelor actuale.',
    benefits: 'Participanții vor beneficia de învățare directă de la experți și vor dobândi cunoștințe aprofundate despre cele mai noi tehnici și tendințe. Cursul oferă o oportunitate unică de a primi feedback personalizat și de a explora cele mai recente inovații în domeniul extensiilor de gene.',
    duration: 30, 
    price: 300,
    image: meetImage,
    additionalDetails: 'Include sesiuni interactive, resurse de studiu avansate și suport continuu. Participanții vor avea ocazia să interacționeze direct cu artiști de renume și să primească sfaturi personalizate.',
    learningObjectives: [
      'Tehnici avansate de aplicare a extensiilor de gene',
      'Tendințe și inovații recente în domeniu',
      'Feedback personalizat și sesiuni interactive',
      'Gestionarea relațiilor cu clienții și îmbunătățirea tehnicilor'
    ],
    instructor: {
      name: 'John Doe',
      bio: 'John Doe este un expert recunoscut internațional în extensiile de gene, cu o vastă experiență în industria frumuseții. Este cunoscut pentru inovațiile sale și pentru impactul său în formarea altor profesioniști din domeniu.'
    },
    lessons: Array.from({ length: 10 }, (_, index) => ({
      title: `Lesson ${index + 1}`,
      videoUrl: `https://example.com/video-${index + 1}.mp4`,
      description: `În această lecție, vom explora tehnici avansate și tendințe recente în extensiile de gene.`,
      supportFile: `https://example.com/support-${index + 1}.pdf`,
    })),
  },
];

export const getCourseByCode = (code: string): Course | undefined => {
  return courses.find(course => course.code === code);
};
