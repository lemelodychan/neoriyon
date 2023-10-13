import '../globals.css'
import styles from './header.module.scss';
import Image from 'next/image';

import dynamic from 'next/dynamic';
const RiYoutubeLine = dynamic(() => import('react-icons/ri').then(module => module.RiYoutubeLine), {
  ssr: false, // Disable server-side rendering
});
const RiTwitterXLine = dynamic(() => import('react-icons/ri').then(module => module.RiTwitterXLine), {
ssr: false, // Disable server-side rendering
});
const RiInstagramLine = dynamic(() => import('react-icons/ri').then(module => module.RiInstagramLine), {
ssr: false, // Disable server-side rendering
});
    

const Header = () => {

  return (
    <nav className={styles.Header}>
        <a href="#top">
            <Image
                src="/logo.png"
                className={styles.Logo}
                width={35}
                height={34}
                alt="NEORiYON logo"
            />
        </a>
        <a href="#about">Profil</a>
        <a href="#news">News</a>
        <a href="#video">Vidéos</a>
        <a href="#contact">Contact</a>

        <div className={styles.Sns}>
            <a href="https://www.youtube.com/channel/UCnPD1QNHSa1876HPsfUizSA" target="_blank">
                <RiYoutubeLine />
            </a>
            <a href="https://twitter.com/NEORiYON" target="_blank">
                <RiTwitterXLine />
            </a>
            <a href="https://www.instagram.com/oriyon.g" target="_blank">
                <RiInstagramLine />
            </a>
        </div>
    </nav>
  );
};

export default Header;
