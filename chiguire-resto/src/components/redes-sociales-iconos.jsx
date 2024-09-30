function RedesIconos(props) {
    return <>
        <ul className={props.Clase}>
            <li>
                <a target="_blank" href="https://www.instagram.com">
                    <i className="bi bi-instagram"></i>
                </a>
            </li>
            <li>
                <a target="_blank" href="https://www.tiktok.com/es/">
                    <i className="bi bi-tiktok"></i>
                </a>
            </li>
            <li>
                <a target="_blank" href="https://www.youtube.com/">
                    <i className="bi bi-youtube"></i>
                </a>
            </li>
        </ul>
    </>
}

export default RedesIconos;