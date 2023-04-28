import React, { useState, Component } from 'react'
import PropTypes from 'prop-types'
import './input-import.css'
import import_file_icon from './../../../assets/import-file.svg'


const InputImport = props => {
    const [importFileVisible, setImportFileVisible] = useState(true);
    const [importFileDescriptionVisible, setImportFileDescriptionVisible] = useState(true);

    const handleTransitionEnd = () => {
        setImportFileDescriptionVisible(false);
    };

    const handleAddFile = () => {
        setImportFileVisible(false);
    };

    return (
        <div className={`drop-file-input__import-file import-file ${importFileVisible ? "" : "hide"}`}>
            <input id="fileInput" type="file" className="import-file__input" accept="image/*" onChange={handleAddFile} multiple />
            <img src={import_file_icon} alt="" className="import-file__img" />
            {importFileDescriptionVisible && <p id="importFileDesc" className="import-file__description" onTransitionEnd={handleTransitionEnd}>Выберите или перетащите файлы</p>}
        </div >
    );
}

InputImport.propTypes = {}

export default InputImport;