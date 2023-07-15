import { Link } from 'react-router-dom';

const Icons = ({ imageClassName, src, alt, path }) => {
    return (
        <Link to ={path}><img className={imageClassName} src={src} alt={alt}/></Link>
    )
}

export default Icons;