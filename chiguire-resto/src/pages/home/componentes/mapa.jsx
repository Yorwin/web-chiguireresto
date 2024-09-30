import styles from '../componente-homepage.module.css';

function Mapa() {
    return <>
        <iframe className={styles['mapa-i-frame']}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1972.3566430781932!2d-70.28640222096185!3d8.623500081292557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7b579e5c1dd68b%3A0x90cf7e3055d280d0!2sNella&#39;s%20Cake!5e0!3m2!1sen!2ses!4v1723825514272!5m2!1sen!2ses"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </>
}

export default Mapa;