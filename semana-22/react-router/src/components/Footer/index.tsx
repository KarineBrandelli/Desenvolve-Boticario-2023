import styles from './Footer.module.scss';
import Logo from '../../assets/logo.svg';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<img src={Logo}></img>
		</footer>
	);
}