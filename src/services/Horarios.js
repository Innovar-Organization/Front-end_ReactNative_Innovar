import api from '../plugins/api'

class HorariosService {
  async getAllGenres() {
    const response = await api.get('/horarios_bloqueados/')
    return response.then((response) => {
      setPacotes(response.data);
    })
    .catch((error) => {
      console.error("Erro ao buscar os Pacotes:", error);
    });
  }
}

export default new HorariosService()