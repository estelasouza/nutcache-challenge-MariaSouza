import api from './api';

class NultemployeeService {
    static getAll(){
        console.log('aq')
        return api.get('/nultempoyee/')
    }

    static post(body){
        return api.post('/nultempoyee/', body)
    }
    
    static getId(id){
        return api.get(`/nultempoyee/${id}/`)
    }

    static put(id,body){
        return api.put(`/nultempoyee/${id}/`,body)
    }

    static delete(id){
        return api.delete(`/nultempoyee/${id}/`)
    }
}

export default NultemployeeService