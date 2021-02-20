import api from './api';

class NultemployeeService {
    static getAll(){
        return api.get('/nultempoyee')
    }

    static post(body){
        return api.post('/nultempoyee', body)
    }
    
    static getId(id,body){
        return api.get(`/nultempoyee/${id}`,body)
    }

    static put(id){
        return api.put(`/nultempoyee/${id}`)
    }

    static delete(id){
        return api.delete(`nultempoyee/${id}`)
    }
}

export default NultemployeeService