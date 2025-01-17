import React from "react";

const Info = ({ info }) => {
    if(Object.keys(info).length===0) return null
    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Artist Info
      </div>
            <div className="card-body">
                <img src={info.strArtistThumb} alt="Logo Artist" />
                <p className="card-text">
                    Gender: {info.strGenre}
                </p>
                <h2 className="card-text text-center"> Biography</h2>
                <p className="card-text">
                    {info.strBiographyEN}
                </p>
                <p className="card-text">
                    <a
                        href={`https://${info.strFacebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-facebook" />
                    </a>
                    <a
                        href={`https://${info.strTwitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-twitter" />
                    </a>
                    <a
                        href={`https://${info.strLastFMChart}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-lastfm" />
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Info;
