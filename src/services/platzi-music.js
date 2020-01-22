import configService from './config'
import axios from 'axios'

const trackService = {}

trackService.search = q => {
  const type = 'track'

  return axios
    .get(`${configService.apiUrl}/search`, {
      params: { q, type }
    })
    .then(res => res.data)
}

export default trackService
