import React from "react";
import { useState } from "react";
const Meme = ({ meme, setMeme }) => {
    const [form, setForm] = useState({
        tempelate_id: meme.id,
        username: "",
        password: "$msX-{{6Tx[ja7*m",
        boxes: [],
    });
    const generateMeme = () => {
        let url = `https://api.imgflip.com/caption_image?template_id=${form.tempelate_id}&username=${form.username}&password=${form.password}`;
        form.boxes.map((box, index) => {
            url += `&boxes[${index}][text]=${box.text}`;
        });
        console.log(url);
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMeme({ ...meme, url: data.data.url }));
    };
    return (
        <div className="meme">
            <img src={meme.url} alt="meme" />
            <div>
                {[...Array(meme.box_count)].map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder={`Meme Caption ${index + 1}`}
                        onChange={(e) => {
                            const newBoxes = form.boxes;
                            newBoxes[index] = { text: e.target.value };
                            setForm({ ...form, boxes: newBoxes });
                        }}
                    />
                ))}
            </div>
            <div>
                <button onClick={generateMeme}>Generate Meme</button>
                <button onClick={() => setMeme(null)}>Choose Template</button>
            </div>
        </div>
    );
};

export default Meme;