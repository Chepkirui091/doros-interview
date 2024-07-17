import Image from 'next/image';
import logo from '/public/Bacardi.png';

const Logo = () => {
    return (
        <div className="w-28 h-28 ">
            <Image src={logo} alt="Logo" layout="responsive" />
        </div>
    );
};

export default Logo;
