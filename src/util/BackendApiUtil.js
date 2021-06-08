/**
 * @file Backend API utilities. For documents on returned json format,
 * please refer to backend repository: <https://github.com/homanw104/xunyue-backend>
 * @author Homan Wong
 */

import axios from 'axios';

const backendUrl = 'http://127.0.0.1:8080'; /* Backend server IP: local server */
// const backendUrl = 'http://api.homans.world:8080'; /* Backend server IP: remote server */

class BackendApiUtil {

  /**
   * Return Promise of search results from backend API.
   * @param query search string.
   * @return {Promise} search results data object.
   * @throws Error error from backend API.
   */
  static async getSearchData(query) {
    let getOptions = {
      method: 'get',
      url: backendUrl + '/search?name=' + query
    }
    try {
      return await axios(getOptions);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Return Promise of search results from backend API.
   * @param id track's ID
   * @return {Promise} track result data object.
   * @throws Error error from backend API.
   */
  static async getTracksData(id) {
    let getOptions = {
      method: 'get',
      url: backendUrl + '/tracks/info?id=' + id
    }
    try {
      return axios(getOptions);
    } catch(error) {
      throw new Error(error.message);
    }
  }

  /**
   * Return Promise of search results from backend API.
   * @param id artist's ID
   * @return {Promise} artist result data object.
   * @throws Error error from backend API.
   */
  static async getArtistsData(id) {
    let getOptions = {
      method: 'get',
      url: backendUrl + '/artists/info?id=' + id
    }
    try {
      return axios(getOptions);
    } catch(error) {
      throw new Error(error.message);
    }
  }

  /**
   * Return Promise of search results from backend API.
   * @param query artist's name
   * @return {Promise} artists list result data object.
   * @throws Error error from backend API.
   */
  static async getTracksList(query) {
    let getOptions = {
      method: 'get',
      url: backendUrl + '/tracks/search?name=' + query
    }
    try {
      return axios(getOptions);
    } catch(error) {
      throw new Error(error.message);
    }
  }

}

export default BackendApiUtil;