import React from 'react'
import PropTypes from 'prop-types'
import CropImgSetting from '../../components/crop-img-setting/CropImgSetting'
import './calibrate.css'

const Calibrate = props => {
    return (
        <main className='main'>
            <div className="container">
                <section className="app-window app-window--pink">
                    <p className="app__title">Выберите формат изображения</p>
                    <CropImgSetting />
                </section>
            </div>
        </main>
    )
}

Calibrate.propTypes = {}

export default Calibrate