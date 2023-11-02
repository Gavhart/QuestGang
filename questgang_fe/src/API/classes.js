import axios from 'axios'

export default class Classes {

    getAllClasses(classId) {
        const classes = axios.get('http://localhost:8080/classes/getAllClasses?classId=' + classId)
        return classes
    }

    createClass(body) {
        const response = axios.post('http://localhost:8080/classes/createClass', body)
        return classes
    }

    getClass(classId) {}
    

}