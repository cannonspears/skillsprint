import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

// VALIDATION //
function validateNewUser(user) {
    const REQUIRED_FIELDS = ['user_name', 'user_age', 'user_dob']

    REQUIRED_FIELDS.forEach((field) => {
        if (user[field] === null || user[field] === undefined) {
            throw new Error(`User field ${field} is missing`)
        }
    })

    if (user.user_name.length < 4) {
        throw new Error('User name requires at least four characters')
    }

    if (user.user_age < 18) {
        throw new Error('User age must be at least 18')
    }

    return user
}

function validateUpdatedUser(user) {
    const REQUIRED_FIELDS = [
        'user_id',
        'user_name',
        'user_age',
        'user_dob',
        'user_level',
        'user_points',
    ]

    REQUIRED_FIELDS.forEach((field) => {
        if (user[field] === null || user[field] === undefined) {
            throw new Error(`User field ${field} is missing`)
        }
    })

    if (user.user_name.length < 4) {
        throw new Error('User name requires at least four characters')
    }

    if (user.user_age < 18) {
        throw new Error('User age must be at least 18')
    }

    if (user.user_level < 0) {
        throw new Error('User level must be at least 0')
    }

    if (user.user_points < 0) {
        throw new Error('User points must be at least 0')
    }
}

// API CALLS //
export async function fetchUser(user_id) {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/users/${user_id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function fetchUsers() {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/users`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function createUser(user) {
    validateNewUser(user)

    try {
        const { data } = await axios.post(`${API_BASE_URL}/users`, user)
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function updateUser(user) {
    validateUpdatedUser(user)

    try {
        const { data } = await axios.put(
            `${API_BASE_URL}/users/${user.user_id}`,
            user
        )
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function removeUser(user_id) {
    try {
        await axios.delete(`${API_BASE_URL}/users/${user_id}`)
    } catch (error) {
        console.log(error)
    }
}
