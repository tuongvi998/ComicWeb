import axios from 'axios';

export function logout () {
    localStorage.clear()
    return {
        type : 'LOG_OUT',
    }
  
}
