import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import './menu-file-item.css'
import delete_icon from './../../../../assets/delete.svg'


const MenuFileItem = props => {
    const menuFileItemRef = useRef(null);

    const [image, setImage] = useState(null);

    const handleImageChange = () => {
        const reader = new FileReader();

        reader.onload = (event) => {
            setImage(event.target.result);
        };

        reader.readAsDataURL(props.file);

        return image
    };

    const truncateFilename = (filename, maxLength) => {
        if (filename.length <= maxLength) {
            return filename;
        }
        const extension = filename.split('.').pop();
        const truncatedName = filename.substr(0, maxLength - extension.length - 1);
        return truncatedName + '... .' + extension;
    }

    const Preview = () => {
        menuFileItemRef.current.classList.toggle('zoom');
    };

    return (
        <li ref={menuFileItemRef} class="menu-file__item">
            <div class="menu-file__info-file info-file">
                <img src={handleImageChange()} alt="" class="info-file__type" onClick={Preview} />
                <div class="info-file__features">
                    <p>{truncateFilename(props.file.name, 24)}</p>
                    <p>{props.file.size}B</p>
                </div>
            </div>
            <div class="menu-file__delete-file delete-file" onClick={(e) => { props.fileRemove(props.file); }}>
                <img src={delete_icon} alt="" class="delete-file__cross" />
            </div>
        </li>
    );
}

MenuFileItem.propTypes = {
    file: PropTypes.node,
    fileRemove: PropTypes.func,
};

export default MenuFileItem;