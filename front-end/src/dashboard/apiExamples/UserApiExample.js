import { useState, useEffect } from 'react'
import {
    createUser,
    updateUser,
    fetchUser,
    fetchUsers,
    deleteUser,
} from '../../utils/usersApi'

export default function UserApiExample() {
    // Single User
    const [user, setUser] = useState(null)

    useEffect(() => {
        async function getUser(user_id = 2) {
            const apiData = await fetchUser(user_id)
            setUser(apiData)
        }

        getUser()

        return () => {
            setUser(null)
        }
    }, [])

    // All Users
    const [users, setUsers] = useState(null)
    const [usersChange, setUsersChange] = useState(null)

    useEffect(() => {
        async function getUsers() {
            const apiData = await fetchUsers()
            setUsers(apiData)
        }

        getUsers()

        return () => {
            setUsers(null)
        }
    }, [usersChange])

    // Handlers
    const handleDeleteUser = async () => {
        await deleteUser(1)
        setUsersChange(new Date())
    }

    const handleCreateUser = async () => {
        const apiData = await createUser({
            user_name: 'jeff',
            user_dob: '06/01/1990',
            user_age: 21,
        })

        console.log(apiData)

        setUsersChange(new Date())
    }

    const handleUpdateUser = async () => {
        const apiData = await updateUser({
            user_id: 2,
            user_name: 'jeff',
            user_dob: '06/01/1990',
            user_age: 21,
            user_level: 99,
            user_points: 4,
        })

        console.log(apiData)

        setUsersChange(new Date())
    }

    // JSX
    if (!users || !user) {
        return <p>Loading...</p>
    }

    return (
        <>
            <button onClick={handleCreateUser}>Create A User</button>
            <button onClick={handleUpdateUser}>Update User 2</button>
            <button onClick={handleDeleteUser}>Delete User 1</button>
            <h1>Single user:</h1>
            <ul>
                {Object.entries(user).map(([key, val]) => {
                    if (
                        key === 'created_at' ||
                        key === 'updated_at' ||
                        key === 'user_dob'
                    ) {
                        return null
                    }

                    return (
                        <li>
                            {key}: {val}
                        </li>
                    )
                })}
            </ul>
            <h1>All users:</h1>
            {users.length > 0 ? (
                <ul>
                    {users.map((user) => {
                        return (
                            <li>
                                <ul>
                                    {Object.entries(user).map(([key, val]) => {
                                        if (
                                            key === 'created_at' ||
                                            key === 'updated_at' ||
                                            key === 'user_dob'
                                        ) {
                                            return null
                                        }

                                        return (
                                            <li>
                                                {key}: {val}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <li>There are no users!</li>
            )}
        </>
    )
}
