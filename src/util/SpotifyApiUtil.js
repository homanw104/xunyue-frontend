/**
 * @file Spotify API utilities.
 * @author Homan Wong
 */

import axios from 'axios';
import qs from 'qs';

import defaultAlbumArtUrl from '../assets/album.svg'
import defaultAvatarUrl from '../assets/avatar.svg';

const clientId = 'a15c4180082644fb8f3ab9d22827210c';      /* Spotify Client ID */
const clientSecret = 'd5619053cbdf43b88352be0a7c678163';  /* Spotify Client Secret */
const spotifyApi = 'https://api.spotify.com';             /* Spotify API address */
const spotifyAccountApi = 'https://accounts.spotify.com'  /* Spotify account API for getting tokens */

class SpotifyApiUtil {

  /**
   * Get Spotify access_token, renew if necessary.
   * 'access_token' and 'token_expiration_time' are saved to session storage.
   * @returns {Promise} Spotify access_token.
   * @throws Error error from Spotify API.
   */
  static async getToken() {
    // Return access_token if the current one stored is valid.
    if (parseInt(sessionStorage.getItem('token_expiration_time')) > Date.now()) {
      return new Promise((resolve) => {
        resolve(sessionStorage.getItem('access_token'));
      })
    }

    // Config post request for token renewal.
    const authOptions = {
      method: 'post',
      url: spotifyAccountApi + '/api/token',
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
      sessionStorage.setItem('token_expiration_time', (Date.now() + 300000).toString());
      return response.data['access_token'];
    } catch(error) {
      throw new Error(error.message);
    }
  }

  /**
   * Get album art URL, given track's ID.
   * @param id track's ID.
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
      url: spotifyApi + '/v1/tracks/' + id,
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }

    // Send get request to Spotify API.
    try {
      let response = await axios(getOptions);
      return (response.data['album']['images'][1]['url'] === undefined) ?
        defaultAlbumArtUrl : response.data['album']['images'][1]['url'];
    } catch(error) {
      throw new Error(error.message);
    }
  }

  /**
   * Get artist avatar URL, given artist's ID.
   * @param id artist's ID.
   * @returns {Promise} album art URL.
   * @throws {Error} error from Spotify API.
   */
  static async getAvatarByArtistId(id) {
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
      url: spotifyApi + '/v1/artists/' + id,
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }

    // Send get request to Spotify API.
    try {
      let response = await axios(getOptions);
      return (response.data['images'][1]['url'] === undefined) ?
        defaultAvatarUrl : response.data['images'][1]['url'];
    } catch(error) {
      throw new Error(error.message);
    }
  }

  /**
   * Get album art URLs, given tracks' ID.
   * @param idList track ID list.
   * @returns {Promise} album art URL list.
   * @throws {Error} error from Spotify API.
   */
  static async getAlbumArtListByArtistId(idList) {
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
      url: spotifyApi + '/v1/tracks?ids=' + idList.toString(),
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }

    // Send get request to Spotify API.
    try {
      let response = await axios(getOptions);
      return response.data['tracks'].map(
        a => (a['album']['images'][1]['url'] === undefined) ? /* In case some albums don't have cover. */
          defaultAlbumArtUrl : a['album']['images'][1]['url'] /* If images list is empty, return default image */
      );
    } catch(error) {
      throw new Error(error.message);
    }
  }

  /**
   * Get artist avatar URLs, given artists' ID.
   * @param idList artist ID list.
   * @returns {Promise} artist avatar URL list.
   * @throws {Error} error from Spotify API.
   */
  static async getAvatarListByArtistId(idList) {
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
      url: spotifyApi + '/v1/artists?ids=' + idList.toString(),
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }

    // Send get request to Spotify API.
    try {
      let response = await axios(getOptions);
      return response.data['artists'].map(
        a => (a['images'][1]['url'] === undefined) ?          /* Some artists don't have avatar. */
          defaultAvatarUrl : a['images'][1]['url']            /* If images list is empty, return default image */
      );
    } catch(error) {
      throw new Error(error.message);
    }
  }

}

export default SpotifyApiUtil;
