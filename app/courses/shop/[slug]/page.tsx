import { Metadata } from 'next';
import { getCourseByCode, courses } from '@/modules/lessons/data';
import CoursePurchaseSection from '@/components/CoursePurchaseSection';

const CoursePurchasePage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const course = getCourseByCode(slug);

  if (!course) {
    return (
      <div className="flex items-center justify-center md:py-4 mt-20 mx-4">
        <div>Course not found</div>
      </div>
    );
  }

  return (
    <section className="flex items-center justify-center md:py-4 mt-20 mx-4">
      <CoursePurchaseSection course={course} />
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
    title: course ? `Purchase ${course.name}` : 'Course Not Found',
    description: course ? `Purchase details for ${course.name}` : 'Course not found',
  };
}

export default CoursePurchasePage;
