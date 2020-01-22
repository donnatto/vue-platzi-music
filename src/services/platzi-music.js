import configService from './config'
import axios from 'axios'

const trackService = {}

trackService.search = async q => {
  const type = 'track'

  const res = await axios.get(`${configService.apiUrl}/search`, {
    params: { q, type }
  })
  return res.data
}

export default trackService
