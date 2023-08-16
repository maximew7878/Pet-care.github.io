
export const getStates = async (set) => {
    const res = await fetch("/api/states");
    const response = await res.json();
    set(response);
};

export const searchSubmit = async (input, set) => {
    const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ state: input }),
    });
    const response = await res.json();
    set(response);
};

export const uploadSubmit = async (e, input, value, redirect) => {
    e.preventDefault();

    const res1 = await fetch("/api/storeImage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
    });

    if (res1.status === 400) {
        alert("failed");
        return;
    }
    input.URL = await res1.json();
    const res = await fetch("/api", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ input: { ...input, state: value } }),
    });
    if (res.status === 200) {
        redirect("/");
    } else {
        alert("failed");
    }
};

export const contactSubmit = async (e, input) => {
    e.preventDefault();
    console.log(input);

    const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
    });

    if (res.status === 400) {
        alert("something went wrong");
    }
    if (res.status === 200) {
        alert("Submitted successfully");
    }
};
