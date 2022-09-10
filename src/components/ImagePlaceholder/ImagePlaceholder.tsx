import React from 'react'

interface IImagePlaceholder {
    source: string | '',
    alt: string | "",
    label?: string | "",
    labelPosition?: React.CSSProperties['justifyContent']
}


const ImagePlaceholder = (props: IImagePlaceholder) => {
    const {source, alt, label, labelPosition} = props;
    return (
        <div className="img-placeholder-with-text">
            <img src={source} alt={alt} />
            {
                label ? <p style={{
                    display: 'flex',
                    justifyContent: labelPosition
                }}>{label}</p> : null
            }
        </div>
    )
}

export default ImagePlaceholder