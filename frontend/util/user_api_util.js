export const fetchUser = userid => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userid}`, 
        data: userid
    })
);

export const fetchUsers = () => ( // Doubt I'd need this, except for maybe admin
    $.ajax({
        method: 'GET',
        url: `/api/users/`,
    })
);