// [slug].tsx
import React from 'react';
import { courses, getCourseByCode } from '@/modules/lessons/data';
import { Metadata } from 'next';
import CourseDetail from '@/components/CourseDetail';

interface DetailsCoursePageProps {
  params: { slug: string };
}

const DetailsCoursePage: React.FC<DetailsCoursePageProps> = async ({ params }) => {
  const { slug } = params;
  const course = getCourseByCode(slug);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <section className="flex items-center justify-center md:py-4 mt-20 mx-4">
      <CourseDetail course={course} />
    </section>
  );
};

export async function generateStaticParams() {
  return courses.map(course => ({
    slug: course.code
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const course = getCourseByCode(slug);
  return {
    title: course ? `Course ${course.name}` : 'Course Not Found',
    description: course ? `Details about the course ${course.name}` : 'Course not found',
  };
}

export default DetailsCoursePage;
