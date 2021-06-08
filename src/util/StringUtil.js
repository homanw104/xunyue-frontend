/**
 * @file String utilities.
 * @author Homan Wong
 */

class StringUtil {

  /**
   * Convert millisecond into formatted string.
   * @param ms integer in milliseconds
   * @return {string} formatted string.
   */
  static msToString(ms) {
    let hours = Math.round(ms / (1000 * 60 * 60));
    let minutes = Math.round((ms % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.round((ms % (1000 * 60)) / 1000);
    return ((hours === 0) ? ('') : (hours.toString() + ' hr '))
      + ((minutes === 0) ? ('') : (minutes.toString() + ' min '))
      + (seconds.toString() + ' sec');
  }

  /**
   * Covert followers count into formatted string.
   * @param followers integer
   * @return {string}
   */
  static followersToString(followers) {
    if (followers >= 10 ** 9) {
      return 'Followers: ' + Math.floor(followers / (10 ** 9)).toString() + ' Billion';
    } else if (followers >= 10 ** 6) {
      return 'Followers: ' + Math.floor(followers / (10 ** 6)).toString() + ' Million';
    } else if (followers >= 10 ** 3) {
      return 'Followers: ' + Math.floor(followers / (10 ** 3)).toString() + ' Thousand';
    } else {
      return 'Followers: ' + followers.toString();
    }
  }

  static genresToString(genres) {
    return genres.slice(2, -2).split('\', \'').join(', ');
  }

  static artistsToString(artists) {
    return artists.slice(2, -2).split('\', \'').join(', ');
  }

}

export default StringUtil;