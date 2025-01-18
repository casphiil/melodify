import {storageService} from './async-storage.service.js'
import {utilService} from './util.service.js'

export const trackService = {
  query,
  save,
  remove,
  getById,
  createTrack,
  getDefaultFilter,
  getFilterFromSearchParams,
}

const STORAGE_KEY = 'tracks'

_createTracks()

async function query(filterBy) {
  try {
    let tracks = await storageService.query(STORAGE_KEY)
    if (filterBy) {
      let {minBatteryStatus, model = '', type = ''} = filterBy
      minBatteryStatus = minBatteryStatus || 0
      tracks = tracks.filter(
        track =>
          track.type.toLowerCase().includes(type.toLowerCase()) &&
          track.model.toLowerCase().includes(model.toLowerCase()) &&
          track.batteryStatus >= minBatteryStatus
      )
    }
    return tracks
  } catch (error) {
    console.log('error:', error)
    throw error
  }
}

function getById(id) {
  return storageService.get(STORAGE_KEY, id)
}

function remove(id) {
  return storageService.remove(STORAGE_KEY, id)
}

function save(trackToSave) {
  if (trackToSave.id) {
    return storageService.put(STORAGE_KEY, trackToSave)
  } else {
    trackToSave.isOn = false
    return storageService.post(STORAGE_KEY, trackToSave)
  }
}

function createTrack(model = '', type = '', batteryStatus = 100) {
  return {
    model,
    batteryStatus,
    type,
  }
}

function getDefaultFilter() {
  return {
    type: '',
    minBatteryStatus: 0,
    model: '',
  }
}

function getFilterFromSearchParams(searchParams) {
  const defaultFilter = getDefaultFilter()
  const filterBy = {}
  for (const field in defaultFilter) {
    filterBy[field] = searchParams.get(field) || ''
  }
  return filterBy
}

function _createTracks() {
  let tracks = utilService.loadFromStorage(STORAGE_KEY)
  if (!tracks || !tracks.length) {
    tracks = [
      {id: 'r1', model: 'Dominique Sote', batteryStatus: 100, type: 'Pleasure'},
      {id: 'r2', model: 'Salad-O-Matic', batteryStatus: 80, type: 'Cooking'},
      {id: 'r3', model: 'Dusty', batteryStatus: 100, type: 'Cleaning'},
      {id: 'r4', model: 'DevTron', batteryStatus: 40, type: 'Office'},
    ]
    utilService.saveToStorage(STORAGE_KEY, tracks)
  }
}
