// Interfața pentru tipul de date al lecției
export interface Lesson {
    title: string;
    videoUrl: string;
    description: string;
    supportFile?: string; // Opțional
  }
  
  // Interfața pentru tipul de date al cursului
  export interface Course {
    code: string;
    name: string;
    description: string;
    lessons: Lesson[];
  }
  
  // Simularea obținerii datelor
  export const courses: Course[] = [
    {
      code: '124',
      name: 'Curs Extensii Gene',
      description: 'Acest curs complet și avansat despre extensiile de gene îți va oferi toate cunoștințele necesare pentru a deveni un expert în domeniu. Îți vom arăta tehnicile esențiale pentru aplicarea extensiilor de gene, inclusiv selecția corectă a produselor, tehnici de aplicare precise, și întreținerea extensiilor pentru rezultate optime. Fiecare lecție este concepută pentru a îți oferi abilități practice și teoretice esențiale pentru a excela în această profesie.',
      lessons: Array.from({ length: 10 }, (_, index) => ({
        title: `Lesson ${index + 1}`,
        videoUrl: `https://example.com/video-${index + 1}.mp4`,
        description: `Description for Lesson ${index + 1}`,
        supportFile: `https://example.com/support-${index + 1}.pdf`,
      })),
    },
    {
      code: '125',
      name: 'Curs Extensii Gene (Întâlnește Artistul)',
      description: 'Acest curs exclusiv îți oferă oportunitatea de a învăța direct de la cei mai renumiți artiști în domeniul extensiilor de gene. Pe lângă tehnicile avansate de aplicare și întreținere a extensiilor, vei avea ocazia să participi la sesiuni interactive unde vei putea adresa întrebări și primi feedback personalizat. În cadrul acestui curs, vei explora și cele mai noi tendințe și tehnici de la cei mai influenți experți din industrie, garantând astfel că vei fi la curent cu cele mai recente inovații și standarde de calitate.',    
      lessons: Array.from({ length: 10 }, (_, index) => ({
        title: `Lesson ${index + 1}`,
        videoUrl: `https://example.com/video-${index + 1}.mp4`,
        description: `Description for Lesson ${index + 1}`,
        supportFile: `https://example.com/support-${index + 1}.pdf`,
      })),
    },
  ];
  
  export const getCourseByCode = (code: string): Course | undefined => {
    return courses.find(course => course.code === code);
  };
  