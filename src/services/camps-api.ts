import axios from 'axios'

export const baseUrl = 'http://localhost:8000/api/'

export const allEmployees = `${baseUrl}employee/`
export const allParticipants = `${baseUrl}participant`
export const allParents = `${baseUrl}parent`

export const allGroups = `${baseUrl}group`
export const allActivities = `${baseUrl}activity`

//Basic 'get all' API calls

export const getAllEmployees = async() => {
    const result = await axios.get(allEmployees).then(({data}) => data.results)
    return result
}

export const getAllParticipants = async() => {
    const result = await axios.get(allParticipants).then(data => data)
    return result
}

export const getAllParents = async() => {
    const result = await axios.get(allParents).then(data => data)
    return result
}

export const getAllGroups = async() => {
    const result = await axios.get(allGroups).then(data => data)
    return result
}

export const getAllActivities = async() => {
    const result = await axios.get(allActivities).then(data => data)
    return result
}