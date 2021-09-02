import Image from 'next/image';
import TestamonialImage1 from '../../assets/images/testamonial-image1.jpg';
import TestamonialImage2 from '../../assets/images/testamonial-image2.png';

const Testamonial = () => {
    return (
        <>
            <section>
                <div className="testamonial-wrapper">
                    <div className="testamonial-left-image">
                        <Image src={TestamonialImage1} alt="testamonial image" />
                    </div>
                    <div className="testamonial-right-container">
                        <Image src={TestamonialImage2} alt="testamonial image" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testamonial;