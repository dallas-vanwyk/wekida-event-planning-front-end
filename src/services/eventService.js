const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/events`;

const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
        });

        if (!res.ok) {
            throw new Error(`Server error: ${res.status}`);
        };

        return await res.json();
    } catch (err) {
        console.log(err);
    };
};

const show = async (eventId) => {
    try {

        const res = await fetch(`${BASE_URL}/${eventId}`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });

        if (!res.ok) {
            throw new Error(`Server error: ${res.status}`);
        };

        return await res.json();
    } catch (err) {
        console.log(err);
    };
};

const create = async (eventData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        });

        if (!res.ok) {
            throw new Error(`Server error: ${res.status}`);
        };

        return await res.json();
    } catch (err) {
        console.log(err);
        throw err;
    };
};

export {
    index,
    show,
    create
};
