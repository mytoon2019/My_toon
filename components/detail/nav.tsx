import '../../app/Detail/[id]/style.css';
import {FaChevronLeft} from 'react-icons/fa';

export default function Nav() {
  const home_Detail = () => {
    window.location.href = '/';
  };
  return <FaChevronLeft className="FaChevronLeft" onClick={home_Detail} />;
}
