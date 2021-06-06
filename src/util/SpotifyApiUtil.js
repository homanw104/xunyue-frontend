/**
 * @file Spotify API utilities.
 * @author Homan Wong
 */

import axios from 'axios';
import qs from 'qs';
import { clientId, clientSecret, spotifyUrl } from "../config/config";

class SpotifyApiUtil {

  /**
   * Self-defined expiration time of access_token. Private property.
   */
  static #refreshThreshold = (Date.now() + 300000);

  /**
   * Get Spotify access_token, renew if necessary.
   * @returns {Promise} Spotify access_token.
   */
  static async getToken() {
    // Return if the current access_token stored is valid.
    if (this.#refreshThreshold < Date.now()) {
      return new Promise((resolve) => {
        resolve(sessionStorage.getItem('access_token'));
      })
    }

    // Config post request for token renewal.
    const authOptions = {
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      auth: {
        username: clientId,
        password: clientSecret
      },
      data: qs.stringify({
        grant_type: 'client_credentials'
      })
    }

    // Send post request to Spotify API.
    try {
      let response = await axios(authOptions);
      sessionStorage.setItem('access_token', response.data['access_token']);
      this.#refreshThreshold = Date.now() + 300000;
      return response.data['access_token'];
    } catch(error) {
      throw new Error(error.message);
    }
  }

  /**
   * Get album art URL from given tracks id.
   * @param id tracks ID.
   * @returns {Promise} album art URL.
   * @throws {Error} error from Spotify API.
   */
  static async getAlbumArtByTrackId(id) {
    // Get access_token.
    let token = '';
    try {
      token = await SpotifyApiUtil.getToken();
    } catch (error) {
      throw new Error(error.message);
    }

    // Config get request for tracks.
    let getOptions = {
      method: 'get',
      url: spotifyUrl + '/v1/tracks/' + id,
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }

    // Send get request to Spotify API.
    try {
      let response = await axios(getOptions);
      return response.data['album']['images'][1]['url'];
    } catch(error) {
      throw new Error(error.message);
    }
  }

}

export default SpotifyApiUtil;
