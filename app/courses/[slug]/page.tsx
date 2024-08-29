import { Metadata } from 'next';
import { getCourseByCode, courses } from '@/modules/lessons/data';
import CourseSection from '@/components/CourseSection';

// Componenta paginii
const CoursePage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const course = getCourseByCode(slug);

  if (!course) {

    return <div className="flex items-center justify-center md:py-4 mt-20 mx-4"><div>Course not found</div></div>
  }

  return (
    <div className="flex items-center justify-center md:py-4 mt-20 mx-4">
      <CourseSection course={course} />
    </div>
  );
};

// Generare de rute statice (pentru generarea paginilor la build-time)s
export async function generateStaticParams() {
  return courses.map(course => ({
    slug: course.code
  }));
}

// Optional: Adăugați metadatele paginii (titluri, descriere, etc.)
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const course = getCourseByCode(slug);
  return {
    title: course ? `Course ${course.name}` : 'Course Not Found',
    description: course ? `Details about the course ${course.name}` : 'Course not found',
  };
}

export default CoursePage;
