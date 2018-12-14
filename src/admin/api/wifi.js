import request from '@/admin/utils/request'

export function getWifis (filterQuery) {
  return request({
    url: 'api/supplier/wifis',
    method: 'get',
    params: filterQuery
  })
}

export function createWifi (wifiParams) {
  return request({
    url: 'api/supplier/wifis',
    method: 'post',
    params: wifiParams
  })
}

export function updateWifi (wifiParams) {
  return request({
    url: 'api/supplier/wifis/${wifiParams.id}',
    method: 'put',
    params: wifiParams
  })
}

export function deleteWifi (id) {
  return request({
    url: 'api/supplier/wifis/${id}',
    method: 'delete'
  })
}