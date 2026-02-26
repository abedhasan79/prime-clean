import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

export default function BeforeAfter() {
  const FIRST_IMAGE = { imageUrl: '/before.png' };
  const SECOND_IMAGE = { imageUrl: '/after.png' };

  return (
    <section className="py-24 bg-gradient-to-r from-blue-200 to-teal-200 text-blue-700 text-center">
      <h2 className="text-4xl font-bold mb-4">See The Difference</h2>
      {/* <p className="mb-8 text-sm text-gray-600">(Add your before/after images to <code>/public</code> and update <code>FIRST_IMAGE</code> &amp; <code>SECOND_IMAGE</code>.)</p> */}
      <div className="max-w-4xl mx-auto">
        <ReactBeforeSliderComponent
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}
        />
      </div>
    </section>
  );
}