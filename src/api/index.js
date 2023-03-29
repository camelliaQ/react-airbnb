import request from '@/utils/request'

const config = {
  bassUrl: 'http://codercba.com:1888/airbnb/api',
  timeout: 10000
}

const http = request(config)

export default http
