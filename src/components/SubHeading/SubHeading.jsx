
import images from '../../constants/images';

const SubHeading = ({title}) => (
  <div className='mb-4'>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon__img"/>
  </div>
);

export default SubHeading;
