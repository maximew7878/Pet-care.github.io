import { useState } from "react";

const Post = ({ obj }) => {
    const [show, setShow] = useState(false);

    return (
        <div className="post">
            {show && (
                <img
                    src={obj.URL}
                    alt="no photo"
                    id="photo"
                    onClick={() => setShow((t) => !t)}
                />
            )}

            {!show && (
                <>
                    <div id="name">Name : {obj.Name}</div>
                    <div id="info">
                        <div>
                            <b>Email:</b> {obj.Email}
                        </div>
                        <div>
                            <b>Contact:</b>

                            {obj.Contact}
                        </div>
                        <div>
                            <b>Address:</b>
                            {obj.Address}
                        </div>
                    </div>
                    <button id="change" onClick={() => setShow((t) => !t)}>
                        View photo
                    </button>
                </>
            )}
        </div>
    );
};

export default Post;
