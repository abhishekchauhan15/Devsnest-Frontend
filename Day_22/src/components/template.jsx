import React from "react";

const Template = ({ templates, setMeme }) => {
    return (
                   
        <div className="template">
            {templates.map((template) => (
                <div
                    key={template.id}
                    onClick={() => {
                        setMeme(template);
                    }}
                >
                    <div
                        style={{ backgroundImage: `url(${template.url})` }}
                        className="image"
                    ></div>
                </div>
            ))}
        </div>
    );
};

export default Template;